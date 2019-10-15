import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import Login from '../Login'
import Register from '../Register'
import Beranda from '../Beranda'
import Berat from '../BB/Berat'
import BeratCewe from '../BB/BeratCewe'
import BeratLaki from '../BB/BeratLaki'
import BMR from '../BMR/BMR'
import BmrCewe from '../BMR/BmrCewe'
import BmrPria from '../BMR/BmrPria'
import IMT from '../IMT/IMT'
import ImtCewe from '../IMT/ImtCewe'
import ImtCowo from '../IMT/ImtCowo'
import Search from '../../Search'
import Video from '../../Screen/Video'
import Auth from '../Auth'
import Kesalahan from '../Rahasia/Kesalahan'
import Pemula from '../Rahasia/Pemula'
import DetailPemula from '../Rahasia/DetailPemula'
import React from 'react'
import { Icon } from 'native-base'

const masuk = createStackNavigator({
    Register: Register
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('Login1')}
                    name="md-arrow-back" size={30} />
            ), headerStyle: {
                backgroundColor: '#87E9A9'
            }
        };
    }
})

const home = createStackNavigator({
    Home: Beranda,
    Berat: Berat,
    Berat1: BeratCewe,
    Berat2: BeratLaki,

    Bmr: BMR,
    Bmr1: BmrCewe,
    Bmr2: BmrPria,

    Imt: IMT,
    Imt1: ImtCewe,
    Imt2: ImtCowo,

    Search: Search,
    Video: Video,
    Detail: DetailPemula
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerStyle: {
                backgroundColor: '#128C7E'
            }, headerTintColor: '#ffffff'
        }
    }
})

const stack1 = createStackNavigator({
    salah1: Kesalahan
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon style={{ paddingLeft: 10, color: 'white' }} onPress={() => navigation.navigate('Home1')}
                    name="md-arrow-back" size={30} />
            ), headerStyle: {
                backgroundColor: '#128C7E'
            }, headerTintColor: '#ffffff'
        };
    }
})

const stack2 = createStackNavigator({
    salah2: Pemula
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon style={{ paddingLeft: 10, color: 'white' }} onPress={() => navigation.navigate('Home1')}
                    name="md-arrow-back" size={30} />
            ), headerStyle: {
                backgroundColor: '#128C7E'
            }, headerTintColor: '#ffffff'
        };
    }
}, {
    Detail: DetailPemula
})

const rahasia = createBottomTabNavigator({
    'Kesalahan Diet': stack1,
    'Pemula Diet': stack2,
}, {
    tabBarOptions: {
        inactiveTintColor: 'white',
        activeTintColor: '#00FFFF',
        tabStyle: {
            paddingBottom: 15
        },
        style: {
            backgroundColor: '#128C7E',
            color: 'white'
        }
    }
})

export default Main = createAppContainer(createSwitchNavigator({
    Login1: Login,
    Masuk1: masuk,
    Home1: home,
    Auth: { screen: Auth },
    Bot1: { screen: rahasia }
}, {
    initialRouteName: 'Auth'
}))