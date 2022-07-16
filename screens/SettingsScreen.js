import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonOutline,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Spacer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const SettingsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [starRatingValue, setStarRatingValue] = React.useState('');

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <View style={styles.View_5P}>
        <IconButton
          onPress={() => {
            try {
              navigation.navigate('ProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          icon={'AntDesign/left'}
          size={24}
          color={theme.colors.strong}
        />
        <Spacer top={8} right={8} bottom={8} left={8} />
        <Text style={[styles.TextPs, { color: theme.colors.strong }]}>
          {'Settings'}
        </Text>
      </View>

      <View style={styles.ViewCo}>
        <Text style={[styles.TextCC, { color: theme.colors.strong }]}>
          {'Account'}
        </Text>

        <Touchable>
          <View style={styles.Viewrl}>
            <View style={styles.Viewrm}>
              <Text
                style={[styles.TextD1, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Edit profile'}
              </Text>
            </View>

            <View style={styles.Viewg7}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
        </Touchable>

        <Touchable>
          <View style={styles.View_7t}>
            <View style={styles.Viewbk}>
              <Text
                style={[styles.TextEe, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Reset password'}
              </Text>
            </View>

            <View style={styles.ViewwI}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Divideri5}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Text style={[styles.Textch, { color: theme.colors.strong }]}>
          {'Help'}
        </Text>

        <Touchable>
          <View style={styles.ViewHR}>
            <View style={styles.ViewiD}>
              <Text
                style={[styles.TextxJ, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Contact us'}
              </Text>
            </View>

            <View style={styles.Viewg8}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>

          <Touchable>
            <View style={styles.Viewh1}>
              <View style={styles.Viewgx}>
                <Text
                  style={[styles.TextUt, { color: theme.colors.strong }]}
                  allowFontScaling={true}
                  ellipsizeMode={'tail'}
                  textBreakStrategy={'highQuality'}
                >
                  {'Request new features'}
                </Text>
              </View>

              <View style={styles.ViewbY}>
                <Icon
                  name={'MaterialIcons/chevron-right'}
                  color={theme.colors.strong}
                  size={24}
                />
              </View>
            </View>
            <Divider
              style={styles.DividerFt}
              height={1}
              color={theme.colors.divider}
            />
          </Touchable>
        </Touchable>

        <Text style={[styles.Textaz, { color: theme.colors.strong }]}>
          {'Permissions'}
        </Text>

        <View style={styles.Viewag}>
          <Text style={[styles.TextxP, { color: theme.colors.strong }]}>
            {'Everyone can reply to you'}
          </Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
              } catch (err) {
                console.error(err);
              }
            }}
            value={null}
          />
        </View>
        <Divider
          style={styles.Dividerux}
          height={1}
          color={theme.colors.divider}
        />
        <Text style={[styles.TextoZ, { color: theme.colors.strong }]}>
          {'Email Notifications'}
        </Text>

        <View style={styles.ViewKW}>
          <Text style={[styles.TextLi, { color: theme.colors.strong }]}>
            {'Tagged in a post'}
          </Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
              } catch (err) {
                console.error(err);
              }
            }}
            value={null}
          />
        </View>

        <View style={styles.ViewIz}>
          <Text style={[styles.TextMo, { color: theme.colors.strong }]}>
            {'New replies'}
          </Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
              } catch (err) {
                console.error(err);
              }
            }}
            value={null}
          />
        </View>
        <Divider
          style={styles.DividerIQ}
          height={1}
          color={theme.colors.divider}
        />
        <Text style={[styles.Textqz, { color: theme.colors.strong }]}>
          {'Export'}
        </Text>

        <Touchable>
          <View style={styles.Viewre}>
            <View style={styles.ViewGR}>
              <Text
                style={[styles.TextKj, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Export to .csv file'}
              </Text>
            </View>

            <View style={styles.ViewLm}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DivideryS}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
      </View>
      <ButtonOutline
        onPress={async () => {
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
        }}
        style={styles.ButtonOutlinefM}
        title={'Sign Out'}
      />
      <View
        style={[
          styles.ViewG9,
          { backgroundColor: theme.colors.secondary, borderRadius: 8 },
        ]}
      >
        <Text style={[styles.TextUK, { color: theme.colors.light }]}>
          {'Made with ❤️ by City as a School\n\nVersion 0.01.00-alpha'}
        </Text>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextPs: {
    marginBottom: 0,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'System',
    fontWeight: '600',
    paddingLeft: 0,
  },
  View_5P: {
    flexGrow: 1,
    flexShrink: 0,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 6,
    paddingBottom: 6,
  },
  TextCC: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
    marginTop: 16,
  },
  TextD1: {
    marginLeft: 0,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewrm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewg7: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewrl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 32,
  },
  TextEe: {
    marginLeft: 0,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewbk: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewwI: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_7t: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 32,
  },
  Divideri5: {
    height: 1,
    marginTop: 16,
  },
  Textch: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
    marginTop: 16,
  },
  TextxJ: {
    marginLeft: 0,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewiD: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewg8: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewHR: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 32,
  },
  TextUt: {
    marginLeft: 0,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewgx: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewbY: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewh1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 32,
  },
  DividerFt: {
    height: 1,
    marginTop: 16,
  },
  Textaz: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
    marginTop: 16,
  },
  TextxP: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewag: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingLeft: 0,
  },
  Dividerux: {
    height: 1,
    marginTop: 16,
  },
  TextoZ: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 0,
  },
  TextLi: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewKW: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingLeft: 0,
  },
  TextMo: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewIz: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingLeft: 0,
  },
  DividerIQ: {
    height: 1,
    marginTop: 16,
  },
  Textqz: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
    marginTop: 16,
  },
  TextKj: {
    marginLeft: 0,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewGR: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewLm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 32,
  },
  DivideryS: {
    height: 1,
    marginTop: 16,
  },
  ViewCo: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 16,
    marginRight: 16,
  },
  ButtonOutlinefM: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
  },
  TextUK: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '400',
    paddingTop: 16,
    paddingBottom: 16,
  },
  ViewG9: {
    marginBottom: 32,
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
  },
});

export default withTheme(SettingsScreen);
