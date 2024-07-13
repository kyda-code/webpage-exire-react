import React from 'react';
import HeaderV4 from '../../components/header/HeaderV4';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import AboutV3 from '../../components/about/AboutV3';
import WhyChooseUsV2 from '../../components/whyChoose/WhyChooseUsV2';
import TestimonialV2 from '../../components/testimonial/TestimonialV2';
import TeamV2 from '../../components/team/TeamV2';
import FooterV1 from '../../components/footer/FooterV1';

const AboutUs = () => {
    return (
        <>
            <HeaderV4 />
            <BreadCrumb breadCrumb="Acerca de Exire" title1="Nosotros" bottomSpace="pb-0" />
            <AboutV3/>
            <WhyChooseUsV2 />
            <FooterV1 />
        </>
    );
};

export default AboutUs;