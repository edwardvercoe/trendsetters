import React, { useState, useCallback } from "react";
import { TextInput, Select, Textarea } from "@mantine/core";

import { DatePicker } from "@mantine/dates";
import calendarIcon from "@/assets/calendar.svg";
import Image from "next/image";
import styled from "styled-components";

import { useDropzone } from "react-dropzone";

const bytesToMegaBytes = (bytes, roundTo) => (roundTo ? (bytes / (1024 * 1024)).toFixed(roundTo) : bytes / (1024 * 1024));

export default function IndividualForm(props) {
  // state management
  const [nomineeName, setNomineeName] = useState("");
  const [businessUnit, setBusinessUnit] = useState("");
  const [awardCategory, setAwardCategory] = useState("");
  const [entryName, setEntryName] = useState("");
  const [elevatorPitch, setElevatorPitch] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [file, setFile] = useState({});
  // dropzone files

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles, isFocused, isDragAccept, isDragReject } = useDropzone({ onDrop });

  // display files that have been uploaded

  const acceptedFileItems = acceptedFiles.map((file) => (
    <span key={file.path}>
      {file.path} - {bytesToMegaBytes(file.size, 2)} MB
    </span>
  ));

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     if (name === "nominee-name") {
  //       return setNomineeName(value);
  //     }
  //     if (name === "business-unit") {
  //       return setBusinessUnit(value);
  //     }
  //     if (name === "award-category") {
  //       return setAwardCategory(value);
  //     }

  //     if (name === "entry-name") {
  //       return setEntryName(value);
  //     }

  //     if (name === "elevator-pitch") {
  //       return setElevatorPitch(value);
  //     }
  //     if (name === "completion-date") {
  //       return setPickDate(value);
  //     }
  //   };

  // end form logic

  // Front end display

  return (
    <>
      <form name="individual-form" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="individual-form" />

        <h4>Individual Nomination</h4>

        <TextInput placeholder="Nominee's name" id="nominee-name" name="nominee-name" required />
        <span>Name of person being nominated</span>

        <TextInput placeholder="Business unit" name="business-unit" required />
        <span>The name of the business unit the brief came from</span>

        <Select
          placeholder="Award Category"
          name="award-category"
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
          value={awardCategory}
          onChange={setAwardCategory}
          required
        />
        <span>Select from drop down</span>

        <TextInput placeholder="Entry name" name="entry-name" required />
        <span>Use client or campaign title</span>

        <Textarea placeholder="Elevator pitch" name="elevator-pitch" minRows={4} required />
        <span>Upload supporting documents</span>

        <StyledDragDrop {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
          <input name="file" type="file" {...getInputProps()} />
          {acceptedFileItems.length ? <span>{acceptedFileItems}</span> : <p>Drag and drop some files here, or click to select files</p>}
        </StyledDragDrop>
        <span>Upload supporting documents</span>

        <DatePicker placeholder="Completion date" name="completion-date" icon={<Image src={calendarIcon} alt="calendar icon" />} value={pickDate} onChange={setPickDate} required />
        <span>Must be within calendar year 2022</span>

        <StyledButton id="submitForm" type="submit">
          Submit
        </StyledButton>
      </form>
    </>
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
`;

const StyledButton = styled.button`
  cursor: pointer;
`;
