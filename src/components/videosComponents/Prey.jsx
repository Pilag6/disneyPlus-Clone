import { Container, Background, ImageTitle, ContentMeta, Controls, Player, Trailer, AddList, GroupWatch, SubTitle, Description} from './MyGeneralStyle.styled'

import { Link } from "react-router-dom";
import Recommends from "../Recomends";
import NewDisney from "../NewDisney";
import Originals from "../Originals";
import Trendings from "../Trending";

import PlayIconBlack from '../../assets/images/play-icon-black.png'
import PlayIconWhite from '../../assets/images/play-icon-white.png'
import GroupIcon from '../../assets/images/group-icon.png'


const Prey = (props) => {

    return (
        <Container>
            <Background>
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9020B9E7EAB469DC73AA3802B84AC3B81ABD812D124DA8F29A9D637DCBB89940/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </Background>

            <ImageTitle>
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EBA945D663841EC092311C3CE64EA9EA31A2CC845E981F8079CCC24C7BBA40B5/scale?width=1440&aspectRatio=1.78&format=png" />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={PlayIconBlack} alt="" />
                        <span>Play</span>
                    </Player>
                    <Link to="https://www.disneyplus.com/en-gb/video/72bc936b-cba4-4b51-8556-399909b2a3aa">
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
                <SubTitle>2022 • 1h 40m • Science Fiction, Thriller, Action-Adventure</SubTitle>
                <Description>Set in the Comanche Nation 300 years ago, this is the story of Naru, a fierce and highly skilled warrior, raised in the shadow of legendary hunters who roam the Great Plains. When danger threatens her camp, she sets out to protect her people. The prey she stalks: a highly evolved alien predator with a technically advanced arsenal.</Description>
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

export default Prey;