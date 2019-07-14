import React from 'react';
import './ProjectHighlights.scss';

export const ProjectHighlights = () => (
    <div className="row box">
        <div className="col-lg-12 project-highlights">
            <hr />
            <h3 className="text-center">Project Highlights</h3>
            <hr />
            <div className="row">
                <ul className="col-lg-4">
                    <li>5 blocks; 220 signature luxury apartments</li>
                    <li>Around 2 Acres land area</li>
                    <li>100% Power backup</li>
                    <li>13000 sq.ft club house</li>
                    <li>400+ car parking provision</li>
                </ul>

                <ul className="col-lg-4">
                    <li>200 meters walking track</li>
                    <li>1162 - 2000 sq.ft area apartments</li>
                    <li>2, 2 1/2 & 3 BHK apartments</li>
                    <li>Professionally landscaped garden</li>
                </ul>

                <ul className="col-lg-4">
                    <li>Air-conditioned multi-purpose common area with lawn</li>
                    <li>Swimming pool</li>
                    <li>Children's play area</li>
                    <li>Rain water harvesting</li>
                    <li>Sewage water treatment plant</li>
                </ul>
            </div>
        </div>
    </div>
);

export default ProjectHighlights;
