
import { Button, View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import ProductScreen from "./Screens/ProductScreen";


const MyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(255,45,85)',
    background: 'rgb(242,242,242)',
    card: 'rgb(255,255,255)',
    text: 'rgb(28,28,30)',
    border: 'rgb(199,199,204)',
    notification: 'rgb(255,69,58)',
  },
};

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      <Text>Home Screen</Text>
      <Button title = 'Go to About' onPress = {()=>navigation.openDrawer}/>
    </View>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Close drawer" onPress={() => props.navigation.closeDrawer()} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle:{
          backgroundColor:'white',
          Width:240,
        }
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Product" component={ProductScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
    
  );
}