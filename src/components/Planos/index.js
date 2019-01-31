import React, {Component} from 'react';
import "./style.css";

class Planos extends Component {
    render() {
        return (
            <section id="planos">
            <h2>Planos e assinaturas</h2>
            <h3><span>Conheça os planos e</span>Use todos os recursos</h3>
            { /* card deck 2 */ }
            <div id="card_deck">
                { /* linha de card 1x1 */ }
                <div id="card_ln">
                    { /* card */ }
                    <div id="card">
                        { /* card-plain */ }
                        <h5></h5>
                        { /* card-content */ }
                        <p></p>
                        { /* card-mark */ }
                        <h6></h6>
                    </div>
                </div>
                { /* linha de card 2x1 */ }
                <div id="card_ln">
                    { /* card */ }
                    <div id="card">
                        { /* card-plain */ }
                        <h5></h5>
                        { /* card-content */ }
                        <p></p>
                        { /* card-mark */ }
                        <h6></h6>
                    </div>
                </div>
                { /* linha de card 3x1 */ }
                <div id="card_ln">
                    { /* card */ }
                    <div id="card">
                        { /* card-plain */ }
                        <h5></h5>
                        { /* card-content */ }
                        <p></p>
                        { /* card-mark */ }
                        <h6></h6>
                    </div>
                </div>
            </div>
            </section>
        );
    }
}

export default Planos;