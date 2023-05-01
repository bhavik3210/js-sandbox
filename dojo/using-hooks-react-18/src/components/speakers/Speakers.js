import React from "react";
import { speakerList } from "../../../speakersData";
import SpeakerMenu from "./SpeakerMenu";
import SpeakersList from "./SpeakersList";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { SpeakerDataProvider } from "../../contexts/SpeakersDataContext";

function Speakers() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerMenu />
      <div className="container">
        <div className="row g-4">
          <SpeakerDataProvider>
            <SpeakersList />
          </SpeakerDataProvider>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
