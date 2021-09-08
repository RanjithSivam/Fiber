import Navbar from "./Navbar";
import styled from "styled-components";
import { DARK__BG, HERO__BG, TEXT__DARK, TEXT__PRIMARY__BLACK } from "../constants/color";
import { Button } from "./Button";
import { useContext } from "react";
import DarkModeContext from '../context/darkMode'

const Wrapper = styled.header`
  height: 100vh;
  background-color: ${props => props.theme===true ? DARK__BG : HERO__BG};
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  height: calc(100% - 70px);
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }

`;

const DetailSection = styled.div`
  flex: 1;
`;

const ImageSection = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const Review = styled.div`
    display: flex;
    margin-bottom: 10px;

    @media (max-width: 768px) {
    display: none;
  }
`

const StarContainer = styled.div`
    margin-right: 10px;
`

const ReviewText = styled.p`
    text-transform: capitalize;
    color: ${props => props.theme===true ? TEXT__DARK : TEXT__PRIMARY__BLACK};
    font-weight: 600;
`

const PrimaryText = styled.h1`
    font-size: 42px;
    margin-bottom: 10px;
    font-weight: bolder;
    line-height: 1.3;
    color: ${props => props.theme===true ? TEXT__DARK : TEXT__PRIMARY__BLACK};

    @media (max-width: 992px){
      font-size: 40px;
    }

    @media (max-width: 768px) {
    font-size:30px;
  }
`

const SecondaryText = styled.p`
    margin-bottom: 10px;
    opacity: 0.5;
    line-height: 1.4;
    color: ${props => props.theme===true ? TEXT__DARK : TEXT__PRIMARY__BLACK};
    
    @media (max-width: 992px){
      line-height: 1.6;
    }
`

const Link = styled.a`
    font-weight: bold;
    text-transform: capitalize;

    @media (max-width: 768px) {
    align-self: center;
  }
`

const FreeTrailContainer = styled.div`
    margin-bottom: 20px;
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
      }
`

const FreeTrailButton = styled(Button)`
    margin-left: 0;
    margin-right: 20px;

    @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`

const Text = styled.p`
    display: inline-flex;
    align-items: center;
    text-transform: capitalize;
    font-size: 14px;
    margin-right: 10px;

    @media (max-width: 992px){
      margin-bottom: 10px;
    }
`

const Small = styled.small`
    margin-left: 5px;
    opacity: 0.5;
    font-size: 14px;
`

const Checkmark = styled.div`
    color: ${props => props.theme===true ? TEXT__DARK : TEXT__PRIMARY__BLACK};

    @media (max-width: 768px) {
     display: flex;
     flex-direction: column;
  }
`

function Hero() {

  const {dark} = useContext(DarkModeContext)

  return (
    <Wrapper theme={dark}>
      <Container>
        <Navbar />
        <HeroContainer>
          <DetailSection>
            <Review>
              <StarContainer>
                <img src="/assets/star.svg" alt="star" />
                <img src="/assets/star.svg" alt="star" />
                <img src="/assets/star.svg" alt="star" />
                <img src="/assets/star.svg" alt="star" />
                <img src="/assets/star.svg" alt="star" />
              </StarContainer>
              <ReviewText theme={dark}>rated 4.8/5 (243 reviews)</ReviewText>
            </Review>
            <PrimaryText theme={dark} >Create your own portfolio in minutes.</PrimaryText>
            <SecondaryText theme={dark} >
              With Fiber,you can setup your own personal portfolio in minutes
              with dozens of premade, beautiful templates.
            </SecondaryText>
            <FreeTrailContainer>
              <FreeTrailButton primary>start free trail</FreeTrailButton>
              <Link href="#">view examples</Link>
            </FreeTrailContainer>
            <Checkmark theme={dark}>
              <Text>
                <img src="/assets/Checkmark.svg" alt="check-mark" />
                <Small>no credit card required</Small>
              </Text>
              <Text>
                <img src="/assets/Checkmark.svg" alt="check-mark" />
                <Small>10 free templates</Small>
              </Text>
            </Checkmark>
          </DetailSection>
          <ImageSection>
            <Image
              src="/assets/hero-Illustration.png"
              alt="hero-Illustration"
            />
          </ImageSection>
        </HeroContainer>
      </Container>
    </Wrapper>
  );
}

export default Hero;
