import React from 'react';
import { openLink } from '../../utils/ga';

const BookingsInformation = props => (
    <div className="row box">
        <div className="col-lg-12">
            <hr />
            <h4 className="text-center">Bookings open now</h4>
            <hr />

            <p className="text-center">
                See{' '}
                <span
                    onClick={evt =>
                        openLink({
                            evt,
                            href: '/assets/docs/Golden-Palms-Brochure-0816.pdf',
                            action: 'brochure'
                        })
                    }
                    className="link"
                    rel="noopener noreferrer"
                >
                    brochure
                </span>{' '}
                or contact us for more details
            </p>
        </div>
    </div>
);

export default BookingsInformation;
