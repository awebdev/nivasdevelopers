import React from 'react';
import PoolImg from './assets/pool-3d-view.jpg';

export const ProjectDescription = () => (
    <div className="row">
        <div className="box">
            <div className="col-lg-12">
                <hr />
                <h2 className="intro-text text-center">
                    A place worth living in
                </h2>
                <hr />
                <div className="row">
                    <div className="col-lg-4">
                        <img
                            className="img-responsive img-full"
                            src={PoolImg}
                            alt="Swimming pool"
                        />
                    </div>
                    <div className="col-lg-8">
                        <p>
                            Vaidehi Nivas Golden Palms, a gated community by
                            reputed builders Nivas Developers is a first of its
                            kind mega residential complex in Vidhyanagar,
                            Hyderabad, ideally located in the vincity of massive
                            greenery and open spaces of vast Osmania University.
                            This project would redefine the luxury of living
                            with the state of art design and ultra modern club
                            house with abundant and thoughtful green spaces.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ProjectDescription;
