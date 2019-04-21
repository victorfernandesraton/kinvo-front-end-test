import React, {Component} from 'react';
import "./slider.css";
import "./style.css";
import Peaple1 from "./peaple1.png";
import Peaple2 from "./peaple2.png";
import Peaple3 from "./peaple3.png";
import Peaple4 from "./peaple4.png";
import Peaple5 from "./peaple5.png";

class QuemFaz extends Component {
    render() {
        return (
                { /* quen faz */ },
            <section id="quem_faz">

                <h2 id="title">Quem faz o kinvo</h2>
                {/* bloco de itens */}
                <div id="row">
                    <div id= "block" className="block-1">
                        {/*Imagen*/}
                        <img id="img" src={Peaple1}/>
                        {/*titulo*/}
                        <h3>
                        Nome da pessoa
                        </h3>
                        {/*Subtitulo*/}
                        <h4>
                        Função
                        </h4>
                        {/*texto*/}
                        <p>
                        “Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna.”
                        </p>
                    </div>
                    <div id= "block" className="block-2">
                        {/*Imagen*/}
                        <img id="img" src={Peaple2}/>
                        {/*titulo*/}
                        <h3>
                        Nome da pessoa
                        </h3>
                        {/*Subtitulo*/}
                        <h4>
                        Função
                        </h4>
                        {/*texto*/}
                        <p>
                        “Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna.”
                        </p>
                    </div>
                    <div id= "block" className="block-3">
                        {/*Imagen*/}
                        <img id="img" src={Peaple3}/>
                        {/*titulo*/}
                        <h3>
                        Nome da pessoa
                        </h3>
                        {/*Subtitulo*/}
                        <h4>
                        Função
                        </h4>
                        {/*texto*/}
                        <p>
                        “Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna.”
                        </p>
                    </div>
                    <div id= "block" className="block-4">
                        {/*Imagen*/}
                        <img id="img" src={Peaple4}/>
                        {/*titulo*/}
                        <h3>
                        Nome da pessoa
                        </h3>
                        {/*Subtitulo*/}
                        <h4>
                        Função
                        </h4>
                        {/*texto*/}
                        <p>
                        “Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna.”
                        </p>
                    </div>
                    <div id= "block" className="block-5">
                        {/*Imagen*/}
                        <img id="img" src={Peaple5}/>
                        {/*titulo*/}
                        <h3>
                        Nome da pessoa
                        </h3>
                        {/*Subtitulo*/}
                        <h4>
                        Função
                        </h4>
                        {/*texto*/}
                        <p>
                        “Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna.”
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default QuemFaz;