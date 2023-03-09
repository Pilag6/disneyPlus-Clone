import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <Footer>
            <p>
                Disney Plus Clone | By{" "}
                <Link to={{ pathname: "https://pilagonzalez.com/en" }} target="_blank">
                    Pila Gonzalez
                </Link>
            </p>
        </Footer>
    );
};

const Footer = styled.div`
    display: block;
    padding: 10px;
    background-color: #090b13;
    text-align: center;
`;

export default Header;
