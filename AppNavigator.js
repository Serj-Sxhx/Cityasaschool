import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';

import AddPostALCopyScreen from './screens/AddPostALCopyScreen';
import AddPostCopyScreen from './screens/AddPostCopyScreen';
import AddPostScreen from './screens/AddPostScreen';
import CameraPermissionsScreen from './screens/CameraPermissionsScreen';
import CompleteProfileScreen from './screens/CompleteProfileScreen';
import DiscoverALCopyScreen from './screens/DiscoverALCopyScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import EditPostScreen from './screens/EditPostScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import InboxScreen_nUFQ9fGj from './screens/InboxScreen_nUFQ9fGj';
import LoginScreen from './screens/LoginScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import PostDetailALCopyScreen from './screens/PostDetailALCopyScreen';
import PostDetailScreen from './screens/PostDetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import PublicProfileScreen from './screens/PublicProfileScreen';
import RequestPasswordLinkScreen from './screens/RequestPasswordLinkScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignupScreen from './screens/SignupScreen';
import UpdatePasswordScreen from './screens/UpdatePasswordScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
export default function RootAppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{ title: 'Edit Profile' }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
        <Stack.Screen
          name="CameraPermissionsScreen"
          component={CameraPermissionsScreen}
          options={{ title: 'Camera Permissions' }}
        />
        <Stack.Screen
          name="AddPostScreen"
          component={AddPostScreen}
          options={{ title: 'addPost' }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: 'welcome' }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ title: 'Signup' }}
        />
        <Stack.Screen
          name="DiscoverScreen"
          component={DiscoverScreen}
          options={{ title: 'Discover' }}
        />
        <Stack.Screen
          name="PostDetailScreen"
          component={PostDetailScreen}
          options={{ title: 'Post Detail' }}
        />
        <Stack.Screen
          name="PublicProfileScreen"
          component={PublicProfileScreen}
          options={{ title: 'PublicProfile' }}
        />
        <Stack.Screen
          name="InboxScreen_nUFQ9fGj"
          component={InboxScreen_nUFQ9fGj}
          options={{ title: 'Inbox' }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen
          name="CompleteProfileScreen"
          component={CompleteProfileScreen}
          options={{ title: 'Complete Profile' }}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ title: 'onboarding' }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="UpdatePasswordScreen"
          component={UpdatePasswordScreen}
          options={{ title: 'Update Password ' }}
        />
        <Stack.Screen
          name="RequestPasswordLinkScreen"
          component={RequestPasswordLinkScreen}
          options={{ title: 'Request Password Link ' }}
        />
        <Stack.Screen
          name="EditPostScreen"
          component={EditPostScreen}
          options={{ title: 'editPost' }}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          options={{ title: 'Reset Password' }}
        />
        <Stack.Screen
          name="AddPostCopyScreen"
          component={AddPostCopyScreen}
          options={{ title: 'addPost Copy' }}
        />
        <Stack.Screen
          name="DiscoverALCopyScreen"
          component={DiscoverALCopyScreen}
          options={{ title: 'Discover AL Copy' }}
        />
        <Stack.Screen
          name="AddPostALCopyScreen"
          component={AddPostALCopyScreen}
          options={{ title: 'addPost AL Copy' }}
        />
        <Stack.Screen
          name="PostDetailALCopyScreen"
          component={PostDetailALCopyScreen}
          options={{ title: 'Post Detail AL Copy' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
