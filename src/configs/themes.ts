import { Theme } from '@react-navigation/native';

export interface ExtendedTheme extends Theme {
  dark: boolean;
  colors: Theme['colors'] & {
    // below is custom themes
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
}

const MyTheme: ExtendedTheme = {
  dark: true,
  colors: {
    primary: 'rgba(207, 0, 49, 1)',
    background: 'rgba(6, 13, 44, 1)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default MyTheme;
