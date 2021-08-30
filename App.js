import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import CrearPc from './components/creartupc'
import Recomendada from './components/recomendada';


export default function App() {

  const [seleccionRecomendada, setSeleccionRecomendada] = useState(false);
  const [recomendada, setRecomendada] = useState({})

  const [loaded] = useFonts({
    'ZCOOL': require('./assets/fonts/ZCOOLKuaiLe-Regular.ttf')
  });

  if (!loaded) return <AppLoading />

  const content = seleccionRecomendada
  ? <Recomendada recomendada={recomendada} setSeleccionRecomendada={setSeleccionRecomendada} />
  : <CrearPc setSeleccionRecomendada={setSeleccionRecomendada} setRecomendada={setRecomendada} recomendada={recomendada}  />  


  return (
    <View style={styles.container}>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
