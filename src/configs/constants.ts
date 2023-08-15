import Config from 'react-native-config';

export const { STORE_ID, STORE_KEY, BASE_URL, DEEPLINK } = Config;

export const PING_INTERVAL = 20 * 1000;

// sesuaikan url nya
export const URI_SCHEMES = [
  'xappdev://',
  'xapp-dev.onelink.me',
  'https://xapp-dev.onelink.me',
];

export const ROUTES_DEEPLINK: any = {
  screens: {
    TabHome: {
      screens: {
        Home: 'TabHome/:navigateTo',
      },
    },
  },
};
