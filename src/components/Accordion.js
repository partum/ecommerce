import React from "react"
import xIcon from "../pictures/x-symbol-svgrepo-com.svg"

export default function Accordion(props){

    const[foo, setFoo] = React.useState("accordion__open")
    function toggleActive(){
        setFoo("accordion__closed")
    }

    return(
        <div className="accordion">
           <div className={`accordion__header ${foo}`} onClick={toggleActive}>
                <h2>{props.title}</h2>
                <img src={xIcon} alt=""></img>
           </div>
           <div>
            content
           </div>
        </div>
    )
    }