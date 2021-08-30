import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import BarraNavegacion from './barraNavegacion'


const CrearPc = ({setSeleccionRecomendada, setRecomendada,recomendada})=>{

    

    const handleRecomendadas = (item) => {
        setSeleccionRecomendada(true)
        setRecomendada(item)
      }

    

      const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Item 1',
          price: 15000,
          description:"kjfgshgsghasgjlhaghaighjaio"
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Item 2',
          price: 15000,
          description:"kjfgshgsghasgjlhaghaighjaio"
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Item 3',
          price: 15000,
          description:"kjfgshgsghasgjlhaghaighjaio"
        },
        {
            id: '45433a0f-3da1-471f-bd96-145571e29d72',
            title: 'Item 4',
            price: 15000,
            description:"kjfgshgsghasgjlhaghaighjaio"
          },
      ];


    return(
        <View style={styles.conteiner}>
           <BarraNavegacion setSeleccionRecomendada={setSeleccionRecomendada}></BarraNavegacion>
            <View style={styles.fila}>
                <TouchableOpacity style={styles.cuadrado}></TouchableOpacity>
                <TouchableOpacity style={styles.cuadrado}></TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.contendorBotonLargo} > 
                <Text style={styles.textBotonLargo}>ARMAR MI PC MANUALMENTE</Text>
            </TouchableOpacity>
            <View style={styles.titulorecomendadas}>
                 <Text style={styles.textrecomendadas}>Recomendadas</Text>
            </View>
            <FlatList
                 data={DATA}
                 renderItem={(data) => (
                   <TouchableOpacity onPress={()=>{handleRecomendadas(data.item)}} style={styles.card}><Text>{data.item.title}</Text></TouchableOpacity> 
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
},

cuadrado:{
    width:120,
    flexGrow:1,
    height:120,
    margin:20,
    backgroundColor:"#DEC600",
},
fila:{
    flexDirection:"row",
},
contendorBotonLargo:{
    margin:10,
    backgroundColor:"#000000",
    height:50,
    borderRadius:5
},
textBotonLargo:{
    fontSize:16,
    textAlign:"center",
    color:"#ffffff",
    textAlignVertical:"center",
    height:50,
},
titulorecomendadas:{
    height:30,
    margin:19,
    alignItems:"center",
    flexDirection:"row",
    
},
textrecomendadas:{
    fontSize:20,
    textAlignVertical:"center",
    fontFamily:"ZCOOL",
},
card:{
    height:80,
    backgroundColor:"#EB1A17",
    margin:5,
}

})

export default CrearPc