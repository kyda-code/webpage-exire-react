import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SocialShare = () => {
    return (
        <>
            <li><Link to="https://www.facebook.com/ExireLogistics/" target='_blank' ><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link to="https://mx.linkedin.com/company/exire-logistics-sa-de-cv" target='_blank' ><i className="fab fa-linkedin-in"></i></Link></li>
        </>
    );
};

export default SocialShare;