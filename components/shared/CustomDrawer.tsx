import { DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'

const CustomDrawer = () => {
    return (
        <DrawerContentScrollView>
            <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary'>
                <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'>
                    <Text className="text-primary font-work-black text-3xl">SR</Text>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer