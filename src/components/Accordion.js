import React from "react"
import xIcon from "../pictures/x-symbol-svgrepo-com.svg"

export default function Accordion(props){

    const[foo, setFoo] = React.useState("accordion__open")
    function toggleActive(){
        //setFoo("accordion__closed")
        if (foo === "accordion__open"){
            setFoo("accordion__closed")
        }
        else if (foo === "accordion__closed"){
            setFoo("accordion__open")
        }
    }

    return(
        <div className={`accordion ${foo}`}>
           <div className="accordion__header" onClick={toggleActive}>
                <h2>{props.title}</h2>
                <img src={xIcon} alt=""></img>
           </div>
           <div className="accordion__content">
            content
           </div>
        </div>
    )
    }