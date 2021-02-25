import { StyleSheet } from 'react-native';

const StylesForm = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#020123'
    },
    areaForm:{
        width:362,
        height:220,
        backgroundColor:'#fff',
        borderRadius:40,
        marginTop:25,
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'justify',
    },
    input:{
        height:210,
    },
    areaButtons:{
        marginTop:23,
        height:170,
    },
    buttonSalve:{
        width:362,
        height:55,
        borderRadius:40,
    },
    linearGradient:{
        width:362,
        height:55,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff'
    }
});

export default StylesForm;