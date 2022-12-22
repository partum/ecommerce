import React from "react"
import Accordion from "./components/Accordion"
import PencilBanner from "./components/PencilBanner"
import ProductCarousel from "./components/ProductCarousel"
import ProductOption from "./components/ProductOption"
import data from "./data"
import "./style.scss"

export default function App() {
    return( 
        <div>
        <PencilBanner/>
        <div className="flex">
            <ProductCarousel/>
            <ProductOption stuff={data[0]}/>
        </div>
        <Accordion title={"Features and benefits"}/>
        <Accordion title={"original universal"}/>
    </div>
    )
} 
