import React, { useContext, useEffect, useState } from "react";
import styles from "./MovieList.module.css";
import FilmContext from "../../../stores/films-context";
import Types from "./Types";
function MovieList() {
    const filmContext = useContext(FilmContext);

    return (
        <div className={styles["movie-list"]}>
            <Types type="fetchNetflixOriginals" key="fetchNetflixOriginals" />
            <Types type="fetchTrending" key="fetchTrending" />
            <Types type="fetchTopRated" key="fetchTopRated" />
            <Types type="fetchActionMovies" key="fetchActionMovies" />
            <Types type="fetchComedyMovies" key="fetchComedyMovies" />
            <Types type="fetchHorrorMovies" key="fetchHorrorMovies" />
            <Types type="fetchRomanceMovies" key="fetchRomanceMovies" />
            <Types type="fetchDocumentaries" key="fetchDocumentaries" />
        </div>
    );
}

export default MovieList;
