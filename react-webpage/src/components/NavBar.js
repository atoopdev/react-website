import React from "react"
import img_logo from "../images/react-icon-small.png"

export default function Navbar(){
    return <header>
        <nav>
            <div className="logo">
                <img src={img_logo} className="header_logo" alt="small react logo"></img>
                <p className="txt_logo">ReactFacts</p>
            </div>
            <p className="sub_heading">React Course - Project 1</p></nav></header>
}