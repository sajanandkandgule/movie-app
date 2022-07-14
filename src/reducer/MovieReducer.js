const movieInitialState = []

const MovieReducer = ( state = movieInitialState , action)=>{
    switch(action.type){
        case "MOVIE_ACTION":{
            return [...state , {...action.payload}]
        }
        case "DELETE_ITEM":{
            return(
                state.filter((ele) =>{
                    return ele.id !== action.payload
                })
            )
            
        }
        default :{
            return state
        }
    }
}
export default MovieReducer

