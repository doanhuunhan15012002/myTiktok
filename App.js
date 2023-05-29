
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  UITab,
  Register,
  UITopTabs,
  Login,
  EditProfile,
  FindFriends,
  Chat
} from './screens'
import theme from './constants/theme'

import StartScreen from './screens/StartScreen'
import Messages from './screens/Messages'





const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="UITab" component={UITab} />
          <Stack.Screen name="UITopTabs" component={UITopTabs} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="FindFriends" component={FindFriends} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="Chat" component={Chat} />

          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
