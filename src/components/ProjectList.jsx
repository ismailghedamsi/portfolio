import React from 'react';
import Project from './Project';
import FireLine from './separators/FireLine';
import WaveLine from './separators/WaveLine';

function ProjectList({ projects, technologies }) {
  return (
    <>
      <FireLine />
      {projects.map((project, index) => (
        <React.Fragment key={project.id}>
          <Project
            projectId={project.id}
            style={{ delay: index * 100 }}
            title={project.title}
            description={project.description}
            fullImage={project.fullImage}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
            images={Array.from({ length: project.imagesCount }, (_, i) => `/${project.imageBaseName}${i+1}.jpg`)}
            technologies={(technologies[project.id] || []).map(tech => ({
              logoFilename: `/tech_logos/${tech.image}`,
              name: tech.name
            }))}
          />
          {index < projects.length - 1 && <WaveLine />}
        </React.Fragment>
      ))}
      <FireLine />
    </>
  );
}

export default ProjectList;
