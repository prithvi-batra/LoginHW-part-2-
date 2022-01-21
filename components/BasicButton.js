import React from "react";
import{
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

export default function BasicButton ({text,press,styless}){
    return(
        <View style={styless}>
            <TouchableOpacity style={styles.button} onPress={press}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonBottom:{
        paddingVertical:10,
    },
    buttonText:{
        color:"#FFF",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
    },
    button:{
        backgroundColor:"#2ED784",
        borderRadius:15,
        padding:10,
    },
})