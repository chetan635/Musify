import React, { useState } from 'react'
import "./Details.css"
// import backButton from './back.png'
import Play from './Play.png'
import Stop from './stop.png'
import SongGif2 from './SongGif2.gif'
import Added from './AddedToPlayList.gif'
import { average} from 'color.js'
// import { useEffect } from 'react/cjs/react.development'


export default function Details(props) {

    const [toggle, settoggle] = useState(true)
    // var img = document.getElementById("Main-Image")

    const [Color, setColor] = useState("")

    


    const handleToggel = () => {
        var x = document.getElementById("audio")

        if (toggle === true) {
            document.getElementById("SongGif").style.display = "block"
            x.play()

            // for adding to history
         
            var array = JSON.parse(localStorage.getItem("Recent")) || []
            for (let index = 0; index < array.length; index++) {
                if (props.element.id === array[index].object.id) {
                    array.splice(index, 1);
                    break
                }
            }
            if(array===[]){
                var p = {
                    "object" : props.element,
                    "image" : props.image
                }
                array.push(p);
                console.log(array)
                localStorage.setItem("Recent",JSON.stringify(array))
            }
            else{
                var q = {
                    "object" : props.element,
                    "image" : props.image
                }
                array.push(q)
                console.log(array)
                localStorage.setItem("Recent",JSON.stringify(array))

            }

            props.xyz()
            




        }
        else {
            document.getElementById("SongGif").style.display = "none"
            x.pause()
        }
        settoggle(!toggle)

    }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    function handleImage(img) {
        document.getElementById("bottomMusic").style.display = "none"
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
                setColor(a)
                // var b = "#" + componentToHex(44) + componentToHex(44) + componentToHex(44)
                document.getElementById("first").style.backgroundImage = `linear-gradient(180deg, #FFFFFF  -50%, ${a} 90%)`
                //  document.getElementById("first").style.backgroundColor = 
                document.getElementById("first").style.backgroundColor = "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
                document.getElementById("second").style.backgroundColor = "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
                document.body.style.backgroundColor = "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
                document.getElementById("logo-design").style.backgroundColor = "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
                document.getElementById("leftItem").style.border = `4px solid ${a}`
                document.getElementById("leftItem2").style.border = `4px solid ${a}`
                document.getElementById("leftItem3").style.border = `4px solid ${a}`
            })
        }

    }

    const handleback = () => {
        document.getElementById("bottomMusic").style.display = "block"
        document.body.style.backgroundColor = "black"
        document.getElementById("logo-design").style.backgroundColor = "#" + componentToHex(66) + componentToHex(66) + componentToHex(66);
        document.getElementById("leftItem").style.border = `4px solid white`
        document.getElementById("leftItem2").style.border = `4px solid white`
        document.getElementById("leftItem3").style.border = `4px solid white`
    }

    const handlePlaylist = () => {
        var x = false

        var allPlaylist = JSON.parse(localStorage.getItem("allplay"))||[]

        allPlaylist.forEach(ele => {
            if(ele.id === props.element.id){
                x= true
            }
        });
        // console.log(allPlaylist)
        if(allPlaylist.length===0){
            allPlaylist.push(props.element)

            localStorage.setItem("allplay",JSON.stringify(allPlaylist))
            document.getElementById("apple").innerHTML = `<img src=${Added} alt="" />`
            setTimeout(() => {
                document.getElementById("apple").innerHTML = ``
            }, 1000);
        }
        else if(x){
            document.getElementById("apple").innerHTML = `<h1> Already Added </h1>`
            setTimeout(() => {
                document.getElementById("apple").innerHTML = ``
            }, 1000);
        }
        else{
            allPlaylist.push(props.element)

            localStorage.setItem("allplay",JSON.stringify(allPlaylist))
            document.getElementById("apple").innerHTML = `<img src=${Added} alt="" />`
            setTimeout(() => {
                document.getElementById("apple").innerHTML = ``
            }, 1000);
            
        }
        console.log(JSON.parse(localStorage.getItem("allplay")))
      


    }


    return (
        <>
            <div className="DetailsBox">
                <div className="first" id="first" >
                    <div className="row">
                        <div className="col-md-3">
                            <div class="card cardDetails" onClick={props.change} style={{}}>
                                <span onClick={props.change, handleback} class=" backButton position-absolute top-0  translate-middle badge rounded-pill bg-warning " style={{ color: 'black', left: "85 %", zIndex: 1 }}>
                                    <div className="btn leftArrow">{`<`}</div>
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                                <img onLoad={handleImage(props.image)} src={props.image} id="Main-Image" class="card-img-top" alt="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6">

                            <h1 className="heading" >{props.element.title}</h1>
                            <p className="para"> {props.element.artist.name}</p>
                            <p className="rank">Rank : {props.element.rank}</p>
                        </div>
                        <div className="col-md-3">
                            <div id="apple">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ color: "white" }}>

                    <div className="card second-card">
                        <button onClick={handlePlaylist} id="badge" class="position-absolute top-0 start-90 translate-middle badge rounded-pill ">
                            Add To Playlist
                            <span class="visually-hidden">unread messages</span>
                        </button>
                        <div className="row" id="second">
                            <div className="col-md-2">
                                <img className="secondimg" style={{ height: "100px", width: "100px", margin: "20px" }} src={props.image} class="card-img-top" alt="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" />
                            </div>
                            <div className="col-md-4">
                              <div className="title-audio">{props.element.title}</div>
                                <div className="name-audio">{props.element.artist.name}</div>
                            </div>
                            <div className="col-md-4">
                                <img id="SongGif" style={{ height: "40px", width: "140px", display: "none" }} src={SongGif2} alt="" />
                            </div>
                            <div className="play" onClick={handleToggel} styl e={{ display: "none" }} className="col-md-2">
                                <img style={{ height: "60px", width: "60px" }} src={toggle ? Play : Stop} alt="" />
                            </div>
                            <div className="third" style={{ marginTop: "20px", marginBottom: "10px" }}>
                                <audio onClick={handleToggel} id="audio" style={{ width: "90%", padding: "0px", marginLeft: "50px" }} controls>
                                    <source src={props.element.preview} type="audio/mp3" />
                                </audio>
                            </div>


                        </div>
                    </div>
                </div>
                <div id="apple">

                </div>


            </div>
        </>

    )
}
