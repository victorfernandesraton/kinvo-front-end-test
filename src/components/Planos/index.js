import React, {Component} from 'react';
import "./style.css";

class Planos extends Component {
    render() {
        return (
            <section id="planos">
            <div id="col" className="text">
            <h2>Planos e assinaturas</h2>
            <h3><span>Conheça os planos e</span>Use todos os recursos</h3>
            <p>O Kinvo já é completo desde a versão gratuita. Com ele você pode cadastrar diversos tipos de produtos. Assinando o Kinvo, você terá acesso aos Recursos Avançados de Análises e às Múltiplas Carteiras, que são recursos complementares e indispensáveis que te ajudam a ter uma visão completa do seu dinheiro, auxiliam nas tomadas de decisão e organizam seus investimentos. Conheça os nossos planos. Você poderá cancelar a assinatura a qualquer momento.</p>
            </div>
            { /* card deck 2 */ }
            <div id="col" className="card-deck">
                { /* linha de card 1x1 */ }
                <div id="">
                    { /* card */ }
                    <div id="card-set">
                        { /* card-plain */ }
                        <div id="card-title">
                            <h5>Plano Básico</h5>
                        </div>
                        <div id="card-content">
                        { /* card-content */ }
                            <ul>
                                <li>1 carteira</li>
                                <li>15 produtos</li>
                                <li>Produtos iniciados a parti de 2012</li>
                                <li>Análisea básica</li>
                                <li>Gráfico de desempenho</li>
                            </ul>
                        </div>
                        <div id="card-mark">
                            { /* card-mark */ }
                            <h5>Gratuito</h5>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        );
    }
}

export default Planos;