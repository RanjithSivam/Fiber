import styled from "styled-components"
import { PRIMARY__BG, SECONDARY__BG, TEXT__PRIMARY__WHITE } from "../constants/color"
import { Button } from "./Button"

const Wrapper = styled.div`
    padding: 0 40px;
    border-radius: 10px;
    overflow: hidden;
    background-color: ${PRIMARY__BG};
    margin: 40px 0;

`

const Container = styled.div`
    display: flex;
    gap: 100px;
    align-items: center;
    padding: 20px 0;

    @media (max-width: 992px){
        gap: 20px;
    }

    @media (max-width: 768px) {
    flex-direction: column;
  }
`

const TextArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    color: ${TEXT__PRIMARY__WHITE};
`

const Title = styled.h2`
    margin-bottom: 5px;
    font-size: 40px;
    @media (max-width: 992px){
      font-size: 32px;
    }
`

const SubText = styled.p`
    opacity: 0.7;
    line-height: 1.4;
    margin-bottom: 20px;
    font-size: 17px;

    @media (max-width: 992px){
      font-size: 14px;
    }
    
`

const TrailButton = styled(Button)`
    background-color: ${SECONDARY__BG};
    margin-left: 0;
    align-self:flex-start;
    color: ${PRIMARY__BG};
    font-weight: bold;

    @media (max-width: 768px) {
    width:100%;
  }
`

const ImageArea = styled.div`
    flex: 1;
    margin-bottom: 0px;
`

const Image = styled.img`
    width: 100%;
`

function FeatureTrail() {
    return (
        <Wrapper>
            <Container>
                <TextArea>
                    <Title>
                        Diversify your portfolio.
                    </Title>
                    <SubText>
                        Create an even more impressive portfolio by creating case studies for your projects. Simply follow our step-by-step guide.
                    </SubText>
                    <TrailButton>
                        start free trail
                    </TrailButton>
                </TextArea>
                <ImageArea>
                    <Image src="/assets/Page Image.png" alt="" />
                </ImageArea>
            </Container>
        </Wrapper>
    )
}

export default FeatureTrail
