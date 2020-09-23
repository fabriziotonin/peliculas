import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pelicula from './Pelicula';

const Upcoming = () => {

    const [popular, setPopular] = useState([])
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=927f2d7f4c8e1f2606022420021e33aa&language=en-US&page=1`

    useEffect(() => {        
        const queryAPI = async () => {
            await axios.get(url)
            .then(res => {
                setPopular(res.data.results)
            })
        };
        queryAPI()
    }, [url])

    return (
        <div className="mt-5">
            <div className="row justify-content-center">
                <h4 className="text-center text-white">Proximos estrenos &nbsp;</h4>
                <h4 className="text-success"> <i className="fa fa-arrow-left"></i></h4>
            </div>            <div className="row">
                {
                    popular.slice(0, 4).map((pelicula) => (
                        <Pelicula
                            key={pelicula.id}
                            pelicula={pelicula}
                        />
                    ))
                }
            </div>

        </div>
    );
};

export default Upcoming;