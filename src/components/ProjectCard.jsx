import { Link } from 'react-router-dom';

export const ProjectCard = ({ id, title, description, image, tags }) => {
  return (
    <Link to={`/projet/${id}`} className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        {tags && (
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
