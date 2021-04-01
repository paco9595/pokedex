import React from "react";
import styled from "styled-components";

export const ProgressBar = (props) => {
    const { bgcolor, completed, name } = props;
    const ContainerStyles = styled.div`
        height: 10px;
        width: 130px;
        background-color: #e0e0de;
        border-radius: 50px;
        margin-top: 10px;
    `;

    const FillerStyles = styled.div`
        height: 100%;
        width: ${completed || 10}%;
        max-width: 100%
        background-color: ${bgcolor || '#ff0000'};
        border-radius: inherit;
        text-align: right;
        transition: width 1s ease-in-out;
        line-height: 0.5;
    `;

    const LabelStyles = styled.span`
        padding: 5px;
        color: black;
        font-weight: bold;
        font-size: 10px;
    `;
    const Container = styled.div`
        display: flex;
        justify-content: space-between;
    `;
    const NameStyle = styled.div`
        font-weight: bold;
    `;

    return (
        <Container>
            <NameStyle>{name}</NameStyle>
            <ContainerStyles>
                <FillerStyles>
                    <LabelStyles>{`${completed}%`}</LabelStyles>
                </FillerStyles>
            </ContainerStyles>
        </Container>
    );
};
