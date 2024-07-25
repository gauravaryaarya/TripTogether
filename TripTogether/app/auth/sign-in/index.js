import { View, Text, TextInput,Image, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { useNavigation } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../configs/FirebaseConfig'; 


 

export default function SignIn() {
  
  const navigation = useNavigation();
  const router = useRouter();

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  },[] )

  const OnSignIn = () => {  
    
    if(!email&&!password){
      ToastAndroid.show('Please fill in all fields',ToastAndroid.LONG);
      return;
    }

   

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('User Signed in: ',user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        if(errorCode=='auth/invalid-credential'){
          ToastAndroid.show('Invalid Credentials',ToastAndroid.LONG);
        }
      });
    }

  return (
    


    <View style={{padding:25,
      backgroundColor:'white',
      height:'100%',
      paddingTop:50,
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
      <AntDesign name="banckward" size={24} color="black" />
      </TouchableOpacity>

      
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        padding:35,
        marginTop:3,   
      }}>Let's Sign You In ☺</Text>

      <Text style={{
        fontFamily:'outfit',
        fontSize:18,
        padding:25,
        marginTop:-60,
        color:'gray',
      }}>Welcome back, you've been missed!</Text>

      <View
      style={{
        marginTop:20,
      }}>
      <Text>E-Mail</Text>
        <TextInput 
        style={styles.input} 
        onChangeText={(value)=>setEmail(value)}
        placeholder='Enter E-Mail'
        />

      </View>
        
      <View
      style={{
        marginTop:15,
      }}>
      <Text>Password</Text>
        <TextInput 
        secureTextEntry={true}
        style={styles.input} 
        onChangeText={(value)=>setPassword(value)}
        placeholder='Your super-secret password to unlock the magic!'
        />

      </View>

      <TouchableOpacity 
      onPress={OnSignIn}
      style={{
        padding:15,
        borderRadius:50,
        backgroundColor:'black',
        marginTop:30,
        width:'50%',
        marginLeft:'23%',
      }}>
        <Text style={{
          color:'white',
          textAlign:'center',
        }}>
          Sign In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        padding:15,
        borderRadius:20,
        backgroundColor:'white',
        marginTop:0,
      }} onPress={() => router.replace('auth/sign-in/sign-up')}>
        <Text style={{
          color:'black',
          textAlign:'center',
        }}>
          No Account? Lets create one.
        </Text>
      </TouchableOpacity>

      <Image source={require('./../../../assets/images/plane2.jpg')}
      style={{
        width:500,
        height:300,
        marginTop:20,
        marginLeft:0,
      }}/>

    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: 'gray',
      fontFamily:'outfit',
    },
})

