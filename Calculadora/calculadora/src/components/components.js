import React from "react";
import "./components.css";

const Botao = (props) => {
    const ehNum = (val) => {
        if (!isNaN(val) || val === "C" || val === ".") {
            return true;
        }
        return false;
    };

    const ehIgual = (val) => {
        if (val === "=") {
            return true;
        }
        return false;
    };

    return (
        <div
            className={`botao-wrapper botao ${
                ehIgual(props.children) ? "btn-igual" : null
            } ${ehNum(props.children) ? null : "operacao"}`}
            onClick={() => props.onClick(props.children)}
        >
            {props.children}
        </div>
    );
};

const Display = (props) => {
    return <div className="input">{props.children}</div>;
};

export { Botao, Display };
