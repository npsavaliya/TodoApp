import React from 'react';
import {StatusBar, View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import AppNavigation from '../navigation/AppNavigation';
import {ApplicationStyles} from '../theme';
import createRegularReduxStore from '../redux/regularRedux';

const {
  store: regularReduxStore,
  persistor: regularReduxPersistor,
} = createRegularReduxStore();

const RootContainer = () => {
  return (
    <>
      <Provider store={regularReduxStore}>
        <PersistGate loading={null} persistor={regularReduxPersistor}>
          <View style={[ApplicationStyles.screen.mainContainer]}>
            <StatusBar barStyle="dark-content" />
            <AppNavigation />
          </View>
        </PersistGate>
      </Provider>
    </>
  );
};

export default RootContainer;
