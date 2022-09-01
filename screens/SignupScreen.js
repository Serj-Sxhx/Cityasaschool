import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  DatePicker,
  Link,
  Picker,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignupScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const inputValidation = () => {
    const expr =
      /^([\w-\.]+)@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
    const passwordExpr = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let foundError = false;
    if (firstNameInput.length < 1) {
      setFirstNameError('First name cannot be empty');
      foundError = true;
    } else {
      setFirstNameError('');
    }

    if (lastNameInput.length < 1) {
      setLastNameError('Last name cannot be empty');
      foundError = true;
    } else {
      setLastNameError('');
    }

    if (username.length < 1) {
      setUsernameError('Username cannot be empty');
      foundError = true;
    } else {
      setUsernameError('');
    }

    if (pickerValue === 'Select An Option') {
      setGenderError('Please select a gender');
      foundError = true;
    } else {
      setGenderError('');
    }

    if (!expr.test(emailInput)) {
      setEmailError('Please enter a valid email');
      foundError = true;
    } else {
      setEmailError('');
    }
    if (!passwordExpr.test(passwordInput)) {
      setPasswordError(
        'Password should be at least 8 characters in length, contain at least 1 letter and at least 1 number.'
      );
      foundError = true;
    } else {
      setPasswordError('');
    }

    return foundError;
  };

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      setFirstNameInput('');
      setLastNameInput('');
      setEmailInput('');
      setPasswordInput('');
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [GenderPickerValues, setGenderPickerValues] = React.useState([
    'Male',
    'Female',
    'Other',
  ]);
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [emailError, setEmailError] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState('');
  const [firstNameInput, setFirstNameInput] = React.useState('');
  const [genderError, setGenderError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [lastNameError, setLastNameError] = React.useState('');
  const [lastNameInput, setLastNameInput] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('Select An Option');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');

  return (
    <ScreenContainer hasTopSafeArea={true} hasBottomSafeArea={true}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.KeyboardAwareScrollView2b66e99eContent}
      >
        {/* Header */}
        <View style={styles.View3a80ccbf}>
          {/* Title */}
          <Text
            style={[
              styles.Textd55eaa29,
              { color: theme.colors.custom_rgb0_0_0 },
            ]}
          >
            {'Sign up'}
          </Text>
          {/* Subtitle */}
          <Text style={[styles.Text813c86e8, { color: theme.colors.dark }]}>
            {"it's quick an easy."}
          </Text>
        </View>
        {/* Register Form */}
        <View style={styles.View8b2fbf69}>
          {/* Name */}
          <View style={styles.Viewdebd3207}>
            <View style={styles.View181c781b}>
              {/* interMedium1619FirstName */}
              <Text
                style={[styles.Text3b1ff5ae, { color: theme.colors.lightGrey }]}
              >
                {'First Name'}
              </Text>
              {/* First Name Input */}
              <TextInput
                onChangeText={newFirstNameInputValue => {
                  try {
                    setFirstNameInput(newFirstNameInputValue);
                    setFirstNameError('');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInput9b87bd7c,
                  {
                    color: theme.colors.text,
                    backgroundColor: theme.colors.grayLine,
                    borderRadius: 8,
                    borderColor: theme.colors.grayLine,
                  },
                ]}
                placeholder={'First Name'}
                value={firstNameInput}
                autoCapitalize={'words'}
                placeholderTextColor={theme.colors.custom_rgb170_170_170}
              />
              {/* First Name Error */}
              <Text
                style={[styles.Text117112a1, { color: theme.colors.error }]}
              >
                {firstNameError}
              </Text>
            </View>

            <View style={styles.Viewc992f941}>
              {/* interMedium1619 */}
              <Text
                style={[styles.Text7c3d1ba8, { color: theme.colors.lightGrey }]}
              >
                {'Last Name'}
              </Text>
              {/* Last Name Input */}
              <TextInput
                onChangeText={newLastNameInputValue => {
                  try {
                    setLastNameInput(newLastNameInputValue);
                    setLastNameError('');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInputf07c857f,
                  {
                    borderColor: theme.colors.grayLine,
                    backgroundColor: theme.colors.grayLine,
                  },
                ]}
                placeholder={'Last Name'}
                value={lastNameInput}
                autoCapitalize={'words'}
                placeholderTextColor={theme.colors.lightGrey}
              />
              {/* Last Name Error */}
              <Text
                style={[styles.Text117112a1, { color: theme.colors.error }]}
              >
                {lastNameError}
              </Text>
            </View>
          </View>
          <Spacer top={9} bottom={0} left={0} right={0} />
          {/* Username */}
          <View>
            {/* interMedium1619 */}
            <Text
              style={[styles.Text7c3d1ba8, { color: theme.colors.lightGrey }]}
            >
              {'Username*'}
            </Text>
            {/* Username */}
            <TextInput
              onChangeText={newUsernameValue => {
                try {
                  setUsername(newUsernameValue);
                  setUsernameError('');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputed8274da,
                {
                  borderColor: theme.colors.grayLine,
                  backgroundColor: theme.colors.grayLine,
                },
              ]}
              placeholder={'@username'}
              value={username}
            />
            {/* Username Error */}
            <Text style={[styles.Text117112a1, { color: theme.colors.error }]}>
              {usernameError}
            </Text>
          </View>
          <Spacer top={9} left={0} right={0} bottom={0} />
          {/* Birthday/Gender */}
          <View style={styles.Viewdebd3207}>
            <View style={styles.View181c781b}>
              {/* interMedium1619 */}
              <Text
                style={[styles.Textf764a0d8, { color: theme.colors.lightGrey }]}
              >
                {'Birthday'}
              </Text>

              <View
                style={[
                  styles.View5e4519a9,
                  {
                    borderRadius: 8,
                    backgroundColor: theme.colors.grayLine,
                    borderColor: theme.colors.grayLine,
                  },
                ]}
              >
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
                  type={'underline'}
                />
              </View>
            </View>

            <View style={styles.Viewc992f941}>
              {/* interMedium1619 */}
              <Text
                style={[styles.Textf764a0d8, { color: theme.colors.lightGrey }]}
              >
                {'Gender'}
              </Text>

              <View
                style={[
                  styles.View21ee1ae5,
                  {
                    borderRadius: 8,
                    backgroundColor: theme.colors.grayLine,
                    borderColor: theme.colors.grayLine,
                  },
                ]}
              >
                <Picker
                  onValueChange={newPickerValue => {
                    try {
                      setPickerValue(newPickerValue);
                      setGenderError('');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.Picker45def6f9,
                    { borderColor: theme.colors.grayLine },
                  ]}
                  options={GenderPickerValues}
                  value={pickerValue}
                  placeholder={'Select an option'}
                  leftIconMode={'inset'}
                  type={'solid'}
                  iconSize={24}
                />
              </View>
            </View>
          </View>
          <Spacer top={9} bottom={0} left={0} right={0} />
          {/* Email */}
          <View style={styles.Viewb10b7c6c}>
            {/* interMedium1619 */}
            <Text
              style={[styles.Textf764a0d8, { color: theme.colors.lightGrey }]}
            >
              {'Email'}
            </Text>
            {/* Email Input */}
            <TextInput
              onChangeText={newEmailInputValue => {
                try {
                  setEmailInput(newEmailInputValue);
                  setEmailError('');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputf1148485,
                {
                  borderColor: theme.colors.grayLine,
                  backgroundColor: theme.colors.grayLine,
                },
              ]}
              placeholder={'Enter your email'}
              value={emailInput}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              textContentType={'emailAddress'}
              placeholderTextColor={theme.colors.lightGrey}
            />
            {/* Email Error */}
            <Text style={[styles.Text117112a1, { color: theme.colors.error }]}>
              {emailError}
            </Text>
          </View>
          <Spacer bottom={0} left={0} top={9} right={8} />
          {/* Password Frame */}
          <View>
            {/* interMedium1619 */}
            <Text
              style={[styles.Textf764a0d8, { color: theme.colors.lightGrey }]}
            >
              {'Password'}
            </Text>
            {/* Password Input */}
            <TextInput
              onChangeText={newPasswordInputValue => {
                try {
                  setPasswordInput(newPasswordInputValue);
                  setPasswordError('');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputf1148485,
                {
                  borderColor: theme.colors.grayLine,
                  backgroundColor: theme.colors.grayLine,
                },
              ]}
              placeholder={'New password'}
              value={passwordInput}
              secureTextEntry={true}
              autoCapitalize={'none'}
              textContentType={'password'}
              placeholderTextColor={theme.colors.lightGrey}
            />
            {/* Password Error */}
            <Text style={[styles.Text117112a1, { color: theme.colors.error }]}>
              {passwordError}
            </Text>
            {/* interMedium1619 */}
            <Text
              style={[styles.Text85fe9819, { color: theme.colors.lightGrey }]}
            >
              {null}
            </Text>
          </View>
          <Spacer left={0} right={0} top={9} bottom={0} />
          {/* Sign Up Button */}
          <>
            {isLoading ? null : (
              <ButtonSolid
                onPress={() => {
                  const handler = async () => {
                    try {
                      if (inputValidation()) {
                        return;
                      }
                      const signupResponseJson =
                        await RestAPISupabaseApi.signupPOST(Constants, {
                          signupEmail: emailInput,
                          signupFirstName: firstNameInput,
                          signupLastName: lastNameInput,
                          signupPassword: passwordInput,
                        });
                      setIsLoading(true);
                      const message = signupResponseJson.msg;
                      const accessToken = signupResponseJson.access_token;
                      setGlobalVariableValue({
                        key: 'ERROR_MESSAGE',
                        value: message,
                      });
                      console.log(signupResponseJson);
                      setGlobalVariableValue({
                        key: 'AUTHORIZATION_HEADER',
                        value: 'Bearer ' + accessToken,
                      });
                      const userId = signupResponseJson.user.id;
                      setIsLoading(false);
                      if (!accessToken) {
                        return;
                      }
                      setGlobalVariableValue({
                        key: 'ERROR_MESSAGE',
                        value: '',
                      });
                      await RestAPISupabaseApi.addProfileDataPOST(Constants, {
                        birthday: datePickerValue,
                        email: emailInput,
                        firstName: firstNameInput,
                        gender: pickerValue,
                        lastName: lastNameInput,
                        userId: userId,
                        username: username,
                      });
                      setGlobalVariableValue({
                        key: 'UUID',
                        value: userId,
                      });
                      setGlobalVariableValue({
                        key: 'EMAIL',
                        value: emailInput,
                      });
                      navigation.navigate('OnboardingScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                style={[
                  styles.ButtonSolidbba078e6,
                  { backgroundColor: theme.colors.primary },
                ]}
                title={'Sign up'}
              />
            )}
          </>
          {/* Sign Up Button */}
          <>
            {!isLoading ? null : (
              <ButtonSolid
                onPress={() => {
                  const handler = async () => {
                    try {
                      if (inputValidation()) {
                        return;
                      }
                      const signupResponseJson =
                        await RestAPISupabaseApi.signupPOST(Constants, {
                          signupEmail: emailInput,
                          signupFirstName: firstNameInput,
                          signupLastName: lastNameInput,
                          signupPassword: passwordInput,
                        });
                      const message = signupResponseJson.msg;
                      const accessToken = signupResponseJson.access_token;
                      setGlobalVariableValue({
                        key: 'ERROR_MESSAGE',
                        value: message,
                      });
                      console.log(signupResponseJson);
                      setGlobalVariableValue({
                        key: 'AUTHORIZATION_HEADER',
                        value: 'Bearer ' + accessToken,
                      });
                      const userId = signupResponseJson.user.id;
                      if (!accessToken) {
                        return;
                      }
                      setGlobalVariableValue({
                        key: 'ERROR_MESSAGE',
                        value: '',
                      });
                      await RestAPISupabaseApi.addProfileDataPOST(Constants, {
                        birthday: datePickerValue,
                        email: emailInput,
                        firstName: firstNameInput,
                        gender: pickerValue,
                        lastName: lastNameInput,
                        userId: userId,
                        username: username,
                      });
                      navigation.navigate('OnboardingScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                style={[
                  styles.ButtonSolid50ad4458,
                  { backgroundColor: theme.colors.primary },
                ]}
                disabled={true}
                loading={true}
                title={'Signing up'}
              />
            )}
          </>
          {/* LinkText */}
          <View style={styles.View188f4a1f}>
            <Text style={{ color: theme.colors.strong }}>
              {'Already have an account '}
              <Link
                onPress={() => {
                  try {
                    navigation.navigate('LoginScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[styles.Link4d0ff1a2, { color: theme.colors.primary }]}
                title={'Sign in'}
              />
            </Text>
          </View>
          {/* LinkText */}
          <View style={styles.Viewde0d9014}>
            <Text style={{ color: theme.colors.strong }}>
              {"By clicking Sign up, you are agreeing to City as a School's "}
              <Link
                style={[styles.Link4d0ff1a2, { color: theme.colors.primary }]}
                title={'Terms of Service'}
              />
              <Text style={{ color: theme.colors.strong }}>
                {' including our '}
              </Text>
              <Link
                style={[styles.Link4d0ff1a2, { color: theme.colors.primary }]}
                title={'Code of Conduct'}
              />
              <Text style={{ color: theme.colors.strong }}>{' and our '}</Text>
              <Link
                style={[styles.Link4d0ff1a2, { color: theme.colors.primary }]}
                title={'Privacy Policy.'}
              />
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid50ad4458: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    textAlign: 'center',
  },
  ButtonSolidbba078e6: {
    borderRadius: 8,
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 17,
    paddingBottom: 10,
    paddingLeft: 42,
    paddingRight: 42,
    paddingTop: 10,
    textAlign: 'center',
  },
  KeyboardAwareScrollView2b66e99eContent: {
    flex: 1,
    justifyContent: 'center',
  },
  Link4d0ff1a2: {
    marginLeft: 6,
    marginRight: 6,
  },
  Picker45def6f9: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
  },
  Text117112a1: {
    fontSize: 10,
  },
  Text30767d10: {
    fontFamily: 'Inter_400Regular',
    fontSize: 10,
  },
  Text3b1ff5ae: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 6,
  },
  Text6789b8ec: {
    fontSize: 12,
    marginBottom: 16,
    textAlign: 'center',
  },
  Text7c3d1ba8: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 6,
  },
  Text813c86e8: {
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
    marginTop: 4,
    textAlign: 'center',
  },
  Text85fe9819: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    lineHeight: 19,
    marginBottom: 6,
    marginTop: 6,
  },
  TextInput9b87bd7c: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingTop: 12,
  },
  TextInputed8274da: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Montserrat_400Regular',
    paddingBottom: 12,
    paddingLeft: 16,
    paddingTop: 12,
  },
  TextInputf07c857f: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
  },
  TextInputf1148485: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingTop: 12,
  },
  Textbfc53ec2: {
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 17,
  },
  Textd55eaa29: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24,
    lineHeight: 29,
    textAlign: 'center',
  },
  Texte6e66ce0: {
    alignSelf: 'flex-start',
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 17,
  },
  Textf764a0d8: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 6,
  },
  Textffc38f6d: {
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 17,
  },
  View0ae76333: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  View181c781b: {
    flex: 1,
    marginRight: 16,
  },
  View188f4a1f: {
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  View21ee1ae5: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  View3a80ccbf: {
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'center',
    marginTop: 27,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  View5b003073: {
    flex: 0,
  },
  View5e4519a9: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    paddingLeft: 16,
  },
  View8b2fbf69: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  Viewb10b7c6c: {
    marginTop: 9,
  },
  Viewc992f941: {
    flex: 1,
  },
  Viewde0d9014: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  Viewdebd3207: {
    flexDirection: 'row',
  },
});

export default withTheme(SignupScreen);
