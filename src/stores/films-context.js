import React from "react";
const API_KEY = "914084c5015e59370924f50ee4167a31";

const FilmContext = React.createContext({
    request: {},
    requestFunction: () => {},
    createImageBitmap: () => {},
});

export default FilmContext;
