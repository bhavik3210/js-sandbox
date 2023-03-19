import { React, useState, useReducer } from "react";
import { View, Text } from "react-native";
import ColorCounter from "../screens/components/ColorCounter";

const reducer = (state, action) => {
  const change = action.payload;

  switch (action.type) {
    case "type_red":
      const { red } = state;
      return red + change > 255 || red + change < 0
        ? state
        : { ...state, red: red + change };
    case "type_blue":
      const { blue } = state;

      return blue + change > 255 || blue + change < 0
        ? state
        : { ...state, blue: blue + change };
    case "type_green":
      const { green } = state;
      return green + change > 255 || green + change < 0
        ? state
        : { ...state, green: green + change };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const COLOR_DELTA = 30;
  const initialState = { red: 0, green: 0, blue: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { red, blue, green } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: "type_red", payload: COLOR_DELTA })}
        onDecrease={() =>
          dispatch({ type: "type_red", payload: -1 * COLOR_DELTA })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "type_blue", payload: COLOR_DELTA })}
        onDecrease={() =>
          dispatch({ type: "type_blue", payload: -1 * COLOR_DELTA })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "type_green", payload: COLOR_DELTA })
        }
        onDecrease={() =>
          dispatch({ type: "type_green", payload: -1 * COLOR_DELTA })
        }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
