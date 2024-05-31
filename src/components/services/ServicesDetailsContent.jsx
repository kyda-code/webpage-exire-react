import React from 'react';
import ServiceListWidget from '../widgets/ServiceListWidget';
import SupportWidget from '../widgets/SupportWidget';
import FeatureListData from '../../jsonData/FeatureListData.json'

const ServicesDetailsContent = ({ serviceInfo }) => {
    const { thumb, text, title, challenge, weMake, featureList} = serviceInfo

    return (
        <>
            <div className="services-details-area default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 pr-45 pr-md-15 pr-xs-15 services-single-content">
                                <div className="service-single-thumb">
                                    <img src={`/img/services/${thumb}`} alt="Thumb" />
                                </div>
                                <h2>{title}</h2>
                                <p>{text}</p>
                                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="content">
                                                <h3>Servicios Incluidos</h3>
                                                <ul className="feature-list-item">
                                                    {featureList.map(list =>
                                                        <li key={list.id}>{list.featureList}</li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 mt-xs-30">
                                            <div className="content">
                                                <h3>El Reto</h3>
                                                <p>
                                                    {challenge}    
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3>¿Qué hacemos?</h3>
                                <p>
                                    {weMake}
                                </p>
                            </div>
                            <div className="col-xl-4 col-lg-5 mt-md-50 mt-xs-50 pl-30 pl-md-15 pl-xs-15 services-sidebar">
                                <ServiceListWidget />
                                <SupportWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesDetailsContent;