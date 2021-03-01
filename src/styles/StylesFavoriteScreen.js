import { StyleSheet } from 'react-native';

const StylesFavoriteScreen = StyleSheet.create({
    header:{
        height:60,
        justifyContent:'center',
        alignItems:'center',
    },
    flatlist:{
        marginTop:20,
        height:'89%'
    },
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
        alignSelf:'center'
    },
    imagHeader:{
        width:30,
        height:30,
        marginLeft:15
    },
    areaAds:{
       
    }
});

export default StylesFavoriteScreen;