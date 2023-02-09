import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert } from 'react-native';
import * as methodDB from '../../database/methodDB'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from "../../redux/todosSlice"
export const LoginScreen = (props) => {
    const navigation = props.nav
    const LOGO = require('../img/logo.png')

    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const dispatch = useDispatch();

    const CheckLoginSuccess = (docID) => {
        const pass = docID.data().password
        if (pass == data.password) {
            dispatch(addTodo({
                id: docID.id, firstname: docID.data().firstname, lastname: docID.data().lastname,
                phone: docID.data().phone, email: docID.data().email, password: docID.data().password, address: docID.data().address
            }));
            navigation.navigate("Main");
        }
        else{
            Alert.alert("password is incorrect");
        }

        
    }

    const CheckLogin = () => {
        if (data.email.length == 0) {
            Alert.alert("Please enter Email");
        }
        else {
            methodDB.loginUser(data, CheckLoginSuccess)
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={LOGO}
                />
                <Text style={{ fontSize: 30, color: '#000', fontWeight: 'bold' }}>GoGo food</Text>
                <Text style={{ fontSize: 20, color: '#555', fontWeight: 'bold', paddingTop: 5 }}>welcome</Text>
                <Text style={{ fontSize: 20, color: '#555', fontWeight: 'bold', paddingBottom: 5 }}>please log in to continue.</Text>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.borderInput}>
                    <View style={styles.iconStyle}>
                        <Ionicons name="mail" size={24} color="#555" />
                    </View>
                    <TextInput style={styles.stringInput}
                        placeholder='your email'
                        onChangeText={(text) => setData({ ...data, email: (text) })}
                    >
                    </TextInput>
                </View>
                <View style={styles.borderInput}>
                    <View style={styles.iconStyle}>
                        <Ionicons name="ios-lock-closed" size={24} color="#555" />
                    </View>
                    <TextInput style={styles.stringInput}
                        placeholder='your password'
                        onChangeText={(text) => setData({ ...data, password: (text) })}
                    >
                    </TextInput>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', margin: 10 }}>
                    <TouchableOpacity
                        onPress={CheckLogin}
                    >
                        <View style={styles.loginButton}>
                            <Text style={styles.fontLogin}>LOG IN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, paddingRight: 10, alignSelf: 'flex-end' }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Register')
                        }}
                    >
                        <Text style={{ color: 'red' }}>Register</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    button1: {
        padding: 35,
    },
    borderInput: {
        flex: 1,
        flexDirection: 'row',
        borderColor: "#555",
        borderRadius: 40,
        borderWidth: 1,
        margin: 10,
    },
    stringInput: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 20,
    },
    iconStyle: {
        justifyContent: 'center',
        paddingLeft: 20,
    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        backgroundColor: '#008E13',
    },
    fontLogin: {
        color: '#fff',
        fontSize: 25,
        padding: 15,
    },
    iconStyle: {
        justifyContent: 'center',
        paddingLeft: 20,
    },
});