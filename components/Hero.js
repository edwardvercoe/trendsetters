import React from "react";
import styled from "styled-components";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

import heroImage from "@/assets/hero.png";
import ModelFiber from "@/components/model/ModelFiber";

import heroimg from "@/assets/heroimg.png";

export default function ProjectHero() {
  return (
    <Section fullHeight noPadding>
      <ImageBlurContainer>
        <Image objectPosition="center top" objectFit="cover" layout="fill" src={heroImage} alt="Hero image" />
      </ImageBlurContainer>
      <ModelContainer>
        <ModelFiber />
      </ModelContainer>
      <StyledContainer>
        <InnerContainer>
          <StyledFigure>
            <Image src={heroimg} alt="trendsetters logo" />
          </StyledFigure>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque suscipit assumenda ab officiis soluta cupiditate quam quas enim at!</p>
          <div className="buttonsDiv">
            <a href="#fold">
              <StyledButton>Nominate Now</StyledButton>
            </a>
            <StyledButton>Ask a Q</StyledButton>
          </div>
        </InnerContainer>
      </StyledContainer>
    </Section>
  );
}

const StyledButton = styled.button`
  border: 1px solid var(--color-white);
  display: inline;
  margin-right: 20px;
  background-color: transparent;
  color: var(--color-white);
  padding: 14px 35px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
`;

const StyledContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: var(--max-width);
  position: relative;
  height: 100%;
  padding-left: var(--padding-sides);
  padding-right: var(--padding-sides);
`;
const StyledFigure = styled.figure`
  width: 100%;
  max-width: 371px;
  margin: 0;
`;

const ImageBlurContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  filter: blur(4px);
`;

const InnerContainer = styled.div`
  color: var(--color-white);

  position: relative;
  width: 100%;
  max-width: var(--max-width);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 420px;

  .buttonsDiv {
    padding-top: 30px;
  }
`;

const ModelContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
