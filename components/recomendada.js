import React from 'react'
import { View,Text,StyleSheet} from 'react-native'
import BarraNavegacion from './barraNavegacion'

const Recomendada = ({setSeleccionRecomendada,recomendada})=>{
   

    return(
        <View style={styles.conteiner}>
            <BarraNavegacion setSeleccionRecomendada={setSeleccionRecomendada}></BarraNavegacion>
        <View>
            <Text>{recomendada.title}</Text>
            <Text>{recomendada.price}</Text>
        </View>
       
    </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%"
        }
})

export default Recomendada