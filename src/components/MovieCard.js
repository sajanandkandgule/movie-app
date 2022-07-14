import React from "react";
import { useDispatch} from "react-redux";
import { removeItem } from "../action/MovieAction";


const MovieCard =(props) =>{
    const {movieName , ranking ,id } = props
    const dispatch = useDispatch()

const handleRemove =(id) =>{
    dispatch(removeItem(id))
}

    
    return(
        <div>
            <h3> Name = {movieName}</h3>
            <h3> # - {ranking}</h3>
            <button className="btn btn-success" onClick={() =>{
                handleRemove(id)
            }}> Remove</button>
        </div>
    )
}
export default MovieCard




// https://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@github.com/sajanandkandgule/movie-app.git