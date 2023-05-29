import React, {Component} from 'react'
import {
    TouchableOpacity, 
    Text,
    View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {colors, fontSizes} from '../constants'
import { StatusBar } from 'react-native'
import { Linking } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'



export default HeaderForm = (props) =>{
    const {
        title, 
        leftIconName,
        rightIconName,
        onPressLeftIcon,
        onPressRightIcon,
        goback,
    } = props
    return <View style={{
        height: 70,
        backgroundColor: colors.themeTikTok,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
        
    }}>
        <StatusBar default 
        style={{ flex: 1, height:30}}
        barStyle={'dark-content'}
        backgroundColor={colors.themeTikTok}
        />
        
        {leftIconName != undefined ? <Icon            
            name={leftIconName}
            style={{ padding: 15 }}
            size={23} color={'black'}
            onPress={onPressLeftIcon}
        /> : <View style={{width: 50, height: 50, }}/>}
        
        <Text style={{
            fontSize: fontSizes.h2,
            alignSelf:'center',
            lineHeight: 45,
            color: 'black',
            fontWeight:'bold',
            justifyContent:'center',
            textAlign:'center',
        }}>{title}</Text>
        <TouchableOpacity >
        {rightIconName != undefined ? <Icon            
            name={rightIconName}
            style={{ padding: 20 }}
            size={25} color={'black'}
            onPress={onPressRightIcon}
        /> : <View style={{width: 50, height: 50, }}/>}    
        </TouchableOpacity>        
    </View>
}


