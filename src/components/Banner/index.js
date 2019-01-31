import React, { Component } from 'react';
import mainbg from "./main-bg.png";
import androidimg from "./app-android.png";
import iosimg from "./app-ios.png";
import arrow from "./arrow.png";

import "./style.css";
class Banner extends Component {
    render() {
        return (
            <section id = "banner">
                <div id="container">
                    <img id= "mainimg"className = "main-background" alt="main" src = {mainbg}/>
                    <h1><span>O controle </span>dos<br/> seus <span>investimentos </span>na palma da mão.</h1>
                    <a href="https://www.google.com">
                        <img className = "app-img img1" alt="android-img" src = {androidimg}/>
                    </a>
                    <a>
                        <img className = "app-img" alt="ios-img" src = {iosimg}/>
                    </a>
                    
                    </div>
                    <a href="#sobre"><img className="seta-baixo" src = {arrow}></img></a>
            </section>
        );
    }
}

export default Banner;   