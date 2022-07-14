import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { movieAction } from "../action/MovieAction"

const MovieForm =(props) =>{
    //   const [id ,setId] = useState( Number (new Date()))
    const [movieName , setMovieName] =useState("")
    const [ranking , setRanking] = useState("")
    const dispatch = useDispatch()

    const handleNameChange =(e) =>{
        setMovieName(e.target.value)
    }

    const handleRankChange =(e) =>{
        setRanking(e.target.value)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const movieData = {
            id:Number(new Date()),
            movieName:movieName,
            ranking:Number(ranking)
        }
        console.log(movieData)
        if(movieData){
            dispatch(movieAction(movieData))
            // setId('')
            setMovieName("")
            setRanking("")
        }
        // dispatch(movieAction(movieData))
        // // setId('')
        // setMovieName("")
        // setRanking("")

    }

    return(
        <div>
            
            <form onSubmit = {handleSubmit}>
           
                <input type = "text"  value ={movieName}
                 placeholder ="Enter Movie Name" onChange = {handleNameChange}/><br/> 
                 <input type = "number" value = {ranking} 
                 placeholder="Enter Movie Ranking" onChange = {handleRankChange}/><br/> 
                 <input type= "submit" value="add" /> 
                
            </form>
        </div>
    )
}
export default MovieForm