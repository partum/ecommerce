import React from "react"
import PencilBanner from "./components/PencilBanner"
import ProductOption from "./components/ProductOption"
// import Card from "./components/Card" 
// import Header from "./components/Header"
import data from "./data"
import "./style.scss"

export default function App() {
    //console.log(data[0].title);
    return( 
        <div>
        <PencilBanner/>
    <ProductOption stuff={data[0]}/>
    </div>
    )
} 
