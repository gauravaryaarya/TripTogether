import { View, Text , StyleSheet, TextInput, TouchableOpacity, ToastAndroid,Image} from 'react-native'
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
    router.replace('/mytrip');
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
        padding:35,
        marginTop:-20,
        marginLeft:20,   
      }}>
        Create or Regret! 
        </Text>


        

        <View style={{marginTop:-10}}>
      <Text>Full Name</Text>
        <TextInput 
        style={styles.input} 
        placeholder='We hope you have a name'
        onChangeText={(value)=>setFullName(value)}
        />
         </View>
     

       <View
      style={{
        marginTop:15,
      }}>
      <Text>E-Mail</Text>
        <TextInput 
        style={styles.input} 
        placeholder='Enter E-Mail'
        onChangeText={(value)=>setEmail(value)}/>
      </View>


      <View style={{marginTop:15}}>
      <Text>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='We will keep it safe'
        onChangeText={(value)=>setPassword(value)}/> 

      </View>
      <TouchableOpacity onPress={OnCreateAccount} style={{
        padding:15,
        borderRadius:50,
        backgroundColor:'black',
        marginTop:15,
        marginLeft:'19%',
        width:'60%',
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
       
        backgroundColor:'white',
        marginTop:0,
      }} onPress={() => router.replace('auth/sign-in')}>
        <Text style={{
          color:'black',
          textAlign:'center',
        }}>
          Dumb You! Already have an account? Sign In.
        </Text>
      </TouchableOpacity>

      <Image source={require('./../../../../assets/images/plane2.jpg')}
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
