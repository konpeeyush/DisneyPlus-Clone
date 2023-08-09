import React from "react";
import { Container, Wrap } from "./Viewers.styled";
import { viewers_disney, viewers_marvel, viewers_national, viewers_pixar, viewers_starwars } from "../../assets";

import { v_disney, v_marvel, v_natgeo, v_pixar, v_starwars } from "../../assets";

const Viewers = () => {
    return (
        <Container>
            <div>
                <Wrap>
                    <img src={viewers_disney} alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src={v_disney} type="video/mp4"/>
                    </video>
                </Wrap>
            </div>
            <div>
                <Wrap>
                    <img src={viewers_marvel} alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src={v_marvel} type="video/mp4"/>
                    </video>
                </Wrap>
            </div>
            <div>
                <Wrap>
                    <img src={viewers_national} alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src={v_natgeo} type="video/mp4"/>
                    </video>
                </Wrap>
            </div>
            <div>
                <Wrap>
                    <img src={viewers_pixar} alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src={v_pixar} type="video/mp4"/>
                    </video>
                </Wrap>
            </div>
            <div>
                <Wrap>
                    <img src={viewers_starwars} alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src={v_starwars} type="video/mp4"/>
                    </video>
                </Wrap>
            </div>
        </Container>
    )
};

export default Viewers;
