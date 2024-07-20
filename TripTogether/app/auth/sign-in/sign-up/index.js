import { View, Text , StyleSheet, TextInput, TouchableOpacity, ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../configs/FirebaseConfig';


export default function SignUp() {
  
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullname, setFullName] = useState();
  const [error, setError] = useState(null);

  const OnCreateAccount = () => {

    if(!email || !password || !fullname)
      {
      ToastAndroid.show('Please fill in all fields', ToastAndroid.BOTTOM);
      return ;
    }

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('User Signed up: ',user);
   
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode);
   
  });

  }
  
  return (
    <View style={{
      padding:25,
      paddingTop:50,
      backgroundColor:'white',
      height:'100%',
    }}>

      <TouchableOpacity onPress={()=>router.back()}>
      <AntDesign name="banckward" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        padding:25,
        marginTop:30,
        marginLeft:20,   
      }}>
        Create or Regret! 
        </Text>


        

        <View style={{marginTop:50}}>
      <Text>Full Name</Text>
        <TextInput 
        style={styles.input} 
        placeholder='We hope you have a name'
        onChangeText={(value)=>setFullName(value)}
        />
         </View>
     

       <View
      style={{
        marginTop:50,
      }}>
      <Text>E-Mail</Text>
        <TextInput 
        style={styles.input} 
        placeholder='Enter E-Mail'
        onChangeText={(value)=>setEmail(value)}/>
      </View>


      <View style={{marginTop:50}}>
      <Text>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='We will keep it safe'
        onChangeText={(value)=>setPassword(value)}/> 

      </View>
      <TouchableOpacity onPress={OnCreateAccount} style={{
        padding:15,
        borderRadius:20,
        backgroundColor:'black',
        marginTop:50,
      }}>
        <Text style={{
          color:'white',
          textAlign:'center',
        }}>
          Create New Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        padding:15,
        borderRadius:20,
        borderWidth:1,
        backgroundColor:'white',
        marginTop:20,
      }} onPress={() => router.replace('auth/sign-in')}>
        <Text style={{
          color:'black',
          textAlign:'center',
        }}>
          Dumb You! Already have an account? Sign In.
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
