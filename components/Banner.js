import React from "react";
import styled from "styled-components";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import bp from "@/styles/breakpoints";

import bannerImg from "@/assets/banner.png";

export default function Banner() {
  return (
    <Section>
      <StyledFigure>
        <Image objectPosition="center center" objectFit="cover" layout="fill" src={bannerImg} alt="Hero image" />
      </StyledFigure>

      <InnerContainer>
        <StyledH2>Have a question about TRENDsetters?</StyledH2>
      </InnerContainer>
    </Section>
  );
}

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 280px;
  z-index: 1;
  position: relative;
`;

const StyledFigure = styled.figure``;

const StyledH2 = styled.h2`
  color: white;
  font-weight: 300;
  font-size: 3.875rem;

  text-align: center;
  ${bp.device.mobile} {
    font-size: 2rem;
  }
`;
