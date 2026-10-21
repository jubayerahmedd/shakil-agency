/**
 * The contact form's rules, shared by the browser (`/contact`, validated in
 * place) and the Site API (`POST /site-api/inquiries`, validated again). One
 * source, so the two can never disagree. Browser-safe: no server code here.
 */

export type InquiryKind = 'contact' | 'demo';
export const INQUIRY_KINDS: InquiryKind[] = ['contact', 'demo'];

export const INQUIRY_TOPICS = [
  {value: 'general', label: 'A general question'},
  {value: 'sales', label: 'Plans and pricing'},
  {value: 'support', label: 'Help with my community'},
  {value: 'partnership', label: 'Partnerships and agencies'},
] as const;

export const COMMUNITY_SIZES = [
  {value: 'starting', label: 'Just starting out'},
  {value: '1-100', label: 'Up to 100 members'},
  {value: '100-1000', label: '100 to 1,000 members'},
  {value: '1000+', label: 'More than 1,000 members'},
] as const;

export const INQUIRY_LIMITS = {name: 80, email: 254, company: 120, message: 5000, messageMin: 10};

export interface InquiryInput {
  kind: InquiryKind;
  name: string;
  email: string;
  company: string;
  topic: string;
  size: string;
  message: string;
}

export type InquiryErrors = Partial<Record<keyof InquiryInput, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** One field's problem, in words that say how to fix it; `undefined` when it is fine. */
export function inquiryFieldError(field: keyof InquiryInput, all: InquiryInput): string | undefined {
  const value = (all[field] ?? '').trim();
  const L = INQUIRY_LIMITS;
  switch (field) {
    case 'name':
      if (!value) return 'Tell us your name, so we know who to reply to.';
      if (value.length > L.name) return `Use at most ${L.name} characters.`;
      return undefined;
    case 'email':
      if (!value) return 'Add the email address we should reply to.';
      if (value.length > L.email || !EMAIL.test(value)) return 'Enter a valid email address, like name@example.com.';
      return undefined;
    case 'company':
      return value.length > L.company ? `Use at most ${L.company} characters.` : undefined;
    case 'topic':
      if (all.kind === 'demo') return undefined;
      return INQUIRY_TOPICS.some(topic => topic.value === value) ? undefined : 'Choose what your message is about.';
    case 'size':
      if (all.kind !== 'demo') return undefined;
      return COMMUNITY_SIZES.some(size => size.value === value) ? undefined : 'Choose roughly how big your community is.';
    case 'message':
      if (!value) {
        return all.kind === 'demo'
          ? 'Tell us a little about what you want to build.'
          : 'Write your message.';
      }
      if (value.length < L.messageMin) return `Add a little more detail: at least ${L.messageMin} characters.`;
      if (value.length > L.message) return `Use at most ${L.message} characters.`;
      return undefined;
    default:
      return undefined;
  }
}

export const INQUIRY_FIELDS: (keyof InquiryInput)[] = ['name', 'email', 'company', 'topic', 'size', 'message'];

/** Every field's problem at once (empty object = valid). */
export function validateInquiry(input: InquiryInput): InquiryErrors {
  const errors: InquiryErrors = {};
  for (const field of INQUIRY_FIELDS) {
    const message = inquiryFieldError(field, input);
    if (message) errors[field] = message;
  }
  return errors;
}
