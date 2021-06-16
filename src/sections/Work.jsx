import styled from 'styled-components';
import HangmanImage from "../assets/images/hangman/hangman.jpg";
import MobileImage521ATE from "../assets/images/521ATE/521ATEscreenshot.png";
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

// const Image = styled.div``;

// const ImageContainer = styled.div``;

// const TagList = styled.ul``;

// const Text = styled.div``;

export const Work = () => {
  return (
    <Section>
      <Content>
        <WorkTitle>Work</WorkTitle>
        <WorkWrapper>
          <WorkCard
            title={"Hangman"}
            description={"Hangman game designed to be like playing on a Gameboy. Users can select their difficulty and have six tries to guess the word."}
            tags={["React.js"]}
            image={HangmanImage}
            preview={"https://react-hangman-sk521.herokuapp.com/"}
            github={"https://github.com/sk521/kwon-hangman"}
          />
          <WorkCard
            title={"521ATE"}
            description={" 521ATE is an event-coordinating mobile application that allows users to decide on a meal within minutes, with restaurants generated from a geographical midpoint amongst the users"}
            tags={["React-Native", "Koa", "Socket.io"]}
            image={MobileImage521ATE}
            width={"50%"}
            height={"50%"}
            // preview={[]}
            github={["https://github.com/1710-capstone-521ATE/capstone"]}
           />
        </WorkWrapper>
      </Content>
    </Section>
  )
}
