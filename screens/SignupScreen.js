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
      setPasswordError('Password does not meet the criteria');
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
  const [textInputValue, setTextInputValue] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');

  return (
    <ScreenContainer>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.KeyboardAwareScrollViewXVContent}
      >
        <View style={styles.ViewT8}>
          <Text
            style={[styles.TextTb, { color: theme.colors.custom_rgb0_0_0 }]}
          >
            {'Sign up'}
          </Text>

          <Text style={[styles.Textd7, { color: theme.colors.dark }]}>
            {"it's quick an easy."}
          </Text>
        </View>

        <View style={styles.ViewiM}>
          <Text style={[styles.TextK3, { color: theme.colors.error }]}>
            {Constants['ERROR_MESSAGE']}
          </Text>

          <View style={styles.Viewlv}>
            <View style={styles.View_2k}>
              <Text style={[styles.TextQk, { color: theme.colors.lightGrey }]}>
                {'First Name'}
              </Text>
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
                  styles.TextInputHv,
                  {
                    borderColor: theme.colors.lightGrey,
                    backgroundColor: theme.colors.divider,
                  },
                ]}
                placeholder={'First Name'}
                value={firstNameInput}
                autoCapitalize={'words'}
                placeholderTextColor={theme.colors.lightGrey}
              />
              <Text style={[styles.TextZ5, { color: theme.colors.error }]}>
                {firstNameError}
              </Text>
            </View>

            <View style={styles.ViewpQ}>
              <Text style={[styles.Textl6, { color: theme.colors.lightGrey }]}>
                {'Last Name'}
              </Text>
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
                  styles.TextInputoa,
                  {
                    borderColor: theme.colors.lightGrey,
                    backgroundColor: theme.colors.divider,
                  },
                ]}
                placeholder={'Last Name'}
                value={lastNameInput}
                autoCapitalize={'words'}
                placeholderTextColor={theme.colors.lightGrey}
              />
              <Text style={[styles.TextyL, { color: theme.colors.error }]}>
                {lastNameError}
              </Text>
            </View>
          </View>
          <Spacer top={12} right={8} bottom={12} left={8} />
          <View>
            <Text style={[styles.TextbS, { color: theme.colors.lightGrey }]}>
              {'Username*'}
            </Text>
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
                styles.TextInputDC,
                {
                  borderColor: theme.colors.strong,
                  backgroundColor: theme.colors.divider,
                },
              ]}
              placeholder={'@username'}
              value={username}
            />
            <Text style={[styles.Textci, { color: theme.colors.error }]}>
              {usernameError}
            </Text>
          </View>
          <Spacer top={12} right={8} bottom={12} left={8} />
          <View style={styles.ViewtH}>
            <View style={styles.Viewmr}>
              <Text style={[styles.Text_0m, { color: theme.colors.lightGrey }]}>
                {'Birthday'}
              </Text>

              <View
                style={[
                  styles.Viewc8,
                  {
                    backgroundColor: theme.colors.divider,
                    borderRadius: 8,
                    borderColor: theme.colors.lightGrey,
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

            <View style={styles.ViewBF}>
              <Text style={[styles.Textbc, { color: theme.colors.lightGrey }]}>
                {'Gender'}
              </Text>

              <View
                style={[
                  styles.ViewRF,
                  {
                    backgroundColor: theme.colors.divider,
                    borderRadius: 8,
                    borderColor: theme.colors.lightGrey,
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
                  options={GenderPickerValues}
                  value={pickerValue}
                  placeholder={'Select an option'}
                  leftIconMode={'inset'}
                  type={'solid'}
                  iconSize={24}
                />
              </View>

              <Text style={[styles.TextwA, { color: theme.colors.error }]}>
                {genderError}
              </Text>
            </View>
          </View>
          <Spacer top={12} right={8} bottom={12} left={8} />
          <View>
            <Text style={[styles.TextnT, { color: theme.colors.lightGrey }]}>
              {'Email'}
            </Text>
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
                styles.TextInputsw,
                {
                  borderColor: theme.colors.lightGrey,
                  backgroundColor: theme.colors.divider,
                },
              ]}
              placeholder={'Enter your email'}
              value={emailInput}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              textContentType={'emailAddress'}
              placeholderTextColor={theme.colors.lightGrey}
            />
            <Text style={[styles.TextAn, { color: theme.colors.error }]}>
              {emailError}
            </Text>
          </View>
          <Spacer top={12} right={8} bottom={8} left={8} />
          <View>
            <Text style={[styles.Text_4a, { color: theme.colors.lightGrey }]}>
              {'Password'}
            </Text>
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
                styles.TextInputtx,
                {
                  borderColor: theme.colors.lightGrey,
                  backgroundColor: theme.colors.divider,
                },
              ]}
              placeholder={'New password'}
              value={passwordInput}
              secureTextEntry={true}
              autoCapitalize={'none'}
              textContentType={'password'}
              placeholderTextColor={theme.colors.lightGrey}
            />
            <Text style={[styles.TextbO, { color: theme.colors.error }]}>
              {passwordError}
            </Text>
          </View>
          <Spacer top={24} right={8} bottom={24} left={8} />
          <>
            {isLoading ? null : (
              <ButtonSolid
                onPress={async () => {
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
                    setIsLoading(false);
                    navigation.navigate('OnboardingScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.ButtonSolid_7S,
                  { backgroundColor: theme.colors.primary },
                ]}
                title={'Sign up'}
              />
            )}
          </>
          <>
            {!isLoading ? null : (
              <ButtonSolid
                onPress={async () => {
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
                }}
                style={[
                  styles.ButtonSolidCz,
                  { backgroundColor: theme.colors.primary },
                ]}
                title={'Signing up'}
                disabled={true}
                loading={true}
              />
            )}
          </>
          <Spacer top={16} right={8} bottom={16} left={8} />
          <View style={styles.View_1b}>
            <Text style={[styles.TextRN, { color: theme.colors.dark }]}>
              {'Have an account?'}
            </Text>
            <Spacer top={8} right={2} bottom={8} left={2} />
            <Link
              onPress={() => {
                try {
                  navigation.navigate('LoginScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={{ color: theme.colors.primary }}
              title={'Sign in.'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextTb: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    lineHeight: 29,
  },
  Textd7: {
    textAlign: 'center',
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
    lineHeight: 17,
  },
  ViewT8: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    flexGrow: 0,
    flexShrink: 0,
  },
  TextK3: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
  },
  TextQk: {
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 6,
    fontSize: 16,
    lineHeight: 19,
  },
  TextInputHv: {
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
  TextZ5: {
    fontSize: 10,
  },
  View_2k: {
    flex: 1,
    marginRight: 24,
  },
  Textl6: {
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 6,
  },
  TextInputoa: {
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
  TextyL: {
    fontSize: 10,
  },
  ViewpQ: {
    flex: 1,
  },
  Viewlv: {
    flexDirection: 'row',
  },
  TextbS: {
    marginBottom: 6,
  },
  TextInputDC: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    fontFamily: 'Montserrat_400Regular',
  },
  Textci: {
    fontSize: 10,
  },
  Text_0m: {
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 6,
  },
  Viewc8: {
    paddingLeft: 8,
    paddingRight: 4,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Viewmr: {
    flex: 1,
    marginRight: 24,
  },
  Textbc: {
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 6,
  },
  ViewRF: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  TextwA: {
    fontSize: 10,
  },
  ViewBF: {
    flex: 1,
  },
  ViewtH: {
    flexDirection: 'row',
  },
  TextnT: {
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 6,
  },
  TextInputsw: {
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
  TextAn: {
    fontSize: 10,
  },
  Text_4a: {
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 6,
  },
  TextInputtx: {
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
  TextbO: {
    fontSize: 10,
  },
  ButtonSolid_7S: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  ButtonSolidCz: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  TextRN: {
    marginRight: 2,
  },
  View_1b: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ViewiM: {
    paddingLeft: 36,
    paddingRight: 36,
    flex: 1,
  },
  KeyboardAwareScrollViewXVContent: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default withTheme(SignupScreen);
