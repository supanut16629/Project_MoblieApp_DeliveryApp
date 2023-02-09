import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import * as methodDB from '../../database/methodDB'
import { useState, useEffect } from 'react';
import { updateTodo } from '../../redux/todosSlice';
export const ProfileScreen = (props) => {
    const navigation = props.nav
    const dispatch = useDispatch();
    const PERSON = require('../img/person.png')
    const todoList = useSelector((state) => state.todos)
    const [data, setData] = useState({
        id: todoList.map((item) => item.id)[0],
        firstname: todoList.map((item) => item.firstname)[0],
        lastname: todoList.map((item) => item.lastname)[0],
        phone: todoList.map((item) => item.phone)[0],
        email: todoList.map((item) => item.email)[0],
        password: todoList.map((item) => item.password)[0],
        address: todoList.map((item) => item.address)[0],
    })

    const loadTodoInStore = (doc) => {
        setData({
            id: doc.id,
            firstname: doc.data().firstname,
            lastname: doc.data().lastname,
            phone: doc.data().phone,
            email: doc.data().email,
            password: doc.data().password,
            address: doc.data().address,
        })
    }

    useEffect(() => {

        methodDB.getProfile(data.email, loadTodoInStore);
    }, []);

    const saveToDBSuccess = () => {
        // dispatch.updateTodo({
        //     firstname: doc.data().firstname,
        //     lastname: doc.data().lastname,
        //     phone: doc.data().phone,
        //     address: doc.data().address,
        // })
        console.log("DoneUpdate");
    };

    const updateState = (doc) => {
        dispatch(updateTodo({
            firstname: doc.data().firstname,
            lastname: doc.data().lastname,
            phone: doc.data().phone,
            address: doc.data().address,
        }))
    }
    const onSavePress = () => {
        console.log(
            `${data.id}+${data.firstname} + ${data.lastname} +${data.phone} + ${data.address}`
        );
        methodDB.editProfile(data.id, data.firstname, data.lastname, data.phone, data.address, data.email, saveToDBSuccess)
        methodDB.getProfile(data.email, updateState)

    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 2, borderWidth: 0, backgroundColor: '#008E13' }}>
                <View style={{ flex: 1, paddingLeft: 15, justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Main')
                        }}
                    >
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 4 }}>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25 }}>Profile</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={PERSON}
                        />
                    </View>
                </View>
            </View>
            <View style={{ flex: 5, borderWidth: 0 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, padding: 5 }}>ชื่อ</Text>
                    <View style={styles.borderInput}>
                        <TextInput style={styles.stringInput}
                            value={data.firstname}
                            placeholder='Your firstname'
                            onChangeText={(text) => setData({ ...data, firstname: (text) })}
                        />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, padding: 5 }}>นามสกุล</Text>
                    <View style={styles.borderInput}>
                        <TextInput style={styles.stringInput}
                            value={data.lastname}
                            placeholder='Your lastname'
                            onChangeText={(text) => setData({ ...data, lastname: (text) })}
                        />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, padding: 5 }}>เบอร์โทร</Text>
                    <View style={styles.borderInput}>
                        <TextInput style={styles.stringInput}
                            value={data.phone}
                            placeholder='Your phone'
                            onChangeText={(text) => setData({ ...data, phone: (text) })}
                        />
                    </View>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 18, padding: 5 }}>ที่อยู่</Text>
                    <View style={styles.borderInput}>
                        <TextInput style={styles.stringInput}
                            value={data.address}
                            placeholder='Your Address'
                            onChangeText={(text) => setData({ ...data, address: (text) })}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: 40 }}>
                    <TouchableOpacity
                        onPress={onSavePress}
                    >
                        <View style={{ backgroundColor: '#3FA600', borderRadius: 40, paddingVertical: 20, marginBottom: 10 }}
                        >
                            <Text style={{ fontSize: 25, color: '#fff' }}>       Save       </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    borderInput: {
        flex: 1,
        flexDirection: 'row',
        borderColor: "#555",
        borderRadius: 40,
        borderWidth: 1,
        margin: 5,
    },
    borderAddress: {
        flex: 2,
        flexDirection: 'row',
        borderColor: "#555",
        borderRadius: 40,
        borderWidth: 1,
        margin: 5,
    },
    stringInput: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 18,
    },
});