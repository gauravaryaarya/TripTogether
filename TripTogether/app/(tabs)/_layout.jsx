import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false,
      tabBarActiveTintColor:'black'
      
    }}>
      <Tabs.Screen name="mytrip"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon:({color}) => <Ionicons name="location-sharp" size={24} color={color} />
        }}
      />

      <Tabs.Screen name="discover"
        options={{
          tabBarActiveTintColor:'black',
          tabBarLabel: 'Discover',
          tabBarIcon:({color}) => <Ionicons name="compass" size={24} color={color} />
        }}
      />

      <Tabs.Screen name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon:({color}) => <Ionicons name="person" size={24} color={color} />
        }}
      />

    </Tabs>
  )
}