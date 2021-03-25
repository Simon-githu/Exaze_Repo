import React, { useState } from 'react'
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {useDispatch } from 'react-redux'
import { setUserName } from '../redux/actions'
import {StyleSheet} from 'react-native'
function View1({navigation}) {
    const [showButton,setShowButton]=useState(false)
    const [user,setUser]=useState('')
    const dispatch = useDispatch();
    // handling input onchange value
    const handleChange=(value)=>{
        if(value===""){
            dispatch(setUserName(value))
            setShowButton(false)
     setUser(value)
        }else{

            setShowButton(true)
           setUser(value)
        }
    }

    // function saves data into redux state and navigates to second view
const GoToViewTwo=()=>{
    dispatch(setUserName(user));
    navigation.navigate('View-2');
    setUser('')
    setShowButton(false)
}
    return (
        <View style={styles.container} >
            <Text style={styles.text}>Welcome</Text>
            <Text style={styles.text2}>Please care to provide your name</Text>
            <TextInput
               style={styles.input}
               value={user}
               onChangeText={handleChange}
               placeholder="Name"
               placeholderTextColor="#73C2FB"
           />
           
            {showButton?<TouchableOpacity style={styles.button} onPress={GoToViewTwo}>
           <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>:null}
           
        </View>
    )
}

export default View1
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : 'black',
    },
    button:{   
    width:300,
    marginRight:40,
    marginLeft:40,
    marginTop:50,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#73C2FB',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#73C2FB',
    alignItems: 'center',
    justifyContent: 'center',
    },
    buttonText:{
        color:"#fff",
       fontSize:20,
        fontWeight:'bold'
    
    },
    text:{
        color:"#fff",
        fontSize:40,
        fontWeight:'bold'},
        text2:{
            color:"#73C2FB",
            fontSize:15,
            fontWeight:'bold'},
            
        input:{
            width:300,
            marginRight:40,
        marginLeft:40,
       marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#fff',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#73C2FB',
        
        }, 
})