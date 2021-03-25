import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5'

function View4() {
    const name = useSelector((state)=>state.userName)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Congratulations <Text style={{color:'green'}}>{name.toUpperCase()} </Text>you swiped the button.</Text>
            <Icon name="hand-sparkles" size={50} color="green"/>
        </View>
    )
}

export default View4
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : '#F5FCFF',
    },
    text:{ 
        color:'#000',
        fontSize:18,
        fontWeight:'bold',
        
     

    },
})