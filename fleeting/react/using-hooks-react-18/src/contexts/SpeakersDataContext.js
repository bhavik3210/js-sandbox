import React, { createContext, useContext } from "react";
import useSpeakerData from "../hooks/useSpeakersData";

export const SpeakersDataContext = createContext({
  speakerList: [],
  createSpeaker: () => {},
  updateSpeaker: () => {},
  deleteSpeaker: () => {},
  loadingStatus: "",
});

export const SpeakerDataProvider = ({ children }) => {
  const {
    speakerList,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
    loadingStatus,
  } = useSpeakerData();

  const value = {
    speakerList,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
    loadingStatus,
  };

  return (
    <SpeakersDataContext.Provider value={value}>
      {children}
    </SpeakersDataContext.Provider>
  );
};
