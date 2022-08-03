import React ,{useState ,useEffect} from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard"
import SearchByName from "./SarchByName";

const MovieList =(props) =>{
    const [order , setOrder] = useState("")

    const movies = useSelector((state) =>{
        // console.log(state.movie)          // 1 to get data and map on it after 
        return state.movie
    })
    const [moviesList , setMoviesList] = useState(movies)

    useEffect(() =>{
        setMoviesList([...movies])
    },[movies])

    const search = useSelector((state)=>{
        // console.log('statesearch',state.search)
        return state.search
    })

    const filteredMovies = ()=>{
     
        const result =   moviesList.filter((ele)=>{
              return ele.movieName.toLowerCase().includes(search.toLowerCase())
          })
        //   console.log('movies',movies)
        //   console.log(result)
           return result
       
        }
        const handleChange = (e)=>{
            const res = e.target.value
            setOrder(res)
            let sortBy
            if(res === 'Asc'){
                sortBy = moviesList.sort((a,b)=>{
                    if(a.movieName.toLowerCase() > b.movieName.toLowerCase()){
                        return 1
                    }else if(b.movieName.toLowerCase() > a.movieName.toLowerCase()){
                        return -1
                    }else{
                        return 0
                    }
                })
                setMoviesList(sortBy)
            }else if(res === 'Desc'){
                sortBy = moviesList.sort((a,b)=>{
                    if(a.movieName.toLowerCase() < b.movieName.toLowerCase()){
                        return 1
                    }else if(b.movieName.toLowerCase() < a.movieName.toLowerCase()){
                        return -1
                    }else{
                        return 0
                    }
                })
                setMoviesList(sortBy)
            }else if(res === 'h-l'){
                sortBy = moviesList.sort((a,b)=> a.ranking - b.ranking )
                setMoviesList(sortBy)
            }else if(res === 'l-h'){
                sortBy = moviesList.sort((a,b)=> b.ranking - a.ranking )
                setMoviesList(sortBy)
            }else if(res === ''){
                setMoviesList([...movies])
                console.log('elseif ',movies)
            }
    
      }

    return(
        <div>
            <div className="col-md-7">
            <h3 >Movies List </h3>
            <div>
            <SearchByName/>
            </div>
           

            <select  class="form-select" aria-label="Disabled select example"
             onChange={handleChange} value={order}>
            <option value="">sortBy</option>
            <option value="Asc">Asc</option>
            <option value="Desc">Desc</option>
            <option value="h-l">h-l</option>
            <option value="l-h">l-h</option>
        </select>
            <ul>
            
            {
                // movies.map((ele) =>{ return <MovieCard key = {ele.id} {..ele}})  // 1 step
               filteredMovies().map((ele) =>{
                    return <MovieCard key ={ele.id} {...ele}/>
                })
            }
            </ul>
            </div>
        </div>
    )
}
export default MovieList