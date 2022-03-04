import React from "react";
import styled from "styled-components";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

import heroImage from "@/assets/hero.png";

export default function ProjectHero() {
  return (
    <Section fullHeight noPadding>
      <Image objectPosition="center top" objectFit="cover" layout="fill" src={heroImage} alt="Hero image" />
      <InnerContainer></InnerContainer>
    </Section>
  );
}

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
