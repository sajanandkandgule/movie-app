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
        <div className="card" >
            <div  className="card-body">
            <h3 className="card-title text-center"> Movie Status</h3>
            <h4 className="card-subtitle mb-2 text-muted"> TotalMovies -{movies.length}</h4>
            {
                <h2 className="card-text"> # Top Ranked movie -{getTopRank()}</h2>
            }
            </div>

        </div>
    )
}
export default MovieStates