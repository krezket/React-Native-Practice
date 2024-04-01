import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
    const { iconName, iconColor, bodyText, bodyTextStyles } = props;
    return (
        <View style={styles.container}>
            <Feather name={iconName} style={styles.icon} color={iconColor} size={50} />
            <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold'
    }
})
export default IconText;