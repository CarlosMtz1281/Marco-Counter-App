import react from "react";
import {Text, View } from 'react-native';
import { StyleSheet } from "react-native-web";
import {colors} from "./../CSS/Constants.js";
import { Button } from "react-native-web";
import { TouchableOpacity } from "react-native";
import {Alert, Modal, Pressable} from 'react-native';
import { useState } from "react";
import { TextInput } from "react-native";


export default function ProgressWidget({macro, unit, progress, goal, onUpdateProgress}){

    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState(0);

    const handleChange = (newValue) => {
        //console.log("valor mandado "+newValue)
        const parsedValue = parseInt(newValue, 10);

        if (isNaN(parsedValue)) {
            // Handle the case where the input is not a valid integer
            console.log("Invalid input. Please enter a valid number.");
            return;
        }
        // Call the callback to update the value in the parent
        onUpdateProgress(parsedValue);
        newValue = 0;

      };

    //console.log("Valor de progreso "+progress)
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
        },
        modalBox:{
            height: 200,
            width: 350,
            backgroundColor: colors.offwhite,
            marginLeft: "5%",
            marginTop: "70%",
            borderRadius: 20,
            borderWidth: 2,

        }


    });

    return(



        <View style={[style.widgetContainer, style.shadowProp]}>

            {/* Modal configuration */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>

                <View style={style.modalBox}>
                    <Text style={[style.widgetTittle, {marginTop:20,}]}>Add the {macro} here</Text>
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginLeft: 50, marginLeft:70, marginTop: 20 }}
                    onChangeText={newText => setText(newText)}
                     defaultValue={""}
                     keyboardType = 'numeric'

                    />

                    <TouchableOpacity onPress={()=>{setModalVisible(!modalVisible), handleChange(text)}}>

                    <View style={style.addButton}>
                            <Text style={style.buttonTxt}>Add Meal</Text>
                    </View>

                </TouchableOpacity>
                </View>

            </Modal>


            <Text style={style.progressTxt}> {progress}/{goal} {unit}</Text>
            <Text style={style.widgetTittle}>{macro}</Text>

            <TouchableOpacity onPress={()=>{setModalVisible(true)}}>
                <View style={style.addButton}>
                        <Text style={style.buttonTxt}>Add Meal</Text>
                </View>
            </TouchableOpacity>


        </View>
)
}