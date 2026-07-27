export type Project = {
  slug: string;
  title: string;
  category: "Web Design" | "Branding" | "Social Media" | "Editorial";
  year: string;
  client: string;
  summary: string;
  overview: string;
  objective: string;
  process: string[];
  result: string;
  link?: string;
  footnote?: string;
  gallery: { label: string; caption: string; tone: string }[];
};

export type Article = {
  slug: string;
  title: string;
  category:
    | "ORYON Records"
    | "Field Notes"
    | "Minor Studies"
    | "Magazine Issues"
    | "Character Analysis"
    | "Psychology Essays";
  issue: string;
  readingTime: string;
  dek: string;
  link?: string;
  comingSoon?: boolean;
  chapters: { heading: string; body: string[] }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "City-gym",
    title: "City Gym — Digital Presence & Website Design",
    category: "Web Design",
    year: "2026",
    client: "City Gym",
    link: "https://citygymshahdara.vercel.app/",
    summary:
      "A modern fitness website paired with a live functional BMI calculator designed to help a local gym showcase its facilities, services, and membership experience online.",
    overview:
    "Designed a complete digital presence for City Gym with a focus on accessibility, user experience, and converting visitors into potential members.",
    objective:"Create a professional online platform where customers can explore the gym, check facilities, calculate fitness metrics, and easily connect for enquiries.",
    process: [
      "Designed a clean visual identity focused on strength, movement and accessibility.",
      "Built sections for services, gallery, location, and membership enquiries.",
      "Integrated interactive elements including BMI calculator and contact flow.",
    ],
    result:
    "Delivered a responsive website concept that gives the gym a stronger digital presence and makes essential information easier for potential members to access.",
    gallery: [
      { label: "Home / Hero", caption: "Full-bleed portrait, single serif line, a whispered CTA.", tone: "from-neutral-900 to-neutral-800" },
      { label: "Membership", caption: "Editorial pricing table—no plans, only tiers of commitment.", tone: "from-neutral-950 to-neutral-900" },
      { label: "Programme", caption: "Weekly cycles rendered as newspaper column grids.", tone: "from-stone-900 to-neutral-900" },
      { label: "Journal", caption: "Long-form entries from coaches on form, philosophy, recovery.", tone: "from-neutral-900 to-stone-950" },
    ],
  },
  {
    slug: "Cutting-Edge-salon",
    title: "The Cutting Edge Salon — Digital Identity & Website Design",
    category: "Web Design",
    year: "2026",
    client: "Cutting Edge Salon",
    link: "https://thecuttingedgesalon.vercel.app/",
    summary:
      "A refined digital identity and website for an atelier-style salon that values precision over volume.",
    overview:
      "The Cutting Edge Salon occupies a single floor, six chairs, and a quiet philosophy: hair as architecture. The identity needed to communicate craftsmanship without excess—every element chosen, nothing added.",
    objective:
      "Build a digital presence that attracts the right clientele through restraint, not promotion. Filter through fidelity.",
    process: [
      "Observed the space, the clientele, and the rituals that repeat daily—those became the design anchors.",
      "Built a typographic system that reads as editorial, not commercial.",
      "Designed the website around a single path: look, understand, book. Nothing else.",
    ],
    result:
      "A digital identity that feels more like a studio than a salon. The site serves as both portfolio and front door.",
    gallery: [
      { label: "Cover", caption: "A quiet monochrome portrait, name set in italic serif.", tone: "from-stone-900 to-neutral-900" },
      { label: "Atelier", caption: "One page. One paragraph. One image. Nothing more.", tone: "from-neutral-900 to-stone-950" },
      { label: "Booking", caption: "A question, then a time. No calendar acrobatics.", tone: "from-neutral-950 to-neutral-900" },
    ],
  },
  {
    slug: "oryon-portfolio-archive",
    title: "ORYON Portfolio Archive",
    category: "Editorial",
    year: "2026",
    client: "ORYON",
    link: "https://drive.google.com/drive/folders/13xufwQkb32Fx4Vm2V2T3GRgn7nAeidyL?usp=drive_link",
    summary:
      "A complete archive of ORYON's design work across identity, editorial, and digital—curated and catalogued.",
    overview:
      "The ORYON Portfolio Archive collects every project, study, and experiment into a single, navigable library. Browse full case studies, process work, and selected outcomes.",
    objective:
      "Provide an open, accessible portfolio that demonstrates the breadth and depth of ORYON's editorial design practice.",
    process: [
      "Catalogued all past work by discipline, medium, and client.",
      "Designed a viewing structure that respects both overview and deep-dive reading.",
      "Included process sketches, unused concepts, and post-project reflections.",
    ],
    result:
      "A living portfolio that continues to grow with each new commission—open to anyone who wants to understand how we work.",
    gallery: [
      { label: "Archive Index", caption: "A grid of every project, ordered by discipline.", tone: "from-neutral-950 to-stone-950" },
      { label: "Case Studies", caption: "Full process documentation for selected work.", tone: "from-stone-900 to-neutral-900" },
      { label: "Sketches", caption: "Early concepts and abandoned directions.", tone: "from-neutral-900 to-stone-950" },
    ],
  },
];

export const ARTICLES: Article[] = [
  {
    slug: "-Klaus-Mikaelson-obsidian",
    title: "Klaus Mikaelson: The Compulsion for Legacy",
    category: "Magazine Issues",
    issue: "OBSIDIAN — Issue N°01",
    readingTime: "18 min",
    link: "https://heyzine.com/flip-book/d16cb564cc.html",
    dek: "Why the character who cannot die spends a thousand years trying to build something that will outlast him.",
    chapters: [
      {
        heading: "I. The Man Who Cannot Be Forgotten",
        body: [
          "Immortality is not a gift when memory is your only unit of measure. Klaus does not fear death. He fears irrelevance—and this is the wound the entire character is built around.",
          "Every empire, every painting, every child—each is a small argument against being unmade by time.",
        ],
      },
      {
        heading: "II. Legacy as a Substitute for Love",
        body: [
          "The character mistakes construction for connection. He builds because he cannot receive. What appears to be ambition is closer to a language he never learned to speak in.",
        ],
      },
      {
        heading: "III. The Quiet Resolution",
        body: [
          "The final act does not offer him triumph. It offers him a daughter—someone whose remembrance requires no city, no war, no throne. The empire, in the end, becomes a single name whispered in a room.",
        ],
      },
    ],
  },
  {
    slug: "light-yagami-character-study",
    title: "Light Yagami: Anatomy of a God Complex",
    category: "Character Analysis",
    issue: "OBSIDIAN — Issue N°03",
    readingTime: "15 min",
    link: "https://heyzine.com/flip-book/ddec69e552.html",
    dek: "An editorial examination of how idealism, absolute power, and moral certainty transformed Light Yagami from a brilliant student into the architect of his own downfall.",
    chapters: [
      {
        heading: "I. The God Delusion",
        body: [
          "An editorial examination of how idealism, absolute power, and moral certainty transformed Light Yagami from a brilliant student into the architect of his own downfall.",
        ],
      },
    ],
  },
  {
    slug: "sherlock-holmes-character-study",
    title: "Sherlock Holmes: The Cost of Observation",
    category: "Character Analysis",
    issue: "OBSIDIAN — Issue N°04",
    readingTime: "14 min",
    link: "https://heyzine.com/flip-book/5eb8f2e65a.html",
    dek: "Exploring deduction as both a gift and a burden, examining how Sherlock Holmes' relentless pursuit of truth shapes his identity, relationships, and humanity.",
    chapters: [
      {
        heading: "I. The Method",
        body: [
          "Exploring deduction as both a gift and a burden, examining how Sherlock Holmes' relentless pursuit of truth shapes his identity, relationships, and humanity.",
        ],
      },
    ],
  },
];

export const CATEGORIES = [
  "All",
  "Web Design",
  "Branding",
  "Social Media",
  "Editorial",
] as const;

export const ARTICLE_CATEGORIES = [
  "All",
  "ORYON Records",
  "Field Notes",
  "Minor Studies",
  "Magazine Issues",
  "Character Analysis",
  "Psychology Essays",
] as const;
