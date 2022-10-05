import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native'
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import {useState, useEffect , useCallback} from 'react'
import React from 'react'
import { styles } from '../assets/style';

const DetailScreen = ({navigation,route}) =>{

const {id,title} = route.params;

React.useLayoutEffect(()=>{
    navigation.setOption({
        title:title // set as dynamic
    })
},[navigation,title])

const getData = async () =>{
    try {
      setLoading(true);
      const res = await axios.get('https://api.codingthailand.com/api/course/' + id);
      //console.log(res.data.data)
      setDetail(res.data.data);
      setLoading(false);
    } 
    catch (error) {
      setLoading(false);
      setError(error); // set error to state of error from axios or server
    }
  } 

  useEffect(()=>{
    getData(id);
  },[id])

  if(loading === true){
    return(
      <View>
        <ActivityIndicator color = '#f4511e' size = 'large'/>
      </View>
    )
  }

    const _onRefresh =()=>{
    getData();
  }

  const _renderItem = ({item,index}) => {
    return (
      <SafeAreaView style={{flex:1}}>
        <TouchableOpacity>
          style = {styles.addButtonStyle}
          onPress ={()=>{
            navigation.navigate('Detail' , {id:item.id , title:item.title})
          }}
          <View style={{flex:1}}>
          <View style={{flex:1 ,flexDirection:'row',margin: 5}}>
          <Text style={styles.thumbnail}>{index+1}</Text>
          <View style={styles.dataContainer}>
          <View style={styles.dataContent}>
            <Text style={styles.title}>{item.ch_title}</Text>
            <Text note numberOfLines={1}>{item.ch_dateadd}</Text>
          </View>
          </View>
          </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={detail}
        keyExtractor = {(item,index) =>item.ch_id.toString()}
        ItemSeparatorComponent ={ItemSeparatorView}
        renderItem = {_renderItem}
        refreshing = {loading}
        //onRefresh = {_onRefresh}
      />
    </View>
  )

  return (
    <View>
      <Text>{id}{title}</Text>
    </View>
  );
  }

export default DetailScreen

const styles = StyleSheet.create({})