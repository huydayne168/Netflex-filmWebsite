import React, { useContext } from "react";
import FilmContext from "./films-context";

function FilmProvider(props) {
    const API_KEY = "914084c5015e59370924f50ee4167a31";
    const request = {
        fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
        fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123`,
        fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
        fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
        fetchSearch: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US`,
    };

    const getFilmsData = async function (url, handleData) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Something wrong!!!");
            const data = await response.json();
            handleData(data);
        } catch (error) {
            console.log(error.message || "NOT OKE!!!");
        }
    };

    function createImgPath(imgPath) {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${imgPath}`;
    }

    const value = {
        request: request,
        requestFunction: getFilmsData,
        createImgPath: createImgPath,
    };

    return (
        <FilmContext.Provider value={value}>
            {props.children}
        </FilmContext.Provider>
    );
}

export default FilmProvider;
