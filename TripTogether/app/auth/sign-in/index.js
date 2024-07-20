import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { useNavigation } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../configs/FirebaseConfig'; 


 

export default function SignIn() {
  const router = useRouter();
  const navigation = useNavigation();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  },[] );

  const OnSignIn = () => {  
    
    if(!email && !password){
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
        console.log(errorMessage, errorCode);
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
        padding:25,
        marginTop:60,   
      }}>Let's Sign You In ☺</Text>

      <Text style={{
        fontFamily:'outfit',
        fontSize:18,
        padding:25,
        marginTop:10,
        color:'gray',
      }}>Welcome back, you've been missed!</Text>

      <View
      style={{
        marginTop:50,
      }}>
      <Text>E-Mail</Text>
        <TextInput 
        style={styles.input} 
        onChange={(value)=>setEmail(value)}
        placeholder='Enter E-Mail'
        />

      </View>
        
      <View
      style={{
        marginTop:50,
      }}>
      <Text>Password</Text>
        <TextInput 
        secureTextEntry={true}
        style={styles.input} 
        onChange={(value)=>setPassword(value)}
        placeholder='Your super-secret password to unlock the magic!'
        />

      </View>

      <TouchableOpacity 
      onPress={OnSignIn}
      style={{
        padding:15,
        borderRadius:20,
        backgroundColor:'black',
        marginTop:50,
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
        borderWidth:1,
        backgroundColor:'white',
        marginTop:20,
      }} onPress={() => router.replace('auth/sign-in/sign-up')}>
        <Text style={{
          color:'black',
          textAlign:'center',
        }}>
          No Account? Lets create one.
        </Text>
      </TouchableOpacity>

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

