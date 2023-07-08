import React, { useState } from "react";

function useShowDetail() {
    const defaultFilmChose = {
        isShown: false,
        id: "",
        name: "",
        released: "",
        vote: "",
        overview: "",
        backdrop_path: "",
    };
    const [filmChose, setFilmChose] = useState({ defaultFilmChose });

    // handle Click Image to show info:
    function handleClick(film) {
        if (film) {
            if (film.title) {
                film.name = film.title;
            }
            console.log(film);
            if (film.name !== filmChose.name) {
                setFilmChose((prevFilmChose) => {
                    return {
                        isShown: true,
                        id: film.id,
                        name: film.title ?? film.name,
                        released: film.release_date ?? film.first_air_date,
                        vote: film.vote_average,
                        overview: film.overview,
                        backdrop_path: film.backdrop_path,
                    };
                });
            } else if (film.name === filmChose.name) {
                setFilmChose((prevFilmChose) => {
                    return {
                        isShown: false,
                        id: "",
                        name: "",
                        released: "",
                        vote: "",
                        overview: "",
                    };
                });
            }
        } else {
            setFilmChose((prevFilmChose) => {
                return {
                    isShown: false,
                    id: "",
                    name: "",
                    released: "",
                    vote: "",
                    overview: "",
                };
            });
        }
    }

    return {
        filmChose,
        handleClick,
    };
}

export default useShowDetail;
