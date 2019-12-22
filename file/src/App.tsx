import React from "react";
import "./App.css";
import styled from "styled-components";
import pictureLogo from "./picture-icon.svg";

const FileBox = styled.div`
  height: 8em;
  width: 10em;
  text-align: center;
  border: solid 1px black;
  border-radius: 1em;
  background-color: lightgrey;
  margin: 1em;
`;

const PictureIcon = styled.img`
  margin: 1em 1em 0 1em;
  height: 3em;
  width: 4em;
`;

const App: React.FC<{
  history: History;
  entryId: string;
  entryName: string;
}> = ({ entryName }) => {
  return (
    <FileBox>
      <PictureIcon src={pictureLogo} alt="logo" />
      <p>{entryName}</p>
    </FileBox>
  );
};

export default App;
