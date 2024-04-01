import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';
import RowText from '../components/rowText';


const CurrentWeather = ({ weatherData }) => {
    const  {
        wrapper,
        container,
        tempStyles,
        feels,
        highLowWrapper,
        highLow,
        bodyWrapper,
        description,
        message
    } = styles

    const { main:{ temp, feels_like, temp_min, temp_max }, weather} = weatherData; 
    const weatherCondition = weather[0]?.main;
    console.log('conditions:',weatherCondition);

    return (
        <SafeAreaView style={[wrapper, { backgroundColor: weatherType[weatherCondition].backgroundColor}]}>

            <View style={container}>
                <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />

                <Text style={tempStyles}>{Math.round(temp)}°F</Text>
                <Text style={feels}>{`Feels like ${Math.round(feels_like)}°F`}</Text>

                <RowText    
                    messageOne={`High: ${Math.round(temp_max)}°F    `}	 
                    messageTwo={`Low: ${Math.round(temp_min)}°F`} 
                    containerStyles={highLowWrapper} 
                    messageOneStyles={highLow} 
                    messageTwoStyles={highLow}
                />
            </View>

            <RowText 
                    messageOne={weather[0]?.description} 
                    messageTwo={weatherType[weatherCondition].message} 
                    containerStyles={bodyWrapper} 
                    messageOneStyles={description} 
                    messageTwoStyles={message}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tempStyles: {
        color: 'black',
        fontSize: 48,
    },
    feels: {
        color: 'black',
        fontSize: 30,
    },
    highLow: {
        color: 'black',
        fontSize: 20,
    },
    highLowWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40,
    },
    description: {
        color: 'black',
        fontSize: 48,
    },
    message: {
        color: 'black',
        fontSize: 30,
    }
});

export default CurrentWeather;