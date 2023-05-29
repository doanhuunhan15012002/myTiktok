import React, { Component } from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    TextInput,
} from 'react-native'


import Icon from 'react-native-vector-icons/FontAwesome5'



function BottomInput(props) {
    const {
        title,
        leftIconName,
        rightIconName,
        onPressLeftIcon,
        onPressRightIcon,
        onchange,
        valueText
    } = props
    return (
        <View style={inputStyles.container}>
            <View style={inputStyles.mainContainer}>
                <TextInput
                    multiline
                    style={inputStyles.texInput}
                    placeholder='Send a message'
                    value={valueText}
                    onChangeText={onchange}
                >

                </TextInput>
                <Icon 
                name='grin-wink'
                style={inputStyles.icon}></Icon>
            </View>
            <View>
            {rightIconName != undefined ? <Icon
                name={rightIconName}
                style={{ padding: 10}}
                size={25} color={'grey'}
                onPress={onPressRightIcon}
            /> : <View style={{ width: 50, height: 50, }} />}
            </View>
        </View>
    )
}
const inputStyles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderTopWidth:0.5

    },
    mainContainer:{
        flexDirection:'row',
        backgroundColor:'#D3D3D3',
        padding:10,
        margin:10,
        borderRadius:10,
        marginRight:10,
        flex:1,
        
    },
    icon:{
        marginHorizontal:5,
        backgroundColor:'#D3D3D3',
        fontSize:25,
        color:'black',
           
    },
    texInput:{
        flex:1,
        marginHorizontal:10,
        alignItems:'center'
    }
})



export default BottomInput