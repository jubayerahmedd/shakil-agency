/**
 * The About page, the team, and the legal pages.
 *
 * PLACEHOLDER: the story, the team (names, roles and photos) and the legal
 * text are first drafts. Have the legal pages reviewed before you publish:
 * they are a starting point, not legal advice.
 */

export const ABOUT = {
  seo: {
    title: 'About',
    description: 'Why we build an all-in-one community platform for creators, coaches and brands, and the team behind it.',
  },
  title: 'We build the home creators wish they had from the start',
  lead: 'A small team that has run communities, sold courses and hosted events, and got tired of holding it all together with five different tools.',
  story: [
    'It started with a coaching program that outgrew its tools. Sessions ran on one app, the worksheets lived in a shared drive, the discussion happened in a group chat and payments came through a fourth service. Every new member got a welcome email with six links in it.',
    'We built the first version of {name} to fix that one program: one login, one place for the conversation, the lessons and the live calls, and one checkout that did not take a cut of every sale.',
    'Other creators asked to use it. Coaches, course creators and membership owners, then agencies who wanted to launch communities for their clients. Today it is the platform we wished we had on day one.',
  ],
  storyImage: {
    id: '1552664730-d307ca884978',
    alt: 'A woman leading a workshop at a wall of sticky notes while colleagues work on laptops',
    caption: 'Planning sessions with the creators we build for.',
  },
  mission: 'Our mission: give every creator a community they own, under their own name, that members are glad to be part of.',
  principles: [
    {term: 'Your members are yours', detail: 'Your domain, your brand, your data. Export everything, any time.'},
    {term: 'No cut of your income', detail: '0% transaction fees, on every plan. We charge a flat price and that is all.'},
    {term: 'One place, not five', detail: 'Every feature works with the others, so members never hunt for a link.'},
    {term: 'People answer support', detail: 'When you write to us, someone who knows the product writes back.'},
  ],
  officeImage: {
    id: '1559136555-9303baea8ebd',
    alt: 'A bright open-plan office with people working at long desks',
  },
};

// PLACEHOLDER team: invented people and stock photos. Replace with your own.
export const TEAM = [
  {name: 'Shakil Ahmed', role: 'Founder', bio: 'Ran a coaching community before building the tool it needed.', photo: '1507003211169-0a1dd7228f2d'},
  {name: 'Nadia Rahman', role: 'Head of product', bio: 'Turns what creators ask for into what we ship next.', photo: '1494790108377-be9c29b29330'},
  {name: 'Marcus Bell', role: 'Engineering lead', bio: 'Keeps the platform fast, secure and up at 3 a.m.', photo: '1500648767791-00dcc994a43e'},
  {name: 'Leila Haddad', role: 'Customer success', bio: 'Helps new communities move in and get their first members.', photo: '1438761681033-6461ffad8d80'},
];

export interface LegalDoc {
  slug: string;
  title: string;
  seo: {title: string; description: string};
  updated: string;
  intro: string;
  sections: {id: string; heading: string; paragraphs: string[]; list?: string[]}[];
}

export const LEGAL: LegalDoc[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy policy',
    seo: {
      title: 'Privacy policy',
      description: 'What personal data we collect, why we collect it, how long we keep it and the choices you have.',
    },
    updated: '21 October 2026',
    intro:
      'This policy explains what personal data {name} collects when you visit this website, contact us or use the platform, why we collect it, and the choices you have. We keep it as short and plain as we can.',
    sections: [
      {
        id: 'who-we-are',
        heading: 'Who we are',
        paragraphs: [
          '{name} provides a platform for running online communities, courses, events and memberships. For the personal data described here, we are the data controller. You can reach us at the address on the contact page.',
        ],
      },
      {
        id: 'what-we-collect',
        heading: 'What we collect',
        paragraphs: ['We collect only what we need to run the service and answer you:'],
        list: [
          'Account details you give us, such as your name, email address and profile information.',
          'Messages you send through the contact form, including the email address you ask us to reply to.',
          'Content you post in a community, such as posts, comments and uploaded files.',
          'Payment information, which is handled by our payment provider; we do not store full card numbers.',
          'Technical data such as your browser type and the pages you visit, used to keep the service secure and working.',
        ],
      },
      {
        id: 'how-we-use-it',
        heading: 'How we use it',
        paragraphs: ['We use personal data to:'],
        list: [
          'provide and secure your account and the communities you belong to;',
          'reply to your questions and demo requests;',
          'process payments and send receipts;',
          'improve the platform, using aggregated information where we can;',
          'meet our legal obligations.',
        ],
      },
      {
        id: 'sharing',
        heading: 'Who we share it with',
        paragraphs: [
          'We do not sell your personal data. We share it only with service providers that help us run the platform (such as hosting and payment providers), under contracts that require them to protect it, or when the law requires us to.',
          'If you are a member of a community, the community’s owner can see the information you share in that community.',
        ],
      },
      {
        id: 'retention',
        heading: 'How long we keep it',
        paragraphs: [
          'We keep account data for as long as your account is active. Contact form messages are kept for up to two years so we can follow up, then deleted. You can ask us to delete your data sooner.',
        ],
      },
      {
        id: 'your-rights',
        heading: 'Your rights',
        paragraphs: [
          'Depending on where you live, you may have the right to access, correct, export or delete your personal data, and to object to or restrict how we use it. Write to us from the contact page and we will answer within 30 days.',
        ],
      },
      {
        id: 'cookies',
        heading: 'Cookies',
        paragraphs: [
          'We use cookies that are needed to keep you signed in and to protect your account. We do not use advertising cookies on this website.',
        ],
      },
      {
        id: 'changes',
        heading: 'Changes to this policy',
        paragraphs: [
          'If we change this policy we will update the date at the top of this page, and tell account holders by email when the change is significant.',
        ],
      },
    ],
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of service',
    seo: {
      title: 'Terms of service',
      description: 'The terms that apply when you use the platform to run a community, sell memberships and host events.',
    },
    updated: '21 October 2026',
    intro:
      'These terms apply when you create an account on {name} or use the platform to run a community. By using the service you agree to them. If you use it on behalf of a business, you agree for that business.',
    sections: [
      {
        id: 'accounts',
        heading: 'Your account',
        paragraphs: [
          'You need to give accurate information when you sign up and keep your login details safe. You are responsible for what happens under your account, including the actions of admins you add.',
        ],
      },
      {
        id: 'plans-and-billing',
        heading: 'Plans, trials and billing',
        paragraphs: [
          'Paid plans are billed in advance, monthly or yearly. Free trials end on the date shown when you start them. You can cancel at any time; your plan stays active until the end of the period you have paid for. Fees are not refundable except where the law requires it.',
        ],
      },
      {
        id: 'your-content',
        heading: 'Your content and your members',
        paragraphs: [
          'You own the content you and your members post. You give us permission to host, store and display it only so we can run the service for you.',
          'You are responsible for your community: its rules, its content and how you treat your members’ personal data. You agree to tell your members how you use their data.',
        ],
      },
      {
        id: 'acceptable-use',
        heading: 'Acceptable use',
        paragraphs: ['You agree not to use the platform to:'],
        list: [
          'break the law or infringe anyone’s rights;',
          'share harmful, hateful or sexually exploitative content;',
          'send spam or run deceptive schemes;',
          'attack, overload or reverse engineer the service.',
        ],
      },
      {
        id: 'payments-to-you',
        heading: 'Payments from your members',
        paragraphs: [
          'When you sell memberships, courses or tickets, the sale is between you and your member. Payments are processed by our payment provider under its own terms. We charge no transaction fee; the provider’s processing fees apply.',
        ],
      },
      {
        id: 'availability',
        heading: 'Availability and changes',
        paragraphs: [
          'We work to keep the service available and secure, but we cannot promise it will never be interrupted. We may improve or change features; if we remove something important to your plan, we will tell you in advance.',
        ],
      },
      {
        id: 'liability',
        heading: 'Liability',
        paragraphs: [
          'To the extent the law allows, we are not liable for indirect or consequential losses, and our total liability is limited to the amount you paid us in the twelve months before the claim.',
        ],
      },
      {
        id: 'ending',
        heading: 'Ending the agreement',
        paragraphs: [
          'You can close your account at any time. We may suspend or close an account that breaks these terms. Before your account is closed you can export your data.',
        ],
      },
    ],
  },
];
