import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import AppNavigation from '../navigation/AppNavigation';
import { ApplicationStyles } from '../theme';
import createReduxSauceStore from '../redux/reduxSauce';
import createRegularReduxStore from '../redux/regularRedux';

const { store: reduxSauceStore, persistor: reduxSaucePersistor } = createReduxSauceStore();
const { store: regularReduxStore, persistor: regularReduxPersistor } = createRegularReduxStore();
// const regularReduxStore = createStore()

const reduxSauceRootContainer = (screenProps) => (
  <Provider store={reduxSauceStore}>
    <PersistGate loading={null} persistor={reduxSaucePersistor}>
      <View style={[ApplicationStyles.screen.mainContainer]}>
        <StatusBar barStyle="dark-content" />
        <AppNavigation screenProps={screenProps} />
      </View>
    </PersistGate>
  </Provider>
)

const regularReduxRootContainer = (screenProps) => (
  <Provider store={regularReduxStore}>
    <PersistGate loading={null} persistor={regularReduxPersistor}>
      <View style={[ApplicationStyles.screen.mainContainer]}>
        <StatusBar barStyle="dark-content" />
        <AppNavigation screenProps={screenProps} />
      </View>
    </PersistGate>
  </Provider>
)

const RootContainer = () => {
  const [isReduxSauce, setIsReduxSauce] = useState(false);
  const screenProps = {
    setIsReduxSauce
  }
  
  return (
    <>
    {isReduxSauce ? reduxSauceRootContainer(screenProps) : regularReduxRootContainer(screenProps)}
    </>
  );
};

export default RootContainer;
