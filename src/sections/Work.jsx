import styled from 'styled-components';
// import { images, Images } from "../assets/images";
import { WorkCard } from '../components/WorkCard';

const Section = styled.section`
  padding-top: 10em;
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
  position: relative;
`;

const WorkTitle = styled.h1`
  font-size: 6.5em;
  letter-spacing: 0.05em;
`;

const WorkWrapper = styled.ul`
  // grid-gap: 100px 64px;
  // grid-template-columns: repeat(auto-fill, minmax(30%,1fr));
  // margin: 0;
  // padding: 0;
  // grid-auto-rows: 1fr;
  display: flex;
  flex-direction: column;
`;

// const WorkCard = styled.div`
//   padding: 20px 20px 0;
//   background-color: #fff;
//   box-shadow: 0 0 20px rgb(0 0 0 /16%);
//   border-radius: 3px;
//   cursor: pointer;
//   transition: all .2s;
// `;

const Image = styled.div``;

const ImageContainer = styled.div``;

const TagList = styled.ul``;

const Text = styled.div``;

export const Work = () => {
  return (
    <Section>
      <Content>
        <WorkTitle>Work</WorkTitle>
        <WorkWrapper>
          <WorkCard
            title={"Hangman"}
            description={"Hangman game built with a Gameboy design theme"}
            tags={["React.js"]}
          />
          <WorkCard
            title={"hello"}
            tags={[]}
           />
        </WorkWrapper>
      </Content>
    </Section>
  )
}
