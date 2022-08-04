import React from 'react';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  ButtonSolid,
  CircleImage,
  DatePicker,
  Icon,
  IconButton,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const EditProfileScreen = props => {
  const { theme } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());

  return (
    <ScreenContainer style={styles.screen} hasSafeArea={true}>
      <View style={styles.ViewiH}>
        <View style={[styles.View_6k, { borderRadius: 8 }]}>
          <View style={styles.ViewA7}>
            <IconButton
              icon={'AntDesign/left'}
              size={24}
              color={theme.colors.dark}
            />
            <Text style={[styles.Textfg, { color: theme.colors.dark }]}>
              {'Edit Profile'}
            </Text>
          </View>
        </View>
      </View>

      <KeyboardAwareScrollView
        enableOnAndroid={false}
        enableAutomaticScroll={true}
      >
        <View style={styles.ViewUG}>
          <View style={styles.View_0t}>
            <Touchable
              onPress={async () => {
                try {
                  await Utils.openCamera({ mediaTypes: 'Images' });
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View>
                <CircleImage source={Images.Avatar} size={100} />
                <Icon
                  style={styles.Iconjn}
                  name={'MaterialIcons/camera-alt'}
                  size={32}
                  color={theme.colors.primary}
                />
              </View>
            </Touchable>
          </View>
        </View>

        <View style={styles.View_6X}>
          <View>
            <Text style={[styles.TextoZ, { color: theme.colors.dark }]}>
              {'First Name'}
            </Text>
            <TextInput
              style={[
                styles.TextInput_80,
                { borderColor: theme.colors.lightGrey },
              ]}
              placeholder={'First Name'}
              value={null}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightGrey}
            />
          </View>
          <Spacer top={12} right={8} bottom={12} left={8} />
          <View>
            <Text style={[styles.TextzL, { color: theme.colors.dark }]}>
              {'Last Name'}
            </Text>
            <TextInput
              style={[
                styles.TextInputHw,
                { borderColor: theme.colors.lightGrey },
              ]}
              value={null}
              placeholder={'Name'}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightGrey}
            />
          </View>
          <Spacer top={16} right={8} bottom={16} left={8} />
          <View>
            <Text style={[styles.Textpa, { color: theme.colors.dark }]}>
              {'User Name'}
            </Text>
            <TextInput
              style={[
                styles.TextInputJS,
                { borderColor: theme.colors.lightGrey },
              ]}
              value={null}
              placeholder={'Name'}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightGrey}
            />
            <Spacer top={16} right={8} bottom={16} left={8} />
          </View>

          <View>
            <Text style={[styles.Text_6b, { color: theme.colors.dark }]}>
              {'Learning Goal / Bio'}
            </Text>
            <TextInput
              style={[
                styles.TextInput_3l,
                { borderColor: theme.colors.lightGrey },
              ]}
              value={null}
              placeholder={'Name'}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightGrey}
              numberOfLines={4}
              maxLength={320}
              multiline={true}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>

          <View>
            <Text style={[styles.Text_23, { color: theme.colors.dark }]}>
              {'Location'}
            </Text>
            <TextInput
              style={[
                styles.TextInputQT,
                { borderColor: theme.colors.lightGrey },
              ]}
              value={null}
              placeholder={'Name'}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightGrey}
            />
            <Spacer top={16} right={8} bottom={16} left={8} />
          </View>

          <View>
            <Text style={[styles.TextWZ, { color: theme.colors.dark }]}>
              {'Birthday'}
            </Text>
            <DatePicker
              onDateChange={newDatePickerValue => {
                try {
                  setDatePickerValue(newDatePickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              date={datePickerValue}
              label={'Date'}
              mode={'date'}
              leftIconMode={'inset'}
              type={'solid'}
            />
            <Spacer top={16} right={8} bottom={16} left={8} />
          </View>

          <View>
            <Text style={[styles.TextPi, { color: theme.colors.dark }]}>
              {'Gender'}
            </Text>
            <TextInput
              style={[
                styles.TextInputXc,
                { borderColor: theme.colors.lightGrey },
              ]}
              value={null}
              placeholder={'Name'}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightGrey}
            />
            <Spacer top={16} right={8} bottom={16} left={8} />
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.ViewZB}>
        <ButtonSolid
          style={[
            styles.ButtonSolid_51,
            { backgroundColor: theme.colors.primary },
          ]}
          title={'Save'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textfg: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
    marginLeft: 8,
  },
  ViewA7: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_6k: {
    paddingLeft: 0,
    paddingBottom: 6,
    paddingRight: 0,
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewiH: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  Iconjn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  View_0t: {
    alignItems: 'center',
  },
  ViewUG: {
    paddingLeft: 16,
    paddingTop: 30,
    paddingRight: 16,
    paddingBottom: 30,
  },
  TextoZ: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInput_80: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  TextzL: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputHw: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  Textpa: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputJS: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  Text_6b: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInput_3l: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  Text_23: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputQT: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  TextWZ: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextPi: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputXc: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  View_6X: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ButtonSolid_51: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ViewZB: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 16,
  },
  screen: {
    justifyContent: 'space-around',
  },
});

export default withTheme(EditProfileScreen);
