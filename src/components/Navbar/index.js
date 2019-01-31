// React 
import React, {Component} from 'react';
// style
import "./style.css";
import logo from "./logo.png";
class Navbar extends Component {
    render() {
        return (
            <nav>
                <a className="Navbar-brand">
                    <img id="nav-brand" src= {logo} alt="logo kinvo"/>
                </a>
                <ul>
                    <li id="navlink"><a href="#sobre">Sobre o kinvo</a></li>
                    <li id="navlink"><a href="#recursos">Recuros avançados</a></li>
                    <li id="navlink"><a href="#kinvoweb">Kinvo Web</a></li>
                    <li id="navlink"><a href="modal_sigin">Cadastre-se</a></li>
                    <li id="navlink"><a href="modal_login">Entrar</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;