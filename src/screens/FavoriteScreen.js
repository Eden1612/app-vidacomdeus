import React, { useEffect, useState }  from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Share } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import FavoriteList from '../components/FavoritesList';
import StylesFavoriteScreen from '../styles/StylesFavoriteScreen';

const FavoriteScreen = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
       AsyncStorage.getItem('@addfavorito').then(data => {
            const favorito = JSON.parse(data);
            setFavorites(favorito);
        })

        console.log(favorites);
    }, []);

    const deleteFavorite = async (favoriteId) => {
        const newFavorite = favorites.filter(item => item.id !== favoriteId);
        await AsyncStorage.setItem('@addfavorito', JSON.stringify(newFavorite));
        
        setFavorites(newFavorite);
    }

    const shareVerso = async () => {
       
    }

    return(
        <SafeAreaView>
            <View style={StylesFavoriteScreen.header}> 
                <Text style={StylesFavoriteScreen.titleHeader}>FAVORITOS</Text>
            </View>
            <FlatList 
                data={favorites}
                keyExtractor={(item) => item.id}
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
        </SafeAreaView>
    );
}

export default FavoriteScreen;