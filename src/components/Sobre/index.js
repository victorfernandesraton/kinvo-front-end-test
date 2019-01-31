import React, { Component } from 'react';
import sobrebg from "./sobre-bg.png";
import mainbg from "./main-bg.png";
import "./style.css";
class Sobre extends Component {
    render() {
        return (
            <section id="sobre">
                <div id="container">
                <img id="main-background" alt="background main" src= {mainbg}/>
                <h1><span>O controle </span>dos<br/> seus <span>investimentos </span>na palma da mão.</h1>
                </div>
                <h2>Sobre o kinvo</h2>
                <p>
                Investir não é fácil. E quanto mais você investe, mais difícil fica acompanhar todos os rendimentos variações, alto e baixos do mercado. Dá uma dor de cabeça e, ás vezes é necessário a ajuda de um consultor. 
                O kinvo é uma plataforma que te ajuda a controlar, analisar e acompanhar todos os seus investimentos, Mesmo que você tenha diversas aplicações em diversos lugares não tem problema. Com o kinvo você reúne tudo em um só lugar de um jeito simples e intuitivo
                </p>
                <h3><span>Kinvo</span>Agora ficou simples controlar</h3>
                <ul>
                    <li><h4><span>5,4 bilhões</span>Em investimentos</h4></li>
                    <li><h4><span>45mil</span>Carteiras criadas</h4></li>
                    <li><h4><span>500mil</span>Produtos cadastrados</h4></li>
                    <li><h4><span>1.2mi</span>Minutos de uso mensal</h4></li>
                </ul>
                <img id="img-sobre" alt="sobre" src= {sobrebg}/>
                </section>
        );
    }
}

export default Sobre;   