import SpeakerDetail from "./SpeakerDetail";
import { speakerList } from "../../../speakersData";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
  SpeakerDataProvider,
  SpeakersDataContext,
} from "../../contexts/SpeakersDataContext";

function Inner({ id }) {
  const { darkTheme } = useContext(ThemeContext);
  const { speakerList, loadingStatus } = useContext(SpeakersDataContext);

  if (loadingStatus === "loading") return <div>Loading...</div>;

  const speakerRec = speakerList?.find((rec) => rec.id === id);

  return speakerRec ? (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
    </div>
  ) : (
    <h2 className="text-danger">Speaker {id} not found</h2>
  );
}

export default function Speaker(props) {
  return (
    <SpeakerDataProvider>
      <Inner {...props} />
    </SpeakerDataProvider>
  );
}
