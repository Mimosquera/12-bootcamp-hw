import Project from "../components/Project";

const Portfolio = () => {
  return (
    <section className="container">
      <h1>Portfolio</h1>
      <div className="row">
        <Project title="Pet Tag" image="../Assets/Images/PetTagMain.png" deploy="https://achensen.github.io/Pet-Tag/index.html" repo="https://github.com/achensen/Pet-Tag" />
        <Project title="Project 2" image="../Assets/Images/NewFlowMainPage.png" deploy="#" repo="https://github.com/achensen/New-Flow" />
        <Project title="Project 3" image="https://via.placeholder.com/300" deploy="#" repo="#" />
      </div>
    </section>
  );
};

export default Portfolio;
