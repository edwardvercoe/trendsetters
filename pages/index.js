import React, { useState } from "react";
import { useRouter } from "next/router";
import Container from "@/components/Container";
import Section from "@/components/Section";
import IndividualForm from "@/components/forms/IndividualForm";
import styled from "styled-components";

import Hero from "@/components/Hero";

import { TextInput } from "@mantine/core";

import TestForm from "@/components/forms/TestForm";

const HomePage = () => {
  const [submitterName, setSubmitterName] = useState("");

  return (
    <main>
      <Hero />
      <Section>
        <Container>
          <Heading>TRENDsetters nomination form</Heading>
          <InnerContainer>
            {/* <TextInput placeholder="Your name" value={submitterName} onChange={setSubmitterName} /> */}

            {/* <IndividualForm /> */}

            <TestForm />
          </InnerContainer>
        </Container>
      </Section>
    </main>
  );
};

const Heading = styled.h1`
  text-align: center;
`;

const InnerContainer = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
`;

export default HomePage;
