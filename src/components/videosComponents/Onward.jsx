import { Container, Background, ImageTitle, ContentMeta, Controls, Player, Trailer, AddList, GroupWatch, SubTitle, Description} from './MyGeneralStyle.styled'

import { Link } from "react-router-dom";
import Recommends from "../Recomends";
import NewDisney from "../NewDisney";
import Originals from "../Originals";
import Trendings from "../Trending";

import PlayIconBlack from '../../assets/images/play-icon-black.png'
import PlayIconWhite from '../../assets/images/play-icon-white.png'
import GroupIcon from '../../assets/images/group-icon.png'

const Onward = (props) => {
    return (
        <Container>
            <Background>
                <img
                    alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/95DFE5634F85AB4F5FC824571E148BA9835DF1A2C08BF40F675A793FDEA7553C/scale?width=1440&aspectRatio=1.78&format=jpeg"
                />
            </Background>

            <ImageTitle>
                <img
                    alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B9F547692C9B1F61FB08F451375F43A287D2648075BBC94AFB759E6151A3FF49/scale?width=1440&aspectRatio=1.78&format=png"
                />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img
                            src={PlayIconBlack}
                            alt=""
                        />
                        <span>Play</span>
                    </Player>
                    <Link to="https://www.disneyplus.com/en-gb/video/0000a2cb-1191-444b-98e7-d4183dac4925">
                        <Trailer>
                            <img
                                src={PlayIconWhite}
                                alt=""
                            />
                            <span>Trailer</span>
                        </Trailer>
                    </Link>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img
                                src={GroupIcon}
                                alt=""
                            />
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>
                    2020 • 1h 42m • Family, Comedy, Fantasy, Animation,
                    Action-Adventure
                </SubTitle>
                <Description>
                    In Disney and Pixar’s Onward, elf brothers, Ian (voice of
                    Tom Holland) and Barley (voice of Chris Pratt), get to spend
                    a day with their late dad and go on a quest aboard Barley’s
                    epic van Guinevere. When their mom Laurel (voice of Julia
                    Louis-Dreyfus) realizes her sons are gone, she teams up with
                    The Manticore (voice of Octavia Spencer) to find them.
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

export default Onward;
