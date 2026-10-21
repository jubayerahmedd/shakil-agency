/**
 * Plans, the comparison table and the pricing FAQ (`/pricing`, and the
 * preview on the home page).
 *
 * PLACEHOLDER: every price, limit and yearly discount here is a first draft.
 * Change the numbers and the page follows: yearly prices are shown per month,
 * with the yearly total under them.
 */

export interface Plan {
  id: string;
  name: string;
  for: string;
  /** US dollars per month, billed monthly. */
  monthly: number;
  /** US dollars per month, billed yearly. */
  yearly: number;
  featured?: boolean;
  /** The few lines that sell it, on the plan card. */
  highlights: string[];
  cta: string;
}

export const CURRENCY = '$';

/** PLACEHOLDER: "2 months free" matches yearly = monthly × 10 / 12, rounded. */
export const YEARLY_SAVING = '2 months free';

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    for: 'For creators launching their first community.',
    monthly: 29,
    yearly: 24,
    highlights: [
      'Up to 500 members',
      'Spaces, feed, chat and events',
      '1 course',
      'Memberships with 0% transaction fees',
      'Your own domain',
    ],
    cta: 'Start free trial',
  },
  {
    id: 'pro',
    name: 'Pro',
    for: 'For coaches and course creators selling memberships.',
    monthly: 79,
    yearly: 66,
    featured: true,
    highlights: [
      'Up to 5,000 members',
      'Unlimited courses with certificates',
      'Live streaming and paid tickets',
      'Gamification and leaderboards',
      'Email campaigns',
    ],
    cta: 'Start free trial',
  },
  {
    id: 'scale',
    name: 'Scale',
    for: 'For brands and agencies running communities at scale.',
    monthly: 199,
    yearly: 166,
    highlights: [
      'Unlimited members',
      'Everything in Pro',
      'White-label iOS and Android app',
      'Several admins and roles',
      'Priority support and migration help',
    ],
    cta: 'Start free trial',
  },
];

type Cell = boolean | string;

/** The comparison table: one row per feature, one cell per plan (in PLANS order). */
export const COMPARE: {group: string; rows: {feature: string; cells: [Cell, Cell, Cell]}[]}[] = [
  {
    group: 'Community',
    rows: [
      {feature: 'Members', cells: ['500', '5,000', 'Unlimited']},
      {feature: 'Spaces and feed', cells: [true, true, true]},
      {feature: 'Real-time chat', cells: [true, true, true]},
      {feature: 'Reels-style video feed', cells: [true, true, true]},
      {feature: 'Anonymous posting', cells: [false, true, true]},
      {feature: 'Gamification and leaderboards', cells: [false, true, true]},
    ],
  },
  {
    group: 'Courses and events',
    rows: [
      {feature: 'Courses', cells: ['1', 'Unlimited', 'Unlimited']},
      {feature: 'Drip schedules', cells: [true, true, true]},
      {feature: 'Certificates', cells: [false, true, true]},
      {feature: 'Events and RSVPs', cells: [true, true, true]},
      {feature: 'Live streaming with Q&A', cells: [false, true, true]},
      {feature: 'Paid event tickets', cells: [false, true, true]},
    ],
  },
  {
    group: 'Selling',
    rows: [
      {feature: 'Memberships and paid channels', cells: [true, true, true]},
      {feature: 'One-time purchases', cells: [true, true, true]},
      {feature: 'Transaction fee', cells: ['0%', '0%', '0%']},
      {feature: 'Email campaigns', cells: [false, true, true]},
    ],
  },
  {
    group: 'Brand and admin',
    rows: [
      {feature: 'Custom domain', cells: [true, true, true]},
      {feature: 'Website builder and blog', cells: [true, true, true]},
      {feature: 'Mobile apps (iOS, Android)', cells: [true, true, true]},
      {feature: 'White-label app', cells: [false, false, true]},
      {feature: 'Admins', cells: ['1', '3', 'Unlimited']},
      {feature: 'Support', cells: ['Email', 'Priority email', 'Priority + migration help']},
    ],
  },
];

export const PRICING_PAGE = {
  seo: {
    title: 'Pricing',
    description:
      'Simple monthly or yearly plans for paid communities, courses and events. 0% transaction fees on every plan. Start with a free trial.',
  },
  title: 'Pricing that stays out of your way',
  lead: 'Every plan includes the community, events, memberships and your own domain, with 0% transaction fees. Pay yearly and get two months free.',
  footnote: 'Prices in US dollars, before tax. Card processing fees from the payment provider still apply.',
  faq: [
    {
      q: 'Do you take a share of my sales?',
      a: 'No. Every plan has 0% transaction fees: we never take a cut of memberships, courses or tickets. Only the payment provider’s card processing fee applies.',
    },
    {
      q: 'How does the free trial work?',
      a: 'Pick a plan and start building straight away, without a card. Before the trial ends we remind you; if you do nothing, your community simply pauses.',
    },
    {
      q: 'Can I change plans later?',
      a: 'Yes, at any time. Upgrades take effect immediately; downgrades take effect at the end of your current billing period.',
    },
    {
      q: 'What happens if I go over my member limit?',
      a: 'Nobody gets locked out. We let you know, and you can move up a plan whenever it suits you.',
    },
    {
      q: 'What does yearly billing save?',
      a: 'Paying yearly costs the same as ten months, so you get two months free compared with paying monthly.',
    },
    {
      q: 'Do you offer discounts for non-profits or agencies?',
      a: 'Yes. Agencies running several communities and registered non-profits can ask us for a custom quote through the contact page.',
    },
  ],
};

/** "$1,992" */
export const money = (amount: number) => `${CURRENCY}${amount.toLocaleString('en-US')}`;
