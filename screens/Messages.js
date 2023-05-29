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
import { HeaderForm } from '../components';
import BottomInput from '../components/BottomInput'
import MessengesItem from './MessagesItem';
function Messages(props) {
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const { onPress } = props
    // send message to backend
    const [message, setMessage] = useState('')
    const onSendPress = () => {
        console.warn(`Sending:${message}`)
        setMessage('')
    }
    const [ chatHistory, setChatHistory] = useState([
        {
            url:'https://randomuser.me/api/portraits/men/81.jpg',
            isSender:true,
            showUrl:false,
            messenger:'hello',
            timestamp:1685287414000,
        },
        {
            url:'https://randomuser.me/api/portraits/men/81.jpg',
            isSender:true,
            showUrl:true,
            messenger:'i am nhan',
            timestamp:1685287414000
        },
        {
            url:'https://randomuser.me/api/portraits/men/82.jpg',
            isSender:false,
            showUrl:true,
            messenger:'hello',     
            timestamp:1685287324001
        },
        {
            url:'https://randomuser.me/api/portraits/men/81.jpg',
            isSender:true,
            showUrl:true,
            messenger:'how are you',
            timestamp:1685287524400
        },
        {
            url:'https://randomuser.me/api/portraits/men/82.jpg',
            isSender:false,
            showUrl:true,
            messenger:'Hình như em уếu đuối cần một người Ɗang đôi taу nói có anh đâу rồi Hình như em trống vắng sợ một mình Ѕao anh không mau nói câu tỏ tìnhHứ hư hừ hư hừ...Hứ hu hừ hư... hứ hư hừ hừ...Yêu em là chân ái... hứ hư hừ hư...Ɲên anh chớ ngần ngại...',
            timestamp:1685267424000
        },
        {
            url:'https://randomuser.me/api/portraits/men/81.jpg',
            isSender:true,
            showUrl:true,
            messenger:'assets/doanhuunhan.jpg',
            timestamp:1685287414000
        },
    ])
    const {url,name} = props.route.params.user
    return(
        <SafeAreaView style={{flex:1}}>
            <UIHeader
            title={name}
            leftIconName={'chevron-left'}
            rightIconName={'ellipsis-h'}
            onPressLeftIcon={() => navigation.goBack()}
            ></UIHeader>
        
        <FlatList style={{                
        }} 
        data={chatHistory}
        renderItem={({item}) => <MessengesItem            
            onPress={()=> {                        
                //alert(`You press item's name: ${item.name}`)
                navigate('Messages', {item: timestamp})
            }}
            item = {item} key={`${item.timestamp}`}/>}            
    />
    
        <View style={styles.footer}>
            <BottomInput 
            rightIconName={'paper-plane'}
            onPressRightIcon={onSendPress}
            valueText = {message}
            onchange = {setMessage}
            ></BottomInput>
        </View>        
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    body:{
        width:'100%',
        backgroundColor:'white'
    },
    footer:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    }
})

export default Messages