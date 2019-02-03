// React 
import React, {Component} from 'react';
// style
import "./style.css";
import logo from "./logo.png";
class Navbar extends Component {
    // construtor do componenmt
    state = {
        bgcolor_nav: 'transparent',
        bgcolor_login: '#0DD1E3',
        bgcolor_sigin: '#ffffff',
        bordercolor_login: 'transparent',
        bordercolor_sigin: 'transparent',
        
    }
      
      listenScrollEvent = e => {
        if (window.scrollY > 600) {
            this.setState({bgcolor_nav: '#0DD1E3'})
            this.setState({bordercolor_sigin: '#ffffff'})
        } else {
            this.setState({bgcolor_nav: 'transparent'})
            this.setState({bordercolor_sigin: 'transparent'})
        }
      }
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
        
    render() {
        return (
            <nav className="menu" style={{backgroundColor: this.state.bgcolor_nav}}>
                <a className="Navbar-brand">
                    <img id="nav-brand" src= {logo} alt="logo kinvo"/>
                </a>
                <ul>
                    <li id="navlink"><a href="#banner">Sobre o kinvo</a></li>
                    <li id="navlink"><a href="#recursos">Recuros avançados</a></li>
                    <li id="navlink"><a href="#kinvoweb">Kinvo Web</a></li>
                    <li id="navlink"><a href="#planos">Kinvo Web</a></li>
                    <li id="navlink"><a href="#quem_faz">Quem faz</a></li>
                    <li id="navlink-sigin"><a href="modal_sigin" style={{borderColor: this.state.bordercolor_sigin}}>Cadastre-se</a></li>
                    <li id="navlink-login"><a className="log" href="modal_login">Entrar</a></li>
                </ul>
            </nav>
        );
    }
}


export default Navbar;