import React, { useEffect, useState } from 'react'
import Details from './Details'
import "./Playlist.css"


import { average, prominent } from 'color.js'

export default function Playlist(props) {
    const [allPlaylists, setallPlaylists] = useState([])
    const [change2, setchange2] = useState(true)
    const [elemant, setelemant] = useState([])
    const [filter_state, setfilter_state] = useState("")
    const [img, setimg] = useState("https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg")
    const [hed, sethed] = useState("Playlist")
    const [art, setart] = useState("All Items")
    const [p, setp] = useState("")
    // const [ran, setran] = useState(0)


    const handle = () => {
        var allPlaylist = JSON.parse(localStorage.getItem("allplay"))
        if(allPlaylist===null){
            allPlaylist=[]
        }
        setallPlaylists(allPlaylist)
        console.log(allPlaylists)
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
        // console.log(change2);
    }
    function handleEle(ele,p) {
        // console.log("hello chetan");
        setelemant(ele)
        setp(p)
        // console.log(elemant);
        handlePlay()
    }

    function handleUpper(a, b, c,d) {
        // document.getElementById(d).style.backgroundColor="black"
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

    const handleFilter = () => {
        console.log("icon")
        if (document.getElementById("a").style.display == "none") {
            document.getElementById("a").style.display = "block"
            document.getElementById("b").style.display = "block"
            document.getElementById("c").style.display = "block"
            document.getElementById("icon123").setAttribute("data-icon", "clarity:filter-solid")
        }
        else {
            document.getElementById("a").style.display = "none"
            document.getElementById("b").style.display = "none"
            document.getElementById("c").style.display = "none"
            document.getElementById("icon123").setAttribute("data-icon", "clarity:filter-off-solid")
        }
    }
    const filter = (type)=>{

        document.getElementById("a").style.display = "none"
        document.getElementById("b").style.display = "none"
        document.getElementById("c").style.display = "none"
        document.getElementById("icon123").setAttribute("data-icon", "clarity:filter-off-solid")

        setfilter_state(type);
        document.getElementById("alert").style.display="block";
        setTimeout(() => {
            document.getElementById("alert").style.display="none";
        }, 2000);


    }
    const handleSong = () => {
        var x = JSON.parse(localStorage.getItem("allplay"))
        console.log(x);
        x.sort(function (a, b) {
            if (a.title > b.title) {
                return 1;
            }
            else if (a.title < b.title) {
                return -1
            }
            return 0;
        });
        localStorage.setItem("allplay", JSON.stringify(x))
        filter("Song")
        handle()

        



    }

    const handleDuration = () => {
        var x = JSON.parse(localStorage.getItem("allplay"))
        console.log(x);
        x.sort(function (a, b) {
            if (a.duration > b.duration) {
                return 1;
            }
            else if (a.duration < b.duration) {
                return -1
            }
            return 0;
        });
        localStorage.setItem("allplay", JSON.stringify(x))
        filter("Duration")
        handle()
    }

    const handleArtist = () => {
        var x = JSON.parse(localStorage.getItem("allplay"))
        console.log(x);
        x.sort(function (a, b) {
            if (a.artist.name > b.artist.name) {
                return 1;
            }
            else if (a.artist.name < b.artist.name) {
                return -1
            }
            return 0;
        });
        localStorage.setItem("allplay", JSON.stringify(x))
        filter("Artist")
        handle()
    }

    const Time = (x) => {
        var z = (x % 60)
        if (z < 10) {
            z = `0${(x % 60)}`
        }
        return `${~~(x / 60)} : ${(z)}`
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
                            <img onLoad={handleImage(img), handle} src={img} id="Main-Image" class="card-img-top" alt="..." />
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



            <div className="row filter-row">
                <div className="col-md-2">
                    <div onClick={handleFilter} className="filter"><span id="icon123" class="iconify" data-icon="clarity:filter-off-solid"></span><span className="filter-title"> Filter By</span></div>
                </div>
                <div className="col-md-1">

                </div>
                <div className="col-md-1">
                    <div id="a" className="category">
                        <div onClick={handleSong} className="btn btn-success">
                            Song
                        </div>
                    </div>

                </div>
                <div className="col-md-1">
                    <div id="b" className="category">
                        <div onClick={handleArtist} className="btn btn-danger">
                            Artist
                        </div>
                    </div>
                </div>
                <div className="col-md-1 ">
                    <div id="c" className="category">
                        <div onClick={handleDuration} className="btn btn-warning">
                            Duration
                        </div>
                    </div>
                </div>
                <div  className="col-md-6 alert" style={{display:"none"}} id="alert">
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Success</strong> The playlist is filtered accourding to <strong>{filter_state}</strong>
                    </div>
                </div>
            </div>
            <h1 style={{ display: "block" }} id="hed" className="playlistHeading">Your Playlist</h1>
            {
                allPlaylists.map(element => {
                    try{
                        var  p = element.album.cover_xl
                    }catch(error){
                        var  p="https://nogmi.biz/assets/img/noimage.jpeg"
                    }
                    return <>
                        <div  onClick={() => { handleUpper(p, element.title, element.artist.name,elemant.id) }} className="PlaylistCard" key={element.id}>
                            <div className="row">
                                <div className=" imgcol col-md-2">
                                    <img className="playlistImage" src={p} alt="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" onerror="this.onerror=null;this.src='https://placeimg.com/200/300/animals';"/>
                                </div>
                                <div className="col-md-6">
                                    <div className="heading2">{element.title}</div>
                                    {/* <br /> */}
                                    <div className="para2">
                                        By {element.artist.name}
                                    </div>


                                </div>
                                <div className="col-md-2 para2">
                                    {Time(element.duration)}
                                </div>
                                <div className="col-md-2 icons">
                                    <div onClick={() => handleDelete(element)} className="btn btn-danger">
                                        <i style={{ fontSize: "25px" }} className="fa fa-trash"></i>
                                    </div>
                                    <div onClick={() => handleEle(element,p)} className="btn btn-warning">
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
        return <div><Details xyz={props.xyz} change={handlePlay} image={p} element={elemant} /></div>
    }





}