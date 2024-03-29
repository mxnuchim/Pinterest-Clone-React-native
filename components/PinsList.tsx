import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SinglePin from "./SinglePin";

export interface PinsListInterface {
  pins: {
    id: string;
    title: string;
    image: string;
  }[];
}

const PinsList = ({ pins }: PinsListInterface) => {
  const [numColumns, setNumColumns] = useState(2);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* PINS ARE ARRANGED IN TWO COLUMNS ON THE SCREEN IN ORDER TO ACHIEVE A DYNAMIC DISPLAY */}

        {Array.from(Array(numColumns)).map((_, colIndex) => (
          <View style={styles.pinsColumn} key={colIndex}>
            {pins
              .filter((item, idx) => idx % numColumns === colIndex)
              .map((x) => (
                <SinglePin pin={x} key={x.id} />
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default PinsList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  pinsColumn: {
    flex: 1,
  },
});
