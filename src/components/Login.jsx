import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainLogo from '../assets/images/hulu-disney-espn+.svg'
import SecondaryLogo from '../assets/images/disney-pixar-marvel-sw-ng.png'
import BgLogin from '../assets/images/login-background.jpg'

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne
                        src={MainLogo}
                        alt="Disney Logo"
                    />
                    <Subtitle>+ More than you'd ever imagine</Subtitle>

                    <SignUp>
                        <Link to="/home">GET STARTED!</Link>
                    </SignUp>

                    <Description>
                        Get 12 months for the price of 10 when you sign up for
                        an annual Disney+ subscription, compared to paying
                        monthly.
                    </Description>
                    <CTALogoTwo
                        src={SecondaryLogo}
                        alt="Disney Pixar Marvel Star Wars National Geographic"
                    />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${BgLogin});
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
`;

const CTALogoOne = styled.img`
    width: 100%;
    max-width: 600px;
    min-height: 1px;
    margin: 0 auto;
    user-select: none;
`;

const Subtitle = styled.h3`
    font-size: 26px;
    margin: 10px 0 24px;
    line-height: 1.5;
    user-select: none;
    @media only screen and (max-width: 768px) {
        font-size: 20px;
  }
`;

const SignUp = styled.a`
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin: 0 0 24px;
    padding: 16.5px 0;
    letter-spacing: 1.5px;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: #c0c0c0;
    font-size: 16px;
    margin: 0 0 24px;
    padding: 0 1rem;
    line-height: 1.5;
    letter-spacing: 1.5px;
    text-align: center;

    @media only screen and (max-width: 768px) {
        font-size: 12px;
  }
`;

const CTALogoTwo = styled.img`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
`;

export default Login;
