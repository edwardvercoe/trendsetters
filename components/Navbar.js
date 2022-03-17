import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

import trendlogo from "@/assets/navtrendlogo.png";
import heroBG from "@/assets/hero.png";
// import navbackground from "@/assets/navbackground.png";

import bp from "@/styles/breakpoints";

export default function Navbar() {
  // state to keep track of how many px scrolled
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => setScroll(window.scrollY);

  // set up listener on window to update scroll state on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledNav scrollValue={scroll} className={scroll > 500 ? "navFold" : null}>
      <StyledFigure>
        <Image src={heroBG} layout="fixed" alt="trendsetters" />
      </StyledFigure>
      <NavInner>
        <Logo>
          <Image lahout="raw" src={trendlogo} alt="trendsetters logo" />
        </Logo>
        <div className="buttonsDiv">
          <a href="#fold">
            <StyledButton className="btn-cta">Nominate Now</StyledButton>
          </a>
          <a href="#question">
            <StyledButton>Ask a Q</StyledButton>
          </a>
        </div>
      </NavInner>
    </StyledNav>
  );
}

const StyledButton = styled.button`
  border: 1px solid var(--color-white);
  display: inline;
  margin-right: 20px;
  background-color: transparent;
  color: var(--color-white);
  padding: 9px 35px;
  border-radius: 6px;
  font-size: 0.813rem;
  cursor: pointer;
  margin-bottom: 13px;
  margin-top: 13px;

  &.btn-cta {
    background-color: var(--color-white);
    color: #c6417f;
  }

  ${bp.device.mobile} {
    display: none;
    visibility: hidden;
  }
`;

const Logo = styled.figure`
  width: 146px;
  height: 41px;
  position: relative;
  padding: 0;
  margin: 11px 0 7px 40px;
  display: inline-block;
`;

const StyledFigure = styled.figure`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .buttonsDiv {
    padding-right: 20px;
  }
`;

const StyledNav = styled.div`
  position: fixed;
  top: ${(props) => (props.scrollValue > 500 ? "0" : "-60px")};
  opacity: ${(props) => (props.scrollValue > 500 ? "1" : "0")};

  left: 0;
  width: 100%;
  height: 60px;
  z-index: 999;
  transition: var(--transition-global);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  overflow: hidden;
  /* background-color: white; */
`;
