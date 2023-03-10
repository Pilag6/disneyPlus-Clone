import { Container, Background, ImageTitle, ContentMeta, Controls, Player, Trailer, AddList, GroupWatch, SubTitle, Description} from './MyGeneralStyle.styled'

import { Link } from "react-router-dom";
import Recommends from "../Recomends";
import NewDisney from "../NewDisney";
import Originals from "../Originals";
import Trendings from "../Trending";

import PlayIconBlack from '../../assets/images/play-icon-black.png'
import PlayIconWhite from '../../assets/images/play-icon-white.png'
import GroupIcon from '../../assets/images/group-icon.png'

const Pinocchio = (props) => {

    return (
        <Container>
            <Background>
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CF8DF3E2098C0D9F85A3C5A7EA176087109536C38332AD0B395F6D3ECF0CA985/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </Background>

            <ImageTitle>
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB2FB9B438080C0E5977384FA5EF703D80B006BF3C519C4572ECF270289642A8/scale?width=1440&aspectRatio=1.78&format=png" />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={PlayIconBlack} alt="" />
                        <span>Play</span>
                    </Player>
                    <Link to="https://www.disneyplus.com/en-gb/video/c8d1d633-1248-4f78-bf2a-e5f283b6cebc">
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
                <SubTitle>2022 • 1h 52m • Family, Fantasy, Action-Adventure, Musical</SubTitle>
                <Description>A live action and CGI retelling of the beloved tale of a wooden puppet who embarks on a thrilling adventure to become a real boy. Other characters include Geppetto, the woodcarver who builds and treats Pinocchio as if he were his real son; Jiminy Cricket, who serves as Pinocchio’s guide as well as his "conscience"; the Blue Fairy; "Honest" John; Sofia the Seagull and The Coachman.</Description>
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

export default Pinocchio;