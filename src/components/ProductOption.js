import React from "react"

export default function ProductOption(){
    console.log("wtf")
    return(
    <div className="productOption">
        <div className="productOption__pre">
            <div>new</div>
            <span>Gender</span>
            <span>rating</span>
        </div>
        <div className="productOption__header">
            <h1>PRODUCT TITLE</h1>
            <span>heart</span>
        </div>
        <div className="productOption__price">
            <div>price</div>
            <div>afterpay</div>
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