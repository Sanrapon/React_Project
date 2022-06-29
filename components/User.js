import {  Text, View , Button} from 'react-native'
import React from 'react'

const User =()=>{
    const users = [{id:1,name:"Jonh"},{id:2,name:"Mary"}];
    return(
        <View><Text></Text>
        {users.map((user,index)=>{
            return <Text key={user.id}>{index+1}.{user.name}</Text>
        }
        )
        }
        </View>
    )
}
export default User