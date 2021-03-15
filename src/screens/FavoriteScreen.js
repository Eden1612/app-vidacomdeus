import React, { useEffect, useState, useLayoutEffect }  from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Share } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AdMobBanner, setTestDeviceIDAsync } from 'react-native-admob';

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
    
    //função que deleta o favorito
    const deleteFavorite = async (favoriteId) => {
        const newFavorite = favorites.filter(item => item.id !== favoriteId);
        await AsyncStorage.setItem('@addfavorito', JSON.stringify(newFavorite));

        setFavorites(newFavorite);
    }

    //função que compartilha o texto favorito
    const shareVerso = async (favoriteId) => {
        const shareVerso = favorites.filter(item => item.id === favoriteId);
        const referencia = shareVerso[0].referencia;
        const verso = shareVerso[0].verso;

        await Share.share({
            message:referencia + ' - ' + verso
        });
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
                                <TouchableOpacity style={StylesFavoriteScreen.button} onPress={()=>shareVerso(item.id)}>
                                    <Image style={StylesFavoriteScreen.image} source={require('../images/share.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={StylesFavoriteScreen.button} onPress={()=>deleteFavorite(item.id)}>
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
            <AdMobBanner
                    adSize="fullBanner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111"
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={erro=>console.erro(erro)} 
                />
            </View>
        </SafeAreaView>
    );
}

export default FavoriteScreen;