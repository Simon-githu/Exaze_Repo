import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import View2 from '../pages/View2';
import View1 from '../pages/View1';
import View3 from '../pages/View3';
import View4 from '../pages/View4';

function StackNavigator() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
        <Stack.Navigator >
       
          <Stack.Screen name="View-1" component={View1} options={{headerShown:false}}/>
          <Stack.Screen name="View-2" component={View2} options={{headerShown:false}}/>
          <Stack.Screen name="View-3" component={View3} options={{headerShown:false}}/>
          <Stack.Screen name="View-4" component={View4} options={{headerShown:false}}/>

        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default StackNavigator

