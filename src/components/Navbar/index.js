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
        if (window.scrollY > 200) {
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
      authenticate(){
        return new Promise(resolve => setTimeout(resolve, 2000))
      }
    
      componentDidMount(){
        this.authenticate().then(() => {
          const ele = document.getElementById('ipl-progress-indicator')
          if(ele){
            // fade out
            ele.classList.add('available')
            setTimeout(() => {
              // remove from DOM
              ele.outerHTML = ''
            }, 2000)
          }
        })
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
                    <li id="navlink"><a href="#kinvoweb">Kinvoweb</a></li>
                    <li id="navlink"><a href="#planos">Planos</a></li>
                    <li id="navlink"><a href="#quem_faz">Quem faz o Kinvo</a></li>
                    <li id="navlink-sigin"><a href="modal_sigin" style={{borderColor: this.state.bordercolor_sigin}}>Cadastre-se</a></li>
                    <li id="navlink-login"><a className="log" href="modal_login">Entrar</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
