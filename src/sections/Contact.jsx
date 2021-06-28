import styled from 'styled-components';
import { LinkedInContactIcon, EmailContactIcon } from "../assets/svg/icons"

const Section = styled.section`
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
`;

const ContactTitle = styled.h1`
  font-size: 6.5em;
  letter-spacing: 0.05em;
`;

const ContactParagraph = styled.p`
  font-size: 1.5em;
  color: #F5F5F5;
`;

const Icon = styled.span`
  fill: #3A8370;
  padding: 18px 16px;
  color: #3A8370;
  letter-spacing: 0.08em;
  width: 90px;
  height: 90px;
`;

const ContactIconContainer = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Contact = () => {
  return (
    <Section>
      <Content>
        <ContactTitle>Contact</ContactTitle>
        <ContactParagraph>
          Want to know more? Lets connect! I'm always open to chatting about new opportunities!
        </ContactParagraph>
        <ContactIconContainer>
          <li className="icon">
              <a
                href="https://www.linkedin.com/in/samuel-kwon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon>
                  <LinkedInContactIcon />
                </Icon>
              </a>
            </li>
          <li>
            <a
              href="https://www.linkedin.com/in/samuel-kwon/"
              target="_blank"
              rel="noopener noreferrer"
              >
                <Icon>
                  <EmailContactIcon />
                </Icon>
              </a>
          </li>
        </ContactIconContainer>
      </Content>
    </Section>
  )
}
