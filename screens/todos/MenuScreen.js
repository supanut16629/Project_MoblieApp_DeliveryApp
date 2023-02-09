import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Alert, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector ,useDispatch} from 'react-redux'
import { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { addOrder } from '../../redux/orderSlice';
export const MenuScreen = (props) => {
    const navigation = props.nav
    const menuList = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    const [restaurant, setRestaurant] = useState({
        image: menuList.map((item) => item.imageRes)[0],
        name: menuList.map((item) => item.nameRes)[0],
        detail: menuList.map((item) => item.detail)[0],
    })
    const [count,setCount ] = useState(0)
    // console.log(restaurant.detail)

    const totalMoney = (item) => {
        setCount(count+1);
        dispatch(addOrder({
            id: item.id,
            name: item.name,
            price: item.price,
        }))
    }

    const Item1 = ({ item ,onPress}) => (
        <TouchableOpacity style={{ padding: 10 }}
        onPress={onPress}
        >
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#e0e0e0', borderRadius: 10 }}>
                <View style={{ flex: 1, padding: 5, width: 50 }}>
                    <Image
                        style={{ width: 150, height: 150, borderRadius: 10 }}
                        source={{ uri: item.image }}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 15 }}>
                    <Text style={{flex: 1, fontSize: 17 }}>{item.name}</Text>
                    <Text style={{flex: 2, fontSize: 12, paddingTop: 10, marginHorizontal: 5 }}>● {item.description}</Text>
                    <Text style={{flex: 2,fontSize:15,fontWeight: 'bold',alignSelf:'flex-end',paddingTop:30,paddingRight:10}}>{item.price} THB</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    const renderItem = ({ item }) => {
        // console.log(`renderItem`)
        // console.log(item.id)
        return (
            <Item1
                key={item.id}
                item={item}
                onPress={() => totalMoney(item)}
            />
        )
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 5, borderWidth: 0, backgroundColor: '#e3e3e5', borderRadius: 5 }}>
                <View >
                    <Image
                        style={{ width: 500, height: 200 }}
                        source={{ uri: restaurant.image }}
                    />
                </View>
                <View>
                    <Text style={{ fontSize: 25, padding: 10, fontWeight: 'bold' }}>{restaurant.name}</Text>
                    <Text style={{ fontSize: 15, paddingHorizontal: 10 }}>{restaurant.detail}</Text>

                </View>
            </View>
            <View style={{ flex: 5, borderWidth: 0 }}>
                <FlatList
                    renderItem={renderItem}
                    data={menuList}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={{ flex: 1, backgroundColor: '#e3e3e5' }}>
                <TouchableOpacity style={{ flex: 1 }}
                    onPress={() => {
                        navigation.navigate('Cart')
                    }}
                >
                    <View style={{
                        flex: 1, margin: 10, backgroundColor: '#3FA600', flexDirection: 'row', borderRadius: 10, justifyContent: 'space-around',
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: '#fff', fontSize: 20 }}>{count}</Text>
                        <Text style={{ color: '#fff', fontSize: 20 }}>                   ใส่ตะกร้า            </Text>
                        <Entypo name="shopping-cart" size={24} color="#fff" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})