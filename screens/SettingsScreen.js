import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonOutline,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Text, View } from 'react-native';

const SettingsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [publicReply, setPublicReply] = React.useState(true);
  const [replyInPost, setReplyInPost] = React.useState(true);
  const [starRatingValue, setStarRatingValue] = React.useState('');
  const [taggedInPost, setTaggedInPost] = React.useState(false);

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      {/* Add Learning Experience TItle */}
      <View style={styles.View7a442f6d}>
        <IconButton
          onPress={() => {
            try {
              navigation.navigate('ProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          icon={'Entypo/chevron-left'}
          size={24}
          color={theme.colors.dark}
        />
        <Text style={[styles.Textf37ed692, { color: theme.colors.text }]}>
          {'Settings'}
        </Text>
      </View>
      {/* settingLink */}
      <View style={styles.Viewdc97c93f}>
        {/* Account Title */}
        <Text style={[styles.Textcdcede10, { color: theme.colors.dark }]}>
          {'Account'}
        </Text>

        <Touchable>
          {/* Edit Profile Call to Action */}
          <View style={styles.Viewa3efd197}>
            {/* Left Aligned */}
            <View style={styles.View7d6a39b7}>
              <Text
                style={[styles.Textae4175fe, { color: theme.colors.dark }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Edit profile'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View style={styles.View7d6a39b7}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                size={24}
                color={theme.colors.dark}
              />
            </View>
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('ResetPasswordScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Row Wrapper */}
          <View style={styles.Viewa3efd197}>
            {/* Left Aligned */}
            <View style={styles.View7d6a39b7}>
              <Text
                style={[styles.Texte5186bff, { color: theme.colors.dark }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Reset password'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View style={styles.View7d6a39b7}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                size={24}
                color={theme.colors.dark}
              />
            </View>
          </View>
          <Divider
            style={styles.Divider74c6b3f7}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
        {/* Help */}
        <Text style={[styles.Textcdcede10, { color: theme.colors.dark }]}>
          {'Help'}
        </Text>

        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await WebBrowser.openBrowserAsync(
                  'https://go.crisp.chat/chat/embed/?website_id=5da7a8de-200b-43f5-80df-d44a951658f2'
                );
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
        >
          {/* Row Wrapper */}
          <View style={styles.Viewa3efd197}>
            {/* Left Aligned */}
            <View style={styles.View7d6a39b7}>
              <Text
                style={[styles.Texte5186bff, { color: theme.colors.dark }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Contact us'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View style={styles.View7d6a39b7}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                size={24}
                color={theme.colors.dark}
              />
            </View>
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await WebBrowser.openBrowserAsync(
                  'https://vision-committee.canny.io/'
                );
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
        >
          {/* Row Wrapper */}
          <View style={styles.Viewa3efd197}>
            {/* Left Aligned */}
            <View style={styles.View7d6a39b7}>
              <Text
                style={[styles.Texte5186bff, { color: theme.colors.dark }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Request new features'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View style={styles.View7d6a39b7}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                size={24}
                color={theme.colors.dark}
              />
            </View>
          </View>
          <Divider
            style={styles.Divider74c6b3f7}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
        {/* Permissions */}
        <Text style={[styles.Textcdcede10, { color: theme.colors.dark }]}>
          {'Permissions'}
        </Text>

        <View style={styles.View30e24516}>
          <Text style={[styles.Text58d1d82f, { color: theme.colors.dark }]}>
            {'Everyone can reply to you'}
          </Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setPublicReply(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={publicReply}
          />
        </View>
        <Divider
          style={styles.Divider74c6b3f7}
          height={1}
          color={theme.colors.divider}
        />
        {/* Email Notifications */}
        <Text style={[styles.Text52201420, { color: theme.colors.dark }]}>
          {'Email Notifications'}
        </Text>

        <View style={styles.View2b260bc9}>
          <Text style={[styles.Text58d1d82f, { color: theme.colors.dark }]}>
            {'Tagged in a post'}
          </Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setTaggedInPost(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={taggedInPost}
          />
        </View>

        <View style={styles.View30e24516}>
          <Text style={[styles.Text58d1d82f, { color: theme.colors.dark }]}>
            {'New replies'}
          </Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setReplyInPost(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={replyInPost}
          />
        </View>
        <Divider
          style={styles.Divider74c6b3f7}
          height={1}
          color={theme.colors.divider}
        />
        {/* Export */}
        <Text style={[styles.Textcdcede10, { color: theme.colors.dark }]}>
          {'Export'}
        </Text>

        <Touchable>
          {/* Row Wrapper */}
          <View style={styles.Viewf0e1e0e6}>
            {/* Left Aligned */}
            <View style={styles.View7d6a39b7}>
              <Text
                style={[styles.Texte5186bff, { color: theme.colors.dark }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Export to .csv file'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View style={styles.View7d6a39b7}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                size={24}
                color={theme.colors.dark}
              />
            </View>
          </View>
          <Divider
            style={styles.Divider74c6b3f7}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
      </View>
      <ButtonOutline
        onPress={() => {
          const handler = async () => {
            try {
              await RestAPISupabaseApi.logoutPOST(Constants);
              setGlobalVariableValue({
                key: 'AUTHORIZATION_HEADER',
                value: '',
              });
              navigation.navigate('WelcomeScreen');
            } catch (err) {
              console.error(err);
            }
          };
          handler();
        }}
        style={styles.ButtonOutline8c7ccbe1}
        title={'Sign Out'}
      />
      {/* versionCredtis */}
      <View
        style={[
          styles.Viewa2062c83,
          { backgroundColor: theme.colors.secondary, borderRadius: 8 },
        ]}
      >
        <Text style={[styles.Text85f21c07, { color: theme.colors.light }]}>
          {'Made with ❤️ by City as a School\n\nVersion 0.01.00-alpha'}
        </Text>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonOutline8c7ccbe1: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    fontFamily: 'System',
    fontWeight: '700',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    textAlign: 'center',
  },
  Divider74c6b3f7: {
    height: 1,
    marginTop: 16,
  },
  Text52201420: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 0,
    marginTop: 16,
  },
  Text58d1d82f: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  Text85f21c07: {
    fontFamily: 'System',
    fontWeight: '400',
    paddingBottom: 16,
    paddingTop: 16,
    textAlign: 'center',
  },
  Textae4175fe: {
    fontFamily: 'System',
    fontWeight: '600',
    marginLeft: 0,
    opacity: 0.45,
  },
  Textcdcede10: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 16,
  },
  Texte5186bff: {
    fontFamily: 'System',
    fontWeight: '600',
    marginLeft: 0,
  },
  Textf37ed692: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    lineHeight: 24,
    paddingLeft: 12,
  },
  View2b260bc9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    opacity: 0.47,
    paddingLeft: 0,
  },
  View30e24516: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    opacity: 0.5,
    paddingLeft: 0,
  },
  View7a442f6d: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 28,
    paddingBottom: 16,
    paddingTop: 0,
  },
  View7d6a39b7: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Viewa2062c83: {
    marginBottom: 32,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 32,
  },
  Viewa3efd197: {
    flexDirection: 'row',
    height: 32,
    justifyContent: 'space-between',
  },
  Viewdc97c93f: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 16,
    marginRight: 16,
  },
  Viewf0e1e0e6: {
    flexDirection: 'row',
    height: 32,
    justifyContent: 'space-between',
    opacity: 0.5,
  },
});

export default withTheme(SettingsScreen);
