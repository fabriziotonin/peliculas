import React, { useEffect, useState } from "react";
import axios from "axios";
import Pelicula from "./Pelicula";

const TopRated = () => {
  const [popular, setPopular] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(1);
  let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=927f2d7f4c8e1f2606022420021e33aa&language=en-US&page=${currentPage}`;

  useEffect(() => {
    const queryAPI = async () => {
      const res = await axios.get(url)
      setTotal(res.data.total_pages);
      setPopular(res.data.results);
    };
    
    queryAPI();
  }, [currentPage, url]);


  const pagination = () => {
    const pages = [];
    let count = 0;

    for (let i = currentPage - 3; i < currentPage + 7; i++) {
      
      const active = (i === currentPage) ? 'active' : null;

      if (i > 0 && i <= total && count < 7) {
        
        pages.push(
          <li key={i} className={'page-item ' + active}>
            <button onClick={() => { !active && setCurrentPage(i) }} className="page-link page">
              {i}<span className="sr-only">{active && '(current)'}</span>
            </button>
          </li>
        );
        count++
      }
    }

    return pages;
  };

  const prevNext = (n) => {
    const disabled = (n === 0 || n > total ) ? 'disabled' : null
    
    return (
      <li className={"page-item " + disabled}>
        <button onClick={() => { !disabled && setCurrentPage(n) }}
          className="page-link page" aria-label={ n < currentPage ? 'Previous' : 'Next' }>
          <span aria-hidden="true">{ n < currentPage ? '«' : '»' }</span>
          <span className="sr-only">{ n < currentPage ? 'Previous' : 'Next' }</span>
        </button>
      </li>
    )
  }


  return (
    <div className="mt-5">
      <div className="row justify-content-center">
        <h4 className="text-center text-white">Mas Valoradas &nbsp;</h4>
        <h4 className="text-success">
          <i className="fa fa-star"></i>
        </h4>
      </div>
      <div className="d-flex scroll">
        {popular.map(pelicula => (
          <Pelicula key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <nav aria-label="pagination">
          <ul className="pagination">
            { prevNext(currentPage - 1) }
            { pagination() }
            { prevNext(currentPage + 1) }
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopRated;
