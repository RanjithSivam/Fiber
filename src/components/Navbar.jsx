import React, { useState } from 'react'
import styled from 'styled-components'
import { SECONDARY__BG, TEXT__PRIMARY__BLACK, TEXT__SECONDARY } from '../constants/color'
import { Button } from './Button'

const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;
`

const Wrapper = styled.div`
    height: 70px;

    @media (max-width: 768px) {
        height: 50px;
    }
`

const Links = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: ${TEXT__PRIMARY__BLACK};
    text-transform: capitalize;
    margin: 0 10px;
    cursor: pointer;
`

const Title = styled.p`
    text-transform: capitalize;
    font-weight: bold;
    color: ${TEXT__PRIMARY__BLACK};
`

const NavbarOptions = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`
const Dropdown = styled.img`
    display: none;
    width: 16px;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`

const DropdownContent = styled.div`
    display: none;
    @media (max-width: 768px) {
        position: absolute;
        display: ${props => props.showDrop?"block":"none"};
        top: 50px;
        width: 100%;
        background-color: ${SECONDARY__BG};   
        border-radius: 10px;
    }
`

const DropLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0;
    align-items: center;
`

const DropButtons = styled.div`
    display: flex;
    flex-direction:column-reverse;
    gap: 10px;
    margin: 20px 0;
    align-items: center;
`

function Navbar() {
    const [drop, setDrop] = useState(false)

    const changeDrop = () =>{
        setDrop(!drop);
    }

    return (
        <Wrapper>
            <Container>
                <div className="navbar__title">
                    <Title>fiber</Title>
                </div>
                <Links>
                    <Link>community</Link>
                    <Link>pricing</Link>
                    <Link>features</Link>
                </Links>
                <NavbarOptions>
                    <Button>sign in</Button>
                    <Button primary >sign up</Button>
                </NavbarOptions>
                <Dropdown src="\assets\Hamburger Menu.svg" alt="drop-down" onClick={changeDrop}/>
                <DropdownContent showDrop={drop}>
                    <DropLinks>
                        <Link>community</Link>
                        <Link>pricing</Link>
                        <Link>features</Link>
                    </DropLinks>
                    <DropButtons>
                        <Button>sign in</Button>
                        <Button primary >sign up</Button>
                    </DropButtons>
                </DropdownContent>
            </Container>
        </Wrapper>
    )
}

export default Navbar
