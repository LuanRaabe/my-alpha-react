import styled from "styled-components";

export const CharacterCard = styled.li`
    background-color: #272727;
    color: #ddd;
    width: 350px;
    height: 550px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const CharacterTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 20px;
    width: 80%;
    text-align: center;
    height: 70px;
`;

export const ImageWraper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CharacterImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 50%;
`;

export const ImageStatus = styled.div`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 30;
    width: 100%;
`;

export const CharacterDescription = styled.div`
    font-size: 1rem;
    margin: 20px 0;
`;