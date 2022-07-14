import React , {useState} from "react";
import { useDispatch , useSelector } from "react-redux";
import { searchAction } from "../action/searchAction";
  
const SarchByName =(props) =>{


    const dispatch =useDispatch()

    const movies = useSelector((state) =>{
        return state.movie
    })
    const handleChange =(e) =>{
        dispatch(searchAction(e.target.value))
    }

    
    return(
        <div>
            <input type = "text" name = "search" placeholder="Sarch By Name" onChange ={handleChange}/>

        </div>
    )
}
export default SarchByName