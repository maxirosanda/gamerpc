import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const Card = ({item})=>{
    
    return(
        <TouchableOpacity style={styles.card}>
      <Text>{item.title}</Text> 
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    card:{
        height:120,
        backgroundColor:"#FB6D01",
        margin:15,
        borderRadius:10,
        elevation:2
    }
})

export default Card