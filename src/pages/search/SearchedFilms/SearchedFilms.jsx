import React, { useContext, useState, useEffect } from "react";
import styles from "./SearchedFilms.module.css";
import FilmContext from "../../../stores/films-context";
import useShowDetail from "../../../hooks/use-show-detail";
import MovieDetail from "../../browse/MovieList/MovieDetail";

function SearchedFilms(props) {
    const filmContext = useContext(FilmContext);
    const [listFilms, setListFilms] = useState([]);
    const { filmChose: filmChose, handleClick: handleClickFilm } =
        useShowDetail();

    useEffect(() => {
        setListFilms([]);
        function handleData(data) {
            console.log(data);
            data.results.forEach((film) => {
                if (film.poster_path) {
                    setListFilms((listFilms) => {
                        return [...listFilms, film];
                    });
                } else {
                    return;
                }
            });
        }
        if (props.searchValue) {
            filmContext.requestFunction(
                filmContext.request.fetchSearch +
                    "&" +
                    `query=${props.searchValue}`,
                handleData
            );
        }
    }, [props.searchValue]);

    function closeModal(event) {
        event.stopPropagation();
        console.log("oke");
    }

    return (
        <React.Fragment>
            <div className={styles["searched-film"]}>
                <h2>Search Result</h2>
                <div className={styles["searched-films--list"]}>
                    {listFilms.map((film, index) => {
                        return (
                            <img
                                onClick={handleClickFilm.bind(null, film)}
                                src={filmContext.createImgPath(
                                    film.poster_path
                                )}
                                alt={film.name}
                                key={film.poster_path + index}
                            />
                        );
                    })}
                </div>
            </div>

            {filmChose.isShown ? (
                <div
                    className={styles["detail-modal"]}
                    onClick={handleClickFilm.bind(null, null)}
                >
                    <div
                        className={styles.modal}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <MovieDetail filmChose={filmChose} />
                    </div>
                </div>
            ) : (
                ""
            )}
        </React.Fragment>
    );
}

export default SearchedFilms;
