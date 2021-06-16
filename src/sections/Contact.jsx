import styled from 'styled-components';

const Section = styled.section`
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
`;

const ContactTitle = styled.h1`
  font-size: 6.5em;
  letter-spacing: 0.05em;
`;

export const Contact = () => {
  return (
    <Section>
      <Content>
        <ContactTitle>Contact</ContactTitle>
      </Content>
    </Section>
  )
}
