import { Nav, Logo, NavMenu, Login } from "./Header.styled";
import { logo, home_icon, search_icon, watchlist_icon, original_icon, movie_icon, series_icon } from "../../assets";

import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Header = () => {

    const handleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
            }
            )
            .catch((error) => {
                alert(error.message);
            }
            );
    }

    return (
        <Nav>
            <Logo>
                <img src={logo} alt="Disney+" />
            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src={home_icon} alt="HOME" />
                    <span>HOME</span>
                </a>
                <a href="/search">
                    <img src={search_icon} alt="SEARCH" />
                    <span>SEARCH</span>
                </a>
                <a href="/watchlist">
                    <img src={watchlist_icon} alt="WATCHLIST" />
                    <span>WATCHLIST</span>
                </a>
                <a href="/originals">
                    <img src={original_icon} alt="ORIGINALS" />
                    <span>ORIGINALS</span>
                </a>
                <a href="/movies">
                    <img src={movie_icon} alt="MOVIES" />
                    <span>MOVIES</span>
                </a>
                <a href="/series">
                    <img src={series_icon} alt="SERIES" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <Login onClick={handleAuth} >Login</Login>
        </Nav>
    );
};

export default Header;
