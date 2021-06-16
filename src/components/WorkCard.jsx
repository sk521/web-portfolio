import React from 'react';
import { PlayCircle, Github } from '../assets/svg/icons';
import styled from "styled-components";

const WorkCardContainer = styled.div`
  background-color: rgba(196, 196, 196, 0.2);
  border-radius: 5px;
  margin: 3em;
  display: flex;
  flex-direction: row;
`;

const Title = styled.p`
  font-size: 3em;
  font-weight: bold;
  margin: 0 0 15px;
  padding: 10px 5px;
`;

const Description = styled.p`
  color: #F5F5F5;
  font-size: 1.75em;
  margin: 30px;
`;

const LeftContainer = styled.div`
  padding-top: 1em;
  width: 50%;
`;

const RightContainer = styled.div`
  width: 50%;
`;

const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 10px
`;

const TechTag = styled.li`
  color: #F5F5F5;
  background-color: #3A8370;
  font-weight: bold;
  border-radius: 2px;
  font-size: 1.5em;
  padding: 5px 15px;
`;

const ImageContainer = styled.div`
  padding: 10px;
`;

const Image = styled.img`
  width: ${(props) => props.width ? props.width : '100%'};
  height: ${(props) => props.height ? props.height : '100%'};
`;

const Icon = styled.span`
  fill: #3A8370;
  padding: 18px 16px;
  color: #3A8370;
  letter-spacing: 0.08em;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TextLink = styled.p`
  color: #3A8370;
  font-size: 1.5em;
  font-weight: bold;
`;

const PreviewIconTextLink = styled.a`
  display: flex;
  align-items: center;
  &:hover ${TextLink} {
    color: #F5F5F5;
  }
  &:hover ${Icon} {
    fill: #F5F5F5;
  }
`;

const GithubIconTextLink = styled.a`
  display: flex;
  align-items: center;
  &:hover ${TextLink} {
    color: #F5F5F5;
  }
  &:hover ${Icon} {
    fill: #F5F5F5;
  }
`;



export const WorkCard = (props) => {
  const { title, description, tags, image, width, height, preview, github } = props;
  return (
    <WorkCardContainer>
      <LeftContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TagList>
          {tags.map((tag, index) => (
            <TechTag key={index}>{tag}</TechTag>
          ))}
        </TagList>
      </LeftContainer>
      <RightContainer>
        <ImageContainer>
          <Image
            src={image}
            width={width}
            height={height}
          />
        </ImageContainer>
        <LinkContainer>
          { preview ?
          <PreviewIconTextLink
            href={preview}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <PlayCircle />
            </Icon>
            <TextLink>
              Preview
            </TextLink>
          </PreviewIconTextLink>
          :
          null
          }
          <GithubIconTextLink
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <Github />
            </Icon>
            <TextLink>
              Code
            </TextLink>
          </GithubIconTextLink>
        </LinkContainer>
      </RightContainer>
    </WorkCardContainer>
  )
}
