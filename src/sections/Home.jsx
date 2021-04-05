import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  height: 90vh;
`;

const Info = styled.div`
  padding: 150px 150px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1920px;
  align-items: center;
`;

const Hello = styled.h1`
  font-size: 9em;
  font-family: "Roboto", "Lato", sans-serif;
  letter-spacing: 0.1em;
`;

const Line = styled.span`
  width: 10%;
  border-bottom: 2px solid #F5F5F5;
  margin: 0.1em;
`;

const Intro = styled.p`
  color: #F5F5F5;
  text-align: left;
  font-size: 1.35em;
  margin-left: 1.2em;
`;

const Name = styled.span`
  color: #3A8370;
  font-weight: bold;
`;

export const Home = () => {
  return (
    <Section>
      <Info>
        <Hello>HELLO</Hello>
        <Line></Line>
        <Intro>
          I'm <Name>Samuel</Name>, a developer based in NJ/NYC.<br></br>
          I like to build digital experiences that help people.<br></br>
          Lets build something together.
        </Intro>
      </Info>
    </Section>
  )
}
