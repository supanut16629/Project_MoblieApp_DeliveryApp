import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Alert, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import * as methodDB from '../../database/methodDB'
import { useState } from 'react';
import { addMenu } from '../../redux/menuSlice';
export const RestaurantScreen = (props) => {
    const navigation = props.nav
    const restaurantList = useSelector((state) => state.restaurant);
    const [restaurant, setRestaurant] = useState(restaurantList)
    const dispatch = useDispatch();
    const Item1 = ({ item, onPress }) => (
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
                    <Text style={{ fontSize: 17 }}>{item.name}</Text>
                    <Text style={{ fontSize: 12, paddingTop: 10, marginHorizontal: 5 }}>● {item.detail}</Text>
                </View>

            </View>

        </TouchableOpacity>
    )
    const selectMenuSuccess = (doc) => {
        // console.log('ราคา')
        // console.log(doc.data().price)
        dispatch(addMenu({
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            image: doc.data().image,
            imageRes: doc.data().imageRes,
            nameRes: doc.data().nameRes,
            detail: doc.data().detail,
            price: doc.data().price,
        }))

        navigation.navigate('Menu')
    }

    const selectRestaurant = (item) => {
        // console.log("\n")
        // console.log(item.name)

        methodDB.getMenu(item.name, selectMenuSuccess)
    }
    const renderItem = ({ item }) => {
        //console.log(`${item.image}`)
        return (
            <Item1
                item={item}
                onPress={() => selectRestaurant(item)}
            />
        );
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, backgroundColor: '#AAA', flexDirection: 'row', borderBottomWidth: 1, borderColor: '#555' }}
            >
                <View style={{ paddingLeft: 20, flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Main')
                        }}
                    >
                        <AntDesign name="back" size={24} color="black" />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ flex: 10 }}>
                <FlatList
                    renderItem={renderItem}
                    data={restaurant}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})