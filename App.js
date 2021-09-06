import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import PcGamerNavigator from './navigation/PcGamerNavigation';



export default function App() {

  const [seleccionRecomendada, setSeleccionRecomendada] = useState(false);
  const [recomendada, setRecomendada] = useState({})

  const [loaded] = useFonts({
    'ZCOOL': require('./assets/fonts/ZCOOLKuaiLe-Regular.ttf')
  });

  if (!loaded) return <AppLoading />

  /*
  const content = seleccionRecomendada
  ? <Recomendada recomendada={recomendada} setSeleccionRecomendada={setSeleccionRecomendada} />
  : <CrearPc setSeleccionRecomendada={setSeleccionRecomendada} setRecomendada={setRecomendada} recomendada={recomendada}  />  
*/

  return (
    <PcGamerNavigator />
  );
}

const styles = StyleSheet.create({
  /*
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  */
});
