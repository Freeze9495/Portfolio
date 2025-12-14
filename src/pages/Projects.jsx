import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';

export const Projects = () => {
  const [filter, setFilter] = useState('Tous');
  
  const categories = ['Tous', ...new Set(projectsData.map(p => p.category))];
  
  const filteredProjects = filter === 'Tous'
    ? projectsData
    : projectsData.filter(p => p.category === filter);
  
  return (
    <div className="section" style={{ paddingTop: '8rem' }}>
      <h1 className="section-title">Tous mes projets</h1>
      <p className="section-subtitle">
        Explorez l'ensemble de mes réalisations en développement, UX/UI et design
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`btn ${filter === cat ? '' : 'btn-outline'}`}
            style={{ padding: '10px 20px', fontSize: '0.9rem' }}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};
