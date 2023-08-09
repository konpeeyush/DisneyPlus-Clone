import { ImgSlider, Viewers, Recommends, NewDisney, Originals, Trending } from "../index.js"
import { Container } from "./Home.styled"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/users/userSlice";
import {
    collection,
    onSnapshot,
} from 'firebase/firestore';

const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        const colRef = collection(db, 'movies')
        onSnapshot(colRef, (snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }]
                        break;
                    case 'new':
                        newDisney = [...newDisney, { id: doc.id, ...doc.data() }]
                        break;
                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }]
                        break;
                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }]
                        break;
                }
            });
            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisney,
                    original: originals,
                    trending: trending,
                }))
        })
    }, [userName])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
};

export default Home;
