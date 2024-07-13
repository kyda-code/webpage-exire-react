import React from 'react';
import HeaderV4 from '../../components/header/HeaderV4';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import FooterV1 from '../../components/footer/FooterV1';
import ContactV1Reverse from '../../components/contact/ContactV1Reverse';

const ContactUs = () => {
    return (
        <>
            <div className="wrapper">
                <HeaderV4 />
                <BreadCrumb breadCrumb="cont&aacute;ctanos" title1="Hablemos de negocios" bottomSpace="pb-0" />
                <ContactV1Reverse />
                <FooterV1 />
            </div>
        </>
    );
};

export default ContactUs;