import React from 'react'
import Header from "./Header.js";
import Meme from "./Meme.js"
import {Link} from 'react-router-dom'
export function Main(){
    return(
        <div>
            <Header />
            <Link to="/contact"><button style={{backgroundColor:"blue",color:"white",height:"100px",width:"100px",margin:"0 0 0 100px"}}>React Router Concept</button></Link>
            <Meme />
            
        </div>
    )
}