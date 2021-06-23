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

const SkillsContainer = styled.ul`
  display: flex;
  width: 80%;
  margin: auto;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: space-around;
`;

const SkillIcon = styled.li`
  margin: 1em;
`;

export const Skill = () => {
  return (
    <Section>
      <Content>
        <SkillTitle>Skills</SkillTitle>
        <SkillsContainer>
          <SkillIcon>
            <JavaScriptIcon />
          </SkillIcon>
          <SkillIcon>
            <NodeJSIcon />
          </SkillIcon>
          <SkillIcon>
            <ReactIcon />
          </SkillIcon>
          <SkillIcon>
            <ReduxIcon />
          </SkillIcon>
          <SkillIcon>
            <TypescriptIcon />
          </SkillIcon>
          <SkillIcon>
            <HTMLIcon />
          </SkillIcon>
          <SkillIcon>
            <CSSIcon />
          </SkillIcon>
          <SkillIcon>
            <PostGresSqlIcon />
          </SkillIcon>
          <SkillIcon>
            <GitSkillIcon />
          </SkillIcon>
        </SkillsContainer>
      </Content>
    </Section>
  );
}
