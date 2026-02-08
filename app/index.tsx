import { Link, Redirect } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
    // return <Redirect href="/home" />
    // return <Redirect href="/tabs" />
    // return <Redirect href="/drawer" />
    return <Redirect href="/home" />

    // return (
    //     <SafeAreaView>
    //         <View className='mt-6 mx-2.5'>
    //             <Text className='text-5xl color-primary' style={{fontFamily: 'WorkSans-Black'}}>Hola mundo</Text>
    //             <Text className='text-4xl font-work-black color-secondary'>Hola mundo</Text>
    //             <Text className='text-3xl font-work-medium color-secondary-100'>Hola mundo</Text>
    //             <Text className='text-2xl font-work-light color-secondary-200'>Hola mundo</Text>
    //             <Text className='text-xl color-tertiary'>Hola mundo</Text>

    //             <Link href={'/products'}>Products</Link>
    //         </View>
    //     </SafeAreaView>
    // )
}

export default App