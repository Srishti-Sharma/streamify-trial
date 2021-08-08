import React from "react";
import { Button, Text, View } from "react-native";

const Test = ({ test, testAction }) => (
  <View>
    {/* <Header title="Testing" /> */}
    <Text>{test}</Text>
    <Button
      onPress={() => {
        testAction(5);
      }}
      title="Click"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  </View>
);

export default Test;
