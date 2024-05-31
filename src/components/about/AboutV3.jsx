import React from 'react';
import AboutV3ListData from '../../jsonData/AboutV3ListData.json'
import CountUp from 'react-countup';

const AboutV3 = () => {
    return (
        <>
            <div className="about-style-three-area default-padding overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-style-three">
                            <div className="about-three-thumb">
                                <img src="/img/thumb/exire-logistics-containers.jpg"/>
                                <img src="/img/thumb/exire-logistics-solutions.jpg"/>
                                <div className="experience">
                                    <h2><strong><CountUp end={18} duration={3} enableScrollSpy /></strong> Years Experience</h2>
                                </div>
                                <div className="animated-shape">
                                    <img src="/img/shape/38.png" alt="Shape" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 about-style-three">
                            <div className="about-three-info">
                                <h4 className="sub-title">Acerca de nosotros</h4>
                                <h2 className="title">Trabajando juntos <br /> para ofrecer valor</h2>
                                <p>
                                Exire Logistics es una compañía mexicana comprometida en transformar
                                la gestión de comercio exterior adaptándose a las exigencias actuales,
                                combinamos distintas disciplinas en finanzas, administración, ingeniería
                                de negocios y tecnología; esto nos posiciona como una empresa innovadora y
                                con una visión única en los negocios internacionales.
                                </p>
                                <p>
                                Trabajemos juntos para saber cuales
                                son los retos de su proyecto, te escuchamos y
                                te ayudamos a encontrar la solución poniendo
                                sobre la mesa diferentes alternativas.
                                </p>

                                <ul class="list-grid-four">
                                    <li>Definir el problema</li>
                                    <li>Desechar lo que ya sabemos</li>
                                    <li>Generar alternativas</li>
                                    <li>Elegir la mejor idea</li>
                                    <li>Llevarla a la acción</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV3;