import styled from "styled-components";
import { Link } from "react-router-dom";

const Recommends = (props) => {
    
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <Link to="/onward">

                        {/* Onward */}
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28D41E1B0A97ABDB7562B4AB2AF82ACDFD8951E021FA2361A6AB8607F573EF80/scale?width=1200&aspectRatio=1.78&format=jpeg" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/xmen">

                        {/* X-Men */}
                        <img src="https://www.animationxpress.com/wp-content/uploads/2020/06/x_men_days_of_future_past_banner-wide.jpg" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/obiwan">

                        {/* Obi Wan */}
                        <img src="https://i0.wp.com/www.maggt.com/wp-content/uploads/2022/02/obi-wan-kenobi-release-date-announced.jpg?fit=1920%2C1080&ssl=1" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/pinocchio">

                        {/* Pinocchio */}
                        <img src="https://insidethemagic.net/wp-content/uploads/2022/09/pinocchio-disney.jpg" alt="" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    padding: 0 0 26px;
    /* h4 {
        margin: 20px 10px;
        font-size: 22px;

    } */
`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`;

export default Recommends;
