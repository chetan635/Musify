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
                    <div className="col-md-2  leftItem-logo1">
                    <span class="iconify" data-icon="el:search-alt"></span>
                    </div>
                    <div className="col-md-10 leftItem-title">
                    <div className="">Home</div>
                    </div>
                </div>
            </div>
            </Link>
            <Link to="/playlist">
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
            </Link>
            <Link to="/SearchByAlbum">
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
            </Link>
         
            
        </div>
    )
}



// fa fa-search