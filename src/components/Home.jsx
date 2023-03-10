import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recomends";
import Trendings from "./Trending";
import Viewers from "./Viewers";

const Home = (props) => {
    return (
        <>
            <Container>
                <ImgSlider />
                <Viewers />
                <Recommends />
                <NewDisney />
                <Originals />
                <Trendings />
            </Container>
        </>
    );
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    margin-bottom: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url("../src/assets/images/home-background.png") center
            center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;
