import Project from "../components/Project";

const Portfolio = () => {
  return (
    <section className="container">
      <h1>Portfolio</h1>
      <div className="row">
        <Project title="Project 1" image="https://via.placeholder.com/300" deploy="#" repo="#" />
        <Project title="Project 2" image="https://via.placeholder.com/300" deploy="#" repo="#" />
        <Project title="Project 3" image="https://via.placeholder.com/300" deploy="#" repo="#" />
        <Project title="Project 4" image="https://via.placeholder.com/300" deploy="#" repo="#" />
        <Project title="Project 5" image="https://via.placeholder.com/300" deploy="#" repo="#" />
        <Project title="Project 6" image="https://via.placeholder.com/300" deploy="#" repo="#" />
      </div>
    </section>
  );
};

export default Portfolio;
