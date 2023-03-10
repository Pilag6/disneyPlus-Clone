import { Container, Background, ImageTitle, ContentMeta, Controls, Player, Trailer, AddList, GroupWatch, SubTitle, Description} from './MyGeneralStyle.styled'

// import { Link } from "react-router-dom";
import Recommends from "../Recomends";
import NewDisney from "../NewDisney";
import Originals from "../Originals";
import Trendings from "../Trending";

import PlayIconBlack from '../../assets/images/play-icon-black.png'
import PlayIconWhite from '../../assets/images/play-icon-white.png'
import GroupIcon from '../../assets/images/group-icon.png'

const Family = (props) => {
    return (
        <Container>
            <Background>
                <img
                    alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/24C88E066A6C6EDCF726B09AB526B7140E7C16B99E09368D8A2DBD252F586BED/scale?width=1440&aspectRatio=1.78&format=jpeg"
                />
            </Background>

            <ImageTitle>
                <img
                    alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9F6FDF1C2FC9BD0B028B805BEF0B1DCBBEA488DC6D933794D072B0C40BCC74CE/scale?width=1440&aspectRatio=1.78&format=png"
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
                            <img
                                src={GroupIcon}
                                alt=""
                            />
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>
                    1999-2021 • 20 seasons • Coming of Age, Family, Fantasy,
                    Animation, Buddy
                </SubTitle>
                <Description>
                    The adventures of the Griffins. In a wacky Rhode Island
                    town, in New England, a dysfunctional and eccentric family
                    strives to cope with everyday life as they are thrown from
                    one crazy scenario to another.
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

export default Family;
