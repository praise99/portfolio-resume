import {
  IphoneMusic,
  iphoneGithub,
  ipadGithub,
  ipadVerify,
  iphoneVerify,
  iphoneVerico,
  ipadVerico,
  ipadMusic,
  ipadVerifyTest,
} from "../../assets";
interface IProjectData {
  id: number;
  title: string;
  description: string;
  link: string;
  projects: string[];
  githubLink: string;
  laptopImage: any;
  mobileImage: any;
  ipadImage: any;
}

export const ProjectData: IProjectData[] = [
  {
    id: 1,
    title: "SAMPHES SERVICES",
    description:
      "A comprehensive e-commerce platform specializing in premium beauty products and cosmetics. The store offers both wholesale and retail options with a user-friendly interface for browsing, purchasing, and tracking orders.",
    link: "https://samphesservices.com/",
    githubLink: "#",
    projects: [
      "NEXT JS",
      "CONTEXT API",
      "TYPESCRIPT",
      "Responsive Design",
      "Tailwind CSS",
    ],
    laptopImage: "/images/samphes.png",
    mobileImage: IphoneMusic,
    ipadImage: ipadMusic,
  },
  {
    id: 3,
    title: "BRIGHTWAY MICROFINANCE",
    description:
      "A modern financial services platform for a microfinance bank providing accessible banking solutions to individuals and small businesses. The website features loan application services, account management tools, and financial education resources to empower local communities.",
    link: "https://brightwaymfb.com",
    githubLink: "#",
    projects: ["TYPESCRIPT", "Tailwind CSS", "NextJS", "HTML", "Javascript"],
    laptopImage: "/images/bmfb.png",
    mobileImage: iphoneVerico,
    ipadImage: ipadVerico,
    // mobileImage: IphoneMusic,
    // ipadImage: IphoneMusic,
  },
  {
    id: 2,
    title: "MUSIC APP",
    description: "A music app to play my favorite songs and albums",
    link: "https://praise-musica.netlify.app/",
    githubLink: "https://github.com/praise99/musica",
    projects: [
      "NEXT JS",
      "CONTEXT API",
      "CSS",
      "TYPESCRIPT",
      "Responsive Design",
    ],
    laptopImage: "/images/Laptop-music.jpg",
    mobileImage: IphoneMusic,
    ipadImage: ipadMusic,
  },

  {
    id: 4,
    title: "VERIFICATION PAGE",
    description: "Verification UI for a online Business.",
    githubLink: "https://github.com/praise99/react-task",
    link: "https://praisebuyfood.netlify.app/",
    projects: [
      "STYLED COMPONENTS",
      "REACT JS",
      "HTML",
      "Javascript",
      "Responsive Design",
    ],
    laptopImage: "/images/laptop-verification.jpg",
    mobileImage: iphoneVerify,
    ipadImage: ipadVerify,
    // mobileImage: IphoneMusic,
    // ipadImage: IphoneMusic,
  },
  {
    id: 5,
    title: "GITHUB CLONE",
    description: "A Clone of users Github profile page",
    githubLink: "https://github.com/praise99/github-profile-clone",
    link: "https://praise-github-clone.netlify.app/",
    projects: ["API", "HTML", "Javascript", "Responsive Design"],
    laptopImage: "/images/laptop-github.jpg",
    mobileImage: iphoneGithub,
    ipadImage: ipadGithub,
    // mobileImage: IphoneMusic,
    // ipadImage: IphoneMusic,
  },
];
