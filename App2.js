import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import react from 'react';

function HomeScreen({navigation , route}){
react.useEffect(()=>{if(route.params?.post){//Post Update || do something with 'route.params.post'
}},[route.params?.post]);

return(
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Button title='Create Post' onPress={() => navigation.navigate('CreatePost' , {})}/>
    <Text style={{margin:10}}> Post : {route.params?.post}</Text>
  </View>
)
}
function CreatePostScreen({navigation , route}){
 const [postText,setPostText] = react.useState('');
 return(
  // use fragment
  <>
  <TextInput multiline placeholder='Place Text Here' style={{height:200,padding:10,backgroundColor:'white'}} onChangeText={setPostText} value={postText}/>
  <Button title='Post' onPress={()=> {navigation.navigate('Home' , {post : postText})}}/>
  </>
 );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerStyle:{backgroundColor:'#0CA0FF'},headerTintColor:'#0CFF4B',headerTitleStyle:{fontWeight:'bold',fontSize:30}}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='CreatePost' component={CreatePostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}