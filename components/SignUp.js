import React from "react"
import {
     View,
     Text,
     ScrollView, 
     StyleSheet,
     TextInput,
} from "react-native";
import Loginsignupbtn from "./Loginsignupbtn";
import BasicButton from "./BasicButton"
import {Picker} from '@react-native-picker/picker';
import ValidationComponent from 'react-native-form-validator';

export default class SignUp extends ValidationComponent{
    constructor(props){
        super(props);
        this.state={
            name:"",
            eMail:"",
            number:"",
            password:"",
            gender:"",
            confirmPassword:"",
        }
    }
    registerBtn=()=>{
        this.validate({
        name:{minlength:3, maxlength:20, required: true},
        email:{email:true , required:true},
        number:{required:true,maxlength:10},
        password:{required:true},
        confirmPassword:{required:true , equalPassword:this.state.password},
        gender:{required:true}
    })
    console.log("register BTN clicked")
}
    
    render(){
        return(
            <View>
                <View><Text style = {styles.text}>Sign Up</Text></View>
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.text_1}>Name</Text>
                    
                    <TextInput 
                    style={styles.inputField} 
                    placeholder="Enter your Name"
                    value={this.state.name}
                    onChangeText={(namee)=>{this.setState({name:namee})}}
                    />         
                    <View style={styles.divider}></View>
                    
                    <Text style={styles.text_1}>Email</Text>
                    
                    <TextInput
                    style={styles.inputField} 
                    placeholder="Enter E-Mail Address"
                    value={this.state.eMail}
                    onChangeText={(email)=>{this.setState({eMail:email})}}
                    keyboardType="email-address"
                    />
                    <View style={styles.divider}></View>
                    
                    <Text style={styles.text_1}>Mobile Number</Text>
                    
                    <TextInput
                    style={styles.inputField} 
                    placeholder="Enter Mobile Number"
                    value={this.state.number}
                    onChangeText={(num)=>{this.setState({number:num})}}
                    keyboardType="number-pad"
                    />
                    
                    <View style={styles.divider}></View>
                    
                    <Text style={styles.text_1}>choose Gender 👇</Text>
                    <Picker
                      selectedValue={this.state.gender}
                      style={styles.inputField1}
                      onValueChange={(gender,itemIndex)=>{this.setState({gender:gender})}}
                    >
                      <Picker.Item label="choose gender" value="choose gender"/>
                      <Picker.Item label="MALE"    value="MALE"/>
                      <Picker.Item label="FEMALE"  value="FEMALE"/>
                    
                    </Picker>
                    
                    <View style={styles.divider}></View>
                    
                    <Text style={styles.text_1}>Password</Text>
                    
                    <TextInput 
                    style={styles.inputField} 
                    placeholder="Enter your Password"
                    value={this.state.password}
                    onChangeText={(pass)=>{this.setState({password:pass})}}
                    secureTextEntry
                    />
                    
                    <View style={styles.divider}></View>
                    
                    <Text style={styles.text_1}>Password</Text>
                    <TextInput 
                    style={styles.inputField} 
                    placeholder="Confirm your Password"
                    value={this.state.confirmPassword}
                    onChangeText={(passs)=>{this.setState({confirmPassword:passs})}}
                    secureTextEntry
                    />
                </View>
                <View>
                <BasicButton
                text="Register"
                styless={styles.buttonBottom}
                press={this.registerBtn}
                />
                <Text style={styles.log}>
                   {this.getErrorMessages()}
                </Text>

                <View style = {styles.container1}>
                    <View style={styles.line}></View>
                        <Text style={styles.orDividerText}>OR</Text>
                    <View style={styles.line}></View>
                </View>
                  
                    <Loginsignupbtn
                    text="SignUp"
                    nText="Don't Have An Account"
                    />
                </View>
                
            </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',         
        marginTop: 30,
        paddingHorizontal:35,
    },
    text:{
        fontWeight:"bold",
        fontSize:20,
        marginTop:80,
        marginLeft:30,
    },
    inputField:{
        fontSize:15,
        fontWeight:"bold",
        borderBottomWidth:1,
        borderBottomColor:"#bfbfbf",
        paddingVertical:10,
        paddingHorizontal:30,
        textAlign:"center"
    },
    inputField1: {
        fontSize: 14,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#BFBFBF',
        paddingVertical: 6,
      },
    divider:{
        paddingVertical:5,
    },
    text_1:{
        fontSize:15,
        fontWeight:"bold",
        textAlign:"center"
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
    container1:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    buttonBottom:{
        paddingVertical:10,
    },  
    log: {
      textAlign: 'center',
      marginVertical: 2,
      color: 'red',
    },
  
})