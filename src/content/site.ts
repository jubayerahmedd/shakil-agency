/**
 * The site's own words: navigation, footer and the home page.
 *
 * Edit freely. The community's NAME and LOGO are not here: they come from the
 * platform (`GET /site-api/site`), so a rename in the community dashboard shows
 * up here without a Publish. Use `{name}` in any string for the community name.
 *
 * Words for the other pages live beside this file: `features.ts`,
 * `pricing.ts`, `use-cases.ts`, `company.ts` (about + legal).
 *
 * PLACEHOLDER = made up for the first version. Search this folder for
 * "PLACEHOLDER" to find every testimonial, price and address to replace.
 */

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Header links. Every href is either a page of THIS site or an App page
 * (`/join`, `/login`, `/feeds`…): all plain links.
 */
export const NAV: NavItem[] = [
  {label: 'Features', href: '/features'},
  {label: 'Pricing', href: '/pricing'},
  {label: 'Blog', href: '/blog'},
  {label: 'About', href: '/about'},
  {label: 'Contact', href: '/contact'},
];

/** The "Use cases" dropdown in the header (and its footer column). */
export const USE_CASE_NAV = [
  {label: 'Coaches', href: '/use-cases/coaches', blurb: 'Programs, cohorts and 1:1 clients in one place'},
  {label: 'Course creators', href: '/use-cases/course-creators', blurb: 'Courses that come with a community'},
  {label: 'Paid communities', href: '/use-cases/paid-communities', blurb: 'Memberships people renew'},
  {label: 'Agencies', href: '/use-cases/agencies', blurb: 'Launch communities for your clients'},
];

/** Where the trial starts and where members sign in: the community app's own pages. */
export const LINKS = {
  start: '/join',
  login: '/login',
  demo: '/contact?type=demo',
  community: '/admin',
};

/** PLACEHOLDER: the inbox the support and sales emails go to. */
export const SUPPORT_EMAIL = 'support@myagency.gorurbazar.pro.bd';

export const FOOTER = {
  statement: 'Your community, your brand, your members. Everything else is our job.',
  columns: [
    {
      title: 'Product',
      links: [
        {label: 'Features', href: '/features'},
        {label: 'Pricing', href: '/pricing'},
        {label: 'Courses', href: '/features#courses'},
        {label: 'Mobile app', href: '/features#mobile'},
        {label: 'Book a demo', href: '/contact?type=demo'},
      ],
    },
    {
      title: 'Use cases',
      links: USE_CASE_NAV.map(({label, href}) => ({label, href})),
    },
    {
      title: 'Company',
      links: [
        {label: 'About', href: '/about'},
        {label: 'Blog', href: '/blog'},
        {label: 'Contact', href: '/contact'},
        {label: 'Use cases', href: '/use-cases'},
      ],
    },
    {
      title: 'Resources',
      links: [
        {label: 'Help and support', href: '/contact?topic=support'},
        {label: 'Developer API', href: '/developer-api'},
        {label: 'Privacy policy', href: '/legal/privacy-policy'},
        {label: 'Terms of service', href: '/legal/terms-of-service'},
      ],
    },
  ],
};

/** Unsplash photos, sized for the page. Replace any of them with your own. */
export const photo = (id: string, width = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=70`;

/** The home page, top to bottom. */
export const HOME = {
  seo: {
    title: 'The all-in-one platform for paid communities',
    description:
      'Run your community, courses, live events, chat and memberships in one place, under your own brand and domain. Start a free trial.',
  },
  hero: {
    title: 'Run your whole community from one place',
    body: 'Discussions, courses, live events, chat and paid memberships under your own brand and domain. Stop stitching five tools together and give your members one home.',
    note: 'Free 14-day trial. No card needed to start.', // PLACEHOLDER: match your real trial terms.
    image: {
      id: '1588196749597-9ff075ee6b5b',
      alt: 'A laptop on a wooden table showing a live video session with many members on screen, beside a green mug',
      caption: 'Live sessions, recorded and kept with the rest of your community.',
    },
  },
  audience: {
    label: 'Built for people who teach, coach and convene',
    items: ['Coaches', 'Course creators', 'Membership sites', 'Creators', 'Brands', 'Agencies'],
  },
  intro: {
    title: 'Everything your members do, in one login',
    body: 'Most creators run their community on one app, their courses on another and their payments on a third. Members get lost between them. {name} puts it all under one roof.',
  },
  rows: [
    {
      title: 'A home for the conversation',
      body: 'Spaces for every topic, a feed that surfaces what matters, and posts that keep going after the live call ends.',
      points: ['Spaces by topic, cohort or tier', 'Posts, polls, threads and reels', 'Pinned welcome posts for new members'],
      image: {id: '1543269865-cbf427effbad', alt: 'Four friends talking around a café table, one holding a tablet'},
      link: {label: 'Community spaces', href: '/features#community'},
    },
    {
      title: 'Courses that come with people',
      body: 'Build lessons with video, files and quizzes, drip them on a schedule, and let students discuss each lesson right where they learn it.',
      points: ['Modules, lessons and drip schedules', 'Progress tracking and completion', 'Sell a course alone or bundle it in a membership'],
      image: {id: '1524178232363-1fb2b075b655', alt: 'A group of adults in a bright workshop room watching a presenter beside a screen'},
      link: {label: 'Courses', href: '/features#courses'},
    },
    {
      title: 'Live events without the link chaos',
      body: 'Go live, host webinars and sell tickets to meetups. Members RSVP, ask questions during the session, and find the replay in the same place afterwards.',
      points: ['Live streams and webinars with Q&A', 'Online and in-person tickets', 'Replays kept with the event'],
      image: {id: '1587825140708-dfaf72ae4b04', alt: 'A full auditorium watching a speaker on a lit stage'},
      link: {label: 'Live events', href: '/features#events'},
    },
    {
      title: 'Get paid for the value you create',
      body: 'Charge monthly or yearly, sell one-off access, and put any channel, course or event behind a paywall. We take 0% of your sales.',
      points: ['Subscriptions and one-off payments', 'Paid channels, courses and event tickets', '0% transaction fees on what you sell'],
      image: {id: '1517245386807-bb43f82c33c4', alt: 'Two people at a meeting table with a laptop open, one gesturing as they explain'},
      link: {label: 'Memberships and payments', href: '/features#payments'},
    },
  ],
  steps: {
    title: 'Live in an afternoon',
    body: 'No developers, no plug-ins. Three steps from sign-up to your first paying member.',
    items: [
      {
        title: 'Set up your space',
        body: 'Add your logo, colours and domain. Create spaces for your topics and import your members from a spreadsheet.',
      },
      {
        title: 'Add what you sell',
        body: 'Upload a course, schedule your first event, and choose what is free and what sits behind a membership.',
      },
      {
        title: 'Invite and grow',
        body: 'Share your link, welcome people as they join, and watch who is engaged on your dashboard.',
      },
    ],
  },
  // PLACEHOLDER testimonials: invented people and quotes. Replace with real
  // members' words (and their permission) before you publish.
  testimonials: {
    title: 'What creators say',
    lead: {
      quote:
        'I used to send people to a chat app for discussion, a course site for lessons and a calendar link for calls. Now it is one link, and my renewal emails stopped coming back with "where do I find the replay?"',
      name: 'Amara Okafor',
      role: 'Leadership coach, 300-member program',
      photo: '1573497019940-1c28c88b4f3e',
    },
    more: [
      {
        quote: 'Moving my course and my community into one place took a weekend. Students now ask questions under the lesson instead of in my inbox.',
        name: 'Daniel Reyes',
        role: 'Teaches photography online',
        photo: '1607990281513-2c110a25bd8c',
      },
      {
        quote: 'The paywall on individual spaces let us run a free tier and a paid inner circle without building anything.',
        name: 'Priya Raman',
        role: 'Founder of a product design community',
        photo: '1544005313-94ddf0286df2',
      },
    ],
  },
  pricing: {
    title: 'Simple plans that grow with you',
    body: 'Start on any plan with a free trial. Switch or cancel whenever you like.',
  },
  faq: {
    title: 'Questions, answered',
    body: 'Something else on your mind? Write to us and a person will reply.',
    items: [
      {
        q: 'Can I use my own domain and branding?',
        a: 'Yes. Connect a domain you own, add your logo and colours, and your members see your brand from the sign-up page to the mobile app.',
      },
      {
        q: 'Do my members need to download an app?',
        a: 'No. Everything works in the browser on any device. Members who want it can use the iOS and Android apps with the same login, and you can publish a white-label app under your own name.',
      },
      {
        q: 'How do I get paid?',
        a: 'Members pay through the built-in checkout when they join or buy. You set the prices and the billing period, and we charge 0% transaction fees on top.',
      },
      {
        q: 'Can I move my existing community and courses over?',
        a: 'Yes. Import members from a spreadsheet and upload your course videos and files. On the Pro and Scale plans we help you plan the move.',
      },
      {
        q: 'Is there a free trial?',
        a: 'Every plan starts with a free trial, and you do not need a card to begin. You only pay when you decide to keep going.',
      },
      {
        q: 'What happens to my data if I leave?',
        a: 'It is yours. Export your members, posts and course content at any time, on any plan.',
      },
    ],
  },
  cta: {
    title: 'Give your members one place to belong',
    body: 'Start your free trial today, or book a call and we will walk you through it.',
  },
};

/** Fill `{name}` with the community's name. */
export function withName(text: string, name: string): string {
  return text.replaceAll('{name}', name);
}
