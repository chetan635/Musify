import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import "./BottomComponent.css"
export default function BottomComponent(props) {


    // for audio
   
    // const [img, setimg] = useState("")
    // const [heading, setheading] = useState("")
    // const [artist, setartist] = useState("")

   
        // console.log(props.searchaudio)
      

    var currentlyPlaying = new Audio(props.p)
    var currentPreview = ""
    var progressBor = document.getElementById("myProgressBar")

    // const handleAudio = ()=>{
    //     console.log(toggle)
    //     if(toggle==false){
    //         settoggle(!toggle)
    //         handlePlay()
    //     }
    //     else if(toggle==true){
    //         handlePause()
    //         settoggle(!toggle)
    //     }
    // }



    const handleAudio = () => {
        //    console.log(toggle)
        console.log(currentlyPlaying.currentTime)
        var recent = JSON.parse(localStorage.getItem("Recent") || [])
        if(recent.length == 0){
            return
        }
        var recentlyPlayed = recent.reverse()
        if (currentPreview !== recentlyPlayed[0].object.preview) {
            currentlyPlaying = new Audio(recentlyPlayed[0].object.preview);
            currentPreview = recentlyPlayed[0].object.preview;
            // console.log(currentlyPlaying)
        }
        else {
            handlePause()
        }
        currentlyPlaying.play()
        currentlyPlaying?.addEventListener('timeupdate', () => {
            // console.log("progress");
            let progress = (currentlyPlaying.currentTime / currentlyPlaying.duration) * 100;
            // console.log(Math.floor(progress));

            // progress=Math.floor(currentlyPlaying.currentTime);
            progressBor.value = progress;
        });

        document.getElementById("play").style.display = "none"
        document.getElementById("pause").style.display = "block"




    }

    const handlePause = () => {
        currentlyPlaying.pause()
        document.getElementById("play").style.display = "block"
        document.getElementById("pause").style.display = "none"
      
    }

    const handleChange = () => {
        progressBor = document.getElementById("myProgressBar")
        // console.log("progress" +":"+ progressBor.value)
        currentlyPlaying.currentTime = progressBor.value * (currentlyPlaying.duration / 100);
        // console.log(currentlyPlaying.currentTime)
        progressBor.value=currentlyPlaying.currentTime;
    }

    const forward = () => {
        var x = currentlyPlaying.currentTime
        currentlyPlaying.currentTime = x + 10;
        progressBor.value = (x / currentlyPlaying.duration) * 100 + 33;
        console.log(progressBor.value);
    }

    const backward = () => {
        var x = currentlyPlaying.currentTime
        currentlyPlaying.currentTime = x - 10;
        progressBor.value = (x / currentlyPlaying.duration) * 100 - 33;
        console.log(progressBor.value);
    }
    const volumeChange = () => {
        var p = document.getElementById("volumeBar").value
        currentlyPlaying.volume = (p / 100)
        document.getElementById("volume-on").style.display = "block"
        document.getElementById("volume-off").style.display = "none"
    }
    var z = 50
    const volumeMax = () => {
        currentlyPlaying.volume = (z / 100);
        document.getElementById("volumeBar").value = z;
        document.getElementById("volume-on").style.display = "block"
        document.getElementById("volume-off").style.display = "none"
    }
    const volumeMin = () => {
        currentlyPlaying.volume = 0;
        z = document.getElementById("volumeBar").value;
        document.getElementById("volumeBar").value = 0;
        document.getElementById("volume-on").style.display = "none"
        document.getElementById("volume-off").style.display = "block"

    }
    const handleSpeed2 = (speed)=>{
        console.log(speed)
        var x = document.getElementsByClassName("dropdown-item")
        for(var i = 0; i<x.length;i++){
            x[i].style.backgroundColor="#343a40";
        }
        document.getElementById(String(speed)).style.backgroundColor="red"
        currentlyPlaying.playbackRate = speed;
    }
    const handleHide =()=>{
        document.getElementById("songImage").setAttribute("src",props.img)
        document.getElementById("songImage").style.display="block"
        document.getElementById("imgcol").style.display = "none"
    }







    return (
        <div id="bottomMusic" className="bottom">
            <div className="row">
                <div className="col-md-4 details">
                    <div className="row image-row">
                        <div className="col" id="imgcol">
                            <img onClick={handleHide} id="bottomImage" className="bottomImage" src={props.img} alt="" />
                        </div>
                        <div className="col">
                            <div className="hed3">{(props.heading).slice(0,30)}..</div>
                            <div className="title3">{props.title}</div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 audioBar">
                    <div className="row">

                        <div onClick={backward} className="col backward"><span class="iconify" data-icon="fluent:skip-back-10-20-filled" style={{ color: "white" }}></span></div>
                        <div className="col nex"><span class="iconify" data-icon="eva:skip-back-fill" style={{ color: "gray" }}></span></div>
                        <div onClick={handleAudio} className="col"><span class="iconify play-b" id="play" style={{ display: "block", color: "white" }} data-icon="fluent:play-circle-20-filled" ></span></div>
                        <div onClick={handlePause} className="col"><span class="iconify pause-b" id="pause" style={{ display: "none", color: "white" }} data-icon="heroicons-solid:pause" ></span></div>
                        <div className="col bac"><span class="iconify" data-icon="eva:skip-back-fill" style={{ color: "gray" }} data-flip="horizontal"></span></div>
                        <div onClick={forward} className="col forward"><span class="iconify" data-icon="fluent:skip-forward-10-20-filled" style={{ color: "white" }}></span></div>

                    </div>

                    
                    <input type="range" name="range" onChange={handleChange} value="0" id="myProgressBar" />
                </div>
                <div className="col-md-4 end">
                    <div class="dropdown">
                        {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </button> */}
                        <div id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" className="setting "><span class="iconify setting" data-icon="uiw:setting" style={{ color: "white" }}></span></div>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenu2">
                            <li><button id="0.25"  onClick={()=>{handleSpeed2(0.25)}} class="dropdown-item" type="button">0.25</button></li>
                            <li><button id="0.5" onClick={()=>{handleSpeed2(0.5)}} class="dropdown-item " type="button">0.5</button></li>
                            <li><button id="0.75" onClick={()=>{handleSpeed2(0.75)}} class="dropdown-item" type="button">0.75</button></li>
                            <li><button style={{backgroundColor:"red"}} id="1" onClick={()=>{handleSpeed2(1)}} class="dropdown-item" type="button">Normal</button></li>
                            <li><button id="1.25" onClick={()=>{handleSpeed2(1.25)}} class="dropdown-item" type="button">1.25</button></li>
                            <li><button id="1.5" onClick={()=>{handleSpeed2(1.5)}} class="dropdown-item" type="button">1.5</button></li>
                            <li><button id="1.75" onClick={()=>{handleSpeed2(1.75)}} class="dropdown-item" type="button">1.75</button></li>
                            <li><button id="2" onClick={()=>{handleSpeed2(2)}} class="dropdown-item" type="button">2</button></li>
                        </ul>
                    </div>
                    
                    <div onClick={volumeMin} className="volume-o"><span id="volume-on" class="iconify volume-on" data-icon="bx:bx-volume-full" style={{ color: "white", display: "block" }}></span></div>
                    <div onClick={volumeMax} className="volume-f"><span id="volume-off" class="iconify volume-off" data-icon="bx:bx-volume-mute" style={{ color: "white", display: "none" }}></span></div>
                    <input onChange={volumeChange} type="range" name="range" id="volumeBar" />
                </div>
            </div>
        </div>
    )
}
