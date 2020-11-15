import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RadioButton } from "react-native-paper";
import { updateScore, isFinished } from "../actions/quizActions";
import { navigate } from "../navigationRef";

const Questions = () => {
  const dispatch = useDispatch();
  const [pointer, setPointer] = useState(0);
  const [value, setValue] = React.useState(1);
  const { questions } = useSelector((state) => state);
  const currentQuestion = questions[pointer];
  const choices = currentQuestion.choices;

  const checkHanlder = () => {
    if (choices[value - 1] === currentQuestion.answer) {
      updateScore(dispatch);
    }
    if (pointer + 1 === questions.length) {
      isFinished(dispatch);
      navigate("Finish");
    } else {
      setPointer(pointer + 1);
    }
  };

  return (
    <View style={{ marginTop: 100 }}>
      <Text>{currentQuestion.question}</Text>
      <RadioButton.Group
        onValueChange={(value) => {
          setValue(value);
        }}
        value={value}
      >
        {choices.map((choice, index) => (
          <RadioButton.Item label={choice} value={index + 1} key={index} />
        ))}
      </RadioButton.Group>
      <Button
        //onPress={onPressLearnMore}
        title="Next question"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        onPress={checkHanlder}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Questions;
