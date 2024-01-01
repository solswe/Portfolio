import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Link, Image } from "@nextui-org/react";

import jsonData from "../components/Data/ProjectsData.json";

function Projects() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    setProjectData(jsonData.projects);
  }, []);

  return (
    <>
      <div className="project-layout">
        <div className="summary-cards-cont">
          {projectData.map(project => (
            <Card className="summary-card" key={project.title}>
              <CardHeader className="card-header">
                <small>{project.type}</small>
                <h1 className="card-title">{project.title}</h1>
              </CardHeader>
              <CardBody>
                <p className="card-body">{project.sumEng}</p>
                <p>{project.sumKor}</p>
              </CardBody>
              <CardFooter className="project-footer">
                <div className="project-link">
                  <Link href={project.url} color="secondary">READ MORE</Link>
                </div>
                <Link href={project.url}>
                  <Image isZoomed src={project.img} alt={project.title} className="project-screen"/>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;