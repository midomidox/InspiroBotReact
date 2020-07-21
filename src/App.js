import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, Image, Button } from "react-native";
export default function App() {
  function pinko(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
  }

  const [imageUrl, setImageUrl] = useState(
    pinko("https://inspirobot.me/api?generate=true")
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "orange" }]}>
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
        title="GENERATE"
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
