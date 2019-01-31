import React, {Component} from 'react';
import "./style.css";

class Recursos extends Component {
    render() {
        return (
// reursos //
            <section id="recursos">
            <h2>Recursos avançados</h2>
            <h3><span>Análise do kinvo</span>Controle total</h3>
            <p>O Kinvo agora conta com diversos Recursos Avançados que te ajudam a ver como os seus investimentos estão divididos, qual o risco/retorno e qual a sensibilidade dos produtos. O Kinvo também organiza seus investimentos da melhor forma possível. Você pode criar uma carteira para as aplicações de sua empresa e outra carteira para seus filhos ou netos.</p>
            { /* card deck 1 */ }
            <div id="card_deck">
                { /* linha de card 1x2 */ }
                <div id="card_ln">
                    { /* card */ }
                    <div id="card">
                        { /* card-img */ }
                        { /* card-title */ }
                        <h5></h5>
                        { /* card-content */ }
                        <p></p>
                    </div>
                    { /* card */ }
                    <div id="card">
                        { /* card-img */ }

                        { /* card-title */ }
                        <h5></h5>
                        { /* card-content */ }
                        <p></p>
                    </div>
                </div>
                { /* linha de card 2x2 */ }
                <div id="card_ln">
                    { /* card */ }
                    <div id="card">
                        { /* card-img */ }

                        { /* card-title */ }
                        <h5></h5>
                        { /* card-content */ }
                        <p></p>
                    </div>
                    { /* card */ }
                    <div id="card">
                        { /* card-img */ }

                        { /* card-title */ }
                        <h5></h5>
                        { /* card-content */ }
                        <p></p>
                    </div>
                </div>
                { /* linha de card 3x2 */ }
                <div id="card_ln">
                    { /* card */ }
                    <div id="card">
                        { /* card-img */ }

                        { /* card-title */ }
                        <h5></h5>
                        { /* card-content */ }
                        <p></p>
                    </div>
                    { /* card */ }
                    <div id="card">
                        { /* card-img */ }

                        { /* card-title */ }
                        <h5></h5>
                        { /* card-content */ }
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Recursos;