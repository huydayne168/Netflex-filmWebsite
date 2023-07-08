import React from "react";
import "./Browser.css";
import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";
import MovieList from "./MovieList/MovieList";

function Browse() {
    return (
        <div className="app">
            <NavBar />
            <Banner />
            <MovieList />
        </div>
    );
}

export default Browse;
