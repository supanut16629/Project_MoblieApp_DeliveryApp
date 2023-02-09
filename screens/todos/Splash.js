import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View, Text, Image } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import * as methodDB from '../../database/methodDB'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addRestaurant } from '../../redux/restaurantSlice'
export const Splash = (props) => {
    const navigation = props.nav
    const LOGO = require('../img/logo.png')
    const dispatch = useDispatch()
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login')
            navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
        }, 2500)
    }, [])

    const getResSuccess = (doc) => {
        //console.log(`getResSuccess id:${doc.id}  name:${doc.data().name} image:${doc.data().image} detail: ${doc.data().detail}`)
        
        dispatch(addRestaurant({id : doc.id ,name : doc.data().name ,image: doc.data().image ,detail: doc.data().detail})
        );
    }
    methodDB.getRestaurant(getResSuccess);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#008E13', justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={{ width: 300, height: 300 }}
                source={LOGO}
            />
            <Text style={{ fontSize: 50, color: '#fff', fontWeight: 'bold' }}>GoGo food</Text>
        </SafeAreaView>
    )
}