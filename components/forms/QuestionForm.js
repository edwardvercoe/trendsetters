import React, { useState } from "react";
import Section from "@/components/Section";
import Container from "@/components/Container";

import { TextInput, Textarea } from "@mantine/core";

import styled from "styled-components";

export default function QuestionForm() {
  const [questionName, setQuestionName] = useState("");
  const [question, setQuestion] = useState("");

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    const data = { "form-name": "question-form", questionName, question };

    fetch("/", {
      method: "POST",
      //   headers: { "Content-Type": "multipart/form-data; boundary=random" },
      body: encode(data),
    })
      .then(() => router.push("/success"))
      .catch((error) => console.log("Form Submission Failed!"));

    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "questionName") {
      return setQuestionName(value);
    }
    if (name === "question") {
      return setQuestion(value);
    }
  };

  return (
    <Section>
      <Container>
        <FormWrapper>
          <form onSubmit={handleSubmit} name="question-form" action="/success" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="question-form" />

            <Styledh4>Submit the form below and we will answer as soon as we can</Styledh4>

            <TextInput type="text" placeholder="Name (Optional)" name="questionName" value={questionName} onChange={handleChange} />
            <span>Name (Optional)</span>

            <Textarea type="text" placeholder="Question" name="question" minRows={4} required value={question} onChange={handleChange} />
            <span>Question</span>

            <StyledButton className="submitForm" type="submit">
              Submit
            </StyledButton>
          </form>
        </FormWrapper>
      </Container>
    </Section>
  );
}

const FormWrapper = styled.div`
  margin: 40px auto;
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 80px;
`;

const StyledButton = styled.button`
  cursor: pointer;
`;

const Styledh4 = styled.h4`
  text-transform: unset;
  text-align: center;
`;
