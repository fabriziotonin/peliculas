import axios from 'axios';

let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=927f2d7f4c8e1f2606022420021e33aa&language=en-US`
const Genres = {}

const queryAPI = async () => {
    const res = await axios.get(url)
    res.data.genres.forEach(genre => {
        Genres[genre.id] = genre.name
    });
};

export {queryAPI, Genres}