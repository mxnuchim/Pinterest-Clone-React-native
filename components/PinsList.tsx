import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SinglePin from "./SinglePin";

export interface PinsListInterface {
  pins: {
    id: string;
    title: string;
    image: string;
  }[];
}

const PinsList = ({ pins }: PinsListInterface) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* PINS ARE ARRANGED IN TWO COLUMNS ON THE SCREEN IN ORDER TO ACHIEVE A DYNAMIC DISPLAY */}

        <View style={styles.pinsColumn}>
          {pins
            .filter((item, idx) => idx % 2 === 0)
            .map((x) => (
              <SinglePin pin={x} key={x.id} />
            ))}
        </View>

        <View style={styles.pinsColumn}>
          {pins
            .filter((item, idx) => idx % 2 === 1)
            .map((x) => (
              <SinglePin pin={x} key={x.id} />
            ))}
        </View>
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
