import React, { useState } from "react";
import { useRouter } from "next/router";
import Container from "@/components/Container";
import Section from "@/components/Section";
import IndividualForm from "@/components/forms/IndividualForm";
import TeamForm from "@/components/forms/TeamForm";
import styled from "styled-components";

import Hero from "@/components/Hero";
import ModelFiber from "@/components/model/ModelFiber";

import { TextInput, Chip, Chips } from "@mantine/core";
import PlaceholderForm from "@/components/forms/PlaceholderForm";

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
      <Hero />
      <Section>
        <Container>
          <Heading id="fold">TRENDsetters nomination form</Heading>
          <InnerContainer>
            <TextInput placeholder="Your name" name="submitterNameMaster" value={submitterName} onChange={handleChange} />
            <span className="formSpan">Name of person submitting the nomination</span>
            <Chips variant="filled" spacing="md" radius="xs" value={submissionType} onChange={setSubmissionType}>
              <Chip value="individual">Individual</Chip>
              <Chip value="team">Team</Chip>
            </Chips>
            <span className="formSpan">Select individual or team nominations</span>
            <div className="spacing"></div>
            <PlaceholderForm submissionType={submissionType} />
            <IndividualForm submitterName={submitterName} submissionType={submissionType} />

            <TeamForm submitterName={submitterName} submissionType={submissionType} />
          </InnerContainer>
        </Container>
      </Section>
    </main>
  );
}

const Heading = styled.h1`
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
`;
