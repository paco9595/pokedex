import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DisplayPokedex = ({ children }) => {
    return (<Container>
        {children}
        </Container>);
};