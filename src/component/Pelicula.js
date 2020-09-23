import React, { useState } from 'react';
import DetallePelicula from './DetallePelicula';


const Pelicula = ({ pelicula }) => {

    const [modal, setModal] = useState(false)
    const { title, poster_path, vote_average, release_date, overview, genre_ids, id } = pelicula


    return (
        <div className="col-3 p-4 ">
            <img onClick={() => setModal(true)}
                type="button" data-toggle="modal" data-target={'#id' + id}
                className="border border-light shadow p-1 bg-light rounded "
                src={`https://image.tmdb.org/t/p/w154/${poster_path}`} alt="poster de la" />

            <h6 >{title}</h6>
            <h6 className="text-success" > Puntaje: {vote_average}/10</h6>
            <p className="text-white-50">{release_date}</p>
            {
                <DetallePelicula
                    show={modal}
                    setShow={() => {setModal()}}
                    title={title}
                    overview={overview}
                    genre_ids={genre_ids}
                    id={id}
                />}
        </div>
    );
};

export default Pelicula;