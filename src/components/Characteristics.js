import React from 'react';
import styled from "styled-components";

const CharacteristicsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
`;
const Lable = styled.div`
    font-weight: bold
`;
export const Characteristics = ({ weight=0, height=0 }) => {
    return (
        <CharacteristicsContainer>
            <div>
                <Lable>{weight / 10} Kg</Lable>
                <div>weight</div>
            </div>
            <div>
                <Lable>{height / 10} M</Lable>
                <div>height</div>
            </div>
        </CharacteristicsContainer>
    );
};