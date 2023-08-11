import React from "react";
import {Text, View } from 'react-native';
import style from "./../CSS/HomeStyle";
import { useState } from "react";

import ProgressWidget from "./../Components/ProgressWidget";
import { TouchableOpacity } from "react-native";

export default function HomeScreen(){
    return(
        <View style={style.container}>
            <Text style={style.mainTitle}>Hello User</Text>
            <Text style={style.sectionHeader}>Today´s Macros</Text>

            <ProgressWidget
                macro={"Calories"}
                unit={"Kcal"}
                progress={500}
                goal={2500}
            />
            <ProgressWidget
                macro={"Protein"}
                unit = {"g"}
                progress={50}
                goal={140}
            />

            <View style={{flexDirection: "row", width: "100%"}}>

            <TouchableOpacity>
                <View style={style.settings}>
                    <Text style={style.settingsTxt}>Settings</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={style.data}>
                    <Text style={style.dataTxt}>Data</Text>
                </View>
            </TouchableOpacity>

            </View>


        </View>

    );
}