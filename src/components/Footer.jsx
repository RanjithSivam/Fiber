import { useContext } from 'react'
import styled from 'styled-components'
import { DARK__BG, HERO__BG, TEXT__DARK, TEXT__PRIMARY__BLACK } from '../constants/color'
import DarkModeContext from '../context/darkMode'

const Wrapper = styled.footer`
    background-color: ${props => props.theme===true ? DARK__BG : HERO__BG};
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
    color: ${props => props.theme===true ? TEXT__DARK : TEXT__PRIMARY__BLACK};

`

const SubText = styled.p`
    text-transform: capitalize;
    opacity: 0.5;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 14px;
    color: ${props => props.theme===true ? TEXT__DARK : TEXT__PRIMARY__BLACK};

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

    const {dark} = useContext(DarkModeContext)

    return (
        <Wrapper theme={dark}>
            <Container>
                <Holder style={{flex: 4}}>
                    <div>
                        <Title theme={dark}>Fiber</Title>
                        <SubText theme={dark}>With Fiber, you can setup your won personal portfolio in minutes with a dozen of premade templates.</SubText>
                    </div>
                    <SubText style={{justifySelf:'flex-end'}} theme={dark}>Made with &hearts; in the Netherland.</SubText>
                </Holder>
                {content.map(con =>(
                    <Holder>
                        <Title theme={dark}>{con.title}</Title>
                        {con.option.map(opt => (
                                <SubText theme={dark}>{opt}</SubText>
                        ))}
                    </Holder>
                ))}
            </Container>
        </Wrapper>
    )
}

export default Footer
