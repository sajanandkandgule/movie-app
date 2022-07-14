import React from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MoviesList";
import MovieStates from "./MovieStates";
import SarchByName from "./SarchByName";

const MoviesContainers = (props) =>{

    return(
        <div>
            <h3>Movies List </h3>
            <MovieForm/>
            <MovieList/>
            <MovieStates/>
            <SarchByName/>

        </div>
    )
}
export default MoviesContainers