import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const Circle = ({item})=>{
    
    return(
        <TouchableOpacity style={styles.circle}>
      <Text>{item.title}</Text> 
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    circle:{
        backgroundColor:"#C30D0A",
        flexGrow:1,
        width:100,
        height:100,
        margin:8,
        }
})

export default Circle