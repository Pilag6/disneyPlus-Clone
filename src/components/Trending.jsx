import styled from "styled-components";
import { Link } from "react-router-dom";

const Trendings = (props) => {
    return (
        <Container>
            <h4>Trending</h4>
            <Content>
                <Wrap>
                    <Link to="/toystory">
                        {/* Toy Story 4 */}
                        <img
                            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/97773D3AD23DD9942EE4EDDB26E775D192E7AC6B038E459A6CF91D0107BB33AF/scale?width=1200&aspectRatio=1.78&format=jpeg"
                            alt=""
                        />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/avengers">
                        {/* Avenger */}
                        <img
                            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/863E75A035911DBA10F8D7EE1E433A12A1BF4915670B66597AC31C585A291942/scale?width=1200&aspectRatio=1.78&format=jpeg"
                            alt=""
                        />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/mandalorian">
                        {/* Mandalorian */}
                        <img
                            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4875C22CCA5677436046E63C62233D55960FFF6B17594C96CB99EAE892524FAE/scale?width=1200&aspectRatio=1.78&format=jpeg"
                            alt=""
                        />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/simpsons">
                        {/* The Simpsons */}
                        <img
                            src="https://whatsondisneyplus.com/wp-content/uploads/2019/10/EG1tpkVVUAEU30q.jpg"
                            alt=""
                        />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    padding: 0 0 76px;
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

export default Trendings;
