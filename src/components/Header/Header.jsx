import { Nav, Logo, NavMenu, Login, UserImg, SignOut, DropDown } from "./Header.styled";
import { logo, home_icon, search_icon, watchlist_icon, original_icon, movie_icon, series_icon } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../../features/users/userSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate("/home");
            }
        }
        );
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            signInWithPopup(auth, provider)
                .then((result) => {
                    setUser(result.user);
                }
                )
                .catch((error) => {
                    alert(error.message);
                }
                );
        } else if (userName) {
            auth.signOut()
                .then(() => {
                    dispatch(setSignOutState());
                    navigate("/");
                }
                )
                .catch((err) => {
                    alert(err.message);
                }
                );
        }
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }));
    }

    return (
        <Nav>
            <Logo>
                <img src={logo} alt="Disney+" />
            </Logo>

            {!userName ? (
                <Login onClick={handleAuth} >Login</Login>
            ) : (
                <>
                    <NavMenu>
                        <Link to="/home">
                            <img src={home_icon} alt="HOME" />
                            <span>HOME</span>
                        </Link>
                        <Link to="#">
                            <img src={search_icon} alt="SEARCH" />
                            <span>SEARCH</span>
                        </Link>
                        <Link to="#">
                            <img src={watchlist_icon} alt="WATCHLIST" />
                            <span>WATCHLIST</span>
                        </Link>
                        <Link to="#">
                            <img src={original_icon} alt="ORIGINALS" />
                            <span>ORIGINALS</span>
                        </Link>
                        <Link to="#">
                            <img src={movie_icon} alt="MOVIES" />
                            <span>MOVIES</span>
                        </Link>
                        <Link to="#">
                            <img src={series_icon} alt="SERIES" />
                            <span>SERIES</span>
                        </Link>
                    </NavMenu>
                    <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleAuth}>Sign out</span>
                        </DropDown>
                    </SignOut>
                </>
            )
            }
        </Nav>
    );
};

export default Header;
