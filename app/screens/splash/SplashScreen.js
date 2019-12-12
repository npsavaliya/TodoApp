import React, { useState, useCallback } from 'react';
import { View, Text, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { Container } from 'native-base'
import styles from './styles/SplashScreenStyles';
import { useNavigation, useNavigationParam, useFocusEffect } from 'react-navigation-hooks'

const SplashScreen = (props) => {
  const { navigate } = useNavigation();
  const [isVisible, setVisible] = useState(false);

  useFocusEffect(useCallback(() => {
    console.debug("screen takes focus");
    setTimeout(() => setVisible(true), 1500)
    return () => console.debug("screen loses focus");
  }, []));

  const navigateHome = () => {
    setTimeout(() => navigate('HomeScreen'), 1000)
  }

  const onPressRegularRedux = () => {
    props.screenProps.setIsReduxSauce(false)
    navigateHome()
  }

  const onPressReduxSauce = () => {
    props.screenProps.setIsReduxSauce(true)
    navigateHome()
  }
  
  return (
    <Container style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {isVisible ?
      (
        <View>
          <TouchableWithoutFeedback onPress={onPressRegularRedux}><Text>Regular Redux</Text></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onPressReduxSauce}><Text>ReduxSauce</Text></TouchableWithoutFeedback>
        </View>
      ) :
      (
      <Text style={styles.textStyle}>{`TODOS\nby\nNirav`}</Text>
      )
      }
      
    </Container>
  );
}

export default SplashScreen;
