import React from "react";
import { FaUserSecret } from "react-icons/fa";

function checkAlive(status) {
    if (status !== "Alive")
        return (
            <div className={`img-status ${status}`}>
                {status === "Dead" ? "MORTO" : "DESCONHECIDO"}
            </div>
        );
}

function Card({ props }) {
    console.log(props);
    return (
        <li className={`${props.status} character-card`} key={props.id}>
            <h2 className="character-title">{props.name}</h2>
            <div className={props.status}>
                {props.image ? (
                    <img
                        className="character-image"
                        src={props.image}
                        alt={props.name}
                    />
                ) : (
                    <FaUserSecret className="character-image" />
                )}
                {checkAlive(props.status)}
            </div>
            <div className="character-description">
                <p>
                    <b>Status:</b>{" "}
                    <span className={`${props.status} text`}>
                        {" "}
                        {props.status}
                    </span>
                </p>
                <p>
                    <b>Specie:</b> <span>{props.species}</span>
                </p>
                <p>
                    <b>Gender:</b> <span>{props.gender}</span>
                </p>
            </div>
        </li>
    );
}

export default Card;
