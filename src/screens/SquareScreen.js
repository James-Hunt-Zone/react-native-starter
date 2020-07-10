import React, { useReducer } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return { ...state, red: state.red + action.amount };
    case "change_een":
      return { ...state, green: state.green + action.amount };
    case "change_lue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ type: "change_red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", amount: -COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "change_een", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_een", amount: -COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ type: "change_lue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_lue", amount: -COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
