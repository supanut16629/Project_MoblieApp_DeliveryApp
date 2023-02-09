import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ImageBackground, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react';
import * as methodDB from '../../database/methodDB'
export const RegisterScreen = (props) => {
    const navigation = props.nav
    const LOGO = require('../img/logo.png')
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        address: ' ',
    })

    const addSuccess = () => {
        console.log('Register success')
        alert("Success\nAdd your account success")
        setData(null)
        navigation.navigate('Login')
    }
    const onAddPress = () => {
        if ((data.firstname == '') || (data.lastname == '') || (data.phone == '') || (data.email == '') || (data.password == '')) {
            return (alert("Error\nPlease complete information."))
        }
        methodDB.addUser(data, addSuccess)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <View style={{ paddingLeft: 20 }}>
                    <Text style={styles.fontHeader}>REGISTER</Text>
                </View>
                <View style={{ paddingRight: 20 }}>
                    <Image
                        style={{ width: 60, height: 60 }}
                        source={LOGO}
                    >
                    </Image>
                </View>
            </View>
            <View style={styles.input}>
                <View style={styles.borderInput}>
                    <View style={styles.iconStyle}>
                        <Ionicons name="person" size={24} color="#555" />
                    </View>

                    <TextInput style={styles.stringInput}
                        placeholder='firstname'
                        onChangeText={(text) => setData({ ...data, firstname: (text) })}
                    />
                </View>
                <View style={styles.borderInput}>
                    <View style={styles.iconStyle}>
                        <Ionicons name="person" size={24} color="#555" />
                    </View>
                    <TextInput style={styles.stringInput}
                        placeholder='lastname'
                        onChangeText={(text) => setData({ ...data, lastname: (text) })}
                    />
                </View>
                <View style={styles.borderInput}>
                    <View style={styles.iconStyle}>
                        <Entypo name="phone" size={24} color="#555" />
                    </View>
                    <TextInput style={styles.stringInput}
                        placeholder='phone'
                        onChangeText={(text) => setData({ ...data, phone: (text) })}
                    />
                </View>
                <View style={styles.borderInput}>
                    <View style={styles.iconStyle}>
                        <Ionicons name="mail" size={24} color="#555" />
                    </View>
                    <TextInput style={styles.stringInput}
                        placeholder='email'
                        onChangeText={(text) => setData({ ...data, email: (text) })}
                    />
                </View>
                <View style={styles.borderInput}>
                    <View style={styles.iconStyle}>
                        <Ionicons name="ios-lock-closed" size={24} color="#555" />
                    </View>
                    <TextInput style={styles.stringInput}
                        placeholder='password'
                        onChangeText={(text) => setData({ ...data, password: (text) })}
                    />
                </View>


            </View>
            <View style={{ flex: 6, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'flex-start' }}>

                <TouchableOpacity
                    onPress={onAddPress}
                >
                    <View style={styles.submitButton}>
                        <Text style={styles.fontButton}>          SUBMIT         </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setData(null)
                        navigation.navigate("Login")
                    }}
                >
                    <View style={styles.cancalButton}>
                        <Text style={styles.fontButton}>   CANCEL   </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#008E13'
    },
    fontHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
    },
    input: {
        flex: 10,
        margin: 15,
        paddingTop: 10,
    },
    borderInput: {
        flex: 1,
        flexDirection: 'row',
        borderColor: "#555",
        borderRadius: 40,
        borderWidth: 1,
        margin: 5,
    },
    stringInput: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 20,
    },
    submitButton: {
        backgroundColor: '#008E13',
        borderWidth: 1,
        padding: 18,
        borderRadius: 40,

    },
    cancalButton: {
        backgroundColor: 'red',
        padding: 18,
        borderWidth: 1,
        borderRadius: 40,
    },
    fontButton: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    iconStyle: {
        justifyContent: 'center',
        paddingLeft: 20,
    },
});