import React from "react";
import MoviesContainers from "./components/MoviesCotainers";

const App =(props) =>{

  return(
    <div>
      <h2 className="text-center bg-light"> Movie - App</h2>
            <MoviesContainers/>
           
    </div>
  )
}
export default App