import React, {useState} from 'react';
import { Linking } from 'react-native';
import { SafeAreaView, StyleSheet, Text, ScrollView, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Button from '../components/Button';


function RegisterbyEmail(props) {
    const [string, onChangeText] = React.useState('');
    const [checked, setChecked] = React.useState(false)
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const { onPress } = props
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={{ paddingStart: 20, paddingEnd: 20 }}>
                
                    <TextInput
                        onChangeText={onChangeText}
                        value={string}
                        placeholder="Địa chỉ email"
                        keyboardType='email-address'
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        style={{
                            paddingTop: 20,
                            height: 80,
                            fontSize: 20,
                            borderBottomWidth: 0.5,
                            marginBottom: 10,
                        }}
                    />
                    <View style={styles.textContainer}>
                        <Text style={{ fontSize: 17, }}>
                            Bằng cách tiếp tục bạn đồng ý với
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                }}
                                onPress={() => Linking.openURL('https://www.tiktok.com/legal/page/row/terms-of-service/vi-VN')}>
                                {' '}
                                Điều khoản sử dụng
                            </Text>
                            <Text> của TikTok và xác nhận rằng mình đã đọc hiểu </Text>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                }}
                                onPress={() => Linking.openURL('https://www.tiktok.com/legal/page/row/privacy-policy/vi-VN')}>
                                {' '}
                                Chính sách quyền riêng tư
                            </Text>
                            <Text> của TikTok</Text>
                        </Text>
                    </View>
                    <View style={{ paddingBottom: 20, paddingEnd: 20, }}></View>
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                        <TouchableOpacity>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                        </TouchableOpacity>
                        <Text style={{
                            marginRight: 10,
                            fontSize: 16,
                            paddingRight: 20,

                        }}>
                            Nhận nội dung thịnh hành, bảng tin, khuyến mãi,
                            đề xuất và thông tin cập nhật tài khoản được gửi
                            đến email của bạn
                        </Text>
                    </View>
                    <View
                        style={{
                            paddingTop: 30,
                        }}
                    >
                        <Button style={styles.button} onPress={() =>navigation.navigate('Login')}>
                            <Text style={styles.text}>Tiếp </Text>
                        </Button>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 30
                        }}>
                            <Pressable style={styles.pressable} >
                                <Text style={styles.text}>Được đề xuất </Text>
                            </Pressable>
                            <Pressable style={styles.pressable} >
                                <Text style={styles.text2}>@gmail.com </Text>
                            </Pressable>
                            <Pressable style={styles.pressable} >
                                <Text style={styles.text2}>@outlook.com </Text>
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
    pressable: {
        fontSize: 16,
        backgroundColor: 'white',
    },

});
export default RegisterbyEmail;
