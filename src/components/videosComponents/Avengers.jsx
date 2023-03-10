import { Container, Background, ImageTitle, ContentMeta, Controls, Player, Trailer, AddList, GroupWatch, SubTitle, Description} from './MyGeneralStyle.styled'

import { Link } from "react-router-dom";
import Recommends from "../Recomends";
import NewDisney from "../NewDisney";
import Originals from "../Originals";
import Trendings from "../Trending";

import PlayIconBlack from '../../assets/images/play-icon-black.png'
import PlayIconWhite from '../../assets/images/play-icon-white.png'
import GroupIcon from '../../assets/images/group-icon.png'

const Avenger = (props) => {

    return (
        <Container>
            <Background>
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8831417F49279BB679AF00AF755790BE81E27D394879CF2CCBAFC8CAD01522E8/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </Background>

            <ImageTitle>
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/76EAD3FE7834164B73EF7440C8D416BCDA876F0BF736E5AA45ACC1B6C743A1FF/scale?width=1440&aspectRatio=1.78&format=png" />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={PlayIconBlack} alt="" />
                        <span>Play</span>
                    </Player>
                    <Link to="https://www.disneyplus.com/en-gb/video/23f15ae3-ef46-46be-b41a-c43599c34891">
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
                <SubTitle>2019 • 3h 05m • Science Fiction, Fantasy, Super Hero, Action-Adventure</SubTitle>
                <Description>The epic conclusion to the Infinity Saga that became a critically acclaimed worldwide phenomenon, this dramatic showdown pits the Avengers against Thanos. After devastating events wiped out half the world’s population and fractured their ranks, the remaining heroes struggle to move forward. But they must come together to restore order and harmony in the universe and bring their loved ones back.</Description>
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



export default Avenger;