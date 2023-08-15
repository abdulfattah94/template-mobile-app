import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { isReadyRef, navigationRef } from 'react-navigation-helpers';
import { UIManager, Platform, LayoutAnimation, Linking } from 'react-native';
import { actions as BootActions } from '@bootstrap/store/bootReducer';
import { store } from '@configs/store';
import RootNavigator from '@navigation/rootNavigator';
import { Themes } from '@configs/index';
import { enableExperimental } from '@utils/commons';
import { ROUTES_DEEPLINK, URI_SCHEMES } from '@configs/constants';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
}

export default function Navigation() {
  const routeNameRef = useRef();

  React.useEffect((): any => {
    // eslint-disable-next-line no-return-assign
    return () => (isReadyRef.current = false);
  }, []);

  useEffect(() => {
    enableExperimental();
  }, []);

  return (
    <NavigationContainer
      linking={{
        prefixes: URI_SCHEMES,
        config: ROUTES_DEEPLINK,
        subscribe(listener) {
          const onReceiveURL = ({ url }: { url: string }) => listener(url);
          // Listen to incoming links from deep linking
          const subscription = Linking.addEventListener('url', onReceiveURL);

          return () => {
            // Clean up the event listeners
            subscription.remove();
          };
        },
      }}
      theme={Themes}
      ref={navigationRef}
      onReady={async () => {
        const currentRoute = navigationRef.current?.getCurrentRoute();
        const currentRouteName = currentRoute?.name;
        isReadyRef.current = true;
        if (currentRouteName) {
          const initialURL = await Linking.getInitialURL();
          if (initialURL !== null) {
            Linking.openURL(initialURL);
          }
        }
      }}
      onStateChange={async () => {
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
        const previousRouteName = routeNameRef.current;
        const objRoute = {
          currentRouteName,
          previousRouteName,
        };

        store.dispatch(BootActions.setActivity(objRoute));
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
