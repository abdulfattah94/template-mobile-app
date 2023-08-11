import { Dimensions, Platform } from 'react-native';
import { isIphoneX } from '@utils/iphoneHelper';

export default {
  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    margin: 16,
    padding: 16,
  },
  isAndroid: Platform.OS !== 'ios',
  isIphoneX: isIphoneX(),
  text: {
    xs: {
      size: 10,
      regular: {
        fontWeight: '400',
      },
      medium: {
        fontWeight: '500',
      },
      bold: {
        fontWeight: '700',
      },
      black: {
        fontWeight: '900',
      },
    },
    s: {
      size: 12,
      regular: {
        fontWeight: '400',
      },
      medium: {
        fontWeight: '500',
      },
      bold: {
        fontWeight: '700',
      },
      black: {
        fontWeight: '900',
      },
    },
    m: {
      size: 14,
      regular: {
        fontWeight: '400',
      },
      medium: {
        fontWeight: '500',
      },
      bold: {
        fontWeight: '700',
      },
      black: {
        fontWeight: '900',
      },
    },
    l: {
      size: 16,
      regular: {
        fontWeight: '400',
      },
      medium: {
        fontWeight: '500',
      },
      bold: {
        fontWeight: '700',
      },
      black: {
        fontWeight: '900',
      },
    },
    xl: {
      size: 20,
      regular: {
        fontWeight: '400',
      },
      medium: {
        fontWeight: '500',
      },
      bold: {
        fontWeight: '700',
      },
      black: {
        fontWeight: '900',
      },
    },
    xxl: {
      size: 24,
      regular: {
        fontWeight: '400',
      },
      medium: {
        fontWeight: '500',
      },
      bold: {
        fontWeight: '700',
      },
      black: {
        fontWeight: '900',
      },
    },
    xxxl: {
      size: 32,
      regular: {
        fontWeight: '400',
      },
      medium: {
        fontWeight: '500',
      },
      bold: {
        fontWeight: '700',
      },
      black: {
        fontWeight: '900',
      },
    },
  },
};
