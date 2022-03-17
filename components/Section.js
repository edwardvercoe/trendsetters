import React from "react";
import styled from "styled-components";

export default function Section({ children, fullHeight, noPadding, noBackground, opacityLayer, overflow }) {
  return (
    <StyledSection overflow={overflow} opacityLayer={opacityLayer} fullHeight={fullHeight} noBackground={noBackground} noPadding={noPadding}>
      {children}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  position: relative;
  height: ${(props) => (props.fullHeight ? "100vh" : "auto")};
  /* min-height: 600px; */
  padding-left: ${(props) => (props.noPadding ? "0px" : "var(--padding-sides)")};
  padding-right: ${(props) => (props.noPadding ? "0px" : "var(--padding-sides)")};
  width: 100%;
  /* border: 2px dotted var(--color-accent); */
  width: 100%;
  background-color: var(--color-white);

  overflow: ${(props) => (props.overflow ? "visible !important" : "hidden")};
`;
