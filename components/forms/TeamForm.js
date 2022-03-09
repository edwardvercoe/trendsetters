import React, { useState, useCallback } from "react";
import { TextInput, Select, Textarea } from "@mantine/core";

import { DatePicker } from "@mantine/dates";
import calendarIcon from "@/assets/calendar.svg";
import Image from "next/image";
import styled from "styled-components";

import { useDropzone } from "react-dropzone";

import { useRouter } from "next/router";

const bytesToMegaBytes = (bytes, roundTo) => (roundTo ? (bytes / (1024 * 1024)).toFixed(roundTo) : bytes / (1024 * 1024));

export default function TeamForm({ submissionType, submitterName }) {
  // state management
  const [nomineeName, setNomineeName] = useState("");
  const [businessUnit, setBusinessUnit] = useState("");
  const [awardCategory, setAwardCategory] = useState("");
  const [entryName, setEntryName] = useState("");
  const [elevatorPitch, setElevatorPitch] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [file, setFile] = useState({});

  const router = useRouter();
  // dropzone files

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections, isFocused, isDragAccept, isDragReject } = useDropzone({ onDrop, maxSize: 300000 });

  // display files that have been uploaded

  const acceptedFileItems = acceptedFiles.map((file) => (
    <span className="success" key={file.path}>
      {file.path} - {bytesToMegaBytes(file.size, 3)} MB
    </span>
  ));

  // end form logic

  // Front end display

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    setCompletionDate(JSON.stringify(completionDate));

    // const newDate = String(pickDate);
    // console.log(newDate);
    // console.log("type of new date is " + typeof newDate);
    const data = { "form-name": "team-form", submitterName, nomineeName, businessUnit, entryName, elevatorPitch, awardCategory, file };

    console.log(data);

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
    if (name === "nomineeName") {
      return setNomineeName(value);
    }
    if (name === "businessUnit") {
      return setBusinessUnit(value);
    }

    if (name === "entryName") {
      return setEntryName(value);
    }

    if (name === "elevatorPitch") {
      return setElevatorPitch(value);
    }

    if (name === "awardCategory") {
      return setElevatorPitch(value);
    }
  };
  return (
    <FormWrapper submissionType={submissionType}>
      <form onSubmit={handleSubmit} name="team-form" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="team-form" />

        <h4>Team Nomination</h4>
        <SecretInput>
          <TextInput type="text" placeholder="Your name" name="submitterName" value={submitterName} />
        </SecretInput>

        <TextInput type="text" placeholder="Nominee's name" id="nominee-name" name="nomineeName" required value={nomineeName} onChange={handleChange} />
        <span>Name of person being nominated</span>

        <TextInput type="text" placeholder="Business unit" name="businessUnit" required value={businessUnit} onChange={handleChange} />
        <span>The name of the business unit the brief came from</span>

        <Select
          type="text"
          placeholder="Award Category"
          name="awardCategory"
          data={[
            { value: "Collaboration and teamwork", label: "Collaboration and teamwork" },
            { value: "Customer Success", label: "Customer Success" },
            { value: "Business Success", label: "Business Success" },
            { value: "Innovation and Innitiative", label: "Innovation and Innitiative" },
            { value: "Chairman’s award for creativity", label: "Chairman’s award for creativity" },
            { value: "Audience Engagement", label: "Audience Engagement" },
            { value: "Business Unit of the year", label: "Business Unit of the year" },
          ]}
          value={awardCategory}
          onChange={setAwardCategory}
          required
        />
        <span>Select from drop down</span>

        <TextInput type="text" placeholder="Entry name" name="entryName" required value={entryName} onChange={handleChange} />
        <span>Use client or campaign title</span>

        <Textarea type="text" placeholder="Elevator pitch" name="elevatorPitch" minRows={4} required value={elevatorPitch} onChange={handleChange} />
        <span>Upload supporting documents</span>

        <StyledDragDrop {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
          <input name="file" type="file" {...getInputProps()} />
          {acceptedFileItems.length ? (
            <span>{acceptedFileItems}</span>
          ) : (
            <p>
              Drag and drop some files here, or click to select files.
              <br />
              Max upload size is 300KB.
            </p>
          )}
          {fileRejections.length ? <span className="error">file too big.. Max file upload size is 300KB</span> : null}
        </StyledDragDrop>
        <span>Upload supporting documents</span>
        {/* 
        <DatePicker
          inputFormat="DD/MM/YYYY"
          type="text"
          placeholder="Completion date"
          name="completionDate"
          icon={<Image src={calendarIcon} alt="calendar icon" />}
          value={completionDate}
          onChange={setCompletionDate}
          required
        />
        <span>Must be within calendar year 2022</span> */}

        <StyledButton className="submitForm" type="submit">
          Submit
        </StyledButton>
      </form>
    </FormWrapper>
  );
}

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const StyledDragDrop = styled.div`
  height: 160px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 6px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: ${(props) => (props.isDragAccept ? `#fefefe` : "#fafafa")};
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;

  span.error {
    color: red;
    font-size: 1.25rem;
  }

  span.success {
    color: green;
    font-size: 1.25rem;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
`;

const FormWrapper = styled.div`
  display: ${(props) => (props.submissionType == "team" ? "visible" : "none")};
`;

const SecretInput = styled.div`
  /* display: none; */
  visibility: hidden;
  height: 0;
  width: 0;
`;