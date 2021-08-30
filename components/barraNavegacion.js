import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'

const BarraNavegacion = ({setSeleccionRecomendada})=>{
   
    const handleReturn = () =>{
        setSeleccionRecomendada(false)
    }


    return(
         <View style={styles.barrasuperior}>
            <TouchableOpacity onPress={handleReturn} style={styles.volver}></TouchableOpacity>
            <Text style={styles.titulo} >Recomendada</Text>
        </View>

    )
}

const styles= StyleSheet.create({

        barrasuperior:{
        marginTop:20,
        height:60,
        backgroundColor:"#000000",
        alignItems:"center",
        flexDirection:"row",
        
        },
        titulo:{
            color:"#FFFFFF",
            textAlign:"center",
            height:60,
            fontSize:20,
            flexGrow:5,
            textAlignVertical:"center",
            fontFamily:"ZCOOL",
            
        },
        volver:{
            width:30,
            maxWidth:30,
            marginLeft:10,
            height:30,
            flexGrow:1,
            backgroundColor:"#ffffff"
        },
})

export default BarraNavegacion