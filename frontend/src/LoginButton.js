import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: #fff;
    box-sizing: border-box;
    width: 220px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 0;
    p {
        color: #444;
        font-size: 0.9rem;
        margin: auto 0;
        margin-left: 14px;
    }
    img {
        width: 23px;
        height: 23px;
    }
`;

export default (props) => {
    return (
        <Container onClick={props.click}>
            <img src={props.icon} alt={props.icon} />
            <p>{props.provider}</p>
        </Container>
    );
}