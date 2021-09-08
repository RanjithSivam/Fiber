import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  DARK__BG,
  SECONDARY__BG,
  TEXT__DARK,
  TEXT__PRIMARY__BLACK,
} from "../constants/color";
import DarkModeContext from "../context/darkMode";
import { Button } from "./Button";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
`;

const Wrapper = styled.div`
  height: 70px;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.theme===true ? TEXT__DARK : TEXT__PRIMARY__BLACK)};

  @media (max-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  margin: 0 10px;
  cursor: pointer;
`;

const Title = styled.p`
  text-transform: capitalize;
  font-weight: bold;
  color: ${(props) => (props.theme===true ? TEXT__DARK : TEXT__PRIMARY__BLACK)};
`;

const NavbarOptions = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const Dropdown = styled.img`
  display: none;
  width: 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    display: ${(props) => (props.showDrop ? "block" : "none")};
    top: 50px;
    width: 100%;
    background-color: ${(props) => (props.theme===true ? DARK__BG : SECONDARY__BG)};
    box-shadow: 0 0 4px 1px
      ${(props) => (props.theme===true ? SECONDARY__BG : DARK__BG)};
    border-radius: 10px;
  }
`;

const DropLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
  align-items: center;
  color: ${(props) => (props.theme===true ? TEXT__DARK : TEXT__PRIMARY__BLACK)};
`;

const DropButtons = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  margin: 20px 0;
  align-items: center;
`;

const DarkMode = styled.div`
    cursor: pointer;
`

function Navbar() {
  const [drop, setDrop] = useState(false);
  const { dark, changeTheme } = useContext(DarkModeContext);

  const changeDrop = () => {
    setDrop(!drop);
  };

  return (
    <Wrapper>
      <Container>
        <div className="navbar__title">
          <Title theme={dark}>fiber</Title>
        </div>
        <Links theme={dark}>
          <Link>community</Link>
          <Link>pricing</Link>
          <Link>features</Link>
        </Links>
        <DarkMode onClick={changeTheme}>
          {!dark ? (
            <img src="https://img.icons8.com/material-outlined/24/000000/partly-cloudy-night.png" />
          ) : (
            <img src="https://img.icons8.com/material-outlined/24/000000/sun.png"/>
          )}
        </DarkMode>
        <NavbarOptions>
          <Button>sign in</Button>
          <Button primary>sign up</Button>
        </NavbarOptions>
        <Dropdown
          src="\assets\Hamburger Menu.svg"
          alt="drop-down"
          onClick={changeDrop}
        />
        <DropdownContent showDrop={drop} theme={dark}>
          <DropLinks theme={dark}>
            <Link>community</Link>
            <Link>pricing</Link>
            <Link>features</Link>
          </DropLinks>
          <DropButtons>
            <Button theme={dark}>sign in</Button>
            <Button primary theme={dark}>
              sign up
            </Button>
          </DropButtons>
        </DropdownContent>
      </Container>
    </Wrapper>
  );
}

export default Navbar;
