import { View,TextInput,Text } from "react-native-web"
import React from 'react'

const Cat =()=> {
 return (
<View style={{padding:50}}>
        <View style = {{flex:1,
              flexDirection:'row',
              justifyContent: 'space-between',
              alignItems:'center'}}>

            <Text> Hello , I am... </Text>
            <TextInput
             placeholder= 'Name'
             style={{width:'80%' , borderColor:'black',borderWidth:1,padding:10}}
            />

            </View>

    </View>


 )

}

export default Cat