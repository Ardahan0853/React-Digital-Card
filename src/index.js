import React from "react";
import ReactDOM from "react-dom";
import About from "./Info/About";
import Name from "./Info/Name/Name";
import Buttons from "./Info/Buttons/Buttons"
import Info from "./Info/Information/Information"
import Footer from "./Info/Footer/Footer"


function App(){
    return(
    <div className="main-page">
        <div className="black-container">
            <About />
            <Name />
            <Buttons/>
            <Info/>
            <Footer/>
        </div>
    </div>
    ) 
        

};
ReactDOM.render(<App /> , document.getElementById("root"))