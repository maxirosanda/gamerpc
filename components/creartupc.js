import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import ButtonLong from './buttonLong';
import { selectedProduct } from '../store/actions/products.actions';

const CrearPc = ({ navigation, route })=>{

  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list)
   
    const handleSelectedProduct = (id,title) => {
      dispatch(selectedProduct(id));

        navigation.navigate('Recommended', {
          title:title
        });
      }
      const handleSelectedGame = () => {
        navigation.navigate('Game');
      }
      const handleSelectedPrograms = () => {
        navigation.navigate('Programs');
      }
      const handleSelectedBuildPc = () => {
        navigation.navigate('BuildPc');
      }

    

     


    return(
        <View style={styles.conteiner}>
            <View style={styles.fila}>
                <TouchableOpacity style={styles.cuadrado} onPress={handleSelectedPrograms}></TouchableOpacity>
                <TouchableOpacity style={styles.cuadrado} onPress={handleSelectedGame}></TouchableOpacity>
            </View>
            <ButtonLong text={"ARMAR MI PC MANUALMENTE"} handleSelected={handleSelectedBuildPc}></ButtonLong>
            <View style={styles.titulorecomendadas}>
                 <Text style={styles.textrecomendadas}>Recomendadas</Text>
            </View>
            <FlatList
                 data={products}
                 renderItem={(data) => (
                   <TouchableOpacity onPress={()=>{ handleSelectedProduct(data.item.id,data.item.title)}} style={styles.card}><Text>{data.item.title}</Text></TouchableOpacity> 
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