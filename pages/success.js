import React from "react";
import styled from "styled-components";

import Section from "@/components/Section";
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";

import heroImage from "@/assets/hero.png";
import ModelFiber from "@/components/model/ModelFiber";

export default function ThankYou() {
  return (
    <Section fullHeight noPadding>
      <ImageBlurContainer>
        <Image objectPosition="center center" objectFit="cover" layout="fill" src={heroImage} alt="Hero image" />
      </ImageBlurContainer>

      <ModelContainer>
        <ModelFiber />
      </ModelContainer>
      <InnerContainer>
        <h1>Thank you for submitting your nomination!</h1>
        <div className="buttonsDiv">
          <Link passHref href="/">
            <StyledButton>Back home</StyledButton>
          </Link>
        </div>
      </InnerContainer>
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
  transition: var(--transition-global);

  &:hover {
    background-color: var(--color-accent);
    border-color: var(--color-accent);
  }
`;

const InnerContainer = styled.div`
  color: var(--color-white);

  position: relative;
  z-index: 99;
  width: 100%;
  max-width: var(--max-width);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 var(--padding-sides);
  margin: 0 auto;

  h1 {
    color: var(--color-white);
    font-size: 2rem;
    max-width: 500px;
  }

  .buttonsDiv {
    padding-top: 30px;
  }
`;

const ImageBlurContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const ModelContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
