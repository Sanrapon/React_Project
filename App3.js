import { Text, View, Button , FlatList , Image , ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import { useState , useEffect } from 'react';


const App =()=> {

  const [isLoading,setLoading] = useState(true);
  const [data,setData] = useState([]);

  const getArticle = async ()=>{
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=th&apiKey=ab0d4aca4cea481e8157d31c68eb2b23');
      const json = await response.json();
      setData(json.articles); 
      
    } catch (error) {
      console.error(error);
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    getArticle();
  },[])

  const _renderItem = ({item}) => {
    let urlToImage = (item.urlToImage!==null)?item.urlToImage : 'https://via.placeholder.com/150';

    return(
      <View style={{ flex:1 }}>
        <View style={{ flex:1 , flexDirection:'row',margin:5}}>
          <Image resizeMode='cover' source={{uri : urlToImage}} style = {{flex:1 , width:'100%' , height:'100%'}}/>
          <View style={{width:200 , margin:5}}>
           <Text style={{frontSize:14,marginBottom:5}}>[item.title]</Text>
           <Text style={{frontSize:10}}>[item.source.name]</Text>
           <Text style={{frontSize:10,color:'red'}}>Publish:{item.published}</Text>
           </View>
        </View>
      </View>
    )

  }

return (
 <View style={{ flex:1, padding: 20}}>
  {isLoading ? <ActivityIndicator size='large' color="#0000ff"/> : (
    <FlatList
    data={data}
    keyExtractor = {item => item.title}
    renderItem = {_renderItem}
    />

  )} 
 </View>
)
  }

  export default App