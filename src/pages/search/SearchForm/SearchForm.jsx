import React, { useState } from "react";
import styles from "./SearchForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function SearchForm(props) {
    const [searchValue, setSearchValue] = useState("");

    // handle search input value:
    function valueChangeHandler(event) {
        setSearchValue(event.target.value);
    }

    // Search with current input value:
    function handleSearchValue(event) {
        event.preventDefault();
        props.search(searchValue.trim());
    }

    return (
        <div className={styles["search-form"]}>
            <div className={styles["search-bar"]}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    value={searchValue}
                    onChange={valueChangeHandler}
                />
                <button onClick={handleSearchValue}>
                    <FontAwesomeIcon
                        icon={faSearch}
                        className={styles["search-icon"]}
                    />
                </button>
            </div>
            <div className={styles.actions}>
                <button
                    onClick={(event) => {
                        event.preventDefault();
                        setSearchValue("");
                    }}
                >
                    Reset
                </button>
                <button onClick={handleSearchValue}>Search</button>
            </div>
        </div>
    );
}

export default SearchForm;
