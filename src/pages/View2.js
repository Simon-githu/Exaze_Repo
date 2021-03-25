import React, { useState,useEffect } from 'react'
import { Text, View,StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { useSelector } from 'react-redux'

function View2({navigation}) {

  const [device,setDevice]=useState('')
  const [emulator,setEmulator] =useState(false)

//   accessing redux state value
const name = useSelector(state=>state.userName)

// function navigates to the third View
  const GoToViewThree =()=>{
    navigation.navigate('View-3')
  }
//   runs on view load and checks if the app is running on emulator or not
  useEffect(()=>{
    if (DeviceInfo.isEmulator()){
       setEmulator(true)
        setDevice(DeviceInfo.getModel())
        
    }else{
        setDevice('')
        setEmulator(false)
    }
  },[device])

    return (
       <View style={styles.container}>

           <Text style={styles.text}>Hi!</Text>
           <Text style={styles.textName}>{name}</Text>
            <Text style={styles.textDesc}>Kindey click the below button to get started</Text>

        {/* if app is running on emulator it will display the message and the emulator modal */}
        {emulator?<Text style={styles.textDescEmulator}>Using Emulator/Simulator:</Text>:null}
            <Text style={styles.emulatorTxt}>{device}</Text>

       <TouchableOpacity style={styles.button} onPress={GoToViewThree}>
                <Text style={styles.buttonText}>Get Started</Text>
       </TouchableOpacity>

       </View>
    )
}

export default View2
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : '#fff',
    },
  
    button:{
    width:200,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'black',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute'
    },
    textName:{ 
        color:"#73C2FB",
        fontSize:35,
        fontWeight:'bold',
        position:'absolute',
        top:150,
    },
    text:{
        color:"#73C2FB",
        fontSize:40,
        fontWeight:'bold',
        position:'absolute',
        top:100,
    },
    textDesc:{
        color:"#73C2FB",
        fontSize:15,
        fontWeight:'bold',
       top:220,
      position:'absolute'
    },
    buttonText:{
        color:"#73C2FB",
      fontSize:25,
      fontWeight:'bold',
    },
    emulatorTxt:{
        color:"black",
      fontSize:25,
      fontWeight:'bold',
      position:'absolute',
      bottom:120
    },  textDescEmulator:{
        color:"red",
        fontSize:15,
        fontWeight:'bold',
       top:500,
      position:'absolute'
    },
})