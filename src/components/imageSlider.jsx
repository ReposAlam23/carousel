import React, { useState} from "react";
import Slider from "./slider";
import "./imageSlider.css"

const ImageSlider = ()=>{
    const [ind, setIndex] = useState(0)
    const [obj, setObj] = useState([
            {
                url:"https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1658730377.jpg",
                name : "Taj",              
            },
            {
                url:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
                name :"city",
            },
            {
                url:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/08/20/2531712-untitled-design-2022-08-20t180559.999.png",
                name :"next-concept-burj-khalifa",                
            },
            {
                url:"https://imageio.forbes.com/specials-images/imageserve/5ef3f7eec4f2390006f0c356/GUI--Graphical-User-Interface--concept-/960x0.jpg?format=jpg&width=960",
                name :"Technology",
            },
            {
                url:"https://ats.org/wp-content/uploads/2020/04/Index-High-Tech-Future-2400x1374.jpg",
                name :"Future-tech",
            },
        ])

    const handleImageBorder = (e)=>{
        let array = obj.map((value, i)=>{
            if(parseInt(e.target.id)===i){
                value.border = "5px solid green"
                value.opacity = "1" 
            }else{
                value.border = "none"
                value.opacity = "0.5" 
            }
            return value
        })
        setObj(array)
    }

    return(
        <>
        <Slider obj ={obj} ind={ind}/>
        <div className="all-obj">
            {obj.map((value, i)=>{
                return(
                    <img src={value.url} id={i} style={{border:`${value.border}`}} key={i} onClick={(e)=>{
                        setIndex(i)
                        handleImageBorder(e)
                    }} alt="images"/>
                )
            })}
        </div>

        </>
    )
}
export default ImageSlider