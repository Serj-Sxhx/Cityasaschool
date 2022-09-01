import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  Checkbox,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const UpdatePasswordScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const confimPasswordCheck = confirmPass => {
    if (
      !password.toLowerCase().startsWith(confirmPass.toLowerCase()) &&
      confirmPass.length > 0
    ) {
      setErrorConfirmPassword('Password dont match');
    } else {
      setErrorConfirmPassword('');
    }
  };

  const getAuthToken = data => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    if (data) {
      let primaryString = data.split('=');
      return primaryString[1].split('&')[0];
    }
  };

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      const authToken = getAuthToken(props.route?.params?.accessToken ?? '');
      setGlobalVariableValue({
        key: 'AUTHORIZATION_HEADER',
        value: 'Bearer ' + authToken,
      });
      setAccessToken(authToken);
      setAuthTokenTest(props.route?.params?.accessToken ?? '');
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [accessToken, setAccessToken] = React.useState('');
  const [authTokenTest, setAuthTokenTest] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [checkboxValue2, setCheckboxValue2] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [errorConfirmPassword, setErrorConfirmPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [response, setResponse] = React.useState('');

  return (
    <ScreenContainer style={styles.screen} hasSafeArea={true}>
      {/* topTitleFrame */}
      <View style={styles.View2f41bffa}>
        <IconButton
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          icon={'Entypo/chevron-left'}
          size={24}
          color={theme.colors.dark}
        />
        <Text style={[styles.Textf37ed692, { color: theme.colors.text }]}>
          {'Update Password'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        enableOnAndroid={false}
        enableAutomaticScroll={true}
      >
        {/* formFrame */}
        <View style={styles.View9fa86917}>
          {/* newPasswordFrame */}
          <View style={styles.View88a68eee}>
            {/* Label */}
            <Text
              style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
            >
              {'New Password'}
            </Text>
            {/* inputFrame */}
            <View
              style={[
                styles.View298bd5d3,
                { backgroundColor: theme.colors.grayLine, borderRadius: 6 },
              ]}
            >
              <>
                {checkboxValue ? null : (
                  <TextInput
                    onChangeText={newTextInputValue => {
                      try {
                        setPassword(newTextInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInputba1eac88,
                      {
                        borderColor: theme.colors.grayLine,
                        backgroundColor: theme.colors.grayLine,
                        color: theme.colors.text,
                      },
                    ]}
                    placeholder={' '}
                    value={password}
                    placeholderTextColor={theme.colors.lightGrey}
                    secureTextEntry={true}
                  />
                )}
              </>
              <>
                {!checkboxValue ? null : (
                  <TextInput
                    onChangeText={newTextInputValue => {
                      try {
                        setPassword(newTextInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInputba1eac88,
                      {
                        borderColor: theme.colors.grayLine,
                        backgroundColor: theme.colors.grayLine,
                        color: theme.colors.text,
                      },
                    ]}
                    placeholder={' '}
                    value={password}
                    placeholderTextColor={theme.colors.lightGrey}
                  />
                )}
              </>
            </View>
            {/* showPasswordFrame */}
            <View style={styles.View090856f1}>
              {/* label */}
              <Text
                style={[styles.Textddf454d4, { color: theme.colors.lightGrey }]}
              >
                {'Show password'}
              </Text>
              {/* passwordValue */}
              <Checkbox
                onPress={newPasswordValueValue => {
                  try {
                    setCheckboxValue(newPasswordValueValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                status={checkboxValue}
                checkedIcon={'MaterialCommunityIcons/checkbox-marked'}
                uncheckedIcon={'MaterialCommunityIcons/checkbox-blank-outline'}
                color={theme.colors.text}
                uncheckedColor={theme.colors.text}
                size={18}
              />
            </View>
          </View>
          {/* checkFrame */}
          <View style={styles.View88a68eee}>
            {/* Label */}
            <Text
              style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
            >
              {'Confirm New Password'}
            </Text>
            {/* inputFrame */}
            <View
              style={[
                styles.View298bd5d3,
                { backgroundColor: theme.colors.grayLine, borderRadius: 6 },
              ]}
            >
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setConfirmPassword(newTextInputValue);
                    confimPasswordCheck(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInputba1eac88,
                  {
                    borderColor: theme.colors.grayLine,
                    backgroundColor: theme.colors.grayLine,
                    color: theme.colors.text,
                  },
                ]}
                placeholder={' '}
                value={confirmPassword}
                placeholderTextColor={theme.colors.lightGrey}
                secureTextEntry={true}
              />
            </View>
          </View>

          <Text style={[styles.Textc75d0303, { color: theme.colors.error }]}>
            {errorConfirmPassword}
          </Text>
          {/* Sign Up Button */}
          <ButtonSolid
            onPress={() => {
              const handler = async () => {
                try {
                  const response = await RestAPISupabaseApi.recoverPUT(
                    Constants,
                    { email: Constants['EMAIL'], password: password }
                  );
                  setAccessToken(JSON.stringify(response));
                  navigation.navigate('LoginScreen');
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={[
              styles.ButtonSolidddb156aa,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Save & Return to Login'}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidddb156aa: {
    borderRadius: 8,
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 17,
    marginBottom: 31,
    marginTop: 31,
    textAlign: 'center',
  },
  Text1928d953: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
  },
  TextInputba1eac88: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
    paddingBottom: 9,
    paddingLeft: 12,
    paddingRight: 9,
    paddingTop: 9,
  },
  Textc75d0303: {
    fontFamily: 'Montserrat_400Regular',
  },
  Textddf454d4: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    lineHeight: 17,
  },
  Textf37ed692: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    lineHeight: 24,
    paddingLeft: 12,
  },
  View090856f1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingTop: 8,
  },
  View298bd5d3: {
    marginTop: 6,
    overflow: 'hidden',
  },
  View2f41bffa: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  View88a68eee: {
    marginBottom: 4,
    paddingBottom: 12,
    paddingTop: 12,
  },
  View9fa86917: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  screen: {
    justifyContent: 'space-around',
  },
});

export default withTheme(UpdatePasswordScreen);
