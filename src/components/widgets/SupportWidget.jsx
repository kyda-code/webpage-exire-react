import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SupportWidget = () => {
    return (
        <>
            <div className="single-widget quick-contact-widget text-light" style={{ backgroundImage: "url(/img/thumb/exire-logistics-service.jpg)" }}>
                <div className="content">
                    <h3>¿Necesitas Ayuda?</h3>
                    <p>
                        No dudes en contactarnos para diseñar la solución adecuada a tus necesidades o responder tus dudas.
                    </p>
                    <h2><a href="tel:525515008442">+52 55 1500-8442</a></h2>
                    <h4><a href="mailto:info@exire.mx">info@exire.mx</a></h4>
                    <Link className="btn mt-30 circle btn-sm btn-gradient" to="/contact-us#">Contáctanos</Link>
                </div>
            </div>
        </>
    );
};

export default SupportWidget;