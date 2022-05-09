import React from "react";
import styled from "styled-components";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import bp from "@/styles/breakpoints";

export default function AccordionBlock() {
  return (
    <Section>
      <Container>
        <BlurbCopy>
          <h2>PRIZES</h2>
          <p>
            All winners from the individual award categories will be eligible to win the major prize of a 5-day trip to our international headquarters in NYC to spend with our local CC team. Return
            Flights & accommodation included.
            <br />
            <br />
            The remaining individual award category winners will receive a $1500 credit to spend at an ‘Education & Event’ of their choice.
            <br />
            <br />
            The winners of the Business unit of the year award will receive a day off, plus a $50 voucher per person to enjoy on their own or with their team.
          </p>
        </BlurbCopy>
      </Container>
    </Section>
  );
}

const BlurbCopy = styled.div`
  position: relative;
  color: var(--color-font);
  font-size: 1.25rem;
  text-align: center;
  margin: 0 auto;
  max-width: 900px;
  margin-top: 95px;

  line-height: 1.3;
  p {
    padding-bottom: 85px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 80px;
      height: 1px;
      transform: translateX(-50%);
      background-color: var(--color-font);
    }

    ${bp.device.mobile} {
      font-size: 1rem;
    }
  }

  h2 {
    margin-top: 64px;
    margin-bottom: 40px;
  }
`;
