import React, { useState, useEffect } from "react";
import { ProgressBar } from "./progressBar";
import styled from "styled-components";

const StatsContainer = styled.div`
    width: 200px;
`;
const Wraper = styled.div`
    display: flex;
    justify-content: center;
`;
export const Stats = ({ stats }) => {
    const colors = ["#fca825", "#038fea", "#90afc5", "#378e3a"];
    const [getStats, setStats] = useState([]);
    useEffect(() => {
        if (stats) {
            console.log(stats);
            setStats(
                stats.filter((stat) => !stat.stat.name.includes("special"))
            );
        }
    }, [stats]);
    return (
        <Wraper>
            <StatsContainer>
                {getStats.map(
                    (ability, key) =>
                        !ability.stat.name.includes("special") && (
                            <ProgressBar
                                bgcolor={colors[key]}
                                completed={ability.base_stat}
                                key={key}
                                name={ability.stat.name}
                            />
                        )
                )}
            </StatsContainer>
        </Wraper>
    );
};
