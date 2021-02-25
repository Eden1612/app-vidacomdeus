import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import FormNotes from '../screens/FormNotes';


const StackNavigator = createStackNavigator();

export default () => {
    return(
        <StackNavigator.Navigator screenOptions={{
            headerTitle:'VIDA COM DEUS',
            headerTitleAlign:'center',
            headerStyle:{
                backgroundColor:'#020119',
                borderBottomColor:'#1a1a1a',
                borderBottomWidth:0.4
            },
            headerTitleStyle:{
                color:'#fff',
                fontWeight:'bold',
                fontSize:22
            },
        }}>
            <StackNavigator.Screen name='Home' component={Home}/>
            <StackNavigator.Screen name='FormNotes' component={FormNotes}/>
        </StackNavigator.Navigator>
    );
}