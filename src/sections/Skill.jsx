import styled from 'styled-components';
import { JavaScriptIcon, NodeJSIcon, ReactIcon, ReduxIcon, TypescriptIcon, HTMLIcon, CSSIcon, PostGresSqlIcon, GitSkillIcon } from '../assets/svg/icons';

const Section = styled.section`
  padding-top: 10em;
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
  position: relative;
`;

const SkillTitle = styled.h1`
  font-size: 6.5em;
  letter-spacing: 0.05em;
`;

const SkillsContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
`;

export const Skill = () => {
  return (
    <Section>
      <Content>
        <SkillTitle>Skills</SkillTitle>
        <SkillsContainer>
          <JavaScriptIcon />
          <NodeJSIcon />
          <ReactIcon />
          <ReduxIcon />
          <TypescriptIcon />
          <HTMLIcon />
          <CSSIcon />
          <PostGresSqlIcon />
          <GitSkillIcon />
        </SkillsContainer>
      </Content>
    </Section>
  );
}
