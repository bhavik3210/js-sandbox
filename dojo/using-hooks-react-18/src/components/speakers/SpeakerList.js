import SpeakerLine from "./SpeakerLine";

import axios from "axios";
import { useState, useEffect, useReducer, useContext } from "react";
import { ThemeContext } from "../../App";

const UPDATE_SPEAKER = "updateSpeaker";
const SPEAKERS_LOADED = "speakersLoaded";
const SET_LOADING_STATUS = "setLoadingStatus";

function List({ state, dispatch }) {
  const [updatingId, setUpdatingId] = useState(0); // 1269;
  const isPending = false;

  function toggleFavoriteSpeaker(speakerRec) {
    const speakerRecUpdated = { ...speakerRec, favorite: !speakerRec.favorite };
    dispatch({ type: UPDATE_SPEAKER, speaker: speakerRecUpdated });
    async function updateAsync(rec) {
      setUpdatingId(rec.id);
      await axios.put(`/api/speakers/${rec.id}`, speakerRecUpdated);
      setUpdatingId(0);
    }
    updateAsync(speakerRecUpdated);
  }

  return (
    <div className="container">
      <div className="border-0">
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Speaker toolbar filter"
        >
          <div className="toolbar-trigger mb-3 flex-grow-04">
            <div className="toolbar-search w-100">
              <input
                value=""
                onChange={(event) => {}}
                type="text"
                className="form-control"
                placeholder="Highlight Names"
              />
            </div>
            <div className="spinner-height">
              {isPending && (
                <i className="spinner-border text-dark" role="status" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        {state.speakers.map(function (speakerRec) {
          const highlight = false;
          return (
            <SpeakerLine
              key={speakerRec.id}
              speakerRec={speakerRec}
              updating={updatingId === speakerRec.id ? updatingId : 0}
              toggleFavoriteSpeaker={() => toggleFavoriteSpeaker(speakerRec)}
              highlight={highlight}
            />
          );
        })}
      </div>
    </div>
  );
}

const SpeakerList = () => {
  const { darkTheme } = useContext(ThemeContext);
  const initialState = {
    speakers: [],
    loading: true,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case SPEAKERS_LOADED:
        return { ...state, loading: false, speakers: action.speakers };
      case SET_LOADING_STATUS:
        return { ...state, loading: true };
      case UPDATE_SPEAKER:
        var speakersUpdated = [];
        state.speakers.forEach((speaker) => {
          if (speaker.id === action.speaker.id) {
            speakersUpdated.push(action.speaker);
          } else {
            speakersUpdated.push(speaker);
          }
        });
        return { ...state, speakers: speakersUpdated };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getDataAsync() {
      dispatch({ type: SET_LOADING_STATUS });
      const results = await axios.get("/api/speakers");
      dispatch({ type: SPEAKERS_LOADED, speakers: results.data });
    }
    getDataAsync();
  }, []);

  function updateSpeaker(speakerRec) {
    const speakerUpdated = speakers.map((rec) => {
      return speakerRec.id === rec.id ? speakerRec : rec;
    });
    setSpeakers(speakerUpdated);
  }

  if (state.loading) return <div> loading... </div>;

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <List state={state} dispatch={dispatch} />
    </div>
  );
};

export default SpeakerList;
