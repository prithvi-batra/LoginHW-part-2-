import React from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";

export default function Loginsignupbtn({nText,text,press}){
        return(
            <View style={styles.mainView}>
                <Text style={styles.text}>{nText}</Text>            
                <TouchableOpacity onPress={press}>
                    <Text style={styles.text1}>{text}</Text>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        fontSize: 16,
        flexDirection: "row",
        alignItems: "center",
        alignContent:"center",
        justifyContent:"center"
    },
    text: {
        fontSize: 15,
    },
    text1: {
        fontWeight: "bold",
        fontSize: 15,
        color: '#2B35E0',
        marginLeft: 5,
        padding:20,
    },
})