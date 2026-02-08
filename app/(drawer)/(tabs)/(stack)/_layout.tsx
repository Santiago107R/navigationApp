import React from 'react'
import { Stack, useNavigation, useRouter } from 'expo-router'
import { DrawerActions, StackActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const StackLayout = () => {

    const navigation = useNavigation()
    const router = useRouter();

    const onHeaderLeftClick = (canGoBack: boolean) => {

        if (canGoBack) {
            // navigation.dispatch(StackActions.pop())
            // navigation.goBack()
            router.back();
            return;
        }

        // if (navigation.canGoBack()) {
        //     router.back();
        //     return
        // }

            navigation.dispatch(DrawerActions.toggleDrawer)
        }

        return (
            <Stack screenOptions={{
                // animation: 'fade',
                animation: 'flip',
                headerShown: true,
                headerShadowVisible: false,
                statusBarStyle: 'dark',
                contentStyle: {
                    backgroundColor: 'white',
                },
                headerTitleStyle: {
                    fontFamily: 'WorkSans-Medium'
                },
                headerLeft: ({ tintColor, canGoBack }) => <Ionicons name={canGoBack ? 'arrow-back-outline' : 'menu-outline'} className='mr-5' size={25} onPress={() => onHeaderLeftClick(!!canGoBack)} />
            }}>
                <Stack.Screen name='home/index' options={{ title: 'Inicio' }} />
                <Stack.Screen name='products/index' options={{ title: 'Productos' }} />
                <Stack.Screen name='profile/index' options={{ title: 'Perfil' }} />
                <Stack.Screen name='settings/index' options={{ title: 'Ajustes' }} />
                <Stack.Screen name='products/[id]' options={{ title: 'Producto' }} />

            </Stack>
        )
    }

    export default StackLayout