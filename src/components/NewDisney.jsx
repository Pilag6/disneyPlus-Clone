import styled from "styled-components";
import { Link } from "react-router-dom";

const NewDisney = (props) => {

    return (
        <Container>
            <h4>New to Disney+</h4>
            <Content>
                <Wrap>
                    <Link to="/panther">

                        {/* Black Panther */}
                        <img
                            src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/01/black-panther-wakanda-forever-movie-review-002.jpg?fit=1200%2C630&ssl=1"
                            alt=""
                        />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/prey">

                        {/* Prey */}
                        <img
                            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D29DB7B5CB413923D700AA82642F4A0104D581FD63D940FC113AD6BB4E84001C/scale?width=1200&aspectRatio=1.78&format=jpeg"
                            alt=""
                        />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/lightyear">

                        {/* Lightyear */}
                        <img
                            src="https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2022-09/Lightyear_movie.jpg?itok=tJiIf7Of"
                            alt=""
                        />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/family">

                        {/* Family Guy */}
                        <img
                            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D8A6789735136D2B05E66924316712DC196F1CD82CF3B632C73E8D7EAB5E0C88/scale?width=1200&aspectRatio=1.78&format=jpeg"
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

export default NewDisney;
