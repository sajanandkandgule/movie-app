import React from "react";
import { useSelector } from "react-redux";
const MovieStates =(props) =>{

    const movies = useSelector((state) =>{
        return state.movie
    })


    const getTopRank =() =>{

        const rank = movies.map((ele) =>{
            return ele.ranking
        })
        const max = Math.min.apply(null , rank)
        // console.log("max" , max)

        const result = movies.map((ele) =>{
            return ele.ranking === max && ele.movieName
        })
        return result
      
    }
    return(
        <div>
            <h3> Movie Status</h3>
            <h4> TotalMovies -{movies.length}</h4>
            {
                <h2> # Top Ranked movie -{getTopRank()}</h2>
            }

        </div>
    )
}
export default MovieStates