import React from "react"

export default function ProductOption(props){
    //console.log(props.stuff.title)
    return(
    <div className="productOption">
        <div className="productOption__pre">
           {props.stuff.new && <div>new arrival</div>}
            <span>{props.stuff.gender}</span>
            <span>rating</span>
        </div>
        <div className="productOption__header">
            <h1>{props.stuff.title}</h1>
            <span>heart</span>
        </div>
        <div className="productOption__price">
            <div>${props.stuff.price}</div>
            <div>4 payments of ${props.stuff.price/4} with afterpay</div>
            <div>special offer</div>
        </div>
        <div className="productOption__options">
            maybe this should be it's own thing???
        </div>
        <div className="productOption__size">
            sizes, also chart link
        </div>
        <button>Add To Cart</button>
    </div>
    )
}