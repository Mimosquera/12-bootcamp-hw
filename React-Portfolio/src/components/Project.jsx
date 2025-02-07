const Project = ({ title, image, deploy, repo }) => {
    return (
      <div className="col-md-4">
        <div className="card project-card">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body text-center">
            <h5 className="card-title">{title}</h5>
            <div className="project-links">
              <a href={deploy} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Live Demo</a>
              <a href={repo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Project;  