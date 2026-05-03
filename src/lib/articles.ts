export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  cover: string;
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "healthy-eating-habits-for-kids",
    title: "Healthy Eating Habits for Kids",
    category: "Family Health",
    date: "Jun 17, 2024",
    author: "Dr. Michael Chen",
    cover:
      "https://framerusercontent.com/images/V1wPGcCQ3AdLQsLehKVYPjfFdtw.png",
    excerpt:
      "Practical, joy-first ways to help children build a lifelong relationship with nutritious food.",
    body: [
      "Building healthy eating habits early sets kids up for a lifetime of well-being. Start with small wins: a colourful plate, a shared meal, a curious question.",
      "Research consistently shows children mirror what they see at home. Cooking together, gardening, or simply naming the colours of vegetables turns food from a chore into a story.",
      "Avoid the trap of labelling food as ‘good’ or ‘bad’. Instead, talk about how foods make us feel — energised, focused, sleepy, strong.",
      "Above all: be patient. Tastes evolve. Meals are practice, not performance.",
    ],
  },
  {
    slug: "skin-cancer-awareness-how-to-protect-your-skin",
    title: "Skin Cancer Awareness: How to Protect Your Skin",
    category: "Preventive Care",
    date: "Jun 17, 2024",
    author: "Maria Rodriguez",
    cover:
      "https://framerusercontent.com/images/8hyZ01geGJUVqGcyJuIjtBlGeA.png",
    excerpt:
      "Daily habits that lower your risk of skin cancer — without changing your whole lifestyle.",
    body: [
      "Skin cancer is one of the most common — and most preventable — cancers. A few daily habits make a big difference.",
      "Use broad-spectrum SPF 30+ every morning, even when it’s cloudy. UV rays don’t take days off.",
      "Schedule an annual skin check. Self-exams help, but a dermatologist can spot patterns and changes you may miss.",
      "Hydrate, sleep well, and notice your skin. Your largest organ is also your most honest one.",
    ],
  },
  {
    slug: "five-minute-mindfulness-routines",
    title: "Five-Minute Mindfulness Routines That Actually Stick",
    category: "Mental Wellness",
    date: "May 02, 2024",
    author: "Dr. Aisha Patel",
    cover:
      "https://framerusercontent.com/images/COMHkyUdB3Mw3XDVXBhxoQ2C2Ho.png",
    excerpt:
      "Tiny pockets of stillness that fit into a busy day — and compound over weeks.",
    body: [
      "You don’t need a retreat to feel calmer. You need five minutes, repeated.",
      "Anchor your practice to something you already do — first sip of coffee, last breath before bed, the moment you sit down at your desk.",
      "Notice three things you can see, two you can hear, one you feel. Repeat. That’s it.",
      "Consistency beats intensity. Five minutes daily outperforms an hour once a month.",
    ],
  },
];
