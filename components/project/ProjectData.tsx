import {
  IphoneMusic,
  iphoneGithub,
  ipadGithub,
  ipadVerify,
} from "../../assets";
interface IProjectData {
  id: number;
  title: string;
  description: string;
  link: string;
  projects: string[];
  githubLink: string;
  laptopImage: string;
  mobileImage: any;
  ipadImage: any;
}

export const ProjectData: IProjectData[] = [
  {
    id: 1,
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
    ipadImage: IphoneMusic,
  },
  {
    id: 2,
    title: "VERICO WEBSITE",
    description: "A UI website for a fintech company.",
    link: "https://getverico.netlify.app/",
    githubLink: "#",
    projects: ["TYPESCRIPT", "CSS3", "NextJS", "HTML", "Javascript"],
    laptopImage: "/images/laptop-verico.jpg",
    mobileImage: IphoneMusic,
    ipadImage: IphoneMusic,
  },
  {
    id: 3,
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
    mobileImage: IphoneMusic,
    ipadImage: ipadVerify,
  },
  {
    id: 4,
    title: "GITHUB CLONE",
    description: "A Clone of users Github profile page",
    githubLink: "https://github.com/praise99/github-profile-clone",
    link: "https://praise-github-clone.netlify.app/",
    projects: ["API", "HTML", "Javascript", "Responsive Design"],
    laptopImage: "/images/laptop-github.jpg",
    mobileImage: iphoneGithub,
    ipadImage: ipadGithub,
  },
];
