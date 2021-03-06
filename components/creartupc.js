import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import ButtonLong from './buttonLong';
import { selectedProduct } from '../store/actions/products.actions';
import Cuadrado from './cuadrado';
import { AntDesign } from '@expo/vector-icons'; 
import Rectangulo from './rectangulo'

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
              <Cuadrado handleSelected ={handleSelectedPrograms} />
              <Cuadrado handleSelected ={handleSelectedGame} />
            </View>
            <ButtonLong text={"ARMAR MI PC MANUALMENTE"} handleSelected={handleSelectedBuildPc}></ButtonLong>
            <View style={styles.titulorecomendadas}>
                 <Text style={styles.textrecomendadas}>Recomendadas</Text>
            </View>
            <FlatList
                 data={products}
                 renderItem={(data) => (
                   <TouchableOpacity onPress={()=>{ handleSelectedProduct(data.item.id,data.item.title)}} style={styles.card}>
                     <Rectangulo/>
                     <View>
                     <Text style={styles.textrecomendada}>{data.item.title}</Text>
                     <Text style={styles.textrecomendada}>{data.item.price}</Text>
                     <Text style={styles.textrecomendada}>{data.item.description}</Text>
                     </View>
                     <AntDesign name="rightcircle" style={styles.flechaderecha} size={24} color="black" />
                     </TouchableOpacity> 

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
    borderRadius:8,
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
textrecomendada:{
  flexDirection:"column",
  textAlign:"left"
},
card:{
    height:100,
    flexDirection:"row",
    alignContent:"center",
    alignItems:"center",
    marginBottom:5,
    margin:5,
    elevation: 2,
    borderRadius: 5
},
rectangulo:{
  width:80,
  height:50,
  backgroundColor:"#FB6D01",
  borderRadius:8,
  marginLeft:8,
  marginRight:18,
  
},
flechaderecha:{
  marginLeft:30
}

})

export default CrearPc