import React, { Component } from 'react';
import "./style.css";
import sobrepng from "./sobre-bg.png";
import videoimg from "./video.png";

class Sobre extends Component {
    render() {
        return (
            <section id="sobre">
                <div id= "row">
                    <div id="col" className="col-1">
                        <h2>Sobre o kinvo</h2>
                        <h3 id="title"><span>Kinvo </span> Agora ficou simples controlar</h3>
                        <p id="sobre-text">
                        Investir não é fácil. E quanto mais você investe, mais difícil fica acompanhar todos os rendimentos variações, alto e baixos do mercado. Dá uma dor de cabeça e, ás vezes é necessário a ajuda de um consultor. 
                        O kinvo é uma plataforma que te ajuda a controlar, analisar e acompanhar todos os seus investimentos, Mesmo que você tenha diversas aplicações em diversos lugares não tem problema. Com o kinvo você reúne tudo em um só lugar de um jeito simples e intuitivo
                        </p>
                    </div>
                    <div id ="col" className="col-2">
                    <img id="video" src= {videoimg} alt="video"/>
                    </div>
                </div>
                <div id="row-horizontal" className="row-horizontal">
                    <ul>
                        <li id="col-li"><h4><span id="mark-1">5,4 bilhões <br/></span>Em investimentos</h4></li>
                        <li id="col-li"><h4><span id="mark-2">45mil <br/></span>Carteiras criadas</h4></li>
                        <li id="col-li"><h4><span id="mark-3">500mil <br/></span>Produtos cadastrados</h4></li>
                        <li id="col-li"><h4><span id="mark-4">1.2mi <br/></span>Minutos de uso mensal</h4></li>
                    </ul>
                </div>
                <img id="sobre-img" src= {sobrepng} alt="sobre"/>
            </section>
                );
            }
        }
        
        export default Sobre;