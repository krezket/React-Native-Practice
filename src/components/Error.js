import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const Error = (props) => {
    const {container, errorMsg } = styles;
    return (
        <View style={container}>
            <Feather name={'frown'} style={styles.icon} color={'white'} size={50} />
            <Text style={errorMsg}>Sorry, something went wrong</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMsg: {
        fontSize: 30,
        color: 'white',
        marginHorizontal: 55,
        textAlign: 'center',
    }
})

export default Error;