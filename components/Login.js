import React,{useState} from "react";
import{
    ScrollView,
    Text,
    TextInput,
    View,
    StyleSheet,
} from "react-native";
import { Button } from "react-native-web";
import BasicButton from "./BasicButton";
import Loginsignupbtn from "./Loginsignupbtn";

export default function Login(){
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    function loginPress(){
        console.log("login sucessful");
    }
    function signUpPress(){
        console.log("signUp sucessful");
    }
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.text}>LOGIN</Text>
        
            <View>
                <Text style={styles.text_1}>Email</Text>
                <TextInput
                style={styles.inputField} 
                placeholder="Enter your Registered E-Mail Here"
                value={email}
                onChangeText={(text)=>{setEmail(text)}}
                keyboardType="email-address"
                />
                <View style={styles.divider}></View>
                <Text style={styles.text_1}>Password</Text>
                <TextInput 
                style={styles.inputField} 
                placeholder="Enter your Password Here"
                value={pass}
                onChangeText={(passs)=>{setPass(passs)}}
                secureTextEntry
                />                
            </View>    

            <BasicButton
            text = "Log In"
            press={loginPress}
            styless={styles.buttonBottom}
            />
            
            <View style = {styles.container1}>
                <View style={styles.line}></View>
                    <Text style={styles.orDividerText}>OR</Text>
                <View style={styles.line}></View>
            </View>
            <Loginsignupbtn
                text="SignUp"
                nText="Don't Have An Account"
                press={signUpPress}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',         
        marginTop: 60,         
    },
    text:{
        fontWeight:"bold",
        fontSize:25,
        paddingVertical:30,
    },
    inputField:{
        fontSize:15,
        fontWeight:"bold",
        borderBottomWidth:1,
        borderBottomColor:"#bfbfbf",
        paddingVertical:20
    },
    divider:{
        paddingVertical:20,
    },
    line:{
        height:1,
        width:'40%',
        backgroundColor: "#E3E3E3",
    },
    orDividerText:{
        fontWeight:"bold",
        fontSize:20,
        textAlign:"center",
    },
    text_1:{
        fontSize:20,
        fontWeight:"bold"
    },
    container1:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    buttonBottom:{
        paddingVertical:50,
        marginBottom:50,
    },
})