import React, { useContext } from "react";
import SpeakerDetail from "./SpeakerDetail";
import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";

export default function SpeakersList() {
  const { speakerList, loadingStatus } = useContext(SpeakersDataContext);

  if (loadingStatus === "loading") {
    return <div classname="card"> Loading... </div>;
  }

  return (
    <>
      {speakerList.map(function (speakerRec) {
        return (
          <SpeakerDetail
            key={speakerRec.id}
            speakerRec={speakerRec}
            showDetails={false}
          />
        );
      })}
    </>
  );
}
