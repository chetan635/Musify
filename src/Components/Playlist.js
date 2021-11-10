import React, { useEffect, useState } from 'react'
import Details from './Details'
import "./Playlist.css"


import { average, prominent } from 'color.js'

export default function Playlist() {
    const [allPlaylists, setallPlaylists] = useState([])
    const [change2, setchange2] = useState(true)
    const [elemant, setelemant] = useState([])

    const [img, setimg] = useState("https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg")
    const [hed, sethed] = useState("Playlist")
    const [art, setart] = useState("All Items")
    // const [ran, setran] = useState(0)


    const handle = () => {
        var allPlaylist = JSON.parse(localStorage.getItem("allplay"))
        setallPlaylists(allPlaylist)
        // console.log(allPlaylists)
        document.getElementById("hed").style.display = "none"
    }

    function handleDelete(ele) {
        //    document.getElementById("modal").style.display="block"
        // console.log(ele)
        // console.log(ele)
        var x = JSON.parse(localStorage.getItem("allplay"))
        for (let index = 0; index < x.length; index++) {
            if (ele.id == x[index].id) {
                x.splice(index, 1);
                break
            }
        }
        // console.log(x)
        localStorage.setItem("allplay", JSON.stringify(x))
        handle()
    }
    const handlePlay = () => {
        setchange2(!change2)
        console.log(change2);
    }
    function handleEle(ele) {
        console.log("hello chetan");
        setelemant(ele)
        console.log(elemant);
        handlePlay()
    }

    function handleUpper(a,b,c){
        sethed(b)
        setimg(a)
        setart(c)
    }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function handleImage(img) {
        if (img == null) {
            document.getElementById("first").style.backgroundColor = "#" + componentToHex(44) + componentToHex(44) + componentToHex(44);

        }
        else {
            average(img, { amount: 5 }).then(color => {
                // document.getElementsByClassName("first").style.backgroundColor = color;
                console.log(color)
                console.log("Hello")
                // document.getElementById("first").style.backgroundImage= linearGradient("#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]),"#" + componentToHex(44) + componentToHex(44) + componentToHex(44));
                var a = "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
                // setColor(a)
                var b = "#" + componentToHex(44) + componentToHex(44) + componentToHex(44)
                document.getElementById("first2").style.backgroundImage = `linear-gradient(180deg, #FFFFFF  -50%, ${a} 90%)`
                document.getElementById("PlaylistBox").style.backgroundImage = `linear-gradient(180deg, #FFFFFF  -50%, ${a} 90%)`
                //  document.getElementById("first").style.backgroundColor = 
                document.getElementById("first2").style.backgroundColor = "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
                // document.getElementById("second").style.backgroundColor = "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
                document.body.style.backgroundColor = "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
                document.getElementById("logo-design").style.backgroundColor = "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
                document.getElementById("leftItem").style.border = `4px solid ${a}`
                document.getElementById("leftItem2").style.border = `4px solid ${a}`
                document.getElementById("leftItem3").style.border = `4px solid ${a}`
            })
        }

    }




    if (change2) {
        return <div className="PlaylistBox" id="PlaylistBox">

            <div className="first2" id="first2" >
                <div className="row">
                    <div className="col-md-3">
                        <div class="card cardDetails" style={{}}>
                            {/* <span  class=" backButton position-absolute top-0  translate-middle badge rounded-pill bg-warning " style={{ color: 'black', left: "85 %", zIndex: 1 }}>
                                    <div className="btn leftArrow">←</div>
                                    <span class="visually-hidden">unread messages</span>
                                </span> */}
                            <img onLoad={handleImage(img),handle} src={img} id="Main-Image" class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col-md-6">

                        <h1 className="heading" >{hed}</h1>
                        <p className="para"> {art}</p>
                        <p className="rank">Rank : hello</p>
                    </div>
                    <div className="col-md-3">
                        <div id="apple">

                        </div>
                    </div>
                </div>
            </div>




            <h1 style={{ display: "block" }} id="hed"  className="playlistHeading">Your Playlist</h1>
            {
                allPlaylists.map(element => {
                    return <>
                        <div onClick={()=>{handleUpper(element.album.cover_xl,element.title,element.artist.name)}} className="PlaylistCard" key={element.id}>
                            <div className="row">
                                <div className=" imgcol col-md-2">
                                    <img className="playlistImage" src={element.album.cover_xl} alt="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" />
                                </div>
                                <div className="col-md-8">
                                    <div className="heading2">{element.title}</div>
                                    {/* <br /> */}
                                    <div className="para2">
                                        By {element.artist.name}
                                    </div>


                                </div>
                                <div className="col-md-2 icons">
                                    <div onClick={() => handleDelete(element)} className="btn btn-danger">
                                        <i style={{ fontSize: "25px" }} className="fa fa-trash"></i>
                                    </div>
                                    <div onClick={() => handleEle(element)} className="btn btn-warning">
                                        <i style={{ fontSize: "25px" }} className="fa fa-play-circle-o"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                })
            }
        </div>
    }
    else {
        return <div><Details change={handlePlay} image={elemant.album.cover_xl} element={elemant} /></div>
    }





}
