import firebaseApp from './Connect'
import 'firebase/firestore'
import { Alert } from 'react-native';

const DB = firebaseApp.firestore()

export const addUser = (newData, success) => {
    const docRef = DB.collection('user').add(newData).then(() => {
        success()
    })
        .catch((err) => {
            console.error(`Cannot add user because ${err}`)
        })
};

export const loginUser = async (data, success) => {
    const snapshot = await DB.collection('user').where('email', '==', data.email).get();
    if (snapshot.empty) {
        Alert.alert("Email not found");
        return;
    }
    snapshot.forEach((doc) => {
        success(doc);
    })
}
export const getProfile = async (email, success) => {
    console.log(email)
    const snapshot = await DB.collection('user').where("email", "==", email).get();
    if (snapshot.empty) {
        return;
    }
    snapshot.forEach((doc) => {
        success(doc);
    });
};

export const editProfile = async (currentID, firstname, lastname, phone, address, email, success) => {
    const docRef = DB.collection('user')
        .doc(currentID)
        .update({
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            address: address,
        })
        .then()
        .catch((err) => {
            console.error(`cannot update ${firstname} due to ${err}`);
        });


};
export const getRestaurant = async (success) => {
    const snapshot = await DB.collection('restaurant').get()
    if (snapshot.empty) {
        return
    }
    snapshot.forEach((doc) => {
        success(doc)
    })
}

//restaurant == ชื่อร้านcollectionในdatabase
export const getMenu = async (restau, success) => {
    const snapshot = await DB.collection(restau).get()
    if (snapshot.empty) {
        return
    }
    snapshot.forEach((doc) => {
        success(doc)
    })
}