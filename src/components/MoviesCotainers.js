import React from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MoviesList";
import MovieStates from "./MovieStates";
import SearchByName from "./SarchByName";

const MoviesContainers = (props) =>{

    return(
        <div className="row">
            <h3>Add Movie</h3>
            <div className="col-md-4">
            <MovieForm/>
            </div>
            <div className="col-md-4">
            <MovieList/>
            </div>
            <div className= "col-md-4">
            <MovieStates />
            </div>
            

        </div>
    )
}
export default MoviesContainers