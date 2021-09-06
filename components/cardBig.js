import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const CardBig = ({item})=>{
    
    return(
        <TouchableOpacity style={styles.card}>
      <Text>{item.name}</Text> 
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    card:{
        height:220,
        backgroundColor:"#EB1A17",
        margin:15,
        borderColor:"#000000",
        borderBottomWidth:5,
    }
})

export default CardBig