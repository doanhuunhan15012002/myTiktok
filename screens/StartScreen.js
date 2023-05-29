
import React, { useState } from 'react'

import { SafeAreaView, StyleSheet, Text, ScrollView, View, Pressable,  TextInput, TouchableOpacity, Linking } from 'react-native';
import Button from '../components/Button'
import { HeaderForm } from '../components'
import Paragraph from '../components/Paragraph'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'


function StartScreen({navigation}){
  return (
    <Background>
    <Logo />
    <Header>Welcome to TikTok</Header>
    <Paragraph>
      Design by Wisdom Robotics.
    </Paragraph>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('Login')}
    >
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('Register')}
    >
      Sign Up
    </Button>
  </Background>
      
  
  )
}
export default StartScreen
