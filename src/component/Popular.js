import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Pelicula from './Pelicula';

const Popular = () => {

  const [popular, setPopular] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(1)
  let url = `https://api.themoviedb.org/3/movie/popular?api_key=927f2d7f4c8e1f2606022420021e33aa&language=en-US&page=${currentPage}`

  const query = useCallback(() => {
    axios.get(url)
      .then(res => {
        setTotal(res.data.total_pages)
        setPopular(prevS => [...prevS, ...res.data.results])
      })
  }, [url])
  
  useEffect(() => {

    query()
  }, [query])

  // useEffect(() => {

  //     const queryAPI = async () => {
  //       await axios.get(url)
  //         .then(res => {
  //           setTotal(res.data.total_pages)
  //           setPopular(prevS => [...prevS, ...res.data.results])
  //         })
  //     };
  //     queryAPI()
  // }, [currentPage, ]);

  const verMas = () => (
    (total > currentPage) &&
    <button className="btn btn-secondary"
      onClick={() => { setCurrentPage(currentPage + 1) }}>
      Ver más ...</button>
  )


  return (
    <div className="mt-5">
      <div className="row justify-content-center">
        <h4 className="text-center text-white">Mas Populares &nbsp;</h4>
        <h4 className="text-success"> <i className="fa fa-fire"> </i></h4>
      </div>
      <div className="row">
        {
          popular.map((pelicula) => (
            <Pelicula
              key={pelicula.id}
              pelicula={pelicula}
            />
          ))
        }
      </div>
      <div className="text-center">
        {/* Con el operador condicional el boton solo se muestra mientras no queden peliculas por listar */}
        {verMas()}
      </div>
    </div>
  );
};

export default Popular;