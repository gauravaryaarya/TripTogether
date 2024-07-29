import { View, Text ,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import {auth} from './../../app/configs/FirebaseConfig'
import { useRouter } from 'expo-router'

export default function StartNewTripCard() {
  const router = useRouter();
  return (
    <View style={{
      padding:20,
      display:'flex',
      alignItems:'center',
      marginTop:50,
      gap:25,
    }}>
      <Entypo name="location" size={30} color="black" />
      <Text style={{
        fontSize:26,
        fontFamily:'outfit-bold',
      }}>No Trips Planned YET?</Text>

      <Text style={{
        fontSize:15,
        textAlign:'center',
        color:'gray',
      }}>Looks like its time to plan a new Travel Experience!
        Get Started by creating a new trip and inviting your friends to join you.
      </Text>

      <TouchableOpacity onPress={()=>router.push('/create-trip/searchplace')} style={{
        padding:15,
        borderRadius:30,
        backgroundColor:'black',
        paddingHorizontal:30,
        marginTop:30,
      }}>
        <Text style={{color:'white',fontSize:16}}>Start New Trip</Text>
      </TouchableOpacity>
    </View>
  )
}