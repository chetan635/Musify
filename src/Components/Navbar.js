import React from 'react'
import "./Navbar.css"
// import music from "./music-logo.png"
import Musify from "./Musify.gif"
import music from "./music.png"


export default function Navbar() {
    return (
        <div className="nav">
            <img id="Logo" src={music} style={{height:"55px",width:"55px"}} alt="" />
            <li id="Title" className="list">Musify</li>
            
        </div>
    )
}
