import React from 'react'
import "./MusicItem.css"
import PlayButton from './PlayButton.png'
export default function MusicItem(props) {

    // const hoover = ()=>{
    //     let x = document.getElementsByClassName("play-button")
    //     if (x.style.display === "none") {
    //         x.style.display = "block";
    //       } else {
    //         x.style.display = "none";
    //       }

    // }


    return (
        <div className="card musicCard "   >
            <img  src={props.image}  className="card-img-top poster" alt="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <div className="row">
                <div className="col">
                <p className="card-text">{props.artist}</p>
                </div>
                <div className="col">
                <img  className="play-button"  src={PlayButton} alt="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" />
                </div>
                </div>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}