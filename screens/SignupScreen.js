import React from 'react';
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

const SignupScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      if (false) {
        return;
      }
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.KeyboardAwareScrollViewXVContent}
      >
        <View>
          <Text style={styles.TextTb}>{'Sign up'}</Text>

          <Text style={[styles.Textd7, { color: theme.colors.strong }]}>
            {"it's quick an easy."}
          </Text>
        </View>

        <View style={styles.ViewiM}>
          <Text style={[styles.TextK3, { color: theme.colors.error }]}>
            {null}
          </Text>
          <TextInput
            style={[
              styles.TextInputHv,
              { borderColor: theme.colors.lightInverse },
            ]}
            placeholder={'First Name'}
            value={null}
            autoCapitalize={'words'}
            placeholderTextColor={theme.colors.lightInverse}
          />
          <Spacer top={12} right={8} bottom={12} left={8} />
          <TextInput
            style={[
              styles.TextInputoa,
              { borderColor: theme.colors.lightInverse },
            ]}
            placeholder={'Last Name'}
            value={null}
            autoCapitalize={'words'}
            placeholderTextColor={theme.colors.lightInverse}
          />
          <Spacer top={12} right={8} bottom={12} left={8} />
          <TextInput
            style={[
              styles.TextInputsw,
              { borderColor: theme.colors.lightInverse },
            ]}
            placeholder={'Your@email.com'}
            value={null}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            textContentType={'emailAddress'}
            placeholderTextColor={theme.colors.lightInverse}
          />
          <Spacer top={12} right={8} bottom={8} left={8} />
          <TextInput
            style={[
              styles.TextInputtx,
              { borderColor: theme.colors.lightInverse },
            ]}
            placeholder={'New password'}
            value={null}
            secureTextEntry={true}
            autoCapitalize={'none'}
            textContentType={'password'}
            placeholderTextColor={theme.colors.lightInverse}
          />
          <Spacer top={24} right={8} bottom={24} left={8} />
          <ButtonSolid
            style={[
              styles.ButtonSolid_7S,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Sign up'}
          />
          <Spacer top={16} right={8} bottom={16} left={8} />
          <View style={styles.View_1b}>
            <Text style={[styles.TextRN, { color: theme.colors.strong }]}>
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
    fontSize: 36,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Textd7: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '400',
    marginTop: 4,
  },
  TextK3: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
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
    marginTop: 24,
  },
  KeyboardAwareScrollViewXVContent: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default withTheme(SignupScreen);
