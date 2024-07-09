import React from 'react';
import SocialShare from '../others/SocialShare';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-style-one-info">
                <div className="mb-40">
                    <p>
                        Sigamos en contacto, juntos encontraremos la soluci&oacute;n.
                    </p>
                </div>
                <ul className="contact-address">
                    <li className="wow fadeInUp">
                        <div className="content">
                            <h4 className="title">Tel&eacute;fono</h4>
                            <a href="tel:525515008442">+52 55 1500-8442</a>
                            </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="300ms">
                        <div className="info">
                            <h4 className="title">Direcci&oacute;n</h4>
                            <p>
                            Rio Lerma 94 Piso 3, Cuauht&eacute;moc, CDMX, 06500
                            </p>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="500ms">
                        <div className="info">
                            <h4 className="title">Email</h4>
                            <a href="mailto:info@exire.mx">info@exire.mx</a>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="700ms">
                        <div className="info">
                            <h4 className="title">Follow Us</h4>
                            <ul className="social-link">
                                <SocialShare />
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;