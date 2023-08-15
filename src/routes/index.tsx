import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

/**
    prefix penamaan pake nama module contoh => NamaModulesNamaScreen = AuthLogin
*/

enum ROUTERS {
  // start region app module
  AppOnBoarding = 'AppOnBoarding',
  // end region app module

  // start region auth module
  AuthLogin = 'AuthLogin',
  // end region auth module
}

export type RootStactNavigationTypes = {
  // start region app type
  [ROUTERS.AppOnBoarding]: undefined;
  // end region app type

  // start region auth type
  [ROUTERS.AuthLogin]: undefined;
  // end region auth type
};

const Stack = createNativeStackNavigator<RootStactNavigationTypes>();
const { Navigator } = Stack;
const { Screen } = Stack;

export { Stack, NavigationContainer, Navigator, Screen, ROUTERS };
