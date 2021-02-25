import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const FavoriteList = ({ referencia, verso }) => {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.areaTitle}>
                    <Text style={styles.title}>{referencia}</Text>
                    <View style={styles.areaButtons}>
                        <TouchableOpacity style={styles.button}>
                            <Image style={styles.image} source={require('../images/share.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Image style={styles.image} source={require('../images/delete.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={styles.areaVerso}>
                    <Text style={styles.verso}>{verso}</Text>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    box:{
        width:362,
        height:165,
        borderRadius:5,
        borderBottomLeftRadius:60,
        backgroundColor:'#020123',
        marginBottom:20,
        padding:20,
        paddingHorizontal:30
    },
    areaTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    title:{
        fontWeight:'bold',
        fontSize:17,
        color:'#ae0a9e'
    },
    areaButtons:{
        flexDirection:'row'
    },
    button:{
        width:23,
        height:23,
        borderRadius:13,
        backgroundColor:'#ae0a9e',
        marginLeft:12,
        justifyContent:'center',
        alignItems:'center'
    },
    areaVerso:{
        marginTop:10,
    },
    verso:{
        fontSize:15,
        color:'#fff',
        lineHeight:22,
        textAlign:'justify'
    },
    image:{
        width:15,
        height:15,
    }
});

export default FavoriteList;