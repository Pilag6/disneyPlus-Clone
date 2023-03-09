import styled from "styled-components";


const Header = (props) => {
    return (
        <Nav>
            <Logo href="/">
                <img src="../src/assets/images/LogoHeader.svg" alt="Disney+" />
            </Logo>

            <NavMenu>
                <a href="/home" alt="Home">
                    <img src="../src/assets/images/home-icon.svg" alt="Home" />
                    <span>HOME</span>
                </a>
                <a href="/#">
                    <img src="../src/assets/images/search-icon.svg" alt="SEARCH" />
                    <span>SEARCH</span>
                </a>
                <a href="/#">
                    <img src="../src/assets/images/watchlist-icon.svg" alt="WATCHLIST" />
                    <span>WATCHLIST</span>
                </a>
                <a href="/home/#original">
                    <img src="../src/assets/images/original-icon.svg" alt="ORIGINALS" />
                    <span>ORIGINALS</span>
                </a>
                <a href="/#">
                    <img src="../src/assets/images/movie-icon.svg" alt="MOVIES" />
                    <span>MOVIES</span>
                </a>
                <a href="/#">
                    <img src="../src/assets/images/series-icon.svg" alt="SERIES" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <Login href="/home">Login</Login>
            {/* <SignUp>Sign Up</SignUp> */}
        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    background-color: #090b13;
    z-index: 3;
`;

const Logo = styled.a`
    width: 80px;
    padding: 0;
    max-height: 70px;
    display: inline-block;
    cursor: pointer;
    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-flow: row nowrap;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-left: 25px;
    margin-right: auto;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 4px;
            line-height: 1.1;
            padding: 2px 2px;
            white-space: nowrap;
            position: relative;
            cursor: pointer;

            &:before {
                content: "";
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

// const SignUp = styled.a`
//     background-color: #0063e5;
//     padding: 8px 16px;
//     margin-left: 10px;
//     text-transform: uppercase;
//     letter-spacing: 1.5px;
//     border: 1px solid #0063e5;
//     border-radius: 4px;
//     transition: all 0.2s ease 0s;
//     cursor: pointer;
//     &:hover {
//         background-color: #f9f9f9;
//         color: #000;
//         border-color: transparent;
//     }
// `;

export default Header;
