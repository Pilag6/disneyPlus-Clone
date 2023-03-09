import styled from "styled-components";
import { Link } from "react-router-dom";
import Recommends from "../Recomends";
import NewDisney from "../NewDisney";
import Originals from "../Originals";
import Trendings from "../Trending";

const Luca = (props) => {
    return (
        <Container>
            <Background>
                <img
                    alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/338C838BB654047DB372A8877E6618F6EF729793089CEC1F2625A86D86870117/scale?width=1440&aspectRatio=1.78&format=jpeg"
                />
            </Background>

            <ImageTitle>
                <img
                    alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/66E9FFC47955E636247BBCEF2A784C56BD6B49E56C83E69AA573BEB29E771E8F/scale?width=1440&aspectRatio=1.78&format=png"
                />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="../src/assets/images/play-icon-black.png" alt="" />
                        <span>Play</span>
                    </Player>
                    <Link to="https://www.disneyplus.com/en-gb/video/7d03a6da-2763-404f-8328-7a858a0793b0">
                        <Trailer>
                            <img src="../src/assets/images/play-icon-white.png" alt="" />
                            <span>Trailer</span>
                        </Trailer>
                    </Link>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src="../src/assets/images/group-icon.png" alt="" />
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>
                    2021 • 1h 41m • Coming of Age, Family, Fantasy, Animation,
                    Buddy
                </SubTitle>
                <Description>
                    Set in a seaside town on the Italian Riviera, Disney and
                    Pixar’s “Luca” is a coming-of-age story about a young boy
                    experiencing an unforgettable summer. Luca shares these
                    adventures with his friend, Alberto, but all the fun is
                    threatened by a deeply-held secret: they are sea monsters
                    from another world below the water’s surface. “Luca” is
                    directed by Enrico Casarosa and produced by Andrea Warren.
                </Description>
            </ContentMeta>
            <br />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trendings />
            <br />
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(6vw + 5px);
`;

const Background = styled.div`
    opacity: 0.8;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 0px;
    z-index: -1;
    img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
`;

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;
    @media only screen and (min-width: 1540px) {
        height: 30vw;
    }
    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`;

const Player = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb (249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);
    img {
        width: 32px;
    }
    &:hover {
        background: rgb(254, 254, 254);
    }
    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
        img {
            width: 25px;
        }
    }
`;

const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    &:hover {
        background: #0063e5;
    }
`;

const AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;
        &:first-child {
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }
        &:nth-child(2) {
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }
`;

const GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    div {
        height: 40px;
        width: 40px;
        background: rgb(0, 0, 0);
        border-radius: 50%;
        img {
            width: 100%;
        }
    }
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);
    margin-bottom: 150px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export default Luca;
