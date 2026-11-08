/**
 * One file for the whole portfolio.
 * Add an object here and it shows up on the home page, grouped by `year`,
 * and at /projects/[id]. Point `nextProject.id` at another project in this list.
 *
 * contentBlocks:
 *   { type: "text", value: "Paragraphs separated by a blank line." }
 *   { type: "image", value: "/images/works/file.jpg", alt, width, height }
 */

export const yearNotes = {
  "2024":
    "In 2024, I had only just begun to develop, so I didn’t have time to do any large-scale projects, but the foundation had been laid",
  "2025":
    "By 2025, progress had already been made, and that year I developed my skills and began to take on large projects",
};

export const projects = [
  {
    id: "yudaevs-course",
    number: "01/",
    year: "2024",
    title: "Yudaev’s course",
    subtitle: "Poster for the NFT website featuring Yudaev’s course — UI/UX design",
    client: "Non-commercial",
    coverImage: "/images/works/course-1.jpg",
    contentBlocks: [
      {
        type: "image",
        value: "/images/works/course-1.jpg",
        alt: "NFT market landing in a browser window",
        width: 1600,
        height: 871,
      },
      {
        type: "text",
        value:
          "Project: NFT Market — landing page concept\n\nThis project was completed as part of a free course on UI/UX design taught by Artem Yudaev. The task was to create the main landing page for an NFT platform.\n\nThe result is a bright and memorable concept that demonstrates skills in creating promotional landing pages, working with color, typography, and graphic accents. The project reflects the ability to combine digital culture trends with a user-friendly UI solution.",
      },
      {
        type: "image",
        value: "/images/works/course-2.jpg",
        alt: "Angled view of the NFT market landing",
        width: 1600,
        height: 1023,
      },
    ],
    nextProject: { title: "Behance", id: "behance" },
  },
  {
    id: "behance",
    number: "02/",
    year: "2024",
    title: "Behance",
    subtitle: "Works created specifically for Behance — UI/UX design",
    client: "Non-commercial",
    tags: ["BLAME!", "Sludge Life", "Akira", "Trainspotting"],
    coverImage: "/images/works/behance-1.jpg",
    contentBlocks: [
      {
        type: "image",
        value: "/images/works/behance-1.jpg",
        alt: "Sludge Life and BLAME! poster studies",
        width: 1600,
        height: 1061,
      },
      {
        type: "text",
        value:
          "This section contains four projects that I completed during my internship: BLAME!, Akira, Sludge Life, and Trainspotting.\n\nEach project was an experiment for me with different visual techniques and tools. I tried new approaches to composition, typography, and color, and practiced adapting my style to different themes.\n\nThese projects are not commercial — I used them as a way to improve my skills and expand my portfolio. It was important for me not only to repeat familiar techniques, but also to learn to find my own solutions.",
      },
      {
        type: "image",
        value: "/images/works/behance-2.jpg",
        alt: "Trainspotting and Akira layout studies",
        width: 1600,
        height: 720,
      },
    ],
    nextProject: { title: "Coworking", id: "coworking" },
  },
  {
    id: "coworking",
    number: "03/",
    year: "2024",
    yearLabel: "2024–2025",
    title: "Coworking",
    subtitle: "Platform for finding and booking coworking spaces — UI/UX design",
    client: "Non-commercial",
    coverImage: "/images/works/coworking-1.jpg",
    contentBlocks: [
      {
        type: "image",
        value: "/images/works/coworking-1.jpg",
        alt: "Coworking app map and search screens",
        width: 1600,
        height: 599,
      },
      {
        type: "text",
        value:
          "This project is a website concept that helps users find and book coworking spaces in different cities. My goal was to make the service as user-friendly as possible: compare options by location, price, and conditions, and book a space right away.\n\nIn the design, I emphasized minimalism and a clean presentation of information: large cards with photos, accent buttons for actions. It was important to create a sense of transparency and trust, so I paid special attention to typography, the color scheme, and the convenience of booking forms.",
      },
      {
        type: "image",
        value: "/images/works/coworking-2.jpg",
        alt: "Coworking space cards on mobile",
        width: 1600,
        height: 984,
      },
      {
        type: "text",
        value:
          "The coworking space booking website is a project that offers a complete user experience from the home page to the completion of the booking.\n\nI started with an analysis: what is important to people when choosing a workspace? Photos, price, location, and ease of booking. These ideas formed the basis of the interface.\n\nThe home page is designed to offer a search function right away. At the UI level, I tried to strike a balance between functionality and minimalism so that the user would not get lost in the details.\n\nThis project helped me to work more deeply with grids, typography, and forms, as well as try my hand at creating a more lively user scenario.",
      },
      {
        type: "image",
        value: "/images/works/coworking-3.jpg",
        alt: "Profile, promotions, and reservation screens",
        width: 1600,
        height: 899,
      },
    ],
    nextProject: { title: "Alara dashboard", id: "alara-dashboard" },
  },
  {
    id: "alara-dashboard",
    number: "04/",
    year: "2025",
    title: "Alara dashboard",
    subtitle: "Dashboard for accelerated specialized AI — UI/UX design",
    client: "Serenity Remote Service Ltd.",
    coverImage: "/images/works/alara-1.jpg",
    contentBlocks: [
      {
        type: "image",
        value: "/images/works/alara-1.jpg",
        alt: "Alara messenger dashboard",
        width: 1600,
        height: 868,
      },
      {
        type: "text",
        value:
          "I developed a dashboard for Alara, an AI assistant at Fort Wise AI Solutions. The panel is used by clients to manage orders, communicate with users via WhatsApp, Telegram, Instagram, Facebook, and Viber, and transfer conversations to live operators if the AI can’t handle them.\n\nThe main goal is to create a convenient and intuitive interface for different roles: clients, their teams, administrators, and operators.",
      },
      {
        type: "image",
        value: "/images/works/alara-2.jpg",
        alt: "Alara analytics screen",
        width: 1600,
        height: 912,
      },
      {
        type: "text",
        value:
          "One of my first commercial projects was a dashboard for Alara, an AI assistant developed by Fort Wise AI Solutions. The panel was created so that customers could manage orders, interact with their users via popular messengers, and connect live operators when the AI couldn’t handle a request.\n\nThe main goal of the development was to combine different work scenarios in a single interface: from receiving orders and communicating with customers to monitoring the team’s actions. To do this, a system of roles and access rights was built — customers, their employees, and system administrators have different levels of capabilities, which ensures transparency and simplifies the organization of processes.\n\nMy job was to create the dashboard interface. I thought through the navigation logic, visual separation of information, and emphasis on minimalism in data presentation. It was important that the panel remained easy to understand, and at the same time offered quick navigation even with a large number of active chats and orders. As a result, the dashboard turned out to be functional, yet intuitive for end users.",
      },
      {
        type: "image",
        value: "/images/works/alara-3.jpg",
        alt: "Alara widgets screen at an angle",
        width: 1600,
        height: 998,
      },
    ],
    nextProject: { title: "Future Tech", id: "future-tech" },
  },
  {
    id: "future-tech",
    number: "05/",
    year: "2025",
    title: "Future Tech",
    subtitle: "Interface concept for an AI platform — UI/UX design",
    client: "Non-commercial",
    coverImage: "/images/works/future-1.jpg",
    contentBlocks: [
      {
        type: "image",
        value: "/images/works/future-1.jpg",
        alt: "Future Tech desktop homepage",
        width: 1600,
        height: 905,
      },
      {
        type: "text",
        value:
          "I created this project as a concept to develop an interface for an AI platform. The main idea was to present complex artificial intelligence functions in a simple and understandable way.\n\nI worked through the entire design cycle — from research and prototypes to final layouts in Figma, paying attention to modularity and a clean visual system.",
      },
      {
        type: "image",
        value: "/images/works/future-2.jpg",
        alt: "Future Tech article layout",
        width: 1600,
        height: 1034,
      },
      {
        type: "text",
        value:
          "The project was conceived as a research concept, where I wanted to focus on how the interface could simplify working with artificial intelligence technologies. I saw it as an opportunity to test my ideas and refine my approach to creating modern, user-friendly, and scalable AI/UI solutions.\n\nIn the process, I went through the entire cycle: from analyzing user scenarios and building the structure to prototyping and creating the final layouts in Figma. I paid special attention to the modular design system so that the interface would remain cohesive and could be developed further.\n\nThe main focus was on combining advanced AI capabilities with ease of use: clean hierarchy, convenient navigation, visual lightness, and understandable feedback. Through iterations and refinements, I was able to build smoother user flows and make the interface intuitive.\n\nThis project became a platform for me to experiment and hone my practical skills, as well as allowing me to explore the topic of system and modular design in greater depth.",
      },
      {
        type: "image",
        value: "/images/works/future-3.jpg",
        alt: "Future Tech mobile screens",
        width: 1600,
        height: 948,
      },
    ],
    nextProject: { title: "Stream Vibe", id: "stream-vibe" },
  },
  {
    id: "stream-vibe",
    number: "06/",
    year: "2025",
    title: "Stream Vibe",
    subtitle: "Streaming platform concept — UI/UX design",
    client: "Non-commercial",
    coverImage: "/images/works/stream-1.jpg",
    contentBlocks: [
      {
        type: "image",
        value: "/images/works/stream-1.jpg",
        alt: "Stream Vibe homepage",
        width: 1600,
        height: 893,
      },
      {
        type: "text",
        value:
          "Stream Vibe is a streaming platform concept with a modern and user-friendly interface. The main idea was to make searching and viewing content as simple and intuitive as possible.\n\nI worked through the entire process — from user research and prototypes to the final design in Figma, using a modular component system for flexibility and scalability.",
      },
      {
        type: "image",
        value: "/images/works/stream-2.jpg",
        alt: "Stream Vibe genre catalog",
        width: 1600,
        height: 1038,
      },
      {
        type: "text",
        value:
          "During the project, I went through the entire UI/UX design cycle: from researching user scenarios and creating wireframes to highly detailed prototypes. In Figma, I put together a modular design system that ensured a consistent style and made it easy to scale the interface.\n\nI paid special attention to visual hierarchy, clear navigation, and feedback at every step of the interaction. This helped reduce noise in the interface and made the platform more comfortable to use.\n\nThe project became a practice in a systematic approach to design for me, combining user research, atomic design, and systems thinking. It allowed me to build a holistic and modern product concept.",
      },
      {
        type: "image",
        value: "/images/works/stream-3.jpg",
        alt: "Stream Vibe mobile screen",
        width: 1600,
        height: 1038,
      },
    ],
    nextProject: { title: "Modern wallet app", id: "modern-wallet" },
  },
  {
    id: "modern-wallet",
    number: "07/",
    year: "2025",
    title: "Modern wallet app",
    subtitle: "Mobile wallet and finance concept — UI/UX design",
    client: "Non-commercial",
    coverImage: "/images/works/modern-1.jpg",
    contentBlocks: [
      {
        type: "image",
        value: "/images/works/modern-1.jpg",
        alt: "Modern wallet onboarding screens",
        width: 1600,
        height: 675,
      },
      {
        type: "text",
        value:
          "Modern Wallet App is a concept for a modern financial application that combines traditional banking and cryptocurrency. Here you can register accounts, manage cards, make transfers, track statistics, and use integrations with games and other services.\n\nI worked on creating a user-friendly interface with an emphasis on simplicity, security, and quick access to key features.",
      },
      {
        type: "image",
        value: "/images/works/modern-2.jpg",
        alt: "Modern wallet account and transfer screens",
        width: 1600,
        height: 1096,
      },
      {
        type: "text",
        value:
          "Modern Wallet App is a concept for a new generation of financial applications that combines the capabilities of banking services and cryptocurrencies. The main idea was to create a simple yet functional interface for managing finances in one place.\n\nThe app includes key features: registration via phone, card linking and removal, transfers (including interbank and IBAN), statistics tracking, account settings, and even game integration. In essence, it is similar to PayPal, but with advanced options for working with cryptocurrency.\n\nDuring the development process, I focused on ensuring that the interface remained intuitive and understandable for a wide range of users. I developed a modular system in Figma, which allowed me to build a clear visual hierarchy, ensure scalability, and maintain a modern style.",
      },
      {
        type: "image",
        value: "/images/works/modern-3.jpg",
        alt: "Modern wallet statistics screens",
        width: 1600,
        height: 1181,
      },
    ],
    nextProject: { title: "Yudaev’s course", id: "yudaevs-course" },
  },
];

export function getProject(id) {
  return projects.find((project) => project.id === id) ?? null;
}

export function getProjectsByYear() {
  const map = new Map();

  for (const project of projects) {
    if (!map.has(project.year)) map.set(project.year, []);
    map.get(project.year).push(project);
  }

  return [...map.entries()]
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([year, items]) => ({
      year,
      note: yearNotes[year] ?? "",
      projects: items,
    }));
}
