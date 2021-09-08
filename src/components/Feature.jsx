import { useContext } from 'react'
import styled from 'styled-components'
import { DARK__BG, PRIMARY__BG, SECONDARY__BG, TEXT__DARK, TEXT__PRIMARY__BLACK } from '../constants/color'
import DarkModeContext from '../context/darkMode'
import FeatureCards from './FeatureCards'
import FeatureTrail from './FeatureTrail'
import UserCards from './UserCards'

const Wrapper = styled.div`
    background-color: ${props => props.theme===true ? TEXT__DARK : SECONDARY__BG};
    width: 100%;
    padding: 50px 0;
`

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`

const Small = styled.small`
    color: ${PRIMARY__BG};
    text-transform: capitalize;
    margin-bottom: 10px;
    font-weight: bold;
    display: block;
`

const Title = styled.h1`
    color: ${props => props.theme===true ? DARK__BG : TEXT__PRIMARY__BLACK};
    margin-bottom: 40px;
    max-width: 500px;
    font-size: 40px;

    @media (max-width: 768px) {
    font-size: 30px
  }
`

const CardContainer = styled.div`
    display: flex;
    gap: 50px;

    @media (max-width: 768px) {
    flex-direction: column;
    
  }
`

const UserComments = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
    flex-direction: column;
  }
`

export default function Feature() {

    const {dark} = useContext(DarkModeContext)

    return (
        <Wrapper theme={dark}>
            <Container>
                <Small>
                    why fiber?
                </Small>
                <Title theme={dark}>
                    A good portfolio means good employability.
                </Title>
                <CardContainer>
                    <FeatureCards icon={'/assets/time.svg'} primaryText={"Build in minutes"} secondaryText={"With a selection of premade templates, you can build out a portfolio in less than 10 minutes."}/>
                    <FeatureCards icon={'/assets/code.svg'} primaryText={"Add custom CSS"} secondaryText={"Customize your personal portfolio even more with the ability to add your own custom CSS styles."}/>
                    <FeatureCards icon={'/assets/allSizes.svg'} primaryText={"Responsive"} secondaryText={"All Fiber templates are fully responsive to ensure the experience is seemless across all devices."}/>
                </CardContainer>

                <FeatureTrail />

                <UserComments>
                    <UserCards image="\assets\User Avatar 2.svg" username="sara andrews" amount="100" comment="Setting up your profile with fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k"/>
                    <UserCards image="\assets\User Avatar.svg" username="mathew higgins" amount="20" comment="Setting up your profile with fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k"/>
                    <UserCards image="\assets\User Avatar 32.svg" username="janice dave" amount="30" comment="Setting up your profile with fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k"/>
                </UserComments>
            </Container>
        </Wrapper>
    )
}
