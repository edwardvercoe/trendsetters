import React from "react";
import styled from "styled-components";

export default function PlaceholderForm({ submissionType }) {
  return <PlaceholderDiv submissionType={submissionType}></PlaceholderDiv>;
}

const PlaceholderDiv = styled.div`
  width: 100%;
  min-height: 600px;

  border-radius: 6px;
  background: rgb(255, 255, 255);
  /* background: -moz-linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(250, 250, 250, 1) 30%);
  background: -webkit-linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(250, 250, 250, 1) 30%); */
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(245, 245, 245, 1) 30%);
  display: ${(props) => (props.submissionType == "placeholder" ? "visible" : "none")};
  margin-bottom: 40px;
`;
