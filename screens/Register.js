import React, { useState } from 'react'

import { SafeAreaView, StyleSheet, Text, ScrollView, View, Pressable, TextInput, TouchableOpacity } from 'react-native';

import { HeaderForm } from '../components';

import DateTimePickerModal from "react-native-modal-datetime-picker";

import Button from '../components/Button';




function Register({navigation}) {
    
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [string, onChangeText] = React.useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    let text = 'Ngày sinh'
    

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
            <HeaderForm
                title={'Đăng Ký'}
                leftIconName='chevron-left'
                onPressLeftIcon={() => navigation.goBack()}
                onPressRightIcon={() => Linking.openURL('https://www.tiktok.com/about?lang=vi')}   
            ></HeaderForm>
            <View style={{ paddingStart: 20, paddingEnd: 20 }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Ngày sinh của bạn là ngày nào ?</Text>
                        <Text style={{ fontSize: 15, opacity: 0.5 }}>Ngày sinh của bạn sẽ không được hiển thị công khai ?</Text>
                    </View>
                    <View style={{paddingTop:20}}>
                        <Pressable
                            style={styles.input}
                            onPress={showDatePicker}
                        >
                            <Text style={styles.text}>{text} </Text>
                        </Pressable>
                

                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <View
                        style={{
                            paddingTop: 30,
                        }}
                    >
                        <Button 
                            style={styles.button}
                            onPress={() => navigation.navigate('UITopTabs')}
                        >
                            <Text style={styles.text}>Tiếp </Text>
                        </Button>

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

    input: {
        fontSize: 16,
        backgroundColor: 'white',
        paddingTop: 20,
        height: 50,
        fontSize: 20,
        borderBottomWidth: 0.5,
        marginBottom: 10,
    },

});
export default Register;
