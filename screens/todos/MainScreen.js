import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SimpleLineIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../../redux/todosSlice';
import * as methodDB from '../../database/methodDB'
import { addMenu } from '../../redux/menuSlice';
export const MainScreen = (props) => {
    const navigation = props.nav
    const IMG = require('../img/logo.png')
    const PERSON = require('../img/person.png')
    const dispatch = useDispatch()
    const todoList = useSelector((state) => state.todos)
    let name = todoList.map((item) => item.firstname)[0]
    let currentID = todoList.map((item) => item.id)[0]


    // console.log(name)
    // console.log(currentID);

    const logOut = () => {
        console.log(currentID);
        dispatch(deleteTodo(currentID));
        navigation.navigate("Login");
    };

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

        methodDB.getMenu(item, selectMenuSuccess)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#AAA', flexDirection: 'row', borderBottomWidth: 1, borderColor: '#555' }}
            >
                <View style={{ paddingLeft: 20, flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={logOut}
                    >
                        <SimpleLineIcons name="logout" size={24} color="black" />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ paddingLeft: 15, fontSize: 18 }}>สวัสดี คุณ </Text>
                        <Text style={{ paddingLeft: 15, fontSize: 18 }}>{name}</Text>

                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 20 }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Profile')
                        }}
                    >
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={PERSON}
                        />
                    </TouchableOpacity>

                </View>


            </View>
            <View style={{ flex: 3, borderWidth: 0, backgroundColor: '#008E13' }}>
                <View style={{ flex: 1, justifyContent: 'center' }}
                >
                    <Text style={{ fontSize: 18, paddingLeft: 15 }}>วันนี้คุณอยากจะกินอะไรดี ?</Text>
                </View>
                <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-around' }}
                >
                    <TouchableOpacity
                        onPress={() => selectRestaurant('pizza hut')}
                    >
                        <Image
                            style={{ width: 150, height: 150, borderRadius: 10 }}
                            source={{ uri: "https://www.american-learning.com/wp-content/uploads/2020/10/Pizza-Hut-15-1024x683.jpg" }}
                        />
                        <Text style={{alignSelf:'center',fontSize:18,color:'#fff'}}>pizza hut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => selectRestaurant('McDonald')}
                    >
                        <Image
                            style={{ width: 150, height: 150, borderRadius: 10 }}
                            source={{ uri: "https://themomentum.co/wp-content/uploads/2021/10/Beyond-Meat_web.jpg" }}
                        />
                        <Text style={{alignSelf:'center',fontSize:18,color:'#fff'}}>McDonald</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flex: 2, borderWidth: 0 }}>
                <TouchableOpacity style={{ flex: 1, padding: 30 }}
                    onPress={() => {
                        navigation.navigate('Restaurant')
                    }}
                >
                    <View style={styles.buttonRes}>
                        <Image
                            style={{ width: 80, height: 80 }}
                            source={IMG}
                        />
                        <Text style={styles.fontRes}>เลือกร้านอาหาร</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 2, borderWidth: 0 }}>
                <View style={{ flex: 1, justifyContent: 'center' }}
                >
                    <Text style={{ fontSize: 18, paddingLeft: 15 }}>ร้านแนะนำ</Text>
                </View>
                <View style={{ flex: 3 ,flexDirection:'row',justifyContent:'space-around'}}
                >
                    <TouchableOpacity
                        onPress={() => selectRestaurant('pizza hut')}
                    >
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 10 }}
                            source={{ uri: "https://www.american-learning.com/wp-content/uploads/2020/10/Pizza-Hut-15-1024x683.jpg" }}
                        />
                        <Text style={{alignSelf:'center'}}>pizza hut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => selectRestaurant('ป้าแต๋น อาหารอีสาน')}
                    >
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 10 }}
                            source={{ uri: "https://www.matichonacademy.com/wp-content/uploads/2021/03/thai-food-som-tum-papaya-salad.jpg" }}
                        />
                        <Text style={{alignSelf:'center'}}>ป้าแต๋น อาหารอีสาน</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => selectRestaurant('เรือนไทย')}
                    >
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 10 }}
                            source={{ uri: "https://img.wongnai.com/p/1920x0/2019/07/08/3877e6595de749469ee170073397eb88.jpg" }}
                        />
                        <Text style={{alignSelf:'center'}}>เรือนไทย</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    buttonRes: {
        flex: 1,
        backgroundColor: '#FFC300',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 40,
        paddingLeft: 20,
        borderWidth: 1,
    },
    fontRes: {
        fontSize: 20,
        color: "#000",
        fontWeight: '700',
    }
});