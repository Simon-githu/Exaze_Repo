import React from 'react'
import { useSelector } from 'react-redux'
import {StyleSheet,View,Text,TouchableOpacity, TouchableHighlight, Button} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import SwipeButton from 'rn-swipe-button';

function View3({navigation}) {

    const name = useSelector(state=>state.userName)

     const DiamondIcon = () => <Icon name="diamond" color="#ffff" size={30} />;

     const GoToView4=()=>{
     navigation.navigate('View-4')
     }

    return (
      <View style={styles.container}>
          <Text style={styles.text}>{name}</Text>

          <Text style={styles.textVariation}>4 variations of button</Text>

          <TouchableOpacity style={styles.button1}
          onPress={()=>{alert(`${name.toUpperCase()} pressed me `)}}
          >
        <Text style={styles.buttonText1}>Press me</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3}
        onPress={()=>{alert(`${name.toUpperCase()} pressed me `)}}
        >
        <Text style={styles.buttonText3}>Press me</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}
        onPress={()=>{alert(`${name.toUpperCase()} pressed me `)}}
        >
        <Text style={styles.buttonText2}>Press me</Text>
        </TouchableOpacity>

       <View style={{padding:10,}}>

        <SwipeButton
          disabled={false}
          swipeSuccessThreshold={70}
          height={45}
          width={310}
          shouldResetAfterSuccess={true}
          railStyles={{
              backgroundColor:'#73C2FB'
          }}
          railFillBackgroundColor="#73C2FB"
          railBackgroundColor="#73C2FB"
            onSwipeSuccess={GoToView4}
            thumbIconBackgroundColor="#73C2FB"
            thumbIconComponent={DiamondIcon}
            title="Slide me to continue"
          />

          </View>
     
      </View>
    )
}

export default View3
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : 'black',
    },
    text:{ 
        color:'#73C2FB',
        fontSize:20,
        fontWeight:'bold',
        position:'absolute',
     top:20,

    },
    textVariation:{ 
        color:'yellow',
      

    },
    buttonText1:{
        color:'#73C2FB'
    },
    buttonText2:{
        color:'#fff'
    },
    buttonText3:{
        color:'#73C2FB'
    },
    button2:{
       
       
        width:300,
        marginRight:40,
    marginLeft:40,
   marginTop:15,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#73C2FB',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#73C2FB',
    alignItems: 'center',
    justifyContent: 'center',
    },
    button3:{
       
       
        width:300,
        marginRight:40,
    marginLeft:40,
   marginTop:30,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#696969',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
    },
    button1:{
       
       
        width:300,
        marginRight:40,
    marginLeft:40,
   marginTop:30,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'black',
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    },
    button4:{
       
        
        width:300,
        marginRight:40,
    marginLeft:40,
   marginTop:15,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'transparent',
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    },
})