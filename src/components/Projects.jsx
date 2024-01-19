import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
          title: 'Project 1',
          description: 'Brief description of Project 1',
          // Add image or logo URL for Project 1
        },
        {
          title: 'Project 2',
          description: 'Brief description of Project 2',
          // Add image or logo URL for Project 2
        },
        // Add more projects here
      ];
    
      return (
        <div className="container">
          <h1>My Programming Projects</h1>
          <div className="project-cards">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      );

};

export default Projects;