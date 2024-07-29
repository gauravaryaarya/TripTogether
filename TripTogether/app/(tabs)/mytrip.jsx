import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import {auth} from './../../app/configs/FirebaseConfig'

export default function MyTrip() {

  const {userTrips,setUserTrips} =useState([]);

  return (
    <View style={{
      padding:25,
      paddingTop:55,
      backgroundColor:'white',
      height:'100%',
    }}>

      <View style={{
        display:'flex',
      flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:35
        }}>My Trips</Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>

        <StartNewTripCard/>

        
        {/* {userTrips?.length==0?
        <StartNewTripCard />
        :null
      } */}

       {/* need to be added above */}
      

    </View>
  )
}