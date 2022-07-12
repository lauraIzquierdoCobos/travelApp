import React from "react";
import { View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Home } from "./src/screens/Home/Home";

const Blank = () => {
  return <View />;
};

export default function App() {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Explore") {
        iconName = "home";
      }
      return <Entypo name={iconName} size={size} color={color} />;
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={{
          activeTintColor: "#FB7200",
          inactiveTintColor: "#464962",
        }}
      >
        <Tab.Screen name="Explore" component={Home} />
        <Tab.Screen name="Detais" component={Blank} />
        <Tab.Screen name="Notification" component={Blank} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
