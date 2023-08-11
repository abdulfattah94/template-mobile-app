import { MMKV } from 'react-native-mmkv';
import { Storage } from 'redux-persist';
import { STORE_ID, STORE_KEY } from './constants';
import { toString } from 'lodash';

export const storage = new MMKV({
  id: `${toString(STORE_ID)}_APP_DEV$123`,
  encryptionKey: toString(STORE_KEY), // prefer jgn panjang2
});

export const reduxStorage: Storage = {
  setItem: (key: any | undefined, value: any | undefined) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: any | undefined) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: any | undefined) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

export const PERSIST = {
  active: true,
  reducerVersion: '1.0',
  bootConfig: {
    key: 'boot',
    storage: reduxStorage,
  },
  generalConfig: {
    key: 'session',
    storage: reduxStorage,
  },
  authConfig: {
    key: 'auth',
    storage: reduxStorage,
  },
};
