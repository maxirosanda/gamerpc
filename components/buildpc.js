import React from 'react'
import { View,Text,StyleSheet,FlatList} from 'react-native'
import { COMPONENTS } from '../data/components';
import Card from './card'
const BuildPc = ({ navigation, route })=>{
    
    return(
        <View style={styles.conteiner}>

                <FlatList
                 data={COMPONENTS}
                 renderItem={(data) => (
                  <Card item={data.item}/>
                    )}
                 keyExtractor={item => item.id}
             />
    </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%"
        }
})

export default BuildPc