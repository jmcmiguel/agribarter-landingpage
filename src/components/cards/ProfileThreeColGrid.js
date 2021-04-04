import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import ElaisaImage from "images/elaisa.jpg";
import JustineImage from "images/justine.jpg";
import GamelImage from "images/gamel.jpg";
import MichaelImage from "images/michael.jpeg";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${props =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-green-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-green-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  heading = "Meet The Makers.",
  subheading = "Our Team",
  description = "Our team is composed of four adept IT students from Bataan Peninsula State University. Each with their own unique set of skills. ",
  cards = [
    {
      imageSrc: ElaisaImage,
      position: "Founder / QA Lead",
      name: "Elaisa Magpantay",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://www.facebook.com/elai.canmag24  ",
          icon: FacebookIcon,
        },
      ],
    },
    {
      imageSrc: JustineImage,
      position: "Team Leader / UI Designer",
      name: "Justine Marie Padilla",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/justine-marie-padilla-350974175/",
          icon: LinkedinIcon,
        },
        {
          url: "https://www.facebook.com/jastenmare",
          icon: FacebookIcon,
        },
      ],
    },
    {
      imageSrc: GamelImage,
      position: "UX Designer",
      name: "Gamel Iloco",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://www.facebook.com/gamel.iloco",
          icon: FacebookIcon,
        },
      ],
    },
    {
      imageSrc: MichaelImage,
      position: "Tech Lead",
      name: "John Michael Miguel",
      links: [
        {
          url: "https://www.linkedin.com/in/john-michael-miguel-5b23181b2/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/poodzia",
          icon: GithubIcon,
        },
        {
          url: "https://www.facebook.com/johnmichaelmiguelc/",
          icon: FacebookIcon,
        },
      ],
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
