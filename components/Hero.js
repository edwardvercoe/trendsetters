import React from "react";
import styled from "styled-components";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

import heroImage from "@/assets/hero.png";
import ModelFiber from "@/components/model/ModelFiber";

export default function ProjectHero() {
  return (
    <Section fullHeight noPadding>
      <ImageBlurContainer>
        <Image objectPosition="center top" objectFit="cover" layout="fill" src={heroImage} alt="Hero image" />
      </ImageBlurContainer>
      <InnerContainer></InnerContainer>
      <ModelContainer>
        <ModelFiber />
      </ModelContainer>
    </Section>
  );
}

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
  margin: 0 auto;
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModelContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
