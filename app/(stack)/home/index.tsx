import { Link, router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../components/shared/CustomButton';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>

                <CustomButton children='Productos' className='mb-2' color='primary' onPress={() => router.push('/products')} />
                <CustomButton children='Perfil' className='mb-2' color='secondary' onPress={() => router.push('/profile')} />
                <CustomButton children='Ajustes' className='mb-2' color='tertiary' onPress={() => router.push('/settings')} />

                <Link href={'/products'} asChild>
                    <CustomButton children='Productos' color='primary' variant='text-only' className='mb-10' />
                </Link>

                {/* <Link className='mb-5' href={'/products'}>Productos</Link>
                <Link className='mb-5' href={'/profile'}>Perfil</Link>
                <Link className='mb-5' href={'/settings'}>Ajustes</Link> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen