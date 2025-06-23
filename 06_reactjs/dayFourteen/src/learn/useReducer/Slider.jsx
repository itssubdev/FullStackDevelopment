import { useReducer } from "react";

const images = [
    "https://images.unsplash.com/photo-1728443139578-cdfbf43e1a72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1744000253584-aad21a82d253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1746483966037-c3c9e6374e08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1749137997054-d556a40051aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"
]
const initalState = {
    currentIndex : 0
}

// Function
function useSliderReducer(state, action){
    switch(action.type){
        case "NEXT":
            return {
                 currentIndex : (state.currentIndex + 1) % images.length
            };
        case "PREV":
            return{
                currentIndex : (state.currentIndex - 1 + images.length) % images.length
            };
        default:
            return state
    }
}


function SliderPage() {
    const [ state, dispatch ] = useReducer(useSliderReducer, initalState)

  return <div>
    <img src = {images[state.currentIndex]} alt="" />
    <button onClick = {()=> dispatch({type : "NEXT"})}>Next</button>
    <button onClick = {()=> dispatch({type : "PREV"})}>Prev</button>
  </div>;
}

export default SliderPage;
