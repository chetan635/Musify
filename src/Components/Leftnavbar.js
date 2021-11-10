import React from 'react'
import { Link } from 'react-router-dom'
import "./Leftnavbar.css"
import Logo from "./Musify.gif"
export default function Leftnavbar() {
    return (
        <div className="leftnav flex-column">
            <div className="logo-design" id="logo-design">
                <div className="row">
                    <div className="col-md-4">
                        <img src={Logo} id="Logo-image" alt="" />
                    </div>
                    <div className="col-md-8  title-col" >
                        Musify
                    </div>
                    <div className="row quote" >
                        The best Place to  relax..
                    </div>
                </div>
            </div>
            <Link to="/">
            <div  className="firstItem leftItem" id="leftItem">
            <div className="row left-nav-row">
                    <div className="col-md-2">
                        <div className="fa fa-search"></div>
                    </div>
                    <div className="col-md-10">
                    <div className="">Search</div>
                    </div>
                </div>
            </div>
            </Link>
            <Link to="/playlist">
            <div className="secondItem leftItem" id="leftItem2">
                <div className="row left-nav-row">
                    <div className="col-md-2">
                        <div className="fa fa-music"></div>
                    </div>
                    <div className="col-md-10">
                    <div className="">Playlist</div>
                    </div>
                </div>
            </div>
            </Link>
            <Link to="/SearchByAlbum">
            <div className="thirdItem leftItem" id="leftItem3">
                <div className="row left-nav-row">
                    <div className="col-md-2">
                        <div className="fa fa-bookmark"></div>
                    </div>
                    <div className="col-md-10">
                    <div className="">SearchByAlbum</div>
                    </div>
                </div>
            </div>
            </Link>
         
            
        </div>
    )
}



// fa fa-search