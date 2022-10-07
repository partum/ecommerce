import React from "react"
import ProductOption from "./components/ProductOption"
// import Card from "./components/Card" 
// import Header from "./components/Header"
import data from "./data"
import "./style.css"

export default function App() {
    //console.log(data[0].title);
    return( <ProductOption stuff={data[0]}/>)
} 
