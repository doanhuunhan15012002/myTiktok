import React, {Component} from 'react'
import {
    TouchableOpacity, 
    Text,
    View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {colors, fontSizes} from '../constants'
import { StatusBar } from 'react-native'

function UIHeader(props) {
    const {
        title, 
        leftIconName,
        rightIconName,
        onPressLeftIcon,
        onPressRightIcon,
    } = props
    return(
    <View style={{
        height: 70,
        backgroundColor: colors.themeTikTok,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth:0.5,
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
            fontSize: fontSizes.h3,
            alignSelf:'center',
            lineHeight: 45,
            color: 'black',
            fontWeight:'bold'
        }}>{title}</Text>
        {rightIconName != undefined ? <Icon            
            name={rightIconName}
            style={{ padding: 20 }}
            size={25} color={'black'}
            onPress={onPressRightIcon}
        /> : <View style={{width: 50, height: 50, }}/>}        
    </View>
    )
}
export default UIHeader