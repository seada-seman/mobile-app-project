import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import FlatListScreen from "./FlatListScreen";

const Stack = createNativeStackNavigator()

export default function App(){

  return <NavigationContainer>
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={HomeScreen}/>
      <Stack.Screen name="details" component={DetailsScreen}/>
       <Stack.Screen name="FlatListScreen" component={FlatListScreen}/>
    </Stack.Navigator>

  </NavigationContainer>
}