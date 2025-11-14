export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string; // ISO date string
  colorClass: string;
};

export const projects: Project[] = [
  {
    slug: "personal-website",
    title: "Personal Website",
    description:
      "The site you are looking at right now. Built with Next.js and a playful neobrutalist design.",
    image: "/projects/personal-website.png",
    date: "2025-10-10",
    colorClass: "bg-[#FFB4C8]",
  },
  {
    slug: "content-hub",
    title: "Content Hub",
    description:
      "A collection of articles and notes about web development, engineering practices, and AI.",
    image: "/projects/content-hub.png",
    date: "2025-09-15",
    colorClass: "bg-[#FFE59D]",
  },
];
