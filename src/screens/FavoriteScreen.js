import React, { useEffect, useState }  from 'react';
import { SafeAreaView, FlatList, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import FavoriteList from '../components/FavoritesList';

const FavoriteScreen = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
       AsyncStorage.getItem('@addfavorito').then(data => {
            const favorito = JSON.parse(data);
            setFavorites(favorito);
        })

        console.log(favorites);
    }, []);

    return(
        <SafeAreaView>
            <View>
                <Text>TÍTULO DA PÁGINA</Text>
            </View>
            <FlatList 
                data={favorites}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                   <FavoriteList 
                        referencia={item.referencia}
                        verso={item.verso}
                   />
                )}
            />
        </SafeAreaView>
    );
}

export default FavoriteScreen;