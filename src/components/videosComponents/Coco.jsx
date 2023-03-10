import { Container, Background, ImageTitle, ContentMeta, Controls, Player, Trailer, AddList, GroupWatch, SubTitle, Description} from './MyGeneralStyle.styled'

import { Link } from "react-router-dom";
import Recommends from "../Recomends";
import NewDisney from "../NewDisney";
import Originals from "../Originals";
import Trendings from "../Trending";

import PlayIconBlack from '../../assets/images/play-icon-black.png'
import PlayIconWhite from '../../assets/images/play-icon-white.png'
import GroupIcon from '../../assets/images/group-icon.png'

const Coco = (props) => {
    return (
        <Container>
            <Background>
                <img
                    alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/62BB262EBD327F8597282592217CF490952AC1C5B7A9909BB91AF8BCC797F92E/scale?width=1440&aspectRatio=1.78&format=jpeg"
                />
            </Background>

            <ImageTitle>
                <img
                    alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/88CCEF89045AEFDC107BDF027A4C3914A39AC5599DEF3B9C641CD0AFE95FE8A1/scale?width=1440&aspectRatio=1.78&format=png"
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
                    <Link to="https://www.disneyplus.com/en-gb/video/9ef66ac5-f3f2-4abe-bef4-7b474f917316">
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
                    2017 • 1h 44m • Family, Fantasy, Animation, Music
                </SubTitle>
                <Description>
                    In Disney•Pixar’s extraordinary adventure, Miguel, a boy who dreams
                    of becoming a great musician embarks on a journey to uncover
                    the mysteries behind his ancestors' stories and traditions. He enters the Land of the Dead to find his great-great-grandfather, a legendary singer.
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

export default Coco;
