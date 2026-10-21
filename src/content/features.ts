/**
 * The Features page (`/features`), one block per feature, in page order. The
 * `id` is the block's anchor (`/features#courses`): other pages link to it.
 */

export interface Feature {
  id: string;
  /** Short name for the side index and links. */
  name: string;
  title: string;
  lead: string;
  bullets: string[];
  /** Detail pairs under the photo: what it does, in one line each. */
  points: {term: string; detail: string}[];
  image: {id: string; alt: string; caption: string};
}

export const FEATURES_PAGE = {
  seo: {
    title: 'Features',
    description:
      'Community spaces, courses, live events, chat, gamification, memberships and payments, a branded mobile app, custom domains and analytics: every feature in depth.',
  },
  title: 'Every tool your community needs, already connected',
  lead: 'One platform instead of a chat app, a course site, a calendar tool and a payment page. Here is everything in it, and how the pieces work together.',
};

export const FEATURES: Feature[] = [
  {
    id: 'community',
    name: 'Community and feed',
    title: 'Spaces and a feed people come back to',
    lead: 'Organise conversation into spaces by topic, cohort or membership tier. The feed brings the best of every space together, so members always see what is new.',
    bullets: [
      'Unlimited spaces, grouped and ordered the way you want',
      'Posts with images, video, files, polls and rich text',
      'Threaded replies, reactions and @mentions',
      'A reels-style video feed on web and mobile',
      'Pinned posts and welcome messages for new members',
    ],
    points: [
      {term: 'Private and secret spaces', detail: 'Hide a space from everyone who is not invited.'},
      {term: 'Moderation tools', detail: 'Approve posts, mute members and remove spam in two clicks.'},
      {term: 'Member directory', detail: 'Profiles, bios and links so members can find each other.'},
      {term: 'Anonymous posting', detail: 'Let members ask the questions they would rather not sign.'},
    ],
    image: {
      id: '1543269865-cbf427effbad',
      alt: 'Four people chatting around a café table, one with a tablet',
      caption: 'Conversation that keeps going between calls.',
    },
  },
  {
    id: 'courses',
    name: 'Courses',
    title: 'Courses with a classroom built in',
    lead: 'Build structured programs with modules and lessons, release them on a schedule, and let students discuss each lesson with each other underneath it.',
    bullets: [
      'Video, audio, text, downloads and quizzes in any lesson',
      'Drip lessons by date or by days since joining',
      'Progress tracking and completion for every student',
      'Sell a course on its own or include it in a membership',
    ],
    points: [
      {term: 'Lesson comments', detail: 'Questions live under the lesson they are about.'},
      {term: 'Cohorts', detail: 'Run the same course again with a new group and its own space.'},
      {term: 'Paywalled lessons', detail: 'Keep a free preview and charge for the rest.'},
      {term: 'Certificates', detail: 'Reward students who finish the whole course.'},
    ],
    image: {
      id: '1516321318423-f06f85e504b3',
      alt: 'Two people at a laptop, one pointing at the screen while explaining',
      caption: 'Lessons, progress and discussion on one page.',
    },
  },
  {
    id: 'events',
    name: 'Live events',
    title: 'Events members actually turn up to',
    lead: 'Stream live, host webinars, and sell tickets to workshops and meetups. Members RSVP inside the community and find the recording in the same place afterwards.',
    bullets: [
      'Live streaming and webinars inside the community',
      'Online and in-person events with ticketing',
      'Built-in Q&A during live sessions',
      'Free, member-only or paid-ticket events',
    ],
    points: [
      {term: 'RSVPs', detail: 'See who is coming before you go live.'},
      {term: 'Time zones', detail: 'Every member sees the time in their own zone.'},
      {term: 'Replays', detail: 'Attach the recording to the event when it ends.'},
      {term: 'Event spaces', detail: 'Chat with attendees before and after.'},
    ],
    image: {
      id: '1505373877841-8d25f7d46678',
      alt: 'A presenter on a stage in front of a large screen and a seated audience',
      caption: 'From the RSVP to the replay, without leaving the community.',
    },
  },
  {
    id: 'chat',
    name: 'Chat',
    title: 'Real-time chat, in the same place',
    lead: 'Direct messages and group chats let members talk in the moment, without moving the conversation to another app you do not control.',
    bullets: [
      'One-to-one and group direct messages',
      'Chat rooms for a space, a cohort or an event',
      'Images, files and links in every message',
      'Notifications on web, email and mobile',
    ],
    points: [
      {term: 'Member-to-member', detail: 'Turn it on or off for the whole community.'},
      {term: 'Admin announcements', detail: 'Message every member, or one tier, at once.'},
      {term: 'Blocking and reporting', detail: 'Members can protect themselves; you see reports.'},
      {term: 'Topic channels', detail: 'Keep chat about one subject in one place.'},
    ],
    image: {
      id: '1531482615713-2afd69097998',
      alt: 'People working together at computers in a shared workspace',
      caption: 'Quick questions get quick answers.',
    },
  },
  {
    id: 'gamification',
    name: 'Gamification',
    title: 'Reward the members who show up',
    lead: 'Points, badges and a leaderboard turn participation into something visible. Use them to recognise your most helpful members.',
    bullets: [
      'Points for posting, commenting, attending and finishing lessons',
      'Badges and achievements on member profiles',
      'A leaderboard that shows who is contributing most',
      'Activity tracking for every member',
    ],
    points: [
      {term: 'Badges', detail: 'Mark founders, mentors and top contributors.'},
      {term: 'Leaderboard', detail: 'A friendly nudge for quieter members.'},
      {term: 'Profiles that show it', detail: 'Achievements appear next to every post.'},
      {term: 'Certificates', detail: 'Course completion counts as an achievement.'},
    ],
    image: {
      id: '1528605248644-14dd04022da1',
      alt: 'A lively group of friends sharing a meal at a long table',
      caption: 'Recognition people can see.',
    },
  },
  {
    id: 'payments',
    name: 'Memberships and payments',
    title: 'Memberships, paywalls and payouts',
    lead: 'Sell access your way: monthly or yearly memberships, one-off purchases, bundles and free trials. Put any space, course or event behind a paywall.',
    bullets: [
      'Subscriptions with monthly and yearly prices',
      'One-off payments for courses and events',
      'Paid channels for premium discussion',
      'Several membership tiers, each with its own access',
    ],
    points: [
      {term: '0% transaction fees', detail: 'We do not take a cut of what you sell.'},
      {term: 'Built-in checkout', detail: 'Members pay without leaving your brand.'},
      {term: 'Email campaigns', detail: 'Announce launches to members and leads.'},
      {term: 'Applications', detail: 'Approve members before they can join.'},
    ],
    image: {
      id: '1517245386807-bb43f82c33c4',
      alt: 'Two people talking across a meeting table with an open laptop',
      caption: 'Pricing that fits how you teach.',
    },
  },
  {
    id: 'mobile',
    name: 'Mobile app',
    title: 'Your community in every pocket',
    lead: 'Members get the whole community on their phone: feed, courses, events and chat, with push notifications that bring them back at the right moment.',
    bullets: [
      'iOS and Android apps with the same login as the web',
      'Push notifications for replies, messages and events',
      'Course lessons and event replays on the go',
      'A white-label app with your own name and icon',
    ],
    points: [
      {term: 'Works in the browser too', detail: 'Nobody has to install anything to join.'},
      {term: 'Reels on mobile', detail: 'Short videos built for the phone.'},
      {term: 'Push from your brand', detail: 'Notifications arrive under your name.'},
      {term: 'Store listing help', detail: 'We guide you through the app stores.'},
    ],
    image: {
      id: '1512428559087-560fa5ceab42',
      alt: 'A person in a white shirt tapping on a smartphone',
      caption: 'The feed, lessons and chat on the phone.',
    },
  },
  {
    id: 'branding',
    name: 'Domain and branding',
    title: 'Your name on the door',
    lead: 'Use your own domain, logo and colours across the community, the emails it sends and the mobile app. Members join your brand, not ours.',
    bullets: [
      'Connect a domain or subdomain you own',
      'Your logo, colours and favicon everywhere',
      'Branded emails from your own name',
      'A website builder with AI for your public pages and blog',
    ],
    points: [
      {term: 'Secure by default', detail: 'HTTPS is set up for your domain.'},
      {term: 'Custom pages', detail: 'Landing pages, a blog and sales pages.'},
      {term: 'Database included', detail: 'Custom features on your site keep their own data.'},
      {term: 'Branded app', detail: 'Your name and icon in the app stores.'},
    ],
    image: {
      id: '1611532736597-de2d4265fba3',
      alt: 'A tablet showing a drawn letter A beside headphones and an orange design book on a wooden desk',
      caption: 'Your brand from sign-up to the app icon.',
    },
  },
  {
    id: 'analytics',
    name: 'Analytics',
    title: 'Know what is working',
    lead: 'See who is active, what they read, which courses they finish and where revenue comes from, so you can spend your time on what members value.',
    bullets: [
      'Active members and new joins over time',
      'Activity for every member: posts, comments, attendance',
      'Course progress and completion',
      'Sales from memberships, courses and tickets',
    ],
    points: [
      {term: 'Member management', detail: 'Roles, tags and activity in one list.'},
      {term: 'Top contributors', detail: 'See who keeps the conversation going.'},
      {term: 'Event attendance', detail: 'Who came, and who watched the replay.'},
      {term: 'Developer API', detail: 'Pull your data into your own tools.'},
    ],
    image: {
      id: '1460925895917-afdab827c52f',
      alt: 'A laptop on a glass desk showing charts and graphs',
      caption: 'Activity, completion and revenue at a glance.',
    },
  },
];
