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
        backgroundColor:"#EB1A17",
        margin:15,
    }
})

export default Card