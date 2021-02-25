import React, {useEffect, useState} from 'react';
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
    const [ShowNote, SetShowNote] = useState(false);

    useEffect(() => {
        
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
        }

        await AsyncStorage.setItem('@addfavorito', JSON.stringify(data));

        console.log(data);
    }

    //função que exibe o campo de notas.
    const showNote = () => {
        if(ShowNote == false) {
            SetShowNote(true)
        } else {
            SetShowNote(false)
        }
    }

    const GoForm = () => navigation.navigate('FormNotes');


    return(
        <SafeAreaView style={StylesHomeScreen.container}>
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

                <TouchableOpacity style={StylesHomeScreen.Buttons} onPress={showNote}>
                    <LinearGradient 
                        colors={['#4AE6FB','#AE0A9E']} 
                        style={StylesHomeScreen.linearGradient}
                    >
                        <Image source={require('../images/note_add.png')} style={StylesHomeScreen.imageButtons}/>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <>
                {ShowNote &&
                    <View style={StylesHomeScreen.areaNotes}>
                        <View style={StylesHomeScreen.notesHeader}>
                            <View style={StylesHomeScreen.notesHeaderText}>
                                <Text style={StylesHomeScreen.titleNotes}>Salmos 23</Text>
                                <Text style={StylesHomeScreen.dateNotes}>22/01/2021</Text>
                            </View>
                            <View style={StylesHomeScreen.areaButtonNote}>
                                <TouchableOpacity style={StylesHomeScreen.Buttons} onPress={GoForm}>
                                    <LinearGradient 
                                        colors={['#010031','#711AB6', '#F303F8']} 
                                        style={StylesHomeScreen.linearGradient}
                                    >
                                        <Image source={require('../images/create.png')} style={StylesHomeScreen.imageButtons}/>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                
                        <View style={StylesHomeScreen.areaNote}>
                            <ScrollView style={StylesHomeScreen.areaScroll}>
                                <Text style={StylesHomeScreen.textNote}>
                                    Ainda não foram adicionadas notas ao versículo.
                                </Text>
                            </ScrollView>
                        </View>
                    </View>
                }
            </>
        </SafeAreaView>
    );
}

export default HomeScreen;

