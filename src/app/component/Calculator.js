import React, {Component} from 'react';
import './calculator.less';
import {NavLink} from "react-router-dom";


let b789 = [7, 8, 9];
let b456 = [4, 5, 6];
let b123 = [1, 2, 3];

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formula: '',
        }
    }

    HandleClear = () => {
        this.setState({
            formula: '',
        });
    };

    HandleClick = () => {
        this.setState({
            formula: this.state.formula + event.target.value,
        });
    }

    HandleEquals = () => {
        const pattern = /[1-9]\d*[\+\-\*]?\d*/;
        if (pattern.test(this.state.formula)){
            this.setState({
                formula: eval(this.state.formula)
            })
        }else {
            this.HandleClear();
        }
    }

    render() {
        return (
            <div className={'calculatorAll'}>
                <h1>在线计算器</h1>
                <div className={'outsideBorder'}>
                    <input value={this.state.formula} type="text"/>
                    <div>
                        <button id={'plus'} attr={'operator'} value={'+'} onClick={this.HandleClick.bind(this)}>+
                        </button>
                        <button id={'mimus'} attr={'operator'} value={'-'} onClick={this.HandleClick}>-</button>
                        <button id={'multi'} attr={'operator'} value={'*'} onClick={this.HandleClick}>*</button>
                    </div>
                    <div>
                        {b789.map(element =>
                            <button id={element} attr={'number'} value={element}
                                    key={element}
                                    onClick={this.HandleClick}>{element}</button>
                        )}
                    </div>
                    <div>
                        {b456.map(element =>
                            <button id={element} attr={'number'} value={element}
                                    key={element}
                                    onClick={this.HandleClick}>{element}</button>
                        )}
                    </div>
                    <div>
                        {b123.map(element =>
                            <button id={element} attr={'number'} value={element}
                                    key={element}
                                    onClick={this.HandleClick}>{element}</button>
                        )}
                    </div>
                    <div>
                        <button id={0} attr={'number'} value={0} onClick={this.HandleClick}>0</button>
                        <button id={'clear'} value={'clear'} onClick={this.HandleClear}>clear</button>
                        <button id={'equals'} attr={'operator'} value={'='} onClick={this.HandleEquals}>=</button>
                    </div>
                </div>
                <div className={'goback'}>
                    <NavLink to={'/'}>
                        回到主页
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Calculator;