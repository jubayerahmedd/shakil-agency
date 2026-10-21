/**
 * The Use cases pages: `/use-cases` lists them, `/use-cases/<slug>` shows
 * one. Add an entry and its page is built; link it from `USE_CASE_NAV` in
 * `site.ts` too.
 */

export interface UseCase {
  slug: string;
  name: string;
  seo: {title: string; description: string};
  title: string;
  lead: string;
  summary: string;
  image: {id: string; alt: string};
  /** What goes wrong today → what changes. */
  pains: {pain: string; fix: string}[];
  /** A short walk-through of how they would set it up. */
  setup: {title: string; body: string}[];
  /** Anchors on the Features page (`features.ts` ids). */
  features: string[];
  // PLACEHOLDER quote: replace with a real customer's words.
  quote: {text: string; name: string; role: string};
}

export const USE_CASES_PAGE = {
  seo: {
    title: 'Use cases',
    description:
      'How coaches, course creators, paid communities and agencies run their programs, courses and memberships on one platform.',
  },
  title: 'One platform, shaped around how you work',
  lead: 'Coaches, course creators, membership owners and agencies use the same building blocks in different ways. Find the one that sounds like you.',
};

export const USE_CASES: UseCase[] = [
  {
    slug: 'coaches',
    name: 'Coaches',
    seo: {
      title: 'Community platform for coaches',
      description:
        'Run group programs, cohorts and 1:1 clients in one branded space: sessions, resources, accountability and payments together.',
    },
    title: 'Coach more people without losing the personal touch',
    lead: 'Run group programs, cohorts and 1:1 clients in one branded space, so clients have their sessions, resources and each other in one place.',
    summary: 'Group programs, cohorts and 1:1 clients in one branded space.',
    image: {id: '1551836022-d5d88e9218df', alt: 'Two women in conversation at a table with a laptop and a notebook'},
    pains: [
      {pain: 'Session links, worksheets and replays scattered across email.', fix: 'Every session, replay and worksheet lives in the program’s space.'},
      {pain: 'Clients go quiet between calls.', fix: 'A feed, chat and weekly prompts keep them working on their goals.'},
      {pain: 'Each new cohort means rebuilding everything by hand.', fix: 'Copy a program and open it to a new cohort in minutes.'},
      {pain: 'Invoices and payment reminders eat your evenings.', fix: 'Memberships and one-time payments are charged automatically.'},
    ],
    setup: [
      {title: 'Create a space per program', body: 'A private space for each cohort, plus an open lobby for prospects.'},
      {title: 'Schedule your sessions', body: 'Recurring group calls with RSVPs and a replay on every event.'},
      {title: 'Add accountability', body: 'Weekly check-in posts, points for showing up and a leaderboard.'},
    ],
    features: ['community', 'events', 'chat', 'gamification', 'payments'],
    quote: {
      text: 'My clients used to ask where last week’s worksheet was. Now they ask each other how they got on with it.',
      name: 'Amara Okafor',
      role: 'Leadership coach',
    },
  },
  {
    slug: 'course-creators',
    name: 'Course creators',
    seo: {
      title: 'Course platform with a built-in community',
      description:
        'Sell courses that come with a community: lessons, drip schedules, certificates and discussion under every lesson, on your own domain.',
    },
    title: 'Sell courses people actually finish',
    lead: 'Pair every lesson with discussion, live Q&A and a cohort to learn with. Students who learn together finish more, and come back for the next course.',
    summary: 'Courses that come with a classroom, so students finish.',
    image: {id: '1524178232363-1fb2b075b655', alt: 'Adults in a workshop room watching a presenter beside a screen'},
    pains: [
      {pain: 'Students buy, watch two lessons and disappear.', fix: 'Drip schedules, progress tracking and a cohort keep them moving.'},
      {pain: 'Questions arrive in your inbox, one at a time.', fix: 'Questions sit under the lesson, where other students can answer too.'},
      {pain: 'Your course site and your community never talk to each other.', fix: 'Courses, discussion and live sessions share one login.'},
      {pain: 'Course platforms take a cut of every sale.', fix: '0% transaction fees on every course you sell.'},
    ],
    setup: [
      {title: 'Upload your lessons', body: 'Video, downloads and quizzes, organised into chapters.'},
      {title: 'Choose how it is sold', body: 'On its own, in a bundle, or included in a membership.'},
      {title: 'Run it as a cohort', body: 'A start date, a space for the group and weekly live Q&A.'},
    ],
    features: ['courses', 'community', 'events', 'payments', 'analytics'],
    quote: {
      text: 'Completion went up the moment students could see each other working through the same module.',
      name: 'Daniel Reyes',
      role: 'Teaches photography online',
    },
  },
  {
    slug: 'paid-communities',
    name: 'Paid communities',
    seo: {
      title: 'Platform for paid membership communities',
      description:
        'Run a membership community people renew: tiers, paid channels, events and gamification, with 0% transaction fees and your own branded app.',
    },
    title: 'Build a membership people renew',
    lead: 'Give members a reason to log in every week: conversation worth reading, events worth attending, and recognition for the people who make it great.',
    summary: 'Memberships with tiers, paid channels and events people renew.',
    image: {id: '1515187029135-18ee286d815b', alt: 'A group of people gathered in a gallery space listening to a speaker'},
    pains: [
      {pain: 'A free chat group that never turned into income.', fix: 'Tiers and paid channels turn your inner circle into a membership.'},
      {pain: 'The same ten people do all the talking.', fix: 'Points, badges and a leaderboard bring quieter members in.'},
      {pain: 'Members forget the community exists between events.', fix: 'Push notifications from your own app bring them back.'},
      {pain: 'You rent your audience from a social network.', fix: 'Your domain, your member list, your data to export.'},
    ],
    setup: [
      {title: 'Design your tiers', body: 'A free tier to try it, a paid tier with the good stuff.'},
      {title: 'Plan a rhythm', body: 'Monthly events, weekly threads and a welcome post for new members.'},
      {title: 'Reward contribution', body: 'Badges for founders and mentors, a leaderboard for the rest.'},
    ],
    features: ['community', 'payments', 'gamification', 'events', 'mobile'],
    quote: {
      text: 'We kept a free tier and added a paid inner circle. The paid side covered our costs in the first month.',
      name: 'Priya Raman',
      role: 'Founder of a product design community',
    },
  },
  {
    slug: 'agencies',
    name: 'Agencies',
    seo: {
      title: 'Community platform for agencies',
      description:
        'Launch and run branded communities for your clients: their domain, their app, their members, managed by your team from one platform.',
    },
    title: 'Launch communities for your clients',
    lead: 'Give each client a fully branded community, website and app on their own domain, while your team manages every one of them from the same platform.',
    summary: 'Branded communities for every client, run by your team.',
    image: {id: '1557804506-669a67965ba0', alt: 'A small team in a bright office reviewing notes on a board'},
    pains: [
      {pain: 'Every client project starts from a blank plug-in stack.', fix: 'Start each client on the same proven platform.'},
      {pain: 'Clients want their own brand, not yours, or ours.', fix: 'Their domain, logo, emails and white-label app.'},
      {pain: 'Maintenance eats the margin after launch.', fix: 'Hosting, updates and security are handled for you.'},
      {pain: 'Custom requests mean custom servers.', fix: 'A website builder and a database for custom features are included.'},
    ],
    setup: [
      {title: 'Spin up the client', body: 'A new community on their domain, with their brand.'},
      {title: 'Build their site', body: 'Landing pages, a blog and custom features on the same domain.'},
      {title: 'Hand over, stay on', body: 'Give the client admin access and keep a role for your team.'},
    ],
    features: ['branding', 'mobile', 'community', 'payments', 'analytics'],
    quote: {
      text: 'We launched three client communities in the time one custom build used to take.',
      name: 'Tomás Lindqvist',
      role: 'Runs a digital agency',
    },
  },
];
