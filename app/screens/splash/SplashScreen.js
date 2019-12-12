import React, {useState, useCallback} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {Container} from 'native-base';
import styles from './styles/SplashScreenStyles';
import {useNavigation, useFocusEffect} from 'react-navigation-hooks';
import {useDispatch} from 'react-redux';
import {SELECT_REDUCER} from '../../redux/types';
import { Metrics } from '../../theme';

const SplashScreen = props => {
  const {navigate} = useNavigation();
  const [isVisible, setVisible] = useState(false);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      console.debug('screen takes focus');
      setTimeout(() => setVisible(true), 1500);
      return () => console.debug('screen loses focus');
    }, []),
  );

  const navigateHome = () => {
    setTimeout(() => navigate('HomeScreen'), 1000);
  };

  const onPressRegularRedux = () => {
    dispatch({type: SELECT_REDUCER, isReduxSauce: false});
    navigateHome();
  };

  const onPressReduxSauce = () => {
    dispatch({type: SELECT_REDUCER, isReduxSauce: true});
    navigateHome();
  };

  return (
    <Container style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {isVisible ? (
        <View>
          <TouchableOpacity
            style={[styles.button, {marginBottom: Metrics.doubleBaseMargin}]}
            onPress={onPressRegularRedux}>
            <Text style={styles.buttonText}>Regular Redux</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onPressReduxSauce}>
            <Text style={styles.buttonText}>ReduxSauce</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.textStyle}>{'TODOS\nby\nNirav'}</Text>
      )}
    </Container>
  );
};

export default SplashScreen;
