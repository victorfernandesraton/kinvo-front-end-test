import React, {Component} from 'react';
import "./slider.css";
import "./style.css";

class QuemFaz extends Component {
    render() {
        return (
                { /* quen faz */ },
            <section id="quem_faz">
                <h2>Quem faz o kinvo</h2>
                <div className="slider">
                <ul>
                    <li>
                        <div className="slide_leaf"><span>Slide 1</span></div>
                    </li>
                    <li>
                        <div className="slide_leaf"><span>Slide 2</span></div>
                    </li>
                    <li>
                        <div className="slide_leaf"><span>Slide 3</span></div>
                    </li>
                    <li>
                        <div className="slide_leaf"><span>Slide 4</span></div>
                    </li>
                </ul>
            </div>
            </section>
        );
    }
}

export default QuemFaz;