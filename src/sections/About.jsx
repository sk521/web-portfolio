import styled from 'styled-components';

const Section = styled.section`
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
`;

const AboutTitle = styled.h1`
  font-size: 6.5em;
  letter-spacing: 0.05em;
`;

const AboutParagraph = styled.p`
  color: #F5F5F5;
  font-size: 1.75em;
  text-align: center;
`;

export const About = () => {
  return (
    <Section>
      <Content>
        <AboutTitle>About</AboutTitle>
        <AboutParagraph>
          I’m a self-taught developer who is currently open to opportunities. I have experience in Javascript, Typescript, React.js, and Redux. I’m passionate about problem-solving, debugging, and coding applications. I am always looking to grow my skillset and learn new languages, frameworks, and concepts.
        </AboutParagraph>
      </Content>
    </Section>
  )
}
