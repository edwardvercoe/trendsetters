import React, { useState } from "react";
import { useRouter } from "next/router";
import Container from "@/components/Container";
import Section from "@/components/Section";
import IndividualForm from "@/components/forms/IndividualForm";
import TeamForm from "@/components/forms/TeamForm";
import styled from "styled-components";
import Head from "next/head";

import Hero from "@/components/Hero";
import Banner from "@/components/Banner";

import { TextInput, Chip, Chips } from "@mantine/core";
import PlaceholderForm from "@/components/forms/PlaceholderForm";
import QuestionForm from "@/components/forms/QuestionForm";
import AccordionBlock from "@/components/AccordionBlock";
import bp from "@/styles/breakpoints";
import Navbar from "@/components/Navbar";
import PrizesBlock from "@/components/PrizesBlock";

export default function HomePage() {
  const [submitterName, setSubmitterName] = useState("");
  const [submissionType, setSubmissionType] = useState("placeholder");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "submitterNameMaster") {
      return setSubmitterName(value);
    }
  };

  return (
    <main>
      <Head>
        <title>TRENDsetters</title>
        <meta name="description" content="KILLA KREATIVE." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <PrizesBlock />
      <AccordionBlock />
      <Section>
        <Container>
          <Heading id="fold">
            NOMINATION <span>form</span>
          </Heading>
          <InnerContainer>
            <TextInput placeholder="Your name" name="submitterNameMaster" value={submitterName} onChange={handleChange} />
            <span className="formSpan">Name of person submitting the nomination</span>

            <div className="flexy">
              <div className="inlineBlock">
                <p>Are you nominating an</p>
              </div>
              <ChipsContainer>
                <Chips variant="filled" spacing="md" radius="xs" value={submissionType} onChange={setSubmissionType}>
                  <Chip value="individual">Individual</Chip>
                  <Chip value="team">Team</Chip>
                </Chips>
              </ChipsContainer>
            </div>

            <span className="formSpan">Select individual or team nominations</span>
            <div className="spacing"></div>
            {/* <PlaceholderForm submissionType={submissionType} /> */}
            <IndividualForm submitterName={submitterName} submissionType={submissionType} />

            <TeamForm submitterName={submitterName} submissionType={submissionType} />
            <div className="spacing"></div>
          </InnerContainer>
        </Container>
      </Section>

      <Banner />
      <QuestionForm />
    </main>
  );
}

const ChipsContainer = styled.div`
  position: relative;

  ${bp.device.mobile} {
    display: block;
  }
`;

const Heading = styled.h2`
  text-align: center;
  padding-top: 100px;
  padding-bottom: 50px;
`;

const InnerContainer = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;

  .spacing {
    padding-bottom: 60px;
  }

  .inlineBlock {
    display: inline-block;
    ${bp.device.mobile} {
      display: block;
    }
  }

  .flexy {
    display: flex;
    align-items: center;
    p {
      color: #727272;
      font-size: 1.125rem;
      padding-right: 10px;
    }

    ${bp.device.mobile} {
      display: block;
    }
  }
`;
