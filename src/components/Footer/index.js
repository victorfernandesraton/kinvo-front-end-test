import React, {Component} from 'react';
import "./scroll.js";
class Footer extends Component {
    render() {
        return (
            <footer>
            </footer>
            );
    }
}

var menuItens = document.querySelectorAll('a[href^="#"]');
console.log(menuItens);


export default Footer;