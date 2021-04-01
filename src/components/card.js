import React, { useEffect, useState } from "react";

const FlipCard = (props) => {
    const {
        cardStyles: { back, front },
        cardZIndex,
        flipSpeedFrontToBack,
        flipSpeedBackToFront,
    } = props;

    const [isFlipped, setFlipped] = useState(props.isFlipped);
    const [, setRotation] = useState(0);

    useEffect(() => {
        if (props.isFlipped !== isFlipped) {
            setFlipped(props.isFlipped);
            setRotation((c) => c + 180);
        }
    }, [props.isFlipped, isFlipped]);

    const getComponent = (key) => {
        if (props.children.length !== 2) {
            throw new Error(
                "Component ReactCardFlip requires 2 children to function"
            );
        }
        return props.children[key];
    };

    const frontRotateY = `rotateY(${isFlipped ? 180 : 0}deg)`;
    const backRotateY = `rotateY(${isFlipped ? 0 : -180}deg)`;

    const styles = {
        back: {
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            height: "100%",
            left: "0",
            position: isFlipped ? "relative" : "absolute",
            top: "0",
            transform: backRotateY,
            transformStyle: "preserve-3d",
            transition: `${flipSpeedFrontToBack}s`,
            width: "100%",
            ...back,
        },
        container: {
            perspective: "1000px",
            zIndex: `${cardZIndex}`,
        },
        flipper: {
            height: "100%",
            position: "relative",
            width: "100%",
        },
        front: {
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            height: "100%",
            left: "0",
            position: isFlipped ? "absolute" : "relative",
            top: "0",
            transform: frontRotateY,
            transformStyle: "preserve-3d",
            transition: `${flipSpeedBackToFront}s`,
            width: "100%",
            zIndex: "2",
            ...front,
        },
    };
    return (
        <div className="react-card-flip" style={{ ...styles.container }}>
            <div className="react-card-flipper" style={styles.flipper}>
                <div style={styles.front}>{getComponent(0)}</div>

                <div className="react-card-back" style={styles.back}>
                    {getComponent(1)}
                </div>
            </div>
        </div>
    );
};
FlipCard.defaultProps = {
    cardStyles: {
        back: {},
        front: {},
    },
    cardZIndex: "auto",
    containerStyle: {},
    flipDirection: "horizontal",
    flipSpeedBackToFront: 0.6,
    flipSpeedFrontToBack: 0.6,
    infinite: false,
    isFlipped: false,
};

export default FlipCard;
