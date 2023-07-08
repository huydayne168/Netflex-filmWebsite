import React, { useContext, useEffect, useState } from "react";
import styles from "./MovieDetail.module.css";
import YouTube from "react-youtube";
import FilmContext from "../../../stores/films-context";

function MovieDetail(props) {
    const filmContext = useContext(FilmContext);
    const [key, setKey] = useState("");
    const opts = {
        height: "400",
        width: "100%",
        playerVars: {
            autoplay: 0,
        },
    };
    useEffect(() => {
        async function fetchFilmChoseVideo(id) {
            if (id) {
                try {
                    const res = await fetch(
                        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=914084c5015e59370924f50ee4167a31`
                    );

                    if (!res.ok) {
                        setKey("");
                        throw new Error("Can not get trailer!");
                    }

                    const data = await res.json();
                    console.log(data);
                    if (data.results.length >= 1) {
                        setKey(data.results[0].key);
                    } else {
                        setKey("");
                        throw new Error("No results!");
                    }
                } catch (error) {
                    console.error(error.message);
                    return;
                }
            } else {
                return;
            }
        }
        fetchFilmChoseVideo(props.filmChose.id);
    }, [props.filmChose]);

    return (
        <React.Fragment>
            {props.filmChose.isShown ? (
                <div
                    className={styles["movie-detail"]}
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className={styles.desc}>
                        <h2>{props.filmChose.name}</h2>
                        <em className={styles["release"]}>
                            Release-Date: {props.filmChose.released}
                        </em>
                        <em className={styles["vote"]}>
                            Vote: {props.filmChose.vote}/10
                        </em>
                        <p className={styles.overview}>
                            {props.filmChose.overview}
                        </p>
                    </div>

                    <div className={styles.trailer}>
                        {key ? (
                            <YouTube videoId={key} opts={opts} />
                        ) : (
                            <img
                                src={filmContext.createImgPath(
                                    props.filmChose.backdrop_path
                                )}
                                alt={props.filmChose.name}
                            />
                        )}
                    </div>
                </div>
            ) : (
                ""
            )}
        </React.Fragment>
    );
}

export default MovieDetail;
