import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import Error from "./src/components/Error";
import { useGetWeather } from "./src/hooks/useGetWeather";

const App = () => {
    const [isLoading, errorMsg, weather] = useGetWeather();

    useEffect(() => {
        if (weather) {
            console.log(weather);
        } else {
            console.log("Weather not found");
        }
    }, [weather])

    if (weather && weather.list) {
        return (
            <NavigationContainer>
                <Tabs weather={weather} />
            </NavigationContainer>
        )
    }

    return (
        <View style={styles.container}>
            {errorMsg ?
                (<Error />)
                :
                (<ActivityIndicator size="large" color="tomato" />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default App;