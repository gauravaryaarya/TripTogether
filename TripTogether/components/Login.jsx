import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'


export default function Login() {

  const router = useRouter();

  return (
    <View style={{width:'100%'}}>
        <Image source={require('./../assets/images/login2.jpeg')}
       style={{
        width:'100%',
        height:500,
        position:'relative',
        bottom:-30,
      }}
    />

    <View style={styles.container}>
      <Text style={{
        color:'black',
        marginTop:10,
        fontSize:38,
        fontWeight:'bold',
        textAlign:'center',
      }}>TripTogether</Text>

      <Text style={{
        marginTop:20,
        fontFamily:'outfit',
        textAlign:'center',
        fontSize:17,
        color:'gray',
      }}>An  app  to  find  travel buddies  and  plan  trips together......
      
      <Text style={{
        color:'violet',
      }}>
      Fuck it!
      </Text>
      {'\n'}We hope you brought your sense of humor, things are about to get fun!
      </Text>


      <TouchableOpacity style={styles.button2}
      onPress={() => router.push('auth/sign-in')}>
        

        <Text style={{
          fontFamily:'outfit',
          fontSize:20,
          textAlign:'center',
          justifyContent:'center',
          marginTop:-5,
        }}>Let's Go! 🚀</Text>
      </TouchableOpacity>

        

      <TouchableOpacity style={styles.button}>
        <Image 
        style={{ width:30, height:30}}
        source={require('./../assets/images/loginwithgoogle.png')}></Image>
        <Text style={{
          fontFamily:'outfit',
          fontSize:14,
          textAlign:'center',
          justifyContent:'center',
          marginTop:-3,
        }}>Log In With Google</Text>
      </TouchableOpacity>
    </View>



    
      
      
      
    </View>
  )}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
   borderTopLeftRadius:50,
   borderTopRightRadius:50,
   height:500,
    width:'100%',
    left:0,
    padding:15,
    
     
  },
  
  button: {
    height:50,
    width:200,
    padding:15,
    gap:15,
    backgroundColor:'white',
    borderRadius:99,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    marginTop:'4%',
    marginLeft:95,
  },

  button2:{
    padding:13,
    backgroundColor:'lightblue',
    borderRadius:99,
    height:50,
    width:200,
    alignItems:'center',
    marginLeft:95,
    marginTop:'10%',
    borderWidth:2,
  
   
  }
})

