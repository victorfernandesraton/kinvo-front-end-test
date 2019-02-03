import React, {Component} from 'react';
import "./style.css";
import kinvowebbg from "./kinvoweb-bg.png"

class Kinvoweb extends Component {
    render() {
        return (
            { /* kinvoweb */},
            <section id= "kinvoweb">
            <div id="col" className="col-1">
                <h2>kinvoWeb</h2>
                <h3><span>Kinvo. </span>Na palma da mão e na tela do computador</h3>
                <p>Além do aplicativo para smartphone, o Kinvo também conta com uma versão para computador. Você terá acesso a todos os Recursos Avançados disponíveis na versão mobile, com todo o conforto de uma visualização ampla, fácil de usar e com total segurança dos seus dados. Os recursos da versão para computador são exclusivos para assinantes e serão ativados junto com a escolha de um plano. Para acessar a ferramenta, é necessário antes baixar o aplicativo no seu celular.</p>
            </div>
            <div id="col" className="content-video">
            <iframe id="video-kinvoweb" title="Conheça o Kinvo" src="https://player.vimeo.com/video/277645514?title=0&amp;byline=0&amp;portrait=0" width="620" height="370" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen=""></iframe>
            </div>
            </section>
        );
    }
}

export default Kinvoweb;