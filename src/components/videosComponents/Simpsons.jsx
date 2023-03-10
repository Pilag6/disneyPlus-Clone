import { Container, Background, ImageTitle, ContentMeta, Controls, Player, Trailer, AddList, GroupWatch, SubTitle, Description} from './MyGeneralStyle.styled'

import Recommends from "../Recomends";
import NewDisney from "../NewDisney";
import Originals from "../Originals";
import Trendings from "../Trending";

import PlayIconBlack from '../../assets/images/play-icon-black.png'
import PlayIconWhite from '../../assets/images/play-icon-white.png'
import GroupIcon from '../../assets/images/group-icon.png'


const Simpsons = (props) => {

    return (
        <Container>
            <Background>
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/927FD2C12514FFF81223F3F9615E8A7CB09D5A744061F4B9659F229C1515F663/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </Background>

            <ImageTitle>
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D18B3B33866D7AC5CDFA46573FAAFF567FA2D08A3CDA03675B8F73FE25739D1D/scale?width=1440&aspectRatio=1.78&format=png" />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={PlayIconBlack} alt="" />
                        <span>Play</span>
                    </Player>
                    
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
                <SubTitle>1989-2021 • 33 seasons • Comedy, Animation</SubTitle>
                <Description>This animated comedy focuses on the eponymous family in the town of Springfield. The head of the Simpson family, Homer, is not a typical family man. A nuclear-plant employee, he does his best to lead his family but often finds that they are leading him. The family includes loving, blue-haired matriarch Marge, troublemaking son Bart, overachieving daughter Lisa and baby Maggie.</Description>
            </ContentMeta>
            <Recommends />
            <NewDisney />
            <Originals />
            <Trendings />
        </Container>
    );
};

export default Simpsons;