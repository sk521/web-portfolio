import styled from 'styled-components';

const Section = styled.section`

`;

const AboutTitle = styled.h1`
  font-size: 6.5em;
`;

const AboutParagraph = styled.p`
  color: #F5F5F5
`;

export const About = () => {
  return (
    <Section>
      <AboutTitle>About</AboutTitle>
      <AboutParagraph>
        I’m a self-taught developer who is currently open to opportunities. I have experience in Javascript, Typescript, React.js, and Redux. I’m passionate about problem-solving, debugging, and coding applications. I am always looking to grow my skillset and learn new languages, frameworks, and concepts.
      </AboutParagraph>
    </Section>
  )
}
