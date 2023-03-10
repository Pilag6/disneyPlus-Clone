import { Container, Background, ImageTitle, ContentMeta, Controls, Player, Trailer, AddList, GroupWatch, SubTitle, Description} from './MyGeneralStyle.styled'

import { Link } from "react-router-dom";
import Recommends from "../Recomends";
import NewDisney from "../NewDisney";
import Originals from "../Originals";
import Trendings from "../Trending";

import PlayIconBlack from '../../assets/images/play-icon-black.png'
import PlayIconWhite from '../../assets/images/play-icon-white.png'
import GroupIcon from '../../assets/images/group-icon.png'

const Xmen = (props) => {
    return (
        <Container>
            <Background>
                <img
                    alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C4515DC0F2470AEC397A314AFC64BBC5A708470C97AA71900F54E83DED8B6F0/scale?width=1440&aspectRatio=1.78&format=jpeg"
                />
            </Background>

            <ImageTitle>
                <img
                    alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6AE28849D217BCE953376DB81FD937470376BE5BAD17756BBD36402D7637175F/scale?width=1440&aspectRatio=1.78&format=png"
                />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={PlayIconBlack} alt="" />
                        <span>Play</span>
                    </Player>
                    <Link to="https://www.disneyplus.com/en-gb/video/03d9dd33-bcf6-4a38-8f6a-9ff20438727a">
                        <Trailer>
                            <img src={PlayIconWhite} alt="" />
                            <span>Trailer</span>
                        </Trailer>
                    </Link>
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
                    2014 • 2h 12m • Science Fiction, Super Hero,
                    Action-Adventure
                </SubTitle>
                <Description>
                    The unstoppable characters from the original X-Men film
                    trilogy join forces with their younger selves in an epic
                    struggle to change the past and save our future. The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.
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

export default Xmen;
