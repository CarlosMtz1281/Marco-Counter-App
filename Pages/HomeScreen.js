import React from "react";
import {Text, View } from 'react-native';
import style from "./../CSS/HomeStyle";

export default function HomeScreen(){
    return(
        <View style={style.container}>
            <Text style={style.mainTitle}>Hello User</Text>
            <Text style={style.sectionHeader}>Today´s Macros</Text>
            <View style={style.widgetContainer}>
                <Text style={style.widgetTittle}>Calories</Text>
            </View>
        </View>

    );
}