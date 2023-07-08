import React, { useContext, useEffect, useState } from "react";
import styles from "./Banner.module.css";
import FilmContext from "../../../stores/films-context";
function Banner() {
    const [state, setState] = useState(false);
    const [img, setImg] = useState("");
    const [filmName, setFilmName] = useState("");
    const [filmDesc, setFimDesc] = useState("");
    const filmContext = useContext(FilmContext);

    // fetch data:
    useEffect(() => {
        filmContext.requestFunction(
            filmContext.request.fetchNetflixOriginals,
            handleFilmData
        );

        // handle Data:
        function handleFilmData(data) {
            // random number:
            const randomNumber = Math.floor(
                Math.random() * data.results.length - 1
            );
            // console.log(data.results);
            const randomBannerPath =
                data.results[`${randomNumber}`].backdrop_path;
            if (randomBannerPath === null) {
                setState(!state);
            } else {
                console.log(filmContext.createImgPath(randomBannerPath));
                setImg(filmContext.createImgPath(randomBannerPath));
                setFilmName(data.results[`${randomNumber}`].name);
                setFimDesc(data.results[`${randomNumber}`].overview);
            }
        }
    }, [state]);

    return (
        <div className={styles.banner}>
            <img src={img} alt="banner" />
            <div className={styles.details}>
                <h2>{filmName}</h2>
                <div className={styles.actions}>
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p className={styles.desc}>{filmDesc}</p>
            </div>
        </div>
    );
}

export default Banner;
