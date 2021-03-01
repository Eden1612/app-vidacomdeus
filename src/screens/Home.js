import React, {useEffect, useState, useLayoutEffect} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, Image, StatusBar, Share } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import StylesHomeScreen from '../styles/StylesHomeScreen';
import Versos from '../components/Dados';

const HomeScreen = () => {
    const navigation = useNavigation();

    const [titleVerse, setTitleVerse] = useState();
    const [verse, setVerse] = useState();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('@addfavorito').then(data=> {
            const favorito = JSON.parse(data);
            
            setFavorites(favorito);
            NewVerse()
        })
    }, []);

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=> 
                <TouchableOpacity onPress={goFavorites}> 
                    <Image style={StylesHomeScreen.imagHeader} source={require('../images/favorite.png')}/>
                </TouchableOpacity>
        });
    }, []);

    //apenas para armazenar informaçoes de título e versículo para uso em outras funções
    const titulo = titleVerse;
    const versiculo = verse;

    //Função que gerar novo versículo
    const NewVerse = () => {
        const aleatoryItem = Versos[Math.floor(Math.random() * Versos.length)];
        const referencia = aleatoryItem.referencia;
        const verso = aleatoryItem.verso;

        setTitleVerse(referencia);
        setVerse(verso);
    }

    //Função que compartilha o versículo
    const shareVerso = async () => {
        await Share.share({
            message: titleVerse + ' - ' + verse
        });
    }

    //Função que adiciona versículo aos favoritos
    const favoriteAdd = async () => {
        const id = Math.random(50000).toString();

        const data = {
            referencia: titleVerse,
            verso: verse,
            id
        };

        favorites.push(data)
        await AsyncStorage.setItem('@addfavorito', JSON.stringify(favorites));

        console.log(favorites);
    }


    const goFavorites = () => navigation.navigate('FavoriteScreen');


    return(
        <SafeAreaView style={StylesHomeScreen.container}>
            <StatusBar 
                barStyle={'light-content'}
                backgroundColor={'#020119'}    
            />
            <LinearGradient 
                colors={['#960487', '#06C2F2']}
                start={{x:0, y:0}}
                end={{x:1, y:1}}
                style={StylesHomeScreen.linearArea}
            >
                <View style={StylesHomeScreen.areaVersus}>
                    <View style={StylesHomeScreen.areaTitle}>
                        <Text style={StylesHomeScreen.textTitle}>{titleVerse}</Text>
                    </View>
                    <View style={StylesHomeScreen.areaTextVersus}>
                        <Text style={StylesHomeScreen.textVersus}>{verse}</Text>
                    </View>
                </View>
            </LinearGradient>
            

            <View style={StylesHomeScreen.areaButtons}>
                <TouchableOpacity style={StylesHomeScreen.Buttons} onPress={NewVerse}>
                    <LinearGradient 
                        colors={['#4AE6FB','#AE0A9E']}
                        style={StylesHomeScreen.linearGradient}
                    >
                        <Image source={require('../images/new.png')} style={StylesHomeScreen.imageButtons}/>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={StylesHomeScreen.Buttons} onPress={shareVerso}>
                    <LinearGradient 
                        colors={['#4AE6FB','#AE0A9E']} 
                        style={StylesHomeScreen.linearGradient}
                    >
                        <Image source={require('../images/share.png')} style={StylesHomeScreen.imageButtons}/>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={StylesHomeScreen.Buttons} onPress={favoriteAdd}>
                    <LinearGradient 
                        colors={['#4AE6FB','#AE0A9E']} 
                        style={StylesHomeScreen.linearGradient}
                    >
                        <Image source={require('../images/favorite.png')} style={StylesHomeScreen.imageButtons}/>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
}

export default HomeScreen;

