import React from 'react';
import "./imageSlider.css"

function Slider(props) {

    return (
        <div className='image-container'>
            <img className='img' src={props.obj[props.ind].url} alt="images"/>
            <p>{props.obj[props.ind].name}</p>
            <div className='dot-div'>
                {props.obj.map((value, ind)=>{
                return(
                    <div className='dot' style={{opacity:`${value.opacity}`}}></div>
                )
            })}
            </div>      
        </div>            
    );
}

export default Slider;