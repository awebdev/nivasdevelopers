import React from 'react';
import { openLink } from '../../utils/ga';

import './Footer.scss';

const Footer = props => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <p>
                        <img
                            className="company-logo"
                            src="assets/logo/nivas-logo.png"
                            alt="Nivas Developers"
                        />
                        <br /> Nivas Developers
                        <br />{' '}
                        <span
                            onClick={evt =>
                                openLink({
                                    evt,
                                    href:
                                        'https://goo.gl/maps/SdTXtpSDunN5YGQv8',
                                    action: 'Google Maps'
                                })
                            }
                            className="link"
                            rel="noopener noreferrer"
                        >
                            H.No.1-9-312&#x2F;2 &amp; 1-9-321&#x2F;2A
                        </span>
                        <br /> Hyderabad, Telangana,
                        <br /> India - 500044
                        <br /> Tel: +91 (996) 643-0011
                        <br /> E-mail:{' '}
                        <span
                            onClick={evt =>
                                openLink({
                                    evt,
                                    href: 'mailto:nivasdevelopers@hotmail.com',
                                    action: 'email'
                                })
                            }
                            className="link"
                        >
                            nivasdevelopers@hotmail.com
                        </span>
                        <br />
                        <br /> Copyright &copy; Nivas Developers{' '}
                        {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
