import React, {Component} from 'react';
import "./style.css";
import android_logo from "./app-android.png";
import ios_logo from "./app-ios.png";
import Logo from "./logo.png";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div id="content">
                    <span id="dowloadapp">Baixo o app</span>
                    <img id="app"src = {android_logo} alt="android app"/>
                    <img id="app"src = {ios_logo} alt="ios app"/>
                    <img id="logo"src = {Logo} alt="logo kinvo"/>
                    <span id="copyright">©2018 • Everest TI • Todos os direitos reservados
                    </span>
                </div>
            </footer>
            );
    }
}



export default Footer;