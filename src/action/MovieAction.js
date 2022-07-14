export const movieAction =(movieData)=>{
    return{
        type:"MOVIE_ACTION",
        payload:movieData
    }
}

export const removeItem = (id) =>{
    return{
        type:"DELETE_ITEM",
        payload:id
    }
}
