import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../modules/home/HomeScreen';
import SplashScreen from '../screens/splash/SplashScreen';

const HomeStack = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'HomeScreen'
  }
);

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    SplashScreen,
    HomeStack
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'SplashScreen',
    navigationOptions: {
      //   headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
