import React from "react";
import styled from "styled-components";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

import heroImage from "@/assets/hero.png";
import ModelFiber from "@/components/model/ModelFiber";
import bp from "@/styles/breakpoints";

import heroimg from "@/assets/trendlogo.png";

export default function ProjectHero() {
  return (
    <Section fullHeight noPadding>
      <SectionWrap>
        <ImageBlurContainer>
          <Image priority={true} placeholder="blur" objectPosition="center center" objectFit="cover" layout="fill" src={heroImage} alt="Hero image" />
        </ImageBlurContainer>
        <ModelContainer>
          <ModelFiber />
        </ModelContainer>
        <StyledContainer>
          <InnerContainer>
            <ContentWrapper>
              <StyledFigure>
                <Image src={heroimg} alt="trendsetters logo" />
              </StyledFigure>
              <p>The Commercial Content Trendsetters program showcases and recognises individuals and teams doing exceptional work, changing the way we connect our audiences and brands through content to position our business as world class.</p>
              <p>
                <strong>Nominations close May 26th 2023 at 5pm</strong>
              </p>
              <div className="buttonsDiv">
                <a href="#fold">
                  <StyledButton className="btn-cta">Nominate Now</StyledButton>
                </a>
                <a href="#question">
                  <StyledButton>Ask a Q</StyledButton>
                </a>
              </div>
            </ContentWrapper>
          </InnerContainer>
        </StyledContainer>
      </SectionWrap>
    </Section>
  );
}

const SectionWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 20;
`;

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
  margin-bottom: 20px;

  ${bp.device.mobile} {
    min-width: 216px;
  }

  &.btn-cta {
    background-color: var(--color-white);
    color: #c6417f;
  }
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
  background-color: grey;
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

  ${bp.device.mobile} {
    justify-content: flex-end;
    text-align: center;
  }

  .buttonsDiv {
    padding-top: 30px;

    ${bp.device.mobile} {
      padding-bottom: 30px;
    }
  }
`;

const ModelContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
`;
