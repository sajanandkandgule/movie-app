
import {createStore ,combineReducers} from "redux"
import MovieReducer from "../reducer/MovieReducer"
import searchReducer from "../reducer/searchReducer"


const ConfigureStore = () =>{
    const store = createStore(combineReducers({
        movie : MovieReducer,
        search:searchReducer

    }))
    return store


}
export default ConfigureStore