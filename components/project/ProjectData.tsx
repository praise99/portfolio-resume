interface IProjectData {
  id: number;
  title: string;
  description: string;
  link: string;
  projects: string[];
}

export const ProjectData: IProjectData[] = [
  {
    id: 1,
    title: "App Development Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id luctus orci. Nulla dolor libero, tincidunt quis leo vitae, posuere pretium ligula. Cras accumsan, odio eu luctus imperdiet, sapien augue maximus elit.",
    link: "string",
    projects: [
      "Template",
      "Webflow CMS",
      "Video",
      "Animations",
      "Responsive Design",
    ],
  },
  {
    id: 2,
    title: "Real Estate Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id luctus orci. Nulla dolor libero, tincidunt quis leo vitae, posuere pretium ligula. Cras accumsan, odio eu luctus imperdiet, sapien augue maximus elit.",
    link: "string",
    projects: [" Animations", "CSS3", "Ecommerce", "HTML", "Javascript"],
  },
  {
    id: 3,
    title: "Fintech Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id luctus orci. Nulla dolor libero, tincidunt quis leo vitae, posuere pretium ligula. Cras accumsan, odio eu luctus imperdiet, sapien augue maximus elit.",
    link: "string",
    projects: [
      "Animations",
      "Ecommerce",
      "Webflow CMS",
      "Template",
      "Responsive Design",
    ],
  },
];
