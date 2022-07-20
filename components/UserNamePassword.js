import { View,TextInput,Button } from "react-native-web"
import React from 'react'
import App from "../App";

const TextInputExample =()=> {
    //Check for Name TextInput
    if(!TextInputName.trim()){
        alert('Please Enter Name');
        return;
    }
    //Check for the Email TextInput
    if(!TextInputMail.trim()){
        alert('Please Enter Email');
        return;
    }
    //Checked Successfully
    else {
        alert('Success');
        return;
    }
    }

    export default App;