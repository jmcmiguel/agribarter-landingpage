import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header, {
  NavLink,
  NavLinks,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
import VeggiesImage from "images/veggies.jpg";
import Timer from "../hero/Timer";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-green-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url(${VeggiesImage});
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-gray-900 opacity-75`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto h-screen`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-green-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Heading2 = styled.h1`
  ${tw`mt-10 text-xl text-center lg:text-left sm:text-2xl lg:text-3xl xl:text-4xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const navLinks = [<NavLinks key={1} />];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Heading>
              <span>Agricultural Trading On</span>
              <br />
              <span>E-Barter &nbsp;&nbsp;&nbsp;</span>
              <SlantedBackground>Coming Soon</SlantedBackground>
            </Heading>
            <Heading2>
              <SlantedBackground>
                <Timer />
              </SlantedBackground>
            </Heading2>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
