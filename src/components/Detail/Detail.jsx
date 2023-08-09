import {
    Container,
    Background,
    ImageTitle,
    Subtitle,
    Description,
    ContentMeta,
    Controls,
    Player,
    Trailer,
    AddList,
    GroupWatch
} from "./Detail.styled";

import { useEffect, useState } from "react";
import db from "../firebase";
import { useParams } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { play_icon_black, play_icon_white, group_icon } from "../../assets";

const Details = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        const colRef = collection(db, 'movies')
        onSnapshot(colRef, (snapshot) => {
            snapshot.docs.map((doc) => {
                if (doc.id === id) {
                    setDetailData(doc.data())
                }
            })
        }
        )
    }, [id]);

    return (
        <Container>
            <Background>
                <img src={detailData.backgroundImg} alt={detailData.title} />
            </Background>

            <ImageTitle>
                <img src={detailData.titleImg} alt={detailData.title} />
            </ImageTitle>

            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={play_icon_black} alt="" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src={play_icon_white} alt="" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src={group_icon} alt="" />
                        </div>
                    </GroupWatch>
                </Controls>
            </ContentMeta>

            <Subtitle>
                {detailData.subTitle}
            </Subtitle>

            <Description>
                {detailData.description}
            </Description>
        </Container>
    )
};

export default Details;
