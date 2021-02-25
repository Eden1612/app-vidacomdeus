import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity} from 'react-native';
import StylesForm from '../styles/StylesForm';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const FormNotes = () => {
    const navigation = useNavigation();

    const SaveNote = () => navigation.navigate('Home');
    
    return(
        <SafeAreaView style={StylesForm.container}>
            <View style={StylesForm.areaForm}>
                <TextInput 
                    multiline={true}
                    maxLength={500}
                    style={StylesForm.input}
                />
            </View>

            <View style={StylesForm.areaButtons}>
                <TouchableOpacity style={StylesForm.buttonSalve} onPress={SaveNote}>
                    <LinearGradient 
                        colors={['#06C2F2', '#F303F8']} 
                        start={{x:0, y:1.5}}
                        end={{x:1, y:1}}
                        style={StylesForm.linearGradient}
                    >
                        <Text style={StylesForm.textButton}>SALVAR NOTA</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default FormNotes;