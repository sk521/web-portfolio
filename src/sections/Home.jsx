import styled from 'styled-components';

const Info = styled.div`
  padding: 250px 200px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1920px;
`;

const Hello = styled.h1`
  font-size: 5em;
  font-family: "Roboto", "Lato", sans-serif;
`;

const Line = styled.hr`
  color: #FFFFFF;
  width: 10%;
`;

export const Home = () => {
  return (
    <section>
      <Info>
        <Hello>HELLO</Hello>
        <Line></Line>
        <p>
          I'm Samuel, a developer based in NJ/NYC. I like to build digital experiences that help people. Lets build something together.
        </p>
      </Info>
    </section>
  )
}
