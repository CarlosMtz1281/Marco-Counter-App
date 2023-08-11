import React from "react";
import {Text, View } from 'react-native';
import style from "./../CSS/HomeStyle";
import { useState } from "react";

import ProgressWidget from "./../Components/ProgressWidget";
import { TouchableOpacity } from "react-native";




export default function HomeScreen(){
    //hooks
    const [progressCal, setProgressCal] = useState(0);
    const [goalCal, setGoalCal] = useState(2000);
    const [progressPro, setProgressPro] = useState(0);
    const [goalPro, setGoalPro] = useState(140);

    function updateProgressCal(num){
        console.log("Valor de progreso "+progressCal)
        console.log("Valor de num "+num)
        setProgressCal(progressCal + num);
    }
    function updateProgressPro(num){
        setProgressPro(progressPro + num);
    }

    return(
        <View style={style.container}>
            <Text style={style.mainTitle}>Hello User</Text>
            <Text style={style.sectionHeader}>Today´s Macros</Text>

            <ProgressWidget
                macro={"Calories"}
                unit={"Kcal"}
                progress={progressCal}
                goal={goalCal}
                onUpdateProgress={updateProgressCal}
            />
            <ProgressWidget
                macro={"Protein"}
                unit = {"g"}
                progress={progressCal}
                goal={goalPro}
                onUpdateProgress={updateProgressPro}
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