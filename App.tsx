import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetstartedScreen from "./src/screens/getstartedScreen";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/homeScreen";
import { RecoilRoot } from "recoil";
import DescriptionScreen from "./src/screens/descriptionScreen";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Getstarted">
          <Stack.Screen
            name="Getstarted"
            component={GetstartedScreen}
            options={{
              headerShown: false
            }}>
          </Stack.Screen>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false
            }}>
          </Stack.Screen>
          <Stack.Screen
            name="Description"
            component={DescriptionScreen}
            options={{
              title: "",
              headerShown: false
            }}>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>

  )
}