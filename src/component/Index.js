import React from 'react';
import Popular from './Popular';
import TopRated from './TopRated';
import Upcoming from './Upcoming';

const Index = () => {

    return (

        <div className="container mt-5">
            <h2 className="text-center bienvenida-index">
                Toda la informacion sobre el mundo de las Peliculas
            </h2>
            <Popular/>
            <div className="dropdown-divider"></div>
            <TopRated/>
            <div className="dropdown-divider"></div>
            <Upcoming/>

        </div>
    );
};

export default Index;