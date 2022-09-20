import React from 'react'
import meme from "../memesData.js"
import {Link} from "react-router-dom"
export default function TextContent(){

    const [memeImage,setMemeImage] = React.useState({
        topText:"Give My Money Back `_`",
        bottomText :"I have no :(",
        randomUrl : "https://i.imgflip.com/1g8my4.jpg"
    })
    function action(){
        const mems= meme.data.memes;
        const rndm= Math.floor(Math.random()*mems.length)
        setMemeImage(prevMeme => ({...prevMeme,randomUrl:mems[rndm].url}))
    }
    const [formData, setFormData] = React.useState({
        top:"",
        bottom:"",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    function handleChange(event){
        const {name,value} = event.target
        setFormData(prev => {return{
            ...prev, [name]: value
        }})
    }

    return(
        <div>
            <div className='form'>
                <div className='textConten'>
                    <input  type="text" placeholder="Shut up" className="box" name="top" value={formData.top} onChange={handleChange}  />
                    <input  type="text" placeholder="and take my money" className="box" name="bottom"  value={formData.bottom} onChange={handleChange} />
                </div>
                <div className="submit">
                <button className="myButton" onClick={action}>Get a new meme image  🖼 </button>
                </div>
                
            </div> 
            <img className="img" src={memeImage.randomUrl}/>
            <div><h1 className="topText">{formData.top} </h1> 
                <h1 className="bottomText">{formData.bottom}</h1>
                </div>
        </div>
    )
}