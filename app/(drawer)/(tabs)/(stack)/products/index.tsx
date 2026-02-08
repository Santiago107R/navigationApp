import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { products } from '@/store/products.store'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton';

const ProductsScreen = () => {
    return (
        <View className='flex flex-1 px-4'>
            <FlatList data={products} keyExtractor={(item) => item.id} renderItem={({item}) => (
                <View className='mt-10'>
                    <Text className='text-2xl font-work-black'>{item.title}</Text>
                    <Text className=''>{item.description}</Text>

                <View className='flex flex-row justify-between mt-2'>
                    <Text className='font-work-black'>{item.price}</Text>
                    <CustomButton children='Ver detalle' variant='text-only' color='primary' onPress={() => router.push(`/products/${item.id}`)}/>
                </View>
                </View>
            )} />
        </View>
    )
}

export default ProductsScreen