import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import ServiceListWidgetData from '../../jsonData/ServiceListWidgetData.json'

const MainMenu = ({ isOpen, closeMenu, toggleSubMenu, toggleMegaMenu }) => {
    return (
        <>
            <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                <img src="/img/logo/logo.png" alt="Logo" />
                <button type="button" className="navbar-toggle" onClick={closeMenu}>
                    <i className="fa-solid fa-times"></i>
                </button>
                <ul className="nav navbar-nav navbar-center">
                    <li><Link to="/#">Inicio</Link></li>
                    <li className="dropdown">
                        <Link to={void (0)} className="dropdown-toggle" onClick={toggleSubMenu}>Servicios</Link>
                        <ul className="dropdown-menu">
                            {ServiceListWidgetData.map(service =>
                                <li key={service.id}><Link to={`/${service.listLink}#`}>{service.listTitle}</Link></li>
                            )}
                        </ul>
                    </li>
                    <li><Link to="/about-us">Nosotros</Link></li>
                    <li><Link to="/contact-us">Contacto</Link></li>
                </ul>
            </div>
        </>
    );
};

export default MainMenu;