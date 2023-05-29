
import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity,Linking } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PhoneInput from "react-native-phone-input";
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Pressable } from "react-native";

const RegisterbyPhone = (props) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const phoneInput = useRef < PhoneInput > (null);
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const { onPress } = props
    const handleSubmit = (phoneNumber) => {
        const isValid = phoneInput.current?.isValidNumber(phoneNumber);
        if (isValid) {
            console.log("SUBMITTED! ", phoneNumber)
        } else {
            console.log("INVALID NUMBER.")
        }
    }
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white',paddingTop:20,}}>
            <View style={{paddingStart: 20, paddingEnd: 20}}>
            <PhoneInput
                style={styles.phoneInput}
                initialValue={phoneNumber}
                initialCountry="us"
                onChangeText={(text) => {
                    setPhoneNumber(text);
                }}
                withShadow
                autoFocus
            />
            <View style={{ height: 20, }}></View>
            <View>
                <Text style={{ fontSize:17,}}>
                    Bằng cách tiếp tục bạn đồng ý với
                    <Text>
                        <Text
                            style={{
                                fontWeight: 'bold',
                            }}
                            onPress={() => Linking.openURL('https://www.tiktok.com/legal/page/row/terms-of-service/vi-VN')}>
                            {' '}
                            Điều khoản sử dụng
                        </Text>
                    </Text> của TikTok và xác nhận rằng mình đã đọc hiểu
                    <Text
                        style={{
                            fontWeight: 'bold',
                        }}
                        onPress={() => Linking.openURL('https://www.tiktok.com/legal/page/row/terms-of-service/vi-VN')}>
                        {' '}
                        Chính sách quyền riêng tư
                    </Text> của TikTok. Nếu bạn đăng ký bằng SMS phí SMS có thể được áp dụng.</Text>
                <View
                    style={{
                        paddingTop: 30,
                    }}
                >
                    <Pressable 
                        style={styles.button} 
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.text}>Gửi mã </Text>
                    </Pressable>
                </View>
            </View>
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
        borderRadius: 4,
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
    phoneInput: {
        borderBottomWidth: 0.5,
        marginBottom: 10,
        height: 60,
        
    }
});
export default RegisterbyPhone