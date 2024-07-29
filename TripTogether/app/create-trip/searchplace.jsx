import { View, Text } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { useNavigation } from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { CreateTripContext } from './../../context/CreateTripContext'

export default function searchplace() {
const navigation = useNavigation();
const {tripData, setTripData} = useContext(CreateTripContext);
useEffect(()=>{
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
    headerTitle: 'Search',
  })
},[])

useEffect(()=>{
  console.log(tripData);

}),[tripData]

  return (
    <View style={{
      padding:25,
      paddingTop:75,
      backgroundColor:'white',
      height:'100%',
    }}>

      
      <GooglePlacesAutocomplete
      placeholder='Search Place'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data.description);
        console.log(details?.geometry.location);
        console.log(details?.photos[0]?.photo_reference);
        console.log(details?.url);
        setTripData({ 
          locationInfo:{
            name:data.description,
            coordinates:details?.geometry.location,
            photoRef:details?.photos[0]?.photo_reference,
            url:details?.url,
          }
        })
      }}
      query={{
        key: 'AIzaSyCcdpFFfKcz-nkaGcjUZPN6lLFfjTpDg2w',
        language: 'en',
      }}
      styles={{
        textInputContainer:{
          borderWidth:1,
          borderRadius:10,
          marginTop:25,
        }
      }}
    />
    


    </View>
  )
}