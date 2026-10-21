import {Hono} from 'hono';
import {validator} from 'hono/validator';

import {
  INQUIRY_KINDS,
  type InquiryInput,
  type InquiryKind,
  validateInquiry,
} from '../../lib/inquiry';
import type {InquiriesPage} from '../../lib/types';
import {problem, requireMember, requirePermission, withDb, withViewer} from '../../platform/guards';
import {CODENAMES} from '../../platform/permissions';

/**
 * The contact form's messages, stored in the Site Database (table `inquiries`).
 *
 * Anyone (the `/contact` page):
 *   POST   /site-api/inquiries                 send a message or a demo request
 *
 * Site admins (`MANAGE_INQUIRIES`), from the dashboard (`/portal/inquiries`):
 *   GET    /site-api/inquiries/manage?status=&before=   newest first, 20 a page
 *   PATCH  /site-api/inquiries/:id             `{status: 'new' | 'handled'}`
 *   DELETE /site-api/inquiries/:id
 *
 * The sender's email is only ever answered to site admins, never on a page.
 */

/** Who reads the inbox: the community's site admins. */
export const MANAGE_INQUIRIES = CODENAMES.SITE_UPDATE;

const PAGE_SIZE = 20;
const STATUSES = ['new', 'handled'];

const inquirySelect = {
  id: true,
  kind: true,
  name: true,
  email: true,
  company: true,
  topic: true,
  size: true,
  message: true,
  status: true,
  createdAt: true,
} as const;

const idOf = (value: unknown) => {
  const n = Number(value);
  return Number.isSafeInteger(n) && n > 0 ? n : undefined;
};

const str = (value: unknown) => (typeof value === 'string' ? value : '');

/** The same rules as the form (`src/lib/inquiry.ts`); the first problem names its field. */
const inquiryBody = validator('json', (value, c) => {
  const v = (value ?? {}) as Record<string, unknown>;
  const kind: InquiryKind = (INQUIRY_KINDS as string[]).includes(str(v.kind)) ? (v.kind as InquiryKind) : 'contact';
  const input: InquiryInput = {
    kind,
    name: str(v.name).trim(),
    email: str(v.email).trim(),
    company: str(v.company).trim(),
    topic: kind === 'demo' ? 'demo' : str(v.topic).trim(),
    size: kind === 'demo' ? str(v.size).trim() : '',
    message: str(v.message).trim(),
  };
  const errors = validateInquiry(input);
  const field = Object.keys(errors)[0] as keyof InquiryInput | undefined;
  if (field) return c.json({...problem('invalid_inquiry', errors[field]!), field}, 422);
  // Filled only by bots: the field is hidden from people.
  return {input, bot: str(v.website).trim() !== ''};
});

const manageQuery = validator('query', value => ({
  status: typeof value.status === 'string' && STATUSES.includes(value.status) ? value.status : '',
  before: typeof value.before === 'string' ? value.before : undefined,
}));

const statusBody = validator('json', (value, c) => {
  const status = str((value as Record<string, unknown> | null)?.status);
  if (!STATUSES.includes(status)) return c.json(problem('invalid_status', 'Status is new or handled.'), 422);
  return {status};
});

export const inquiryRoutes = new Hono()
  .post('/', inquiryBody, withDb, async c => {
    const {input, bot} = c.req.valid('json');
    // A bot gets the same answer as a person, and nothing is stored.
    if (bot) return c.json({ok: true}, 201);
    await c.var.db.inquiry.create({
      data: {
        kind: input.kind,
        name: input.name,
        email: input.email,
        company: input.company || null,
        topic: input.topic,
        size: input.size || null,
        message: input.message,
      },
      select: {id: true},
    });
    return c.json({ok: true}, 201);
  })

  .get('/manage', manageQuery, withViewer, requireMember, requirePermission(MANAGE_INQUIRIES), withDb, async c => {
    const {status, before} = c.req.valid('query');
    const cursor = idOf(before);
    const rows = await c.var.db.inquiry.findMany({
      select: inquirySelect,
      where: {...(status ? {status} : {}), ...(cursor ? {id: {lt: cursor}} : {})},
      orderBy: {id: 'desc'},
      take: PAGE_SIZE + 1,
    });
    const items = rows.slice(0, PAGE_SIZE);
    const page: InquiriesPage = {
      inquiries: items.map(row => ({...row, createdAt: row.createdAt.toISOString()})),
      nextBefore: rows.length > PAGE_SIZE ? items.at(-1)!.id : null,
    };
    return c.json(page);
  })

  .patch('/:id', statusBody, withViewer, requireMember, requirePermission(MANAGE_INQUIRIES), withDb, async c => {
    const id = idOf(c.req.param('id'));
    const updated = id
      ? await c.var.db.inquiry.updateMany({where: {id}, data: {status: c.req.valid('json').status}})
      : {count: 0};
    return updated.count ? c.json({ok: true}) : c.json(problem('not_found', 'No such message.'), 404);
  })

  .delete('/:id', withViewer, requireMember, requirePermission(MANAGE_INQUIRIES), withDb, async c => {
    const id = idOf(c.req.param('id'));
    const deleted = id ? await c.var.db.inquiry.deleteMany({where: {id}}) : {count: 0};
    return deleted.count ? c.json({ok: true}) : c.json(problem('not_found', 'No such message.'), 404);
  });
