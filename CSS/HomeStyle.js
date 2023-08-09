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

    widgetContainer: {
        height: 170,
        width: "90%",
        backgroundColor: colors.secondary,
        borderRadius: 20,
        marginTop: 45,
        marginLeft: "5%",

    },
    widgetTittle:{
        fontSize: 25,
        textAlign: "center",
        marginTop: 110,
    }

});

export default style;