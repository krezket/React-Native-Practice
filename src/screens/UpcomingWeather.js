import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from "react-native";
import ListItem from "../components/ListItem";

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem 
      dt_txt={item.dt_txt} 
      min={item.main.temp_min} 
      max={item.main.temp_max} 
      condition={item.weather[0].main} 
    />
  )
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/gifs/wizard.gif')}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
  },
  image: {
    flex: 1
  }
})
export default UpcomingWeather;