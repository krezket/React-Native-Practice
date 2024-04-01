import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { weatherType } from "../utilities/weatherType";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {
    const { container, image, countryFont, cityFont, populationWrapper, populationText, riseSetWrapper, riseSetText, text } = styles;
    const { name, country, population, sunrise, sunset } = weatherData;

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/jpg/wise.jpg')}
                style={image}
            >
                <Text style={[text, cityFont]}>{name}</Text>
                <Text style={[text, countryFont]}>{country}</Text>

                <View style={populationWrapper}>
                    <IconText
                        iconName='user'
                        iconColor='white'
                        bodyText={`Population: ${population}`}
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={riseSetWrapper}>
                    <IconText
                        iconName='sunrise'
                        iconColor='white'
                        bodyText={moment(sunrise).format('h:mm a')}
                        bodyTextStyles={riseSetText}
                    />
                    <IconText
                        iconName='sunset'
                        iconColor='white'
                        bodyText={moment(sunset).format('h:mm a')}
                        bodyTextStyles={riseSetText}
                    />

                </View>
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
    },
    cityFont: {
        fontSize: 40,
    },
    countryFont: {
        fontSize: 30,
    },
    text: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    populationWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 10,
    },
    riseSetWrapper: {
        flexDirection: 'row',
            alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    riseSetText: {
        fontSize: 25,
        color: 'white',
    }
})
export default City;
