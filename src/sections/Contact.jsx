import styled from 'styled-components';
import { LinkedInContactIcon, EmailContactIcon } from "../assets/svg/icons"

const Section = styled.section`
  padding-top: 10em;
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

const ContactIconContainer = styled.ul`
  display: flex;
  justify-content: center;
`;

const IconWrapper = styled.span`
  fill: #3A8370;
  padding: 18px 16px;
  color: #3A8370;
  &:hover {
    fill: #F5F5F5;
  }
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
                <IconWrapper>
                  <LinkedInContactIcon />
                </IconWrapper>
              </a>
            </li>
          <li>
            <a
              href="mailto:samkwon521@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >
                <IconWrapper>
                  <EmailContactIcon />
                </IconWrapper>
              </a>
          </li>
        </ContactIconContainer>
      </Content>
    </Section>
  )
}
