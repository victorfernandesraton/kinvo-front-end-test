import React, {Component} from 'react';
import "./style.css";

class Recursos extends Component {
    render() {
        return (
// reursos //
            <section id="recursos">
                <div id="row" className="row-1">
                    <div id="col" className="col-2">
                    { /* card deck 1 */ }
                        <div id="card_deck">
                            { /* linha de card 1x2 */ }
                            <div id="card_ln">
                                { /* card */ }
                                <div id="card" className="card-set">
                                    { /* card-img */ }
                                    { /* card-title */ }
                                    <h5>Analise de produtos</h5>
                                    { /* card-content */ }
                                    <p>Entenda  como está distribuída sua carteira e como cada produto rende.</p>
                                </div>
                                { /* card */ }
                                <div id="card" className="card-set">
                                    { /* card-img */ }
                                    
                                    { /* card-title */ }
                                    <h5>Rentabilidade real</h5>
                                    { /* card-content */ }
                                    <p>Saiba a rentabilidade das suas aplicações abatida da inflação. </p>
                                </div>
                            </div>
                            { /* linha de card 2x2 */ }
                            <div id="card_ln">
                                { /* card */ }
                                <div id="card" className="card-set">
                                    { /* card-img */ }
                                    
                                    { /* card-title */ }
                                    <h5>Sensibilidade 
                                    dos Ativos</h5>
                                    { /* card-content */ }
                                    <p>Entenda como cada ativo contribui para o resultado da carteira.</p>
                                </div>
                                { /* card */ }
                                <div id="card" className="card-set">
                                    { /* card-img */ }
                                    
                                    { /* card-title */ }
                                    <h5>Cobertura do FGC</h5>
                                    { /* card-content */ }
                                    <p>Cadastre e acompanhe diversas carteiras diferentes em seu perfil.</p>
                                </div>
                            </div>
                            { /* linha de card 3x2 */ }
                            <div id="card_ln">
                                { /* card */ }
                                <div id="card" className="card-set">
                                    { /* card-img */ }
                                    
                                    { /* card-title */ }
                                    <h5>Projeção de carteira</h5>
                                    { /* card-content */ }
                                    <p>Acompanhe quanto sua carteira poderá valer no futuro.</p>
                                </div>
                                { /* card */ }
                                <div id="card" className="card-set">
                                    { /* card-img */ }
                                    
                                    { /* card-title */ }
                                    <h5>Risco x Retorno</h5>
                                    { /* card-content */ }
                                    <p>Conheça o risco e o retorno de cada produto da sua carteira.</p>
                                </div>
                            </div>
                            <div id="card_ln">
                                { /* card */ }
                                <div id="card" className="card-set">
                                    { /* card-img */ }
                                    
                                    { /* card-title */ }
                                    <h5>Multiplas carteiras</h5>
                                    { /* card-content */ }
                                    <p>Cadastre e acompanhe diversas carteiras diferentes em seu perfil.</p>
                                </div>
                                { /* card */ }
                                <div id="card" className="card-set">
                                    { /* card-img */ }
                                    
                                    { /* card-title */ }
                                    <h5>Acesso ao kinvoweb</h5>
                                    { /* card-content */ }
                                    <p>Cadastre e acompanhe diversas carteiras diferentes em seu perfil.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="col" className="col-1">
                        <h2>Recursos avançados</h2>
                        <h3><span id="mark">Análise do kinvo </span>Controle total</h3>
                        <p>O Kinvo agora conta com diversos Recursos Avançados que te ajudam a ver como os seus investimentos estão divididos, qual o risco/retorno e qual a sensibilidade dos produtos. O Kinvo também organiza seus investimentos da melhor forma possível. Você pode criar uma carteira para as aplicações de sua empresa e outra carteira para seus filhos ou netos.</p>
                        <p>Com os Recursos Avançados, todas as tomadas de decisão ficam mais fáceis. Você pode investir em um produto que está rendendo mais ou cancelar aquele que não vai bem. Você ainda pode criar projeções simulando o melhor tipo de investimento futuro para o seu dinheiro.</p>
                    </div>
                </div>
            </section>
            );
        }
}

export default Recursos;