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
import { Searchbar } from 'react-native-paper'
import { colors, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { HeaderForm, UIHeader } from '../components';
function FindFriends(props) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    let leftIconName = ' '
    let rightIconName = ' '
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}
        >
            <HeaderForm
                title={"Find friends"}
                leftIconName = 'chevron-left'
                rightIconName = 'qrcode'
                onPressLeftIcon = {()=> navigation.goBack()}
            >
            </HeaderForm>
            <ScrollView>
                <View>
                <Searchbar
                    placeholder='Search'
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{
                        borderRadius:15,
                        backgroundColor:colors.boxTiktok,
                    }}
                />
                </View>
                <View style={{height:20}}></View>
                <View>
                    <TouchableOpacity
                        style={styles.touchableOpacity}
                        onPress={() =>
                            // navigation.reset({
                            //     index: 0,
                            //     routes: [{ name: 'StartScreen' }],
                            // })
                            alert('Invite Friend')
                        }
                    >
                        <Icon
                            name='user-plus'
                            style={styles.icon}
                            size={25} color={'black'}
                        />
                        <Text style={styles.text}>Invite friends</Text>
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
                        style={styles.touchableOpacity}
                        onPress={() =>
                            // navigation.reset({
                            //     index: 0,
                            //     routes: [{ name: 'StartScreen' }],
                            // })
                            alert('Find contacts')
                        }
                    >
                        <Icon
                            name='phone'
                            style={styles.icon}
                            size={25} color={'black'}
                        />
                        <Text style={styles.text}>Find contacts</Text>
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
                        style={styles.touchableOpacity}
                        onPress={() =>
                            // navigation.reset({
                            //     index: 0,
                            //     routes: [{ name: 'StartScreen' }],
                            // })
                            alert('Find Facebook friends')
                        }
                    >
                        <Icon
                            name='facebook'
                            style={styles.icon}
                            size={25} color={'black'}
                        />
                        <Text style={styles.text}>Find Facebook friends</Text>
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
    )
}

const styles = StyleSheet.create({
    touchableOpacity:{
        flexDirection: 'row',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent:'center'
    },
    chevron_right:{
        paddingEnd: 10,
        opacity: 0.5,
    },
    icon:{
        paddingStart: 20,
        width:60,
        height:60,
        paddingTop:15,
    },
    text:{
        color: 'black',
        fontSize: 15,
        paddingStart:20,
    }
})

export default FindFriends