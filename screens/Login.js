import React, { useState } from 'react'

import { SafeAreaView, StyleSheet, Text, ScrollView, View, Pressable, TextInput, TouchableOpacity, Linking } from 'react-native';

import { HeaderForm } from '../components';

import { colors } from '../constants';

import { NavigationContainer } from '@react-navigation/native';

import Button from '../components/Button';


function Login({navigation}) {
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeTikTok, }}>
            <HeaderForm
                title={'Đăng Nhập'}
                leftIconName='chevron-left'
                rightIconName='question-circle'
                onPressLeftIcon={() => navigation.goBack()}
                onPressRightIcon={() => Linking.openURL('https://www.tiktok.com/about?lang=vi')}
                
            ></HeaderForm>
            <View style={{ paddingStart: 20, paddingEnd: 20 }}>
                <ScrollView
                    style={{
                        width: '100%',
                        paddingTop: 20,
                    }}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{borderBottomWidth:1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 , textAlign:'center',paddingBottom:5}}>
                            Account / SyfivesID
                        </Text>
                    </View >
                    <View style={{paddingTop:30}}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Account hoặc TikTokID'
                        >     
                        </TextInput>

                    </View>
                    <View >
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            placeholder='Mật khẩu'
                        >                      
                        </TextInput>
                    </View>
                    <View style={{paddingTop:20}}>
                        <Text style={{fontWeight:'bold'}}>
                            Quên mật khẩu ?
                        </Text>
                    </View>       
                    <View
                        style={{
                            paddingTop: 30,
                        }}
                    >
                        <Button 
                            style={styles.button}
                            onPress={() => navigation.navigate('UITab')}
                        >
                            <Text style={styles.text}>Tiếp </Text>
                        </Button>

                    </View>



                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        backgroundColor: '#F8F9FA',
        height: 60,
        borderRadius: 15,

    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'grey',
    },
    text2: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },

    textInput: {
        fontSize: 16,
        backgroundColor: 'white',
        paddingTop: 20,
        height: 50,
        fontSize: 20,
        borderBottomWidth: 0.5,
        marginBottom: 10,
    },

});
export default Login;
