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
          This year there are 4 team award categories, with the winner(s) of each receiving a <strong>$400 gift card</strong>. <em>Note, a team is between 2-15 people so for example, <strong>if there are 10 people in the team for a piece of work, each person will receive $400.</strong></em>
          <br />
          <br />
          The big team award is The 360 Award for Business Unit of the Year, <strong>with the finalist receiving $5k to spend on a team event.</strong> The award winner will be selected by Mike Connaghan.
          <br />
          <br />
          For the individual awards, we have 3 this year where each person will receive a <br /><strong>$2k Gift card</strong>.
          <br />
          <br />
          The finalists for the Trendsetter of the Year Award for All Round Excellence will be selected by the CC SLT from all individual nominations submitted across all categories (so isn&#39;t open for nominations). <br /><br />These finalists will be asked to submit a 5min video which will be shared with Michael Miller, who will then select the winner. The winner will receive the major prize of <strong>visiting our international headquarters in NYC or our office in London with our local Commercial Content team</strong>. Return flights & accommodation for 5 days (4 nights) are included.
          <br />
          <br />
          <h3>DETAILS</h3>
          <br />
          <strong>To qualify for a Trendsetter award, an employee must meet the below requirements:</strong>
          <br />
          <br />
          - Be a member of Commercial Content (including Medium Rare, Stockhead and Visual Domain). <em>Excludes GMs/CC SLT.</em><br />
          - Must not have formally resigned and be employed at the time winners announced in June 2023<br />
          - Must have been in their role for a minimum of 3 months<br />
          - Not be on a formal performance plan during the program period<br />
          - Must consistently role model News values<br />
          - Must have received at least an &quot;achieved&quot; in their most recent performance rating (ideally high achievement or outstanding)<br />
          <br />
          <br />
          Nomination window is from 3rd February and will close on Friday 26 May 2023 at 5pm.
          <br />
          <br />
          <strong>Final selection process will be completed by end of June 2022. Winners will be announced at a Trendsetter Awards Ceremony on Thursday 29 June 2023.</strong>
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
