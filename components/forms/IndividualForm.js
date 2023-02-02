import React, { useState, useCallback } from "react";
import { TextInput, Select, Textarea } from "@mantine/core";

import { DatePicker } from "@mantine/dates";
import calendarIcon from "@/assets/calendar.svg";
import Image from "next/image";
import styled from "styled-components";

import { useDropzone } from "react-dropzone";

import { useRouter } from "next/router";
import uploadicon from "@/assets/uploadicon.png";

const bytesToMegaBytes = (bytes, roundTo) => (roundTo ? (bytes / (1024 * 1024)).toFixed(roundTo) : bytes / (1024 * 1024));

export default function IndividualForm({ submitterName, submissionType }) {
  // state management
  const [nomineeName, setNomineeName] = useState("");
  const [businessUnit, setBusinessUnit] = useState("");
  const [awardCategory, setAwardCategory] = useState("");
  const [entryName, setEntryName] = useState("");
  const [elevatorPitch, setElevatorPitch] = useState("");
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

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    // const newDate = String(pickDate);
    // console.log(newDate);
    // console.log("type of new date is " + typeof newDate);
    const data = { "form-name": "individual-form", submitterName, nomineeName, businessUnit, entryName, elevatorPitch, awardCategory };

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
      <form onSubmit={handleSubmit} name="individual-form" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="individual-form" />

        <h4>Individual Nomination</h4>
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
            { value: "The Stronger Together Award for Collaboration & Teamwork (Team award)", label: "The Stronger Together Award for Collaboration & Teamwork (Team award)" },
            { value: "The Big Catch Award for New Business (Team award)", label: "The Big Catch Award for New Business (Team award)" },
            { value: "The Blue Sky & Beyond Award for Innovation and Creativity (Team award)", label: "The Blue Sky & Beyond Award for Innovation and Creativity (Team award)" },
            { value: "The Commercial Impact Award (Team award)", label: "The Commercial Impact Award (Team award)" },
            { value: "The 360 Award for Business Unit of the Year (Team award)", label: "The 360 Award for Business Unit of the Year (Team award)" },
            { value: "The My Word Award for Written Craftmanship (Individual award)", label: "The My Word Award for Written Craftmanship (Individual award)" },
            { value: "The Visual Excellence Award for best use of Creative Direction or Design (Individual award)", label: "The Visual Excellence Award for best use of Creative Direction or Design (Individual award)" },
            { value: "The Unsung Hero Award (Individual Award)", label: "The Unsung Hero Award (Individual Award)" },
          ]}
          value={awardCategory}
          onChange={setAwardCategory}
          required
        />
        <span>Select from drop down</span>

        <TextInput type="text" placeholder="Entry name" name="entryName" required value={entryName} onChange={handleChange} />
        <span>Use client or campaign title</span>

        <Textarea type="text" placeholder="Elevator pitch...What piece of work are you entering and why? Include any documents showcasing the brief, work, final imagery or branding etc via pdf, slides, links and or video. Please ensure any access rights are viewable by Mike, Dylan and Megan.

" name="elevatorPitch" minRows={4} required value={elevatorPitch} onChange={handleChange} />
        <span>What piece of work you’re entering and why? Max 500 words</span>

        {/* <StyledDragDrop {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
          <input name="file" type="file" {...getInputProps()} />
          {acceptedFileItems.length ? (
            <span>{acceptedFileItems}</span>
          ) : (
            <div>
              <Image src={uploadicon} alt="upload icon" />
              <div className="browse-ul">Browse</div>
            </div>
          )}
          {fileRejections.length ? <span className="error">file too big.. Max file upload size is 300KB</span> : null}
        </StyledDragDrop>
        <span>Upload supporting documents. Max upload size is 300KB.</span> */}

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

  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-accent);
  min-height: 170px;

  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
  text-align: center;

  .browse-ul {
    padding: 14px 54px;
    background-color: white;
    border-radius: 6px;
    color: var(--color-accent);
    margin-top: 28px;
  }

  span.error {
    color: white;
    font-size: 1.25rem;
  }

  span.success {
    color: white;
    font-size: 1.25rem;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  margin-top: 36px;
`;

const FormWrapper = styled.div`
  display: ${(props) => (props.submissionType == "individual" ? "visible" : "none")};
`;

const SecretInput = styled.div`
  /* display: none; */
  visibility: hidden;
  height: 0;
  width: 0;
`;
