import styled from "styled-components";
import { Link } from "react-router-dom";


const Originals = (props) => {

    return (
        <Container id="original">
            <h4>Originals</h4>
            <Content>
                <Wrap>
                    <Link to="/loki">

                        {/* Loki */}
                        <img
                            src="https://cineverso.es/wp-content/uploads/2021/04/loki-serie-reparto-trailer-1024x576.jpg"
                            alt=""
                        />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/whales">

                        {/* Secrets of the Whales */}
                        <img
                            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4A907A7AD86B2DF93DA3EA6029CA211CAD58DDC5B45C5A016E128D14D9F61419/scale?width=1200&aspectRatio=1.78&format=jpeg"
                            alt=""
                        />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/luca">

                        {/* Luca */}
                        <img
                            src="https://eikhu9b6e94.exactdn.com/wp-content/uploads/2021/06/Disney-Pixar-Luca-Transformation-Poster-.jpg?strip=all&lossy=0&quality=80&webp=80&avif=80&ssl=1"
                            alt=""
                        />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/bad">

                        {/* Bad Batch */}
                        <img
                            src="https://film-book.com/wp-content/uploads/2021/05/star-wars-the-bad-batch-tv-show-poster-banner-01-700x400-1.jpg"
                            alt=""
                        />
                    </Link>
                </Wrap>
            </Content>

            
        </Container>
    );
};

const Container = styled.div`
    padding: 0 0 26px;
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


export default Originals;
