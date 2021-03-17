import styled from "styled-components";
import { Github, LinkedIn, Medium } from "../assets/svg/icons"


const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 300
`;

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  max-width: 1920px;
  width: 80%;
  margin: auto;
  text-transform: uppercase;
  font-size: 20px;
  justify-content: space-between;
  font-weight: 700;
  padding: 20px 0px;
`;

const Left = styled.li`
  display: inline-block;
`;

const LeftContainer = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const Icon = styled.span`
  fill: #3A8370;
  padding: 18px 16px;
  color: #3A8370;
`;

const Right = styled.li`
  display: inline-block
`;

const RightContainer = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;


export const Navigation = () => {
  return (
    <>
    <Nav>
      <Container>
        <Left>
          <LeftContainer>
            <li className="icon">
              <a
                href="https://github.com/sk521"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon>
                  <Github />
                </Icon>
              </a>
            </li>
            <li className="icon">
              <a
                href="https://www.linkedin.com/in/samuel-kwon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon>
                  <LinkedIn />
                </Icon>
              </a>
            </li>
            <li className="icon">
              <a
                href="https://medium.com/@samkwon521"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon>
                  <Medium />
                </Icon>
              </a>
            </li>
          </LeftContainer>
        </Left>

        <Right>
          <RightContainer>
            <li>
              <a
                offset="0"
                href="#home"
              >
                <Icon>
                  Home
                </Icon>
              </a>
            </li>
            <li>
              <a
                offset="0"
                href="#about"
              >
                <Icon>
                  About
                </Icon>
              </a>
            </li>
            <li>
              <a
                offset="0"
                href="#work"
              >
                <Icon>
                  Work
                </Icon>
              </a>
            </li>
            <li>
              <a
                offset="0"
                href="#contact"
              >
                <Icon>
                  Contact
                </Icon>
              </a>
            </li>
          </RightContainer>
        </Right>
      </Container>
    </Nav>
    </>
  )
}
