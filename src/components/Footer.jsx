import styled from 'styled-components'
import { HERO__BG, TEXT__SECONDARY } from '../constants/color'

const Wrapper = styled.footer`
    background-color: ${HERO__BG};
`

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 40px 0;
    display: flex;
    gap: 40px;

    @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Holder = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

const Title = styled.p`
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 10px;
`

const SubText = styled.p`
    text-transform: capitalize;
    opacity: 0.5;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 14px;
`

const content= [
    {
        title: "sitemap",
        option:["homepage","pricing","testimonials","features"]
    },
    {
        title: "resouces",
        option: ["support","contact","FAQ"]
    },
    {
        title: "company",
        option: ["about","customers","blog"]
    },
    {
        title: "portfolios",
        option: ["sara andrews", "mathew higgins","janice dave"]
    }
]

function Footer() {
    return (
        <Wrapper>
            <Container>
                <Holder style={{flex: 4}}>
                    <div>
                        <Title>Fiber</Title>
                        <SubText>With Fiber, you can setup your won personal portfolio in minutes with a dozen of premade templates.</SubText>
                    </div>
                    <SubText style={{justifySelf:'flex-end'}}>Made with &hearts; in the Netherland.</SubText>
                </Holder>
                {content.map(con =>(
                    <Holder>
                        <Title>{con.title}</Title>
                        {con.option.map(opt => (
                                <SubText>{opt}</SubText>
                        ))}
                    </Holder>
                ))}
            </Container>
        </Wrapper>
    )
}

export default Footer
