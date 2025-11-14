export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date string
};

export const articles: Article[] = [
  {
    slug: "building-this-site",
    title: "Building This Site in Public",
    description:
      "How I designed and built this neobrutalist personal site with Next.js and Tailwind.",
    date: "2025-10-20",
  },
  {
    slug: "shipping-small-products",
    title: "Shipping Small Products Frequently",
    description:
      "Notes on building and shipping small products instead of chasing one big launch.",
    date: "2025-09-30",
  },
  {
    slug: "nextjs-content-setup",
    title: "A Simple Content Setup for Next.js",
    description:
      "Structuring content for blogs and personal sites without introducing heavy CMS complexity.",
    date: "2025-08-18",
  },
  {
    slug: "learning-in-public",
    title: "Learning in Public as a Software Engineer",
    description:
      "Why I share notes, drafts, and unfinished ideas online, and what I learned from it.",
    date: "2025-07-02",
  },
  {
    slug: "side-project-habits",
    title: "Side Project Habits That Actually Stick",
    description:
      "Small routines that help me consistently make progress on side projects.",
    date: "2025-06-10",
  },
];
