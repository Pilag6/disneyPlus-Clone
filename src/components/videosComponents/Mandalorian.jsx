import { Container, Background, ImageTitle, ContentMeta, Controls, Player, Trailer, AddList, GroupWatch, SubTitle, Description} from './MyGeneralStyle.styled'

// import { Link } from "react-router-dom";
import Recommends from "../Recomends";
import NewDisney from "../NewDisney";
import Originals from "../Originals";
import Trendings from "../Trending";

import PlayIconBlack from '../../assets/images/play-icon-black.png'
import PlayIconWhite from '../../assets/images/play-icon-white.png'
import GroupIcon from '../../assets/images/group-icon.png'

const Mandalorian = (props) => {
    return (
        <Container>
            <Background>
                <img
                    alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9800C278A8A97096BD937451D68FD1C99053B650D4EAB3F97C8FA0665BC5C611/scale?width=1440&aspectRatio=1.78&format=jpeg"
                />
            </Background>

            <ImageTitle>
                <img
                    alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8A0B6CFEDAF51178A6BA0334D1CECC2D75194AB4B5D2D4984BBC36B2461B23DC/scale?width=1440&aspectRatio=1.78&format=png"
                />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={PlayIconBlack} alt="" />
                        <span>Play</span>
                    </Player>
                    {/* <Link to="https://www.disneyplus.com/en-gb/video/7d03a6da-2763-404f-8328-7a858a0793b0">
                        <Trailer>
                            <img src="../src/assets/images/play-icon-white.png" alt="" />
                            <span>Trailer</span>
                        </Trailer>
                    </Link> */}
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src={GroupIcon} alt="" />
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>
                    2019-2021 • 3 seasons • Science Fiction, Action-Adventure
                </SubTitle>
                <Description>
                    After the fall of the Empire, a lone Mandalorian far from the authority of the New Republic makes his way through the lawless galaxy with his foundling, Grogu.
                </Description>
            </ContentMeta>
            <br/>
            <Recommends />
            <NewDisney />
            <Originals />
            <Trendings />
            <br />
        </Container>
    );
};

export default Mandalorian;
