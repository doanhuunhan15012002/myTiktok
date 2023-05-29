import React, { useState, } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Switch,
    SafeAreaView,
    Image,
    ClipboardStatic,
    StyleSheet,
    FlatList
} from 'react-native'
import { colors, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { UIHeader } from '../components'
import { Linking } from 'react-native';
import ChatItem from './ChatItem';


function Chat(props) {
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const [users, serUsers] = useState([
        {
            url:'https://randomuser.me/api/portraits/men/70.jpg',
            name:'Someone',
            message:'Say hi to someone'
        },
        {
            url:'https://randomuser.me/api/portraits/men/71.jpg',
            name:'doan huu nhan',
            message:'Say hi to someone'
        },
        {
            url:'https://randomuser.me/api/portraits/men/72.jpg',
            name:'nguyen phuoc tam',
            message:'Say hi to someone'
        },
        {
            url:'https://randomuser.me/api/portraits/men/80.jpg',
            name:'nguyen bui phuc',
            message:'Say hi to someone'
        },
        {
            url:'https://randomuser.me/api/portraits/men/81.jpg',
            name:'Pham Trung Hoa',
            message:'Say hi to someone'
        },
        {
            url:'https://randomuser.me/api/portraits/men/82.jpg',
            name:'Wisdom robotics',
            message:'Say hi to someone'
        },
    ])

    return(
        <SafeAreaView style={{flex:1}}>
            <UIHeader
            title={'Direct messages'}
            leftIconName={'chevron-left'}
            rightIconName={'plus'}
            onPressLeftIcon={() => navigation.goBack()}
            ></UIHeader>
    
    <FlatList style={{                
        }} 
        data={users}
        renderItem={({item}) => <ChatItem             
            onPress={()=> {                        
                //alert(`You press item's name: ${item.name}`)
                navigate('Messages', {user: item})
            }}
            user = {item} key={item.url}/>}            
    />
        </SafeAreaView>
    )
}


export default Chat