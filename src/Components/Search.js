import React, { useEffect, useState } from 'react'
import "./Search.css"
// import SearchDetails from './SearchDetails'
// // import 'react-perfect-scrollbar/dist/css/styles.css';
// import PerfectScrollbar from 'react-perfect-scrollbar'
import MusicItem from './MusicItem'
import spinner from './spinner'
import search from './Search2.png'
import Details from './Details'

export default function Search(props) {
    const [SearchItem, setSearchItem] = useState("")
    const [Toggle, setToggle] = useState(true)
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [object, setobject] = useState([])
    const [recent, setrecent] = useState([])
    const [image, setimage] = useState("")

    // const [Toggle, setToggle] = useState(true)

    // handleEffect
    



    const handleChange = (event) => {
        
        setSearchItem(event.target.value)
        
        // console.log(SearchItem)
    }

    const change = () => {
        setToggle(!Toggle)
    }

    const handleOnSearch = async () => {
        if(SearchItem == ""){
            return 
        }
        await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${SearchItem}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "71a4a04f98msha6e644b01f88325p1e75bcjsn6e90e48bc773"
            }
        }).then(response => {
            response.json().then(result => {
                setdata(result.data)
            })
        })
            .catch(err => {
                console.error(err);
            });



        console.log(data)


    }
    const handleOnclick = (ele) => {
        setobject(ele)
        setimage(ele.album.cover_xl)
        setToggle(!Toggle)
        // console.log(object)
    }

    const Time = (x) => {
        var z = (x % 60)
        if (z < 10) {
            z = `0${(x % 60)}`
        }
        return `${~~(x / 60)} : ${(z)}`
    }


    const handleRecent = () => {
        var p = JSON.parse(localStorage.getItem("Recent"))
        if(p===null){
            return
        }
        p=p.reverse()
        setrecent(p.slice(0,4));
        console.log(p)
        if(document.getElementById("ABC").style.display== "none"){
            document.getElementById("ABC").style.display="block"
            document.getElementById("art-hed").innerHTML = "Recently Played Songs"
        }
        else{
            document.getElementById("ABC").style.display="none"
            document.getElementById("art-hed").innerHTML = "Recently Played Songs.. Click"
        }
    }

    function enter_details(ele){
        setobject(ele.object)
        setimage(ele.image)
        setToggle(!Toggle)
    }

    const handleSee = ()=>{
        if(document.getElementById("see").innerHTML == "See more 🡁"){
            var p = JSON.parse(localStorage.getItem("Recent"))
            if(p===null){
                return
            }
            setrecent(p);
            document.getElementById("see").innerHTML="See less 🡃"
        }
        else{
            document.getElementById("see").innerHTML="See more"
            var p = JSON.parse(localStorage.getItem("Recent"))
            if(p===null){
                return
            }
            p.reverse()
            setrecent(p.slice(0,4));
            document.getElementById("see").innerHTML="See more 🡁"
        }
    }

    const clear = ()=>{
        var x = []
        localStorage.setItem("Recent",JSON.stringify(x))
        handleRecent()
    }

    const addRecent = (object1 , image , index)=>{
        var array = JSON.parse(localStorage.getItem("Recent")) || []
            for (let index = 0; index < array.length; index++) {
                if (object1.id == array[index].object.id) {
                    array.splice(index, 1);
                    break
                }
            }
            if(array===[]){
                var p = {
                    "object" : object1,
                    "image" : image
                }
                array.push(p);
                console.log(array)
                localStorage.setItem("Recent",JSON.stringify(array))
            }
            else{
                var p = {
                    "object" : object1,
                    "image" : image
                }
                array.push(p)
                console.log(array)
                localStorage.setItem("Recent",JSON.stringify(array))

            }

            props.xyz()
            var z = document.getElementsByClassName("chetan")
            for(var i = 0;i<z.length;i++){
                z[i].style.backgroundColor = "rgb(29, 29, 29)"
            }
            document.getElementsByClassName("chetan")[index].style.backgroundColor = "#463f4b"
    }


    if (Toggle) {
        return (

            <div className="SearchBox">
                <h1 className="art-hed">Search By Artist</h1>
                <div className="search-item d-flex">
                    <textarea rows="1" style={{ resize: "none" }} onChange={handleChange} value={SearchItem} placeholder="Search by Artist" aria-label="Search" />
                    <button onClick={handleOnSearch} className="btn btn-outline-success" type="submit">Search</button>
                </div>
                <div className="row">
                    <div className="col-md-8">
                    <h1 onClick={handleRecent} id="art-hed" className="art-hed">Recently Played Songs.. click</h1>
                    </div>
                    <div className="col-md-2">
                        <h1 onClick={handleSee} id="see" className="art-hed2">See more 🡁</h1>
                    </div>
                    <div className="col-md-2">
                    <h1 style={{display:"block"}} onClick={clear} id="clear" className="art-hed2">Clear All</h1>
                    </div>
                </div>
                <div style={{display:"none"}} id="ABC" className="ABC">
                {
                    recent.map(element  => {
                        return <>
                            <div id="middle" style={{display:"block"}} className="middle">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="middle-image" src={element.image} alt="" />
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="middle-title">{element.object.title}</h3>
                                        <h2 className="middle-artist" >{element.object.artist.name}</h2>
                                    </div>
                                    <div className="col-md-2">
                                        <h2 className="middle-duration" >{Time(element.object.duration)}</h2>
                                    </div>
                                    <div className="col-md-2">
                                    <div onClick={()=>enter_details(element)}  className="btn btn-warning">
                                        <i style={{ fontSize: "25px" }} className="fa fa-play-circle-o"></i>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                }
                </div>
                
                <div className="row Result-items">
                    {data.map((element,index) => {
                        return <div className="col-md-3" key={element.id} >
                            <div  className="xyz" onClick={()=>{addRecent(element,element.album.cover_xl,index)}} onDoubleClick={() => { handleOnclick(element) }}>
                                <MusicItem ele_id={index}  xyz={props.xyz} searchaudioFunc={props.searchaudioFunc} image={element.album.cover_xl} artist={element.artist.name} title={element.title} />
                            </div>
                        </div>
                    })}
                </div>
            </div>

        )
    }
    else {
        return <div><Details xyz={props.xyz} change={change} image={image} element={object} /></div>
    }


}











