import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 9999px;
  word-break: break-all;
  background-color: #2ccea8;
  font-weight: 700;
  font-family: "Pragati Narrow";
  letter-spacing: 0.15em;
  padding: 0 10px 0 10px;
  cursor: pointer;
  text-decoration: none;
  color: #1c1c1c;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 500px) {
    width: 90px;
    height: 30px;
    font-size: 0.68rem;
  }
`;

type PhotoUploadProps = {
  onFileSelect: (file: File) => void;
};

export const PhotoUpload = ({ onFileSelect }: PhotoUploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) onFileSelect(file);
  };

  return (
    <>
      <StyledPhoto htmlFor="files">Select image</StyledPhoto>
      <input
        id="files"
        style={{
          display: "none",
        }}
        type="file"
        onChange={handleFileChange}
      />
    </>
  );
};
