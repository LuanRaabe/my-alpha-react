import React from "react";
import { FaUserSecret } from "react-icons/fa";
import {
    CharacterCard,
    CharacterTitle,
    CharacterDescription,
    ImageWraper,
    ImageStatus,
    CharacterImage,
} from "./styles.jsx";

function checkAlive(status) {
    if (status !== "Alive")
        return (
            <ImageStatus className={`img-status ${status}`}>
                {status === "Dead" ? "MORTO" : "DESCONHECIDO"}
            </ImageStatus>
        );
}

function Card({ props }) {
    return (
        <CharacterCard className={`${props.status}`} key={props.id}>
            <CharacterTitle>{props.name}</CharacterTitle>
            <ImageWraper>
                {props.image ? (
                    <CharacterImage src={props.image} alt={props.name} />
                ) : (
                    <FaUserSecret />
                )}
                {checkAlive(props.status)}
            </ImageWraper>
            <CharacterDescription>
                <p>
                    <b>Status:</b> <span>{props.status}</span>
                </p>
                <p>
                    <b>Specie:</b> <span>{props.species}</span>
                </p>
                <p>
                    <b>Gender:</b> <span>{props.gender}</span>
                </p>
            </CharacterDescription>
        </CharacterCard>
    );
}

export default Card;
