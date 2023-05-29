/**
yarn add react-navigation
yarn add react-native-safe-area-context
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add @react-navigation/drawer
yarn add react-native-gesture-handler 
yarn add react-native-reanimated
 */
import * as React from 'react'
import {
    Settings,
    FindFriends,
    EditProfile,
} from '../screens'
import Chat from '../screens/Chat'
import Messages from '../screens/Messages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import 'react-native-gesture-handler'

const Tab = createBottomTabNavigator()

const screenOptions = ({route})=> ({
    headerShown: false,
    tabBarActiveTintColor: 'white',    
    tabBarActiveBackgroundColor: colors.primary,
    tabBarInactiveBackgroundColor: colors.primary,
    tabBarIcon: ({focused, color, size}) => {
        let screenName = route.name
        let iconName = ' '
        if(screenName == "Edit")
        {
            iconName = 'user'
        }
        else if(screenName == "Find")
        {
            iconName = 'search'
        }
        else if(screenName == "Settings")
        {
            iconName = 'wrench' 
        }
        else if(screenName == "Chat")
        {
            iconName = 'comments' 
        }

        return(
            <Icon 
            name = {iconName}
            size = {25}
            color = {focused ? 'black' : colors.inactive}
        />
        )
        
    },    
})
function UITab(props) {
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
             name = {"Edit"}
             component = {EditProfile}
             options = {{
                tabBarLabel:'Edit Profile'
             }}
             />
             <Tab.Screen
             name = {"Find"}
             component = {FindFriends}
             options = {{
                tabBarLabel:'Find Friend'
             }}
             />
             <Tab.Screen
             name = {"Chat"}
             component = {Chat}
             options = {{
                tabBarLabel:'Chat'
             }}
             />
             <Tab.Screen
             name = {"Settings"}
             component = {Settings}
             options = {{
                tabBarLabel:'Settings'
             }}
             />
        </Tab.Navigator>
    )
    
}
export default UITab
