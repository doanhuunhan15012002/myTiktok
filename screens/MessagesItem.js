import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    Dimensions,
    SafeAreaView,
    ScrollView
} from 'react-native'
import { images, colors, icons, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { screenWidth } from '../utilies/Device';

function MessengesItem(props) {
    const { onPress } = props
    const { url, isSender, messenger, timestamp, showUrl } = props.item
    return (isSender == false ? 
        <TouchableOpacity
        onPress={onPress}
        style={{    
            marginTop:5,   
            flexDirection: 'row',
            alignItems: 'center',
        }}>
        {showUrl == true ?<Image
            style={{
                width: 40,
                height: 40,
                resizeMode: 'cover',
                borderRadius: 20,
                marginRight: 15,
                marginStart: 10,
            }}
            source={{
                uri: url
            }} />: <View style={{width:40,height:40}}></View>}
        <View style={{ flex: 1, flexDirection: 'row', paddingEnd: 70 }}>
            <Text 
            lineBreakMode='middle'
            style={{
                color: 'black',
                backgroundColor: 'white',
                fontSize: fontSizes.h5,
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 5,
                borderWidth:0.5
            }}>{messenger}</Text>
        </View>
    </TouchableOpacity> :
        <TouchableOpacity
            onPress={onPress}
            style={{
                marginTop:5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end'

            }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingStart: 70 }}>
                <Text style={{
                    color: 'black',
                    backgroundColor: '#D3D3D3',
                    fontSize: fontSizes.h5,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    borderRadius: 5,
                }}>{messenger}</Text>
            </View>
            
            {showUrl == true ? <Image
                style={{
                    width: 40,
                    height: 40,
                    resizeMode: 'cover',
                    borderRadius: 20,
                    marginRight: 15,
                    marginStart: 10,
                }}
                source={{
                    uri: url
                }} />: 
                <View style={{
                    width:40,
                    height:40,
                    marginRight: 15,
                    marginStart: 10,
                    }}>
                </View>}
        </TouchableOpacity>

    )
}
export default MessengesItem