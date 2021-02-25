import React, { useLayoutEffect } from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import FavoriteScreen from '../screens/FavoriteScreen';
import NoteteScreen from '../screens/NoteScreen';
import StackNavigator from './StackNavigator';


const DrawerNavigator = createDrawerNavigator();

export default () => {
    return(
        <DrawerNavigator.Navigator 
            drawerStyle={{
                backgroundColor:'#fff',
                width:'70%',
                color:'#f00'
            }}
            drawerType={'slide'}
        >
            <DrawerNavigator.Screen name='Início' component={StackNavigator} />
            <DrawerNavigator.Screen name='Favoritos' component={FavoriteScreen}/>
            <DrawerNavigator.Screen name='Minhas notas' component={NoteteScreen}/>
        </DrawerNavigator.Navigator>
    );
}