import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hourly from "./src/screens/Hourly";
import SelectTime from "./src/screens/SelectTime";
import ChoiceMap from "./src/screens/ChoiceMap";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Hourly">
      
         
          <Stack.Screen
            name="Hourly"
            component={Hourly}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SelectTime"
            component={SelectTime}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ChoiceMap"
            component={ChoiceMap}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
     </GestureHandlerRootView> 
  );
}

