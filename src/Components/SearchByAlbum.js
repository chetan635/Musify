import React, { useState } from 'react'
import "./Search.css"
// import SearchDetails from './SearchDetails'
// // import 'react-perfect-scrollbar/dist/css/styles.css';
// import PerfectScrollbar from 'react-perfect-scrollbar'
import MusicItem from './MusicItem'
import spinner from './spinner'
import Details from './Details'
import AlbumElements from './AlbumElements'

export default function Search() {
    const [SearchItem, setSearchItem] = useState("")
    const [Toggle, setToggle] = useState(true)
    const [data, setdata] = useState([])

    const [key, setkey] = useState("")

    // const [Toggle, setToggle] = useState(true)

    const handleChange = (event) => {
        setSearchItem(event.target.value)
        // console.log(SearchItem)
    }

    const change = ()=>{
        setToggle(!Toggle)
    }

    const handleOnSearch = async() => {
       await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${SearchItem}`, {                             
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "71a4a04f98msha6e644b01f88325p1e75bcjsn6e90e48bc773"
            }
        }).then(response => {
            response.json().then(result=>{
                // setdata(result.data)
                const a=[];
                const b=[];
                (result.data).forEach(el => {
                    if(b.includes(String(el.album.id))){
                       console.log("Worked"+String(el.album.id)) 
                    }
                    else{
                        console.log(el.album.id)
                        b.push(String(el.album.id) )
                        a.push(el)
                    }
                });
                setdata(a)
                console.log(data.length)
                console.log(b)

            })
        })
        .catch(err => {
            console.error(err);
        });

        console.log(data)
    

    }
    const handleOnclick = (ele)=>{
        // setobject(ele)
        setkey(ele.album.id)
        setToggle(!Toggle)
        // console.log(object)
    }
    if(Toggle){
        return (
    
          <div className="SearchBox">
              <h1 className="art-hed">Search By Album</h1>
                <div className="search-item d-flex">
                    <textarea rows="1" style={{ resize: "none" }} onChange={handleChange} value={SearchItem}  placeholder="Search by Album" aria-label="Search" />
                    <button onClick={handleOnSearch} className="btn btn-outline-success" type="submit">Search</button>
                </div>
                <div className="row Result-items">
                    {data.map((element)=>{
                       return <div className="col-md-3" key={element.id} >
                       <div  className="xyz" onClick={()=>{handleOnclick(element)}}>
                       <MusicItem   image={element.album.cover_xl}  artist={element.artist.name} title ={element.title}/>
                       </div>
                        </div>
                    })}
                </div>
            </div>
         
        )
    }
    else{
        return <div><AlbumElements change={change} id={key}/></div>
    }

    
}
