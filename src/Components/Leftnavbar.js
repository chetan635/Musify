import React from 'react'
// import { Link } from 'react-router-dom'
import "./Leftnavbar.css"
// import Logo from "./Musify.gif"

import music from "./music.png"
export default function Leftnavbar(props) {

    const handleHide = ()=>{
        document.getElementById("songImage").style.display="none"
        document.getElementById("imgcol").style.display = "block"
    }


    return (
        <div className="leftnav flex-column">
            <div className="logo-design" id="logo-design">
                <div className="row">
                    <div className="col-md-4">
                        <img src={music} id="Logo-image" alt="" />
                    </div>
                    <div className="col-md-8  title-col" >
                        Musify
                    </div>
                    <div className="row quote" >
                        The best Place to  relax..
                    </div>
                </div>
            </div>
            <div onClick={props.displaySearch}>
            <div  className="firstItem leftItem" id="leftItem">
            <div className="row left-nav-row">
                    <div className="col-md-2  leftItem-logo1">
                    <span class="iconify" data-icon="el:search-alt"></span>
                    </div>
                    <div className="col-md-10 leftItem-title">
                    <div className="">Home</div>
                    </div>
                </div>
            </div>
            </div>
            <div onClick={props.displayPlaylist}>
            <div className="secondItem leftItem" id="leftItem2">
                <div className="row left-nav-row">
                    <div className="col-md-2  leftItem-logo2">
                    <span class="iconify" data-icon="ic:baseline-playlist-add-check-circle"></span>
                    </div>
                    <div className="col-md-10 leftItem-title">
                    <div className="">Playlist</div>
                    </div>
                </div>
            </div>
            </div>
            <div onClick={props.displayAlb}>
            <div className="thirdItem leftItem" id="leftItem3">
                <div className="row left-nav-row">
                    <div className="col-md-2  leftItem-logo3">
                    <span class="iconify" data-icon="dashicons:album"></span>
                    </div>
                    <div className="col-md-10 leftItem-title">
                    <div className="">Album</div>
                    </div>
                </div>
            </div>
            </div>
            <div onClick={handleHide} >
                <img className="songImage" id ="songImage" src="" style={{height:"170px",width:"170px" ,marginRight:"170px",display:"none"}} alt="" />
            </div>
         
            
        </div>
    )
}



// fa fa-search