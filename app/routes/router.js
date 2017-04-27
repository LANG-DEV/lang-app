import {StackNavigator} from 'react-navigation';

import HomeScreen from '../layouts/HomeScreen'
import LoginScreen from '../layouts/LoginScreen'

const Router = StackNavigator({
    Home: {
        screen: HomeScreen //require('./layouts/HomeScreen')
    },
    Login: {
        screen: LoginScreen //require('./layouts/LoginScreen')
    }
}, {
    initialRouteName: 'Home'
});

export default Router;