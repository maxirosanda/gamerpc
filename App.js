import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation';
import { Provider } from 'react-redux';
import store from './store';



export default function App() {


  const [loaded] = useFonts({
    'ZCOOL': require('./assets/fonts/ZCOOLKuaiLe-Regular.ttf')
  });

  if (!loaded) return <AppLoading />

  return (
    <Provider store={store}>
    <MainNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
