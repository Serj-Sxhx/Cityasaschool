import React from 'react';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  ButtonSolid,
  CircleImage,
  DatePicker,
  Icon,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CompleteProfileScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');

  return (
    <ScreenContainer style={styles.screen} hasSafeArea={true}>
      <View style={styles.Viewzh}>
        <View style={[styles.ViewPe, { borderRadius: 8 }]}>
          <View style={styles.ViewAE}>
            <Text style={[styles.TextF7, { color: theme.colors.dark }]}>
              {'Complete your profile'}
            </Text>
          </View>
        </View>
      </View>

      <KeyboardAwareScrollView
        enableOnAndroid={false}
        enableAutomaticScroll={true}
      >
        <View style={styles.ViewCw}>
          <View style={styles.ViewMH}>
            <Touchable
              onPress={async () => {
                try {
                  await Utils.openImagePicker({ allowsEditing: false });
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View>
                <CircleImage source={Images.Avatar} size={100} />
                <Icon
                  style={styles.Iconb6}
                  name={'MaterialIcons/camera-alt'}
                  size={32}
                  color={theme.colors.primary}
                />
              </View>
            </Touchable>
          </View>
        </View>

        <View style={styles.View_3s}>
          <View>
            <Text style={[styles.TextPG, { color: theme.colors.dark }]}>
              {'User Name'}
            </Text>
            <TextInput
              style={[
                styles.TextInputZt,
                { borderColor: theme.colors.lightGrey },
              ]}
              placeholder={'@username'}
              value={null}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightGrey}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>

          <View>
            <Text style={[styles.TextUC, { color: theme.colors.dark }]}>
              {'I am currently a'}
            </Text>

            <RadioButtonGroup
              onValueChange={newRadioButtonGroupValue => {
                try {
                  setRadioButtonGroupValue2(newRadioButtonGroupValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              value={radioButtonGroupValue2}
            >
              <RadioButtonRow
                style={styles.RadioButtonRowBK}
                label={'High / Secondary Schooler'}
                color={theme.colors.primary}
                unselectedColor={theme.colors.lightGrey}
                direction={'row'}
              />
              <RadioButtonRow
                style={styles.RadioButtonRowKw}
                label={'University Student'}
                color={theme.colors.primary}
                unselectedColor={theme.colors.lightGrey}
                direction={'row'}
              />
              <RadioButtonRow
                style={styles.RadioButtonRowWJ}
                label={'Homeschooler'}
                color={theme.colors.primary}
                unselectedColor={theme.colors.lightGrey}
                direction={'row'}
              />
              <RadioButtonRow
                style={styles.RadioButtonRow_1n}
                label={'Early Professional'}
                color={theme.colors.primary}
                unselectedColor={theme.colors.lightGrey}
                direction={'row'}
              />
            </RadioButtonGroup>
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>

          <View>
            <Text style={[styles.TextHv, { color: theme.colors.dark }]}>
              {'Learning Goal & Bio'}
            </Text>
            <TextInput
              style={[
                styles.TextInput_3B,
                { borderColor: theme.colors.lightGrey },
              ]}
              placeholder={
                'Tell others about your interests, what you need and what your goals are.'
              }
              value={null}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightGrey}
              numberOfLines={4}
              maxLength={320}
              multiline={true}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>

          <View>
            <Text style={[styles.TextLa, { color: theme.colors.dark }]}>
              {'City'}
            </Text>
            <TextInput
              style={[
                styles.TextInputLq,
                { borderColor: theme.colors.lightGrey },
              ]}
              value={null}
              placeholder={'Name'}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightGrey}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>

          <View>
            <Text style={[styles.Textv4, { color: theme.colors.dark }]}>
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
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>

          <View>
            <Text style={[styles.TextEh, { color: theme.colors.dark }]}>
              {'Gender'}
            </Text>
            <TextInput
              style={[
                styles.TextInputif,
                { borderColor: theme.colors.lightGrey },
              ]}
              value={null}
              placeholder={'Name'}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightGrey}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.Vieww9}>
        <ButtonSolid
          onPress={() => {
            try {
              navigation.navigate('ProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.ButtonSolide4,
            { backgroundColor: theme.colors.primary },
          ]}
          title={'Continue To Profile'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextF7: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
    marginLeft: 8,
  },
  ViewAE: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewPe: {
    paddingLeft: 0,
    paddingBottom: 6,
    paddingRight: 0,
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewzh: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  Iconb6: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  ViewMH: {
    alignItems: 'center',
  },
  ViewCw: {
    paddingLeft: 16,
    paddingTop: 30,
    paddingRight: 16,
    paddingBottom: 30,
  },
  TextPG: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputZt: {
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
  TextUC: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  RadioButtonRowBK: {
    fontFamily: 'System',
    fontWeight: '400',
  },
  RadioButtonRowKw: {
    fontFamily: 'System',
    fontWeight: '400',
  },
  RadioButtonRowWJ: {
    fontFamily: 'System',
    fontWeight: '400',
  },
  RadioButtonRow_1n: {
    fontFamily: 'System',
    fontWeight: '400',
  },
  TextHv: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInput_3B: {
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
  TextLa: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputLq: {
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
  Textv4: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextEh: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputif: {
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
  View_3s: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ButtonSolide4: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  Vieww9: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 16,
  },
  screen: {
    justifyContent: 'space-around',
  },
});

export default withTheme(CompleteProfileScreen);
