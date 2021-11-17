import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Leftnavbar from './Components/Leftnavbar';
import Search from './Components/Search';
import SearchByAlbum from './Components/SearchByAlbum';
import { useState } from 'react';


import Playlist from './Components/Playlist';
import BottomComponent from './Components/BottomComponent';
import { useEffect } from 'react/cjs/react.development';

function App() {

  // const [toggle, settoggle] = useState(true)
  const [p, setp] = useState("")
  const [img, setimg] = useState("")
  const [heading, setheading] = useState("")
  const [artist, setartist] = useState("")
  const [searchaudio, setsearchaudio] = useState(false)
  useEffect(() => {
    var x = JSON.parse(localStorage.getItem("Recent")) || []
    console.log(x.length)
    if (x.length == 0) {
      document.getElementById("bottomMusic").style.display = "none"
    }
    else {
      document.getElementById("bottomMusic").style.display = "block"
      x.reverse()
      setp(x[0].object.preview)
      setimg(x[0].image)
      setheading(x[0].object.title)
      setartist(x[0].object.artist.name)
      console.log(artist)
    }
    console.log(search)

  }, []);
  const [search, setsearch] = useState(true)
  const [alb, setalb] = useState(false)
  const [playlist, setplaylist] = useState(false)


  const handleSearchAudio=()=>{
    setsearchaudio(!searchaudio)
  }

   const handleBottomMusicDetails =()=>{
    var x = JSON.parse(localStorage.getItem("Recent")) || []
      x.reverse()
      setp(x[0].object.preview)
      setimg(x[0].image)
      setheading(x[0].object.title)
      setartist(x[0].object.artist.name)
   }



  const displaySearch = () => {
    console.log("happy")
    setsearch(true)
    setalb(false)
    setplaylist(false)
  }
  const displayAlb = () => {
    setsearch(false)
    setalb(true)
    setplaylist(false)
  }
  const displayPlaylist = () => {
    setsearch(false)
    setalb(false)
    setplaylist(true)
  }
  





  if (search === true) {
    return (
      <>
      <div className="row">
      <div className="col-md-3">
          <Leftnavbar displaySearch={displaySearch} displayAlb={displayAlb} displayPlaylist={displayPlaylist} />
        </div>
        <div className="col-md-9">
          <Navbar/>
          <Search searchaudioFunc={handleSearchAudio} searchaudio={searchaudio} xyz={handleBottomMusicDetails} />
        </div>
        <BottomComponent searchaudioFunc={handleSearchAudio} searchaudio={searchaudio}  img={img} heading={heading} title={artist} p={p} />
      </div>
        
      </>
    )
  }
  else if (alb === true) {
    return (
      <>
      <div className="row">
      <div className="col-md-3">
          <Leftnavbar displaySearch={displaySearch} displayAlb={displayAlb} displayPlaylist={displayPlaylist} />
        </div>
        <div className="col-md-9">
        <Navbar/>
          <SearchByAlbum searchaudioFunc={handleSearchAudio} searchaudio={searchaudio} xyz={handleBottomMusicDetails}  />
        </div>
        <BottomComponent searchaudioFunc={handleSearchAudio} searchaudio={searchaudio} img={img} heading={heading} title={artist} p={p} />
      </div>
        
      </>
    )
  }
  else if (playlist === true) {
    return (
      <>
      <div className="row">
      <div className="col-md-3">
          <Leftnavbar displaySearch={displaySearch} displayAlb={displayAlb} displayPlaylist={displayPlaylist} />
        </div>
        <div className="col-md-9">
        <Navbar/>
          <Playlist xyz={handleBottomMusicDetails}  />
        </div>
        <BottomComponent  img={img} heading={heading} title={artist} p={p} />
      </div>
        
      </>
    )
  }
}

export default App;


