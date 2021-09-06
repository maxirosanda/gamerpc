import React from 'react'
import { View,Text,StyleSheet,TextInput,FlatList,TouchableOpacity} from 'react-native'
import Circle from './circle'
import { PROGRAMS } from '../data/programs';
import ButtonLong from './buttonLong';
const Programs = ({ navigation, route })=>{
    
    return(
        <View style={styles.conteiner}>
        <TextInput style={styles.search}  placeholder="    Buscar" />
            <FlatList style={styles.circles}  data={PROGRAMS} keyExtractor={item => item.id} renderItem={(data) => (
                < Circle item={data.item} />  
            )}/> 
            <ButtonLong text={"Ver Opciones de Computadoras"} handleSelected={()=>{}}></ButtonLong>
       
    </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%"
        },
    search:{
        height:50,
        margin:15,
        borderWidth:1,
        borderRadius:5,
        borderColor:"#000000"
    },
    circles:{
    backgroundColor:"#CEDF64",
    height:100,
    }
})

export default Programs