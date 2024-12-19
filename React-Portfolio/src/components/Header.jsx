import Navigation from './Navigation.jsx'
import HeaderImage from '../images/header-image.png'

const Header = () => {
    return (
    <header className="header">
        <Navigation />
        <img src={HeaderImage} alt="Header Image" className="header-image img-fluid"/>
    </header>
    )
}

export default Header;