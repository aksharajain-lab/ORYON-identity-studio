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
    slug: "Cutting Edge-salon",
    title: "Cutting Edge Salon — Website Design & Booking System",
    category: "Web Design",
    year: "2026",
    client: "Cutting Edge Salon",
    summary:
      "Editorial website and booking system for an atelier-style hair salon in the old quarter.",
    overview:
      "Ovide is not a chain. It is one room, three chairs, and a philosophy about hair as architecture. The site had to feel less like a menu of services and more like a small, well-argued essay.",
    objective:
      "Communicate craftsmanship without shouting. Filter clientele before the first appointment.",
    process: [
      "Interviewed the founders about what they refuse to do—those refusals became the brand.",
      "Slowed every interaction: no autoplay, no popups, no promotional urgency.",
      "Designed the booking flow around a single question: what are you trying to become?",
    ],
    result:
      "Average client value doubled. The salon is now booked six weeks out with a waitlist.",
    gallery: [
      { label: "Cover", caption: "A quiet monochrome portrait, name set in italic serif.", tone: "from-stone-900 to-neutral-900" },
      { label: "Atelier", caption: "One page. One paragraph. One image. Nothing more.", tone: "from-neutral-900 to-stone-950" },
      { label: "Booking", caption: "A question, then a time. No calendar acrobatics.", tone: "from-neutral-950 to-neutral-900" },
    ],
  },
  {
    slug: "obsidian-carousels",
    title: "OBSIDIAN — Instagram as Publication",
    category: "Social Media",
    year: "2026",
    client: "ORYON Records",
    summary:
      "A carousel series that reframes character psychology as monthly editorial issues.",
    overview:
      "We designed OBSIDIAN to prove a small hypothesis: Instagram will reward long-form thinking if it is set beautifully. Each carousel is a chapter—typeset, paced, footnoted.",
    objective:
      "Establish ORYON's editorial voice on a platform designed for the opposite. Show, don't argue, that restraint travels.",
    process: [
      "Selected characters and archetypes worth thirty seconds of thought, not thirty of scroll.",
      "Built a typographic system that survives compression, cropping and reposts.",
      "Wrote every caption as a stand-alone paragraph—no engagement tactics.",
    ],
    result:
      "Grew from 0 to 42k readers in eight months without paid promotion. Featured in three design publications.",
    gallery: [
      { label: "Issue 01 — ", caption: "The compulsion for legacy, dissected in ten slides.", tone: "from-neutral-950 to-red-950/40" },
      { label: "Issue 02 — Ophelia", caption: "Grief as inheritance. Set in Cormorant Italic.", tone: "from-stone-900 to-neutral-900" },
      { label: "Issue 03 — The Archivist", caption: "On the psychology of preservation.", tone: "from-neutral-900 to-stone-950" },
    ],
  },
  {
    slug: "north-cellar",
    title: "North Cellar — Identity for a Wine Room",
    category: "Branding",
    year: "2025",
    client: "North Cellar",
    summary:
      "Full identity for an underground wine room: mark, typography, menu system and signage.",
    overview:
      "A basement wine room needed a mark that survived candlelight and time. We designed a monogram, a Latin motto, and a menu that reads like a paperback.",
    objective:
      "Build an identity that ages instead of dating. No trend, no gradient, no exclamation mark.",
    process: [
      "Drew forty monogram studies. Kept one. Burned the rest metaphorically.",
      "Paired a house serif with an italic display for wine names.",
      "Designed printed menus on uncoated stock with hand-numbered vintages.",
    ],
    result:
      "The mark now appears on glassware, matches, and the door. No signage was ever needed.",
    gallery: [
      { label: "Monogram", caption: "A single ligature. Nothing else required.", tone: "from-stone-950 to-neutral-950" },
      { label: "Menu", caption: "A pocket book, not a placemat.", tone: "from-neutral-900 to-stone-900" },
      { label: "Signage", caption: "Etched glass. Read only by those who look up.", tone: "from-neutral-950 to-neutral-900" },
    ],
  },
  {
    slug: "obsidian-issue-Klaus-Mikaelson",
    title: " — OBSIDIAN Issue N°01",
    category: "Editorial",
    year: "2026",
    client: "ORYON Press",
    link: "https://heyzine.com/flip-book/d16cb564cc.html",
    summary:
      "A magazine-length character study, designed as a printed folio and digital reader.",
    overview:
      "The first issue of OBSIDIAN examined a fictional character as one would examine a historical figure—through psychology, archive imagery, and quiet essays.",
    objective:
      "Prove that internet-native writing can hold the gravity of print if the typography respects the reader.",
    process: [
      "Wrote six long-form pieces across two months.",
      "Designed a serif-forward reading experience with generous margins and drop caps.",
      "Included footnotes, interstitials and a closing letter.",
    ],
    result:
      "Read cover-to-cover by 78% of subscribers. Requested for reprint by two independent bookstores.",
    gallery: [
      { label: "Cover", caption: "A single portrait, a single word: .", tone: "from-neutral-950 to-red-950/50" },
      { label: "Chapter Openers", caption: "Roman numerals, wide leading, no images.", tone: "from-stone-950 to-neutral-950" },
      { label: "Interstitials", caption: "Full-bleed archive imagery between essays.", tone: "from-neutral-900 to-stone-900" },
    ],
  },
  {
    slug: "veyra-brand",
    title: "Veyra — Brand Identity for a Perfumer",
    category: "Branding",
    year: "2025",
    client: "Veyra Olfactive",
    summary:
      "A quiet, gold-on-black identity for an independent perfumer working from a single studio.",
    overview:
      "Veyra composes fragrances the way one writes chamber music. The identity needed to feel intimate, exact, and confident enough to sit next to century-old houses.",
    objective:
      "Build a brand that a customer would keep the packaging of.",
    process: [
      "Designed a wordmark drawn from 19th-century apothecary labels.",
      "Restricted the palette to ink and aged brass.",
      "Wrote every product description in first person, past tense.",
    ],
    result:
      "First run of 200 bottles sold to a private list in three days.",
    gallery: [
      { label: "Wordmark", caption: "Thin serif, slightly widened, deliberately imperfect.", tone: "from-neutral-950 to-stone-950" },
      { label: "Bottle", caption: "Amber glass, wax seal, one line of copy.", tone: "from-stone-900 to-neutral-900" },
      { label: "Packaging", caption: "Uncoated card, letterpress, no barcode on the face.", tone: "from-neutral-900 to-stone-950" },
    ],
  },
];

export const ARTICLES: Article[] = [
  {
    slug: "-Klaus-Mikaelson-obsidian",
    title: " Klaus Mikaelson: The Compulsion for Legacy",
    category: "Magazine Issues",
    issue: "OBSIDIAN — Issue N°01",
    readingTime: "18 min",
    dek: "Why the character who cannot die spends a thousand years trying to build something that will outlast him.",
    chapters: [
      {
        heading: "I. The Man Who Cannot Be Forgotten",
        body: [
          "Immortality is not a gift when memory is your only unit of measure.  does not fear death. He fears irrelevance—and this is the wound the entire character is built around.",
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
    slug: "on-restraint",
    title: "A Field Note on Restraint",
    category: "Field Notes",
    issue: "Vol. II — Field Notes",
    readingTime: "6 min",
    dek: "Notes gathered from a week spent removing things from a design rather than adding them.",
    chapters: [
      {
        heading: "Monday",
        body: [
          "Removed a gradient. The page immediately felt more expensive.",
          "This is not a coincidence. Gradients ask the viewer to admire the surface. Solid colour asks them to trust the object.",
        ],
      },
      {
        heading: "Friday",
        body: [
          "By the end of the week we had removed a navigation item, three icons, four call-to-actions and one entire section. The client called and said the site felt more like them than it ever had.",
          "We had added nothing.",
        ],
      },
    ],
  },
  {
    slug: "the-serif-question",
    title: "The Serif Question",
    category: "Minor Studies",
    issue: "Minor Studies — N°04",
    readingTime: "9 min",
    dek: "Why every 'premium' rebrand of the last three years has quietly moved toward serifs, and what that admission costs.",
    chapters: [
      {
        heading: "The Return",
        body: [
          "For a decade, the internet was set in geometric sans-serifs. Efficient. Neutral. Interchangeable. Then the fatigue arrived. Every brand looked like every other brand, and the promise of clarity had become a kind of blindness.",
        ],
      },
      {
        heading: "The Admission",
        body: [
          "Choosing a serif today is an admission. It says: we do not want to look like a startup. We want to look like an institution. We want the reader to slow down.",
          "The typeface, in other words, is the strategy.",
        ],
      },
    ],
  },
  {
    slug: "psychology-of-restraint",
    title: "The Psychology of Restraint",
    category: "Psychology Essays",
    issue: "Essays — N°02",
    readingTime: "14 min",
    dek: "On why the objects, brands and people we trust most are the ones that seem to want the least from us.",
    chapters: [
      {
        heading: "The Loud Object",
        body: [
          "A loud object is, in psychological terms, a demand. It asks you to notice, to react, to buy, to become. The nervous system reads it as a request, and the response to a request is, most often, resistance.",
        ],
      },
      {
        heading: "The Quiet Object",
        body: [
          "A quiet object makes no demand. It waits. The nervous system, unsure what it is being asked to do, invents a reason to like it. This is the mechanism behind almost every luxury purchase you have ever justified.",
        ],
      },
    ],
  },
  {
    slug: "records-issue-two",
    title: "ORYON Records — N°02",
    category: "ORYON Records",
    issue: "Records — N°02",
    readingTime: "11 min",
    dek: "Notes from the studio: what we made, what we killed, and what we changed our minds about.",
    chapters: [
      {
        heading: "Made",
        body: [
          "Two identities, one website, one long essay, and a folio for the OBSIDIAN issue.",
        ],
      },
      {
        heading: "Killed",
        body: [
          "A third rebrand that was, in the end, cosmetic. The client kept the previous mark. We refunded the deposit. This is the correct outcome more often than agencies admit.",
        ],
      },
    ],
  },
  {
    slug: "ophelia-character-study",
    title: "Ophelia: Grief as Inheritance",
    category: "Character Analysis",
    issue: "OBSIDIAN — Issue N°02",
    readingTime: "16 min",
    dek: "A reading of Ophelia not as a woman undone by love, but as a woman handed a grief she did not choose.",
    chapters: [
      {
        heading: "I. Not Madness — Bequest",
        body: [
          "The mistake most readings make is to treat her collapse as personal. It is not. She inherits a grief prepared by every man around her—father, brother, lover, king. The flowers she carries are not madness. They are receipts.",
        ],
      },
      {
        heading: "II. The Waters",
        body: [
          "She does not fall. She lies down. The distinction matters because it returns to her the one thing the play refuses to give her: agency.",
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
