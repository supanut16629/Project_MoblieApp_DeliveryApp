import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Alert, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { deleteMenu } from '../../redux/menuSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { globalTotal } from '../../redux/orderSlice';
import { delAllOrder } from '../../redux/orderSlice';
export const CartScreen = (props) => {
    const navigation = props.nav
    const dispatch = useDispatch()
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
    const orderList = useSelector((state) => state.order)
    const resetMenu = () => {
        globalTotal.total = 0
        dispatch(delAllOrder(1));
        dispatch(deleteMenu(1));
        Alert.alert(`เสร็จสิ้น\nคำสั่งซื้อเสร็จสิ้น`)
        navigation.navigate("Main");
    };
    // const [totalprice,setTotalprice]= useState({
    //     total: orderList.map((item) => item.price)
    // })


    const Item1 = ({ item }) => (
        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#e0e0e0',
        marginHorizontal:10,marginVertical:5,borderRadius:20,padding:7}}>
            <Text style={{flex:1,fontSize:16}}></Text>
            <Text style={{flex:3,fontSize:18}}>{item.name}</Text>
            <Text style={{flex:1,fontSize:16}}>{item.price} THB</Text>
        </View>
    )

    const renderItem = ({ item }) => {

        return (
            <Item1
                item={item}
            />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, backgroundColor: '#AAA', flexDirection: 'row', borderBottomWidth: 1, borderColor: '#555' }}
            >
                <View style={{ paddingLeft: 20, flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Menu')
                        }}
                    >
                        <AntDesign name="back" size={24} color="black" />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ flex: 7 }}>
                <View style={{ flex: 3, borderBottomWidth: 1 }}>
                    <View style={{ flex: 1, borderRadius: 40, borderWidth: 1, margin: 20, borderColor: '#555' }}>
                        <Text style={{ paddingHorizontal: 30, paddingTop: 20, fontSize: 18 }}>ชื่อ   {data.firstname}   {data.lastname}</Text>
                        <Text style={{ paddingHorizontal: 30, paddingTop: 10, fontSize: 15 }}>ที่อยู่: {data.address}</Text>
                        <Text style={{ paddingHorizontal: 30, paddingTop: 10, fontSize: 15 }}>เบอร์โทร: {data.phone}</Text>
                        <Text style={{ paddingHorizontal: 30, paddingTop: 10, fontSize: 15 }}>อีเมล: {data.email}</Text>
                    </View>
                </View>
                <View style={{ flex: 4 }}>
                    <FlatList
                        renderItem={renderItem}
                        data={orderList}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style={{ flex: 1 ,backgroundColor: '#e3e3e5' ,flexDirection:'row',justifyContent:'space-around',alignItems:'flex-end'}}>
                        <Text style={{fontSize:18}}>ราคารวมทั้งหมด</Text>
                        <Text style={{fontSize:18}}>{globalTotal.total} THB</Text>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#e3e3e5' }}>
                <TouchableOpacity style={{ flex: 1 }}
                    onPress={resetMenu}
                >
                    <View style={{
                        flex: 1, margin: 10, backgroundColor: '#3FA600', flexDirection: 'row', borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: '#fff', fontSize: 20 }}>สั่งซื้อ</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 2
    },
})