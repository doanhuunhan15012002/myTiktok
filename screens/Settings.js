import React, { useState, } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Switch,
    SafeAreaView,
    StyleSheet,
} from 'react-native'
import { colors, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { UIHeader } from '../components';
function Settings(props) {
    let leftIconName = ' '
    //navigation
    const { navigation, route } = props
    //functions of navigate to/back
    const { navigate, goBack } = navigation


    return <SafeAreaView style={{
        flex: 1,
        backgroundColor: 'white'
    }}>
        <UIHeader
            title={'Privacy and settings'}
            leftIconName='chevron-left'
            onPressLeftIcon={() => navigation.goBack()}
        />
        <ScrollView>
            <View style={{
                height: 40,
                justifyContent: 'center',
            }}>
                <Text style={styles.feature}>ACCOUNT</Text>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        // navigation.reset({
                        //     index: 0,
                        //     routes: [{ name: 'StartScreen' }],
                        // })
                        alert('Manage your account')
                    }
                >
                    <Icon
                        name='user'
                        style={styles.icon}
                        color={'black'}
                    />
                    <Text style={styles.text}>Manage your account</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'EditProfile' }],
                        })
                    }
                >
                    <Icon
                        name='lock'
                        style={styles.icon}
                        color={'black'}
                    />
                    <Text style={styles.text}>Privacy and safety</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StartScreen' }],
                        })
                    }
                >
                    <Icon
                        name='video'
                        style={styles.icon}
                        color={'black'}
                    />
                    <Text style={styles.text}>Content preferences</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StartScreen' }],
                        })
                    }
                >
                    <Icon
                        name='sd-card'
                        style={styles.icon}
                        color={'black'}
                    />
                    <Text style={styles.text}>Balance</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StartScreen' }],
                        })
                    }
                >
                    <Icon
                        name='share'
                        style={styles.icon}
                        color={'black'}
                    />
                    <Text style={styles.text}>Share profile</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StartScreen' }],
                        })
                    }
                >
                    <Icon
                        name='qrcode'
                        style={styles.icon}
                        color={'black'}
                    />
                    <Text style={styles.text}>TikCode</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View style={{
                height: 40,
                backgroundColor: 'white',
                justifyContent: 'center',
            }}>
                <Text style={styles.feature}>GENERAL</Text>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StartScreen' }],
                        })
                    }
                >
                    <Icon
                        name='bell'
                        style={styles.icon}
                        color={'black'}
                    />
                    <Text style={styles.text}>Push notification</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StartScreen' }],
                        })
                    }
                >
                    <Icon
                        name='globe'
                        style={styles.icon}
                        color={'black'}
                    />
                    <Text style={styles.text}>Language</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StartScreen' }],
                        })
                    }
                >
                    <Icon
                        name='umbrella'
                        style={styles.icon}
                        color={'black'}
                    />
                    <Text style={styles.text}>Digital wellbeing</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StartScreen' }],
                        })
                    }
                >
                    <Icon
                        name='universal-access'
                        style={styles.icon}
                        color={'black'}
                    />
                    <Text style={styles.text}>Accessibility</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StartScreen' }],
                        })
                    }
                >
                    <Icon
                        name='tint'
                        style={styles.icon}
                        color={'black'}
                    />
                    <Text style={styles.text}>Manage your account</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View style={{
                height: 40,
                backgroundColor: 'white',
                justifyContent: 'center',
            }}>
                <Text style={styles.feature}>SUPPORT</Text>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StartScreen' }],
                        })
                    }
                >
                    <Icon
                        name='pencil-alt'
                        style={styles.icon}
                        color={'black'}
                    />
                    <Text style={styles.text}>Report a problem</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StartScreen' }],
                        })
                    }
                >
                    <Icon
                        name='question-circle'
                        style={styles.icon}
                        color={'black'}
                    />
                    <Text style={styles.text}>Help center</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
}
const styles = StyleSheet.create({
    icon: {
        fontSize: 20,
        width: 40,
        height: 40,
        paddingTop: 10,
        paddingStart: 20,
       
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    touchableOpacity: {
        flexDirection: 'row',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: 15,
        paddingStart: 15,

    },
    feature: {
        color: 'grey',
        paddingStart: 10,
        fontWeight: 'bold',
        fontSize: 17,
    },
    chevron_right: {
        paddingEnd: 10,
        opacity: 0.5,
    }
})
export default Settings