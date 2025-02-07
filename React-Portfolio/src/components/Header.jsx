import Navigation from "./Navigation.jsx";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <Navigation />
      <img src="/header-image.png" alt="Header Background" className="header-image" />
      <div className="header-content">
        <h1 className="header-title">Michael Mosquera</h1>
        <p className="header-subtitle">Full Stack Web Developer</p>
      </div>
    </header>
  );
};

export default Header;
