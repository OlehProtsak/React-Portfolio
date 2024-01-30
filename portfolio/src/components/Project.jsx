const Project = ({ title, deployedLink, githubLink, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Link to deployed version: <a href={deployedLink}>{deployedLink}</a></p>
      <p>Link to GitHub repository: <a href={githubLink}>{githubLink}</a></p>
      <img src={image} alt={title} />
    </div>
  );
};

export default Project;
