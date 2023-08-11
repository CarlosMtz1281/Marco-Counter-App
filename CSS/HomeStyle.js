import { StyleSheet } from "react-native";

import {colors} from "./Constants.js";

const style = StyleSheet.create({
    container: {

        width:  "100%",
        height: 130,
        borderRadius: 20,
        backgroundColor: colors.primary,
    },
    mainTitle: {
        fontSize: 30,
        marginTop: 80,
        marginLeft: 20,
        color: colors.whiteTxt,

    },
    sectionHeader:{
        marginTop: 40,
        fontSize: 25,
        textAlign: "center",
    },
    settings:{
        height: 100,
        width: 170,
        backgroundColor: colors.primary,
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 20,
        display: "inline-block",
        justifyContent: "flex-start",
    },
    settingsTxt:{
        color: colors.whiteTxt,
        marginLeft: 10,
        marginTop: 65,
        fontSize: 20,

    },
    data:{
        height: 100,
        width: 170,
        backgroundColor: colors.primary,
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 10,
        justifyContent: "flex-end",
        },
        dataTxt:{
            color: colors.whiteTxt,
            marginLeft: 10,
            marginBottom: 10,
            fontSize: 20,
        },


});

export default style;