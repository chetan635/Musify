import React, { useState } from 'react'
import "./AlbumElements.css"
import Details from './Details'
import { average, prominent } from 'color.js'
export default function AlbumElements(props) {


    const [img, setimg] = useState("https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg")
    const [data2, setdata2] = useState([])
    const [release_date, setrelease_date] = useState("")
    const [heading, setheading] = useState("")
    const [artist, setartist] = useState("")
    const [togg, settogg] = useState(true)
    const [elemant2, setelement] = useState("")
    // for fetching the data
    const handleData = async () => {
        await fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${props.id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "71a4a04f98msha6e644b01f88325p1e75bcjsn6e90e48bc773"
            }
        }).then(response => {
            response.json().then(result => {
                // console.log(result)
                setdata2(result.tracks.data)
                setimg(result.cover_big)
                setrelease_date(result.release_date)
                handleImage(result.cover_big)
                setheading(result.title)
                setartist(result.artist.name)
            })
        })
            .catch(err => {
                console.error(err);
            });



    }

    // const handleabc = ()=>{
    //     console.log(data)
    // }


    const handleToggle = (ele)=>{
        setelement(ele)
        settogg(!togg)
    }

    const handleDuration = (x) => {
        var z = (x % 60)
        if (z < 10) {
            z = `0${(x % 60)}`
        }
        return `${~~(x / 60)} : ${(z)}`
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
                document.getElementById("Album").style.backgroundImage = `linear-gradient(180deg, #FFFFFF  -50%, ${a} 90%)`
                // document.getElementById("PlaylistBox").style.backgroundImage = `linear-gradient(180deg, #FFFFFF  -50%, ${a} 90%)`
                //  document.getElementById("first").style.backgroundColor = 
                // document.getElementById("first2").style.backgroundColor = "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
                // document.getElementById("second").style.backgroundColor = "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
                document.body.style.backgroundColor = "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
                document.getElementById("logo-design").style.backgroundColor = "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
                document.getElementById("leftItem").style.border = `4px solid ${a}`
                document.getElementById("leftItem2").style.border = `4px solid ${a}`
                document.getElementById("leftItem3").style.border = `4px solid ${a}`
            })
        }

    }

    const handleback = () => {
        document.body.style.backgroundColor = "black"
        document.getElementById("logo-design").style.backgroundColor = "#" + componentToHex(66) + componentToHex(66) + componentToHex(66);
        document.getElementById("leftItem").style.border = `4px solid white`
        document.getElementById("leftItem2").style.border = `4px solid white`
        document.getElementById("leftItem3").style.border = `4px solid white`
        props.change()
    }

    const handlePlay = ()=>{
        settogg(!togg)
    }



    if(togg){
        return (
            <div className="Album" id="Album">
                <div className="albumData">
                    <div className="row">
                        <div className="col-md-4">
                            <div class="card cardDetails" style={{}}>
                                <span onClick={handleback} class=" backButton position-absolute top-0  translate-middle badge rounded-pill bg-warning " style={{ color: 'black', left: "85 %", zIndex: 1 }}>
                                    <div className="btn leftArrow">←</div>
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                                <img className="albumimage" onLoad={handleData} src={img} id="Main-Image" class="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="heading3">{heading}</h1>
                            <p className="para3">{artist}</p>
                            <p className="para3">{release_date}</p>
                        </div>
                    </div>
                </div>
    
                <div className="heading3">
                    The Songs in this Album
                </div>
                <div className="albumItemCard">
                    <div className="row">
                        <div className="col-md-1 index">
                            #
                        </div>
                        <div className="col-md-1 time">
                            {/* Image */}
                        </div>
                        <div className="col-md-6 time">
                            Title
                        </div>
                        <div className="col-md-2 time">
                            Rank
                        </div>
                        <div className="col-md-2 time">
                            Duration
                        </div>
                    </div>
                </div>
    
                {
                    data2.map((element, index) => {
                        return <>
                            <div onClick={()=>handleToggle(element)} className="albumItemCard">
                                <div className="row">
                                    <div className="col-md-1 index">
                                        {index + 1}
                                    </div>
                                    <div className="col-md-1">
                                        <img className="itemImage" src={img} alt="" />
                                    </div>
                                    <div className="col-md-6 hed">
                                        {element.title}
                                    </div>
                                    <div className="col-md-2 ran">
                                        {element.rank}
                                    </div>
                                    <div className="col-md-2 time">
                                        {handleDuration(element.duration)}
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        )
    }
    else{
        return <div><Details change={handlePlay} image={img} element={elemant2} /></div>
    }
}
