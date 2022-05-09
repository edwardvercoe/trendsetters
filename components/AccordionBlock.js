import React from "react";
import styled from "styled-components";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import bp from "@/styles/breakpoints";

import { Accordion } from "@mantine/core";

export default function AccordionBlock() {
  return (
    <Section>
      <Container>
        <BlurbCopy>
          <p>
            It’s your opportunity to nominate your favourite teams and individuals across 7 categories celebrating; innovation, collaboration, business growth and delivering on our purpose to inform,
            advocate and inspire all Australians.
          </p>
          <h2>
            AWARD <span>categories</span>
          </h2>
        </BlurbCopy>

        <AccordionContainer>
          <Accordion iconPosition="right" iconSize={20}>
            <Accordion.Item label={<h5>The Stronger Together Award for Collaboration & Teamwork</h5>}>
              <strong className="acc-success">Measures of success</strong>
              <p>- High level of collaboration and engagement</p>
              <p>- Accountability (ability to demonstrate shared effort and results)</p>
              <p>- Diversity in thinking</p>
              <p>- Strategic outcome</p>

              <div className="eligibility">
                <strong>Eligibility</strong>
                <p>All permanent commercial content roles are eligible, excluding GM’s</p>
              </div>
            </Accordion.Item>

            <Accordion.Item label={<h5>The Above & Beyond Award for Customer Success</h5>}>
              <strong className="acc-success">Measures of success</strong>
              <p>- Responses that solve client needs</p>
              <p>- CSAT score - % increase</p>
              <p>- Proactive partnerships (anticipating and adapting changes in the market)</p>
              <p>- On-time/efficiency in delivery</p>

              <div className="eligibility">
                <strong>Eligibility</strong>
                <p>All permanent commercial content roles are eligible, excluding GM’s</p>
              </div>
            </Accordion.Item>

            <Accordion.Item label={<h5>The Big Catch Award for New Business</h5>}>
              <strong className="acc-success">Measures of success</strong>
              <p>- Identification of growth opportunities</p>
              <p>- Leadership and ownership of plans</p>
              <p>- % of opportunities converted</p>
              <p>- Relationship management and engagement </p>

              <div className="eligibility">
                <strong>Eligibility</strong>
                <p>All permanent commercial content roles are eligible, excluding GM’s</p>
              </div>
            </Accordion.Item>
            <Accordion.Item label={<h5>The Blue Sky and Beyond Award for Innovation & Creativity</h5>}>
              <strong className="acc-success">Measures of success</strong>
              <p>- Excellence in content and creative</p>
              <p>- Originality of approach and storytelling </p>
              <p>- Innovative design and delivery</p>
              <p>- Richness and depth of content</p>

              <div className="eligibility">
                <strong>Eligibility</strong>
                <p>All permanent commercial content roles are eligible, excluding GM’s</p>
              </div>
            </Accordion.Item>
            <Accordion.Item label={<h5>The MVP Award For Initiative & Tenacity</h5>}>
              <strong className="acc-success">Measures of success</strong>
              <p>- High level of initiative and ownership</p>
              <p>- Impact of work</p>
              <p>- Level of endeavour, courage and tenacity</p>
              <p>- Depth of knowledge and expertise</p>
              <div className="prize">
                <strong>Prize</strong>
                <p>Trendsetting Team of the Year</p>
                <p>Team Day off</p>
                <p>$50 voucher pp x no. of people in team</p>
              </div>
              <div className="eligibility">
                <strong>Eligibility</strong>
                <p>All permanent commercial content roles are eligible, excluding GM’s</p>
              </div>
            </Accordion.Item>
            <Accordion.Item label={<h5>The Storytelling Award for Audience Engagement</h5>}>
              <strong className="acc-success">Measures of success</strong>
              <p>- Demonstrable subscription results or audience engagement</p>
              <p>- Innovation and originality</p>
              <p>- Business success</p>
              <p>- Level of storytelling skills</p>
              <div className="eligibility">
                <strong>Eligibility</strong>
                <p>All permanent commercial content roles are eligible, excluding GM’s</p>
              </div>{" "}
            </Accordion.Item>
            <Accordion.Item label={<h5>The 360 Award for Business Unit Of The Year</h5>}>
              <strong className="acc-success">Measures of success</strong>
              <p>- % of growth in revenue</p>
              <p>- Margin %</p>
              <p>- Achievement of cost budget</p>
              <p>- Outstanding business success</p>
              <p>- Excellence and impact of work/content</p>
              <p>- Demonstrable improvement over 12 months</p>
              <div className="eligibility">
                <strong>Eligibility</strong>
                <p>All permanent commercial content roles are eligible, excluding GM’s</p>
              </div>{" "}
            </Accordion.Item>
          </Accordion>
        </AccordionContainer>
      </Container>
    </Section>
  );
}

const AccordionContainer = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 760px;

  .mantine-Accordion {
    &-control {
      padding-top: 0;
      padding-bottom: 0;
    }

    &-content {
      font-family: "Montserrat", sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-size: 0.875rem;
      color: var(--color-font);
      p {
        margin: 0;
        line-height: 1.57;
      }
      .eligibility,
      .prize {
        padding-top: 18px;
      }
      .acc-success {
        padding-bottom: 4px;
        position: relative;
        display: block;
      }
    }
  }
`;

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
  }

  h2 {
    margin-top: 64px;
    margin-bottom: 40px;
  }
`;
