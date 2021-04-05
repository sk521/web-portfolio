import styled from 'styled-components';

const Section = styled.section`
  padding-top: 10em;
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
`;

const WorkTitle = styled.h1`
  font-size: 6.5em;
  letter-spacing: 0.05em;
`;

export const Work = () => {
  return (
    <Section>
      <WorkTitle>Work</WorkTitle>
    </Section>
  )
}
