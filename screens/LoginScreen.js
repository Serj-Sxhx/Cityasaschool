import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  Link,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = props => {
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
      setEmailInput('');
      setPasswordInput('');
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [emailError, setEmailError] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [passwordInput, setPasswordInput] = React.useState('');

  return (
    <ScreenContainer hasTopSafeArea={true} hasBottomSafeArea={true}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.KeyboardAwareScrollViewc992f941Content}
        keyboardShouldPersistTaps={'always'}
        enableResetScrollToCoords={false}
      >
        {/* Header */}
        <View style={styles.View7429e0a8}>
          {/* Title */}
          <Text
            style={[
              styles.Textd55eaa29,
              { color: theme.colors.custom_rgb0_0_0 },
            ]}
          >
            {'Welcome Back'}
          </Text>
          {/* Subtitle */}
          <Text style={[styles.Text8995d1e9, { color: theme.colors.dark }]}>
            {'Sign in to your account to continue'}
          </Text>
        </View>
        {/* Login Form */}
        <View style={styles.View27605352}>
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
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.TextInputa832909b,
              {
                borderColor: theme.colors.grayLine,
                backgroundColor: theme.colors.grayLine,
                color: theme.colors.custom_rgb0_0_0,
              },
            ]}
            placeholder={'Email'}
            value={emailInput}
            keyboardType={'email-address'}
            textContentType={'emailAddress'}
            autoCapitalize={'none'}
            placeholderTextColor={theme.colors.lightGrey}
          />
          <Spacer bottom={0} left={0} right={0} top={9} />
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
                setErrorMessage('');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.TextInputfb5f262d,
              {
                borderColor: theme.colors.grayLine,
                backgroundColor: theme.colors.grayLine,
                color: theme.colors.custom_rgb0_0_0,
              },
            ]}
            value={passwordInput}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={theme.colors.lightGrey}
            autoCapitalize={'none'}
          />
          <View style={styles.View556986ee}>
            {/* Sign Up Link */}
            <Link
              onPress={() => {
                try {
                  navigation.navigate('RequestPasswordLinkScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.Linkaab578ad, { color: theme.colors.primary }]}
              title={'Forgot your password?'}
            />
          </View>
          {/* Error Message */}
          <Text style={[styles.Text25855833, { color: theme.colors.error }]}>
            {errorMessage}
          </Text>
          {/* Sign In Button */}
          <ButtonSolid
            onPress={() => {
              const handler = async () => {
                try {
                  const loginResponseJson = await RestAPISupabaseApi.loginPOST(
                    Constants,
                    { signupEmail: emailInput, signupPassword: passwordInput }
                  );
                  const accessToken = loginResponseJson['access_token'];
                  const message = loginResponseJson['error_description'];
                  setErrorMessage(message);
                  setGlobalVariableValue({
                    key: 'AUTHORIZATION_HEADER',
                    value: 'Bearer ' + accessToken,
                  });
                  if (!accessToken) {
                    return;
                  }
                  setErrorMessage('');
                  const uuid = setGlobalVariableValue({
                    key: 'UUID',
                    value: loginResponseJson?.user.id,
                  });
                  setGlobalVariableValue({
                    key: 'EMAIL',
                    value: emailInput,
                  });
                  console.log(uuid);
                  navigation.navigate('ProfileScreen');
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={[
              styles.ButtonSolidb6829bbd,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Sign in'}
          />
          <View style={styles.View8bb6a2bc}>
            <Text>{'New User?'}</Text>
            <Spacer top={8} right={2} bottom={8} left={2} />
            {/* Sign Up Link */}
            <Link
              onPress={() => {
                try {
                  navigation.navigate('SignupScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.Linkc2fb8789, { color: theme.colors.primary }]}
              title={'Sign up!'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidb6829bbd: {
    borderRadius: 8,
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 17,
    marginBottom: 40,
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: 'center',
  },
  KeyboardAwareScrollViewc992f941Content: {
    flex: 1,
  },
  Linkaab578ad: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    lineHeight: 14,
  },
  Linkc2fb8789: {
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 17,
  },
  Text25855833: {
    fontSize: 14,
    marginBottom: 6,
    marginTop: 40,
    textAlign: 'center',
  },
  Text8995d1e9: {
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
    marginTop: 4,
    textAlign: 'center',
  },
  TextInputa832909b: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingTop: 12,
  },
  TextInputfb5f262d: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingTop: 12,
  },
  Textd55eaa29: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24,
    lineHeight: 29,
    textAlign: 'center',
  },
  Textf764a0d8: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 6,
  },
  View27605352: {
    marginTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
  },
  View556986ee: {
    flexDirection: 'row',
    marginTop: 12,
  },
  View7429e0a8: {
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'center',
    marginTop: 27,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  View8bb6a2bc: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
});

export default withTheme(LoginScreen);
