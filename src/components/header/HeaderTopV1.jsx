import React from 'react';

const HeaderTopV1 = () => {
    return (
        <>
            <div className="top-bar-area top-bar-style-two bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-8">
                            <ul className="item-flex">
                                <li>
                                    <div className="icon">
                                        <i className="fa-solid fa-map-marker-alt"></i>
                                    </div>
                                    <div className="info">
                                        <strong>Direcci&oacute;n</strong>
                                        Rio Lerma 94 Piso 3, Cuauht&eacute;moc, CDMX, 06500
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fa-solid fa-headset"></i>
                                    </div>
                                    <div className="info">
                                        <strong>Tel&eacute;fono</strong>
                                        <a href="tel:525515008442">+52 55 1500-8442</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 text-end">
                            <div className="call-entry">
                                <div className="icon">
                                    <i className="fa-solid fa-comments-dollar"></i>
                                </div>
                                <div className="info">
                                    <p>¿Alguna Pregunta?</p>
                                    <h5><a href="mailto:info@exire.mx">info@exire.mx</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopV1;