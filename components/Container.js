import React from "react";
import styled from "styled-components";

export default function Container({ children, fullWidth, flex }) {
  return (
    <StyledContainer flex={flex} fullWidth={fullWidth}>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: ${(props) => (props.fullWidth ? "100%" : "var(--max-width)")};
  display: ${(props) => (props.flex ? "flex" : "block")};
`;
