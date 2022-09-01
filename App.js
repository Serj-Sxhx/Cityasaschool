import * as React from 'react';
import { AppState } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as SplashScreen from 'expo-splash-screen';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider as ThemeProvider } from '@draftbit/ui';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppNavigator from './AppNavigator';
import DraftbitTheme from './themes/DraftbitTheme.js';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import { useFonts } from 'expo-font';
import { DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { Questrial_400Regular } from '@expo-google-fonts/questrial';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const queryClient = new QueryClient();

const App = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular,
    DMSans_400Regular,
    DMSans_400Regular,
    DMSans_400Regular,
    DMSans_400Regular,
    DMSans_400Regular,
    DMSans_400Regular,
    DMSans_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_400Regular,
    Inter_500Medium,
    Inter_500Medium,
    Inter_500Medium,
    Inter_500Medium,
    Inter_500Medium,
    Inter_500Medium,
    Inter_500Medium,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_600SemiBold,
    Inter_600SemiBold,
    Inter_600SemiBold,
    Inter_600SemiBold,
    Inter_600SemiBold,
    Inter_600SemiBold,
    Inter_600SemiBold,
    Inter_600SemiBold,
    Inter_600SemiBold,
    Inter_600SemiBold,
    Inter_600SemiBold,
    Inter_600SemiBold,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_700Bold,
    Inter_700Bold,
    Inter_700Bold,
    Montserrat_400Regular,
    Montserrat_400Regular,
    Montserrat_400Regular,
    Montserrat_400Regular,
    Montserrat_400Regular,
    Montserrat_400Regular,
    Montserrat_400Regular,
    Montserrat_400Regular,
    Montserrat_400Regular,
    Montserrat_400Regular,
    Montserrat_400Regular,
    Montserrat_400Regular,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_700Bold,
    Montserrat_700Bold,
    Montserrat_700Bold,
    Poppins_400Regular,
    Poppins_400Regular,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Questrial_400Regular,
    Roboto_700Bold,
  });

  React.useEffect(() => {
    async function prepare() {
      try {
        await cacheAssetsAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (isReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isReady, fontsLoaded]);

  if (!isReady || !fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={DraftbitTheme}>
            <AppNavigator />
          </ThemeProvider>
        </QueryClientProvider>
      </GlobalVariableProvider>
    </SafeAreaProvider>
  );
};

export default App;
