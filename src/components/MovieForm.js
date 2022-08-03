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
        <div className="row" >
          
        <div className="col-md-8">
            <form onSubmit = {handleSubmit}>
           
                <div>
                <input type = "text"  value ={movieName}  className="form-control" id="formGroupExampleInput"
                 placeholder ="Enter Movie Name" onChange = {handleNameChange}/><br/> 
                 </div>
                 <input type = "text"  value = {ranking} className="form-control" id="formGroupExampleInput2"
                 placeholder="Enter Movie Ranking" onChange = {handleRankChange}/><br/> 
                 <input type= "submit" className="btn btn-secondary" value="add" /> 
                
            </form>
            </div>
            
        </div>
    )
}
export default MovieForm