import React, { useEffect, useState, useLayoutEffect }  from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Share } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import StylesFavoriteScreen from '../styles/StylesFavoriteScreen';

const FavoriteScreen = () => {
    const navigation = useNavigation();

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
       AsyncStorage.getItem('@addfavorito').then(data => {
            const favorito = JSON.parse(data);
            setFavorites(favorito);
        })
    }, []);

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> 
                <TouchableOpacity onPress={goHome}> 
                    <Image style={StylesFavoriteScreen.imagHeader} source={require('../images/reply.png')}/>
                </TouchableOpacity>
        });
    }, []);

    const goHome = () => navigation.navigate('Home');
    

    const deleteFavorite = async (favoriteId) => {
        
    }

    const shareVerso = async (favoriteId) => {
     
    }


    return(
        <SafeAreaView>
            <FlatList 
                style={StylesFavoriteScreen.flatlist}
                data={favorites}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View style={StylesFavoriteScreen.container}>
                    <View style={StylesFavoriteScreen.box}>
                        <View style={StylesFavoriteScreen.areaTitle}>
                            <Text style={StylesFavoriteScreen.title}>{item.referencia}</Text>
                            <View style={StylesFavoriteScreen.areaButtons}>
                                <TouchableOpacity style={StylesFavoriteScreen.button} onPress={shareVerso}>
                                    <Image style={StylesFavoriteScreen.image} source={require('../images/share.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={StylesFavoriteScreen.button} onPress={deleteFavorite}>
                                    <Image style={StylesFavoriteScreen.image} source={require('../images/delete.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ScrollView style={StylesFavoriteScreen.areaVerso}>
                            <Text style={StylesFavoriteScreen.verso}>{item.verso}</Text>
                        </ScrollView>
                    </View>
                </View>
                )}
            />
            <View style={StylesFavoriteScreen.areaAds}>
                <Text>Aqui vem o anuncio</Text>
            </View>
        </SafeAreaView>
    );
}

export default FavoriteScreen;