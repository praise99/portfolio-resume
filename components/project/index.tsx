import React from "react";
import Featured from "./container";
import { ProjectData } from "./ProjectData";

const Projects = () => {
  return (
    <>
      {ProjectData.map((item) => {
        return (
          <Featured
            key={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
            projects={item.projects}
            githubLink={item.githubLink}
            laptopImage={item.laptopImage}
            mobileImage={item.mobileImage}
            ipadImage={item.ipadImage}
          />
        );
      })}
    </>
  );
};

export default Projects;
