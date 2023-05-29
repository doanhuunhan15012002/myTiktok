import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderForm from './HeaderForm'
import { StatusBar, Linking } from 'react-native'
import { RegisterbyPhone, RegisterbyEmail } from '../screens';




const Tab = createMaterialTopTabNavigator();

function UITopTabs({props,navigation}) {
    let leftIconName = ' '
    let rightIconName = ' '
    return (
        <>
            <StatusBar default style={{ flex: 1, height:30}} />
            <HeaderForm
                title={'Đăng Ký'}
                leftIconName='chevron-left'
                rightIconName = 'question-circle'
                onPressLeftIcon={() => navigation.goBack()}
                onPressRightIcon={() => Linking.openURL('https://www.tiktok.com/about?lang=vi')}
            ></HeaderForm>
            <Tab.Navigator
                initialRouteName='Điện thoại'
            >
                <Tab.Screen
                    name='Điện thoại'
                    component={RegisterbyPhone}
                    options={{
                        tabBarLabel:'Điện thoại',
                        tabBarLabelStyle:{
                            fontWeight:'bold',
                            alignItems:'center',
                        }
                    }} />
                <Tab.Screen
                    name="Emails"
                    component={RegisterbyEmail}
                    options={{
                        tabBarLabel:'Email',
                        tabBarLabelStyle:{
                            fontWeight:'bold',
                            alignItems:'center'
                        }
                    }} />
            </Tab.Navigator>
        </>
    );
}
export default UITopTabs