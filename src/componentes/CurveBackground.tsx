import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path, Rect } from "react-native-svg";

export const CurveBackground = () => {
  return (
    <View>
      <View style={styles.view}></View>
      <Svg height="50%" width="100%" style={styles.svg} viewBox="0 0 1440 320">
        <Path
          fill="#01D5D8"
          d="M0,224L30,213.3C60,203,120,181,180,144C240,107,300,53,360,53.3C420,53,480,107,540,122.7C600,139,660,117,720,96C780,75,840,53,900,74.7C960,96,1020,160,1080,192C1140,224,1200,224,1260,234.7C1320,245,1380,267,1410,277.3L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></Path>
      </Svg>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    backgroundColor: "#01D5D8",
    height: 300,
  },
  svg: {
    position: "absolute",
    top: 260,
  },
});
