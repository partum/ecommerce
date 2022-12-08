import React from "react"

export default function ProductOption(props){

    function changeActive(){
    let select = document.getElementById("colorOption")
    select.innerHTML = props.number.color
    }

    return(
        <button onClick={changeActive}>
            {props.number.id}
        </button>
    )
    }