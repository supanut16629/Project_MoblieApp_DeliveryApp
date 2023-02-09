import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import { Splash } from '../todos/Splash'
import { LoginScreen } from '../todos/LoginScreen'
import { RegisterScreen } from '../todos/RegisterScreen'
import { MainScreen } from '../todos/MainScreen'
import { ProfileScreen } from '../todos/ProfileScreen'
import { RestaurantScreen } from '../todos/RestaurantScreen'
import { MenuScreen } from '../todos/MenuScreen'
import { CartScreen } from '../todos/CartScreen'
const Stack = createNativeStackNavigator()

const SplashScreen = ({ navigation }) => {
    return (
        <Splash nav={navigation}/>
    )
}

const Login1Screen = ({navigation}) => {
    return(
        <LoginScreen nav={navigation}/>
    )
}

const Register1Screen = ({navigation}) => {
    return(
        <RegisterScreen nav={navigation}/>
    )
}
const Main1Screen = ({navigation}) => {
    return(
        <MainScreen nav={navigation}/>
    )
}
const Profile1Screen = ({navigation}) => {
    return(
        <ProfileScreen nav={navigation}/>
    )
}
const Restaurant1Screen = ({navigation}) => {
    return(
        <RestaurantScreen nav={navigation}/>
    )
}
const Menu1Screen = ({navigation}) => {
    return(
        <MenuScreen nav={navigation}/>
    )
}
const Cart1Screen = ({navigation}) => {
    return(
        <CartScreen nav={navigation}/>
    )
}
export const StackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={
                { headerShown: false }
            }
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={Login1Screen} />
            <Stack.Screen name="Register" component={Register1Screen} />
            <Stack.Screen name="Main" component={Main1Screen} />
            <Stack.Screen name="Profile" component={Profile1Screen} />
            <Stack.Screen name="Restaurant" component={Restaurant1Screen} />
            <Stack.Screen name="Menu" component={Menu1Screen} />
            <Stack.Screen name="Cart" component={Cart1Screen} />
        </Stack.Navigator>
    )
}