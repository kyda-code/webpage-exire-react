import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import SocialShare from '../others/SocialShare';
import { toast } from 'react-toastify';

const FooterV1 = () => {

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for your Email")
    }

    return (
        <>
            <footer className="bg-dark text-light" style={{ backgroundImage: "url(/img/shape/5.png)" }}>
                <div className="container">
                    <div className="f-items default-padding-bottom pt-70 pt-xs-0">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="footer-animated-shape">
                                    <img src="/img/shape/6.png" alt="Image Not Found" />
                                </div>
                                <div className="f-item about pr-50 pr-xs-0 pr-md-0">
                                    <img className="logo" src="/img/logo/Exire-Logistics-Site-Logo.png" alt="Logo" />
                                    <p>
                                        Dedicamos nuestro tiempo y talento a organizar operaciones de comercio exterior exitosas.
                                    </p>
                                    <div className="footer-social mt-30">
                                        <ul>
                                            <SocialShare />
                                        </ul>
                                    </div>
                                </div>
                            </div>
  
                            <div className="col-lg-6 col-md-6 footer-item mt-50">
                                <div className="f-item contact">
                                    <h4 className="widget-title">Contacto</h4>
                                    <ul>
                                        <li>
                                            <div className="content">
                                                <strong>Direcci&oacute;n</strong>
                                                Rio Lerma 94 Piso 3, Cuauht&eacute;moc, CDMX, 06500
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <strong>Email:</strong>
                                                <a href="mailto:info@exire.mx">info@exire.mx</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <strong>Tel&eacute;fono</strong>
                                                <a href="tel:525515008442">+52 55 1500-8442</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom bg-dark text-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>
                                    Copyright &copy; {(new Date().getFullYear())} Powered by Kyda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;