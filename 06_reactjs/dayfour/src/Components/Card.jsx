import React from "react";
import seal from "../assets/img/img1.jpg";
import "./Card.css";
function Card({title, imgurl, data, author, description}){
    // let name = "Shishir"
    // let imgurl = "https://images.unsplash.com/photo-1745253606009-9f01a3404db5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
    let styles = {
        width: "350px", 
        height: "400px"
    }
    return(
        <div className = "card md:w-1/3 h-1/2  ">
            {/* <img style={styles} src={imgurl} alt="" /> */}
            {/* <h1 style={{backgroundColor :"red"}}>Hello world from card {name} {2+2}</h1> */}
            {/*<img style={styles} src={seal} alt="" /> */}
            <img className="w-full object-cover" src={imgurl} alt="" />
            <h1 className="text-2xl font-bold py-2 ">{title}</h1>
            <p className="text-lg  py-2">{description}</p>
            <div className="flex justify-between">
                <p className="text-lg font-bold py-2">{data}</p>
                <p className="text-lg font-bold py-2">{author}</p>
            </div>
        </div>
    )
}

export default Card;