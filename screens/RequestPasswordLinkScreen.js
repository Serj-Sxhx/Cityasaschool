import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RequestPasswordLinkScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      setShowMessage(false);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [errorMessage, setErrorMessage] = React.useState('');
  const [showMessage, setShowMessage] = React.useState(false);
  const [textAreaValue, setTextAreaValue] = React.useState('');

  return (
    <ScreenContainer style={styles.screen} hasSafeArea={true}>
      {/* topTitleFrame */}
      <View style={styles.View2f41bffa}>
        <IconButton
          onPress={() => {
            try {
              navigation.navigate('LoginScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          icon={'Entypo/chevron-left'}
          size={24}
          color={theme.colors.dark}
        />
        <Text style={[styles.Textf37ed692, { color: theme.colors.text }]}>
          {'Reset Password'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        enableOnAndroid={false}
        enableAutomaticScroll={true}
      >
        {/* formFrame */}
        <View style={styles.View9fa86917}>
          {/* newPasswordFrame */}
          <View style={styles.Viewe7e28cc3}>
            {/* Label */}
            <Text
              style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
            >
              {'Enter your registered email address'}
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
                    setTextAreaValue(newTextInputValue);
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
                value={textAreaValue}
                placeholderTextColor={theme.colors.lightGrey}
              />
            </View>
          </View>
          {/* Error */}
          <Text style={[styles.Textc75d0303, { color: theme.colors.error }]}>
            {errorMessage}
          </Text>
          {/* Sign Up Button */}
          <ButtonSolid
            onPress={() => {
              const handler = async () => {
                try {
                  const apiResponse =
                    await RestAPISupabaseApi.resetPasswordPOST(Constants, {
                      email: textAreaValue,
                    });

                  const valueM63O9LAz = apiResponse?.msg;
                  setErrorMessage(valueM63O9LAz);
                  const errorMessageResult = valueM63O9LAz;
                  if (errorMessageResult) {
                    return;
                  }
                  setShowMessage(true);
                  setGlobalVariableValue({
                    key: 'EMAIL',
                    value: textAreaValue,
                  });
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
            title={'Get Email Link'}
          />
          {/* Error */}
          <>
            {!showMessage ? null : (
              <Text
                style={[styles.Textc75d0303, { color: theme.colors.error }]}
              >
                {'You would receive an email with the password reset link. '}
              </Text>
            )}
          </>
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
  Textf37ed692: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    lineHeight: 24,
    paddingLeft: 12,
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
  View9fa86917: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Viewe7e28cc3: {
    marginBottom: 16,
    paddingBottom: 12,
    paddingTop: 12,
  },
  screen: {
    justifyContent: 'space-around',
  },
});

export default withTheme(RequestPasswordLinkScreen);
