import React from 'react'
import "./MusicItem.css"
import PlayButton from './PlayButton.png'
import Play from './Play.png'
export default function MusicItem(props) {

    // const hoover = ()=>{
    //     let x = document.getElementsByClassName("play-button")
    //     if (x.style.display === "none") {
    //         x.style.display = "block";
    //       } else {
    //         x.style.display = "none";
    //       }

    // }
    const handleItem=()=>{
        props.searchaudioFunc()
        console.log("hello")
        props.xyz()
    }


    return (
        <div className="card musicCard  chetan"  id={props.index}  >
            <img  src={props.image}  className="card-img-top poster" alt="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <div className="row">
                <div className="col">
                <p className="card-text"> By {props.artist}</p>
                </div>
                <div className="col">
                <img onClick={handleItem} className="play-button"  src={Play} alt="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" />
                </div>
                </div>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}
