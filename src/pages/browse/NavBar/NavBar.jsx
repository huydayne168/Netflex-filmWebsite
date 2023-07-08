import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    const [backGround, setbackGround] = useState(false);
    useEffect(() => {
        const scrollHandler = function () {
            if (this.window.scrollY >= 100) {
                setbackGround(true);
            } else {
                setbackGround(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    return (
        <div
            className={`${styles["nav-bar"]} ${
                backGround ? styles["back-ground"] : ""
            }`}
        >
            <div
                className={styles.logo}
                onClick={() => {
                    window.location.replace("/");
                }}
            >
                Netflex {/* Logo */}
            </div>
            <div
                className={styles.search}
                onClick={() => {
                    window.location.replace("search");
                }}
            >
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    );
}

export default NavBar;
