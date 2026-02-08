// import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
    return (
        <>
            <Tabs screenOptions={{
                tabBarActiveTintColor: 'indigo',
                tabBarShowLabel: true,
                // headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'WorkSans-Medium'
                },
            }}>
                <Tabs.Screen
                    name="(stack)"
                    options={{
                        headerShown: false,
                        title: 'Stack',
                        tabBarIcon: ({ color }) => <Ionicons size={28} name="person-add-outline" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="home/index"
                    options={{
                        title: 'Home Screen',
                        tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="favorites/index"
                    options={{
                        title: 'Favoritos',
                        tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout