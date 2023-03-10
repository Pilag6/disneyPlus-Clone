import { Container, Background, ImageTitle, ContentMeta, Controls, Player, Trailer, AddList, GroupWatch, SubTitle, Description} from './MyGeneralStyle.styled'

// import { Link } from "react-router-dom";
import Recommends from "../Recomends";
import NewDisney from "../NewDisney";
import Originals from "../Originals";
import Trendings from "../Trending";

import PlayIconBlack from '../../assets/images/play-icon-black.png'
import PlayIconWhite from '../../assets/images/play-icon-white.png'
import GroupIcon from '../../assets/images/group-icon.png'

const Twd = (props) => {

    return (
        <Container>
            <Background>
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/12AE489D79C4518B72CBCA624FBCD91AFA730DC79A9C925673FD28D319332888/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </Background>

            <ImageTitle>
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/07CC42C6508C4EE7C26B157BA04CC19D61C84E8A97E622F11173D8ECB508DFCA/scale?width=1440&aspectRatio=1.78&format=png" />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={PlayIconBlack} alt="" />
                        <span>Play</span>
                    </Player>
                    {/* <Link to="https://www.disneyplus.com/en-gb/video/7d03a6da-2763-404f-8328-7a858a0793b0">
                        <Trailer>
                            <img src="/images/play-icon-white.png" alt="" />
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
                <SubTitle>2010-2021 • 11 seasons • Survival, Drama, Horror</SubTitle>
                <Description>Wounded in the line of duty, small-town Georgia sheriff Rick Grimes wakes from a coma to find the world infested by zombie-like "walkers."</Description>
            </ContentMeta>
            <Recommends />
            <NewDisney />
            <Originals />
            <Trendings />
        </Container>
    );
};

export default Twd;