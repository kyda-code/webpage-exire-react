import React from 'react';
import WhyChooseUsV2Data from '../../jsonData/WhyChooseUsV2Data.json'

const WhyChooseUsV2 = () => {
    return (
        <>
            <div className="choose-us-style-two-area default-padding bg-light text-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="choose-us-style-two">
                                <h2 className="title mb-50">Haga crecer su negocio con soluciones</h2>
                                <ul className="check-list-item">
                                    {WhyChooseUsV2Data.map(choose =>
                                        <li key={choose.id}>
                                            <h4>{choose.title}</h4>
                                            <p>{choose.text}</p>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 offset-xl-1 text-end">
                            <div className="choose-us-style-two-thumb">
                                <h4>Trabajando para ti</h4>
                                <h2 className="text-path">desde 2010</h2>
                                <img src="/img/banner/exire-logistics-confidence.jpg" alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseUsV2;