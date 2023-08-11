import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { reducer as bootReducer } from '@bootstrap/store/bootReducer';
import { reducer as network } from 'react-native-offline';
import { reducer as authReducer } from '@modules/auth/stores/index';
import { PERSIST } from '@configs/persist';

const rootReducers = combineReducers({
  network: persistReducer(PERSIST.generalConfig, network),
  app: persistReducer(PERSIST.bootConfig, bootReducer),
  auth: persistReducer(PERSIST.authConfig, authReducer),
});

export default rootReducers;
