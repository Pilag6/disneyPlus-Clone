import { Container, Background, ImageTitle, ContentMeta, Controls, Player, Trailer, AddList, GroupWatch, SubTitle, Description} from './MyGeneralStyle.styled'

import { Link } from "react-router-dom";
import Recommends from "../Recomends";
import NewDisney from "../NewDisney";
import Originals from "../Originals";
import Trendings from "../Trending";

import PlayIconBlack from '../../assets/images/play-icon-black.png'
import PlayIconWhite from '../../assets/images/play-icon-white.png'
import GroupIcon from '../../assets/images/group-icon.png'

const Secrets = (props) => {

    return (
        <Container>
            <Background>
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DD20E55353C937856D60CA57144FEEF57A35A83F0CED831AC1B4620211B955DE/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </Background>

            <ImageTitle>
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CECD347F0E8385C04F6EA897EA129522CF8AE06CEE3D4452470690EB2D41FD80/scale?width=1440&aspectRatio=1.78&format=png" />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={PlayIconBlack} alt="" />
                        <span>Play</span>
                    </Player>
                    <Link to="https://www.disneyplus.com/en-gb/video/1418572a-d336-4c68-a4b7-e2a8c249edc7">
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
                <SubTitle>2021 • 1 season • ComiDocuseries, Animals & Nature</SubTitle>
                <Description>Secrets of the Whales plunges viewers deep within the heart of whale culture to reveal the mysterious and beautiful world of whales. Filmed across three years in 24 locations, the 4-part event series it's a profoundly personal saga, venturing deep into the world of whales to reveal life and love from their perspective.</Description>
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

export default Secrets;