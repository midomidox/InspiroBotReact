import React, { useState } from "react";
import Background from "../src/bra.jpg";
import { StyleSheet, Text, SafeAreaView, Image, Button } from "react-native";

export default function App() {
  function pinko(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
  }

  const [imageUrl, setImageUrl] = useState();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "white" }]}>
      <Image
        source={{
          width: 300,
          height: 300,
          resizeMode: "contain",
          uri: imageUrl
        }}
      />
      <Text>{"\n"}</Text>
      <Button
        color="grey"
        title="CLICK TO GENERATE"
        onPress={() => {
          setImageUrl(pinko("https://inspirobot.me/api?generate=true"));
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: `url(${Background})`,
    alignItems: "center",
    justifyContent: "center"
  }
});
