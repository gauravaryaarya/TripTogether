import { Text, View } from "react-native";
import Login from '../components/Login'
import {auth} from './../app/configs/FirebaseConfig'
import { Redirect } from "expo-router";
export default function Index() {

  const user = auth.currentUser;

  return (
    <View
      style={{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      {user?
        <Redirect href={'/mytrip'}/>:
        <Login/>
    }
      
    </View>
  );
}
