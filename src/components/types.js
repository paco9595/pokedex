import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "./../data/types";

const Lable = styled.div`
    background-color: ${(props) => props.color};
    border-radius: 5px;
    width: 80px;
    text-align: center;
    margin: 0 5px;
`;
const LableContainer = styled.div`
    display: flex;
    justify-content: center;
`; 

export const Type = ({ types = [] }) => {
    const [getTypes, setTypes] = useState([]);
    useEffect(() => {
        setTypes(
            types.map(
                (type, i) =>
                    colors.filter((c) => {
                        console.log(
                            "comparacion",
                            c.name,
                            type.type.name.toUpperCase()
                        );
                        return c.name.toUpperCase() === type.type.name.toUpperCase();
                    })[0]
            )
        );
    }, [types]);
    return (
        <LableContainer>
            {getTypes.map((t, key) => {
                console.log("t", getTypes);
                return (
                    <Lable color={t.color} key={key}>
                        {t.name}
                    </Lable>
                );
            })}
        </LableContainer>
    );
};
