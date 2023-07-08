import React, { useState } from "react";
import NavBar from "../browse/NavBar/NavBar";
import SearchForm from "./SearchForm/SearchForm";
import SearchedFilms from "./SearchedFilms/SearchedFilms";

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    function search(value) {
        setSearchValue(value);
    }
    return (
        <div className="app">
            <NavBar />
            <SearchForm search={search} />
            <SearchedFilms searchValue={searchValue} />
        </div>
    );
};

export default Search;
