import react from "react";
import {Text, View } from 'react-native';
import { StyleSheet } from "react-native-web";
import {colors} from "./../CSS/Constants.js";
import { Button } from "react-native-web";
import { TouchableOpacity } from "react-native";

export default function ProgressWidget({macro, unit, progress, goal}){

    const style = StyleSheet.create({
        widgetContainer: {
            height: 170,
            width: "90%",
            backgroundColor: colors.offwhite,
            borderRadius: 20,
            marginTop: 45,
            marginLeft: "5%",


        },
        widgetTittle:{
            fontSize: 25,
            textAlign: "center",
            marginTop: 0,
            fontWeight: "bold",
        },
        shadowProp: {
            shadowOffset: {width: -2, height: 4},
            shadowColor: '#171717',
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
        progressTxt:{
            fontSize: 30,
            marginTop: 20,
            textAlign: "center",

        },
        addButton:{
            backgroundColor: colors.accent,
            width: 100,
            height: 40,
            textAlign: "center",
            justifyContent: "center",
            borderRadius: 3,
            marginLeft: "37%",
            marginTop: 15,

        },
        buttonTxt:{
            color: colors.whiteTxt,
            fontSize: 15,
            textAlign: "center",
        }


    });

    return(

        <View style={[style.widgetContainer, style.shadowProp]}>
            <Text style={style.progressTxt}> {progress}/{goal} {unit}</Text>
            <Text style={style.widgetTittle}>{macro}</Text>

            <TouchableOpacity onPress={()=>{}}>
                <View style={style.addButton}>
                        <Text style={style.buttonTxt}>Add Meal</Text>
                </View>
            </TouchableOpacity>
        </View>
)
}