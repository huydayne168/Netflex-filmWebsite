import React, { useContext, useEffect, useState, useReducer } from "react";
import styles from "./Types.module.css";
import FilmContext from "../../../stores/films-context";
import MovieDetail from "./MovieDetail";
import useShowDetail from "../../../hooks/use-show-detail";
function Types(props) {
    const filmContext = useContext(FilmContext);
    const [filmList, setFilmList] = useState([]);
    const { filmChose: filmChose, handleClick: handleClick } = useShowDetail();

    // Request to get Film List:
    useEffect(() => {
        function handleData(data) {
            setFilmList(data.results);
        }

        filmContext.requestFunction(
            filmContext.request[`${props.type}`],
            handleData
        );
    }, []);

    // Set Titles:
    let title;
    switch (props.type) {
        case "fetchDocumentaries":
            title = "Tài liệu";
            break;
        case "fetchTrending":
            title = "Xu hướng";
            break;
        case "fetchTopRated":
            title = "Xếp hạng cao";
            break;
        case "fetchActionMovies":
            title = "Hành Động";
            break;
        case "fetchComedyMovies":
            title = "Hài";
            break;
        case "fetchHorrorMovies":
            title = "Kinh dị";
            break;
        case "fetchRomanceMovies":
            title = "Lãng mạn";
            break;
        default:
            title = "";
            break;
    }

    return (
        <div className={styles["list-wrapper"]}>
            <h2>{title}</h2>
            <div className={styles.list}>
                {filmList.map((film, index) => {
                    if (film.backdrop_path) {
                        return (
                            <img
                                onClick={handleClick.bind(null, film)}
                                key={index}
                                src={
                                    props.type === "fetchNetflixOriginals"
                                        ? filmContext.createImgPath(
                                              film.backdrop_path
                                          )
                                        : filmContext.createImgPath(
                                              film.poster_path
                                          )
                                }
                                alt=""
                            />
                        );
                    } else {
                        return "";
                    }
                })}
            </div>
            <MovieDetail filmChose={filmChose} />
        </div>
    );
}

export default Types;
