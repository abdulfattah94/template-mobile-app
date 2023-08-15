import * as React from 'react';
import { UIManager, Platform } from 'react-native';
import { Screen, Navigator, ROUTERS } from '@routes/index';

// start region screen
import * as APPCREENS from '@modules/app/screens/index';
import * as AUTHSCREENS from '@modules/auth/screens/index';
// end region screen

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

/**
 * make sure gak ada merah2 di routes ini , klo ada meraha harus di fixing di routes index
 * @returns
 */

function RootNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: Platform.OS !== 'android',
        // animation: 'flip',
        // animationDuration: 300,
      }}
      initialRouteName={ROUTERS.AppOnBoarding}
    >
      {/* start region screen APP */}
      <Screen
        name={ROUTERS.AppOnBoarding}
        component={APPCREENS.AppOnBoarding}
      />
      {/* end region screen APP */}

      {/* start region screen AUTH */}
      <Screen name={ROUTERS.AuthLogin} component={AUTHSCREENS.AuthLogin} />
      {/* end region screen AUth */}
    </Navigator>
  );
}

export default React.memo(RootNavigator);
