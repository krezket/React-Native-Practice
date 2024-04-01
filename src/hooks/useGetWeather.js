import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';

export const useGetWeather = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);

    const fetchWeather = async (latitude, longitude) => { 
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);
            const data = await res.json();
            setWeather(data);
            setIsLoading(false);
        } catch {
            console.error("Error fetching weather data", error);
            setErrorMsg("Error fetching weather data");
        } finally {
            setIsLoading(false);
        }
    }   

    useEffect(() => {
        (async() => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            try {
                let location = await Location.getCurrentPositionAsync({});
                setLat(location.coords.latitude);
                setLon(location.coords.longitude);
                await fetchWeather(location.coords.latitude, location.coords.longitude);
            } catch (error) {
                console.error("Error getting location:", error);
                setErrorMsg("Error getting location");
            }
        })()
    }, [lat, lon])
    return [isLoading, errorMsg, weather]
}