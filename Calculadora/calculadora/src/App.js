import React, { Component } from "react";
import "./index.css";
import { Botao, Display } from "./components/components";

class App extends Component {
    state = {
        screen: "",
        firstCalc: true,
        clearNextTime: false,
        operand1: null,
        operand2: null,
        result: null,
        operation: null,
    };

    input = (data) => {
        console.log(data);
        if (this.state.clearNextTime) {
            // this.setState({ screen: "" });
            this.setState({ screen: data });
            this.setState({ clearNextTime: false });
        } else {
            this.setState({ screen: this.state.screen + data });
        }
    };

    setOperand = (operand, data) => {
        this.setState({ [operand]: data });
    };

    setOperation = (data) => {
        console.log(data);
        this.setState({ operation: data, clearNextTime: true });
        if (this.state.firstCalc) {
            this.setOperand("operand1", this.state.screen);
            this.setState({ firstCalc: false });
        } else {
            this.setOperand("operand1", this.state.result);
            this.setOperand("operand2", this.state.screen);
        }
    };

    clearCalculator = () => {
        this.setState({
            operand1: null,
            operand2: null,
            operator: null,
            screen: "",
        });
    };

    calculate = () => {
        let op1 = Number(this.state.operand1);
        let op2 = Number(this.state.screen);
        let operation = this.state.operation;
        console.log(op1, op2, operation);
        this.setState({ clearNextTime: true });
        const operations = (op1, op2, operation) => {
            if (!op1 || !op2) return "Defina operadores";
            switch (operation) {
                case "+":
                    return op1 + op2;
                case "-":
                    return op1 - op2;
                case "*":
                    return op1 * op2;
                case "/":
                    return op1 / op2;
                default:
                    return "Defina operação";
            }
        };
        let data = operations(op1, op2, operation);
        this.setState({ result: data });
        this.setState({ screen: data });
    };

    render() {
        return (
            <div className="App">
                <h1>Calculadora com React</h1>
                <div className="calc-wrapper">
                    <Display>{this.state.screen}</Display>
                    <div className="linha">
                        <Botao onClick={this.input}>7</Botao>
                        <Botao onClick={this.input}>8</Botao>
                        <Botao onClick={this.input}>9</Botao>
                        <Botao onClick={this.setOperation}>/</Botao>
                    </div>
                    <div className="linha">
                        <Botao onClick={this.input}>4</Botao>
                        <Botao onClick={this.input}>5</Botao>
                        <Botao onClick={this.input}>6</Botao>
                        <Botao onClick={this.setOperation}>*</Botao>
                    </div>
                    <div className="linha">
                        <Botao onClick={this.input}>1</Botao>
                        <Botao onClick={this.input}>2</Botao>
                        <Botao onClick={this.input}>3</Botao>
                        <Botao onClick={this.setOperation}>+</Botao>
                    </div>
                    <div className="linha">
                        <Botao onClick={this.input}>.</Botao>
                        <Botao onClick={this.input}>0</Botao>
                        <Botao onClick={this.clearCalculator}>C</Botao>
                        <Botao onClick={this.setOperation}>-</Botao>
                    </div>
                    <div className="linha">
                        <Botao onClick={this.calculate}>=</Botao>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
