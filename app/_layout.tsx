import React, { useEffect } from 'react'
import { Platform } from 'react-native';
import { Slot, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
// import { Drawer } from 'expo-router/drawer';
import * as NavigationBar from 'expo-navigation-bar';
import "./global.css"

SplashScreen.preventAutoHideAsync();

const isAndroid = Platform.OS === 'android'

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync('black')
  NavigationBar.setPositionAsync('absolute'); // Esto hace que la app flote detrás de la barra
  NavigationBar.setBackgroundColorAsync('#00000000');

}

const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
  })

  useEffect(() => {
    if (error) throw error

    if (fontsLoaded) SplashScreen.hideAsync();

  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null

  return (
    // <Drawer>
      <Slot />
    // </Drawer>
  )
  // return (
  //     <Slot />
  // )
}

export default RootLayout