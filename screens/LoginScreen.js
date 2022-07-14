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

const LoginScreen = props => {
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
        contentContainerStyle={styles.KeyboardAwareScrollViewpDContent}
      >
        <View style={styles.ViewHF}>
          <Text style={styles.Textnt}>{'Welcome Back!'}</Text>

          <Text style={styles.TextWL}>
            {'Sign in to your account to continue'}
          </Text>
        </View>

        <View style={styles.ViewHr}>
          <Text style={[styles.TextCH, { color: theme.colors.error }]}>
            {null}
          </Text>
          <TextInput
            style={[
              styles.TextInputmO,
              { borderColor: theme.colors.lightInverse },
            ]}
            placeholder={'Email'}
            value={null}
            keyboardType={'email-address'}
            textContentType={'emailAddress'}
            autoCapitalize={'none'}
            placeholderTextColor={theme.colors.lightInverse}
          />
          <Spacer top={12} right={8} bottom={12} left={8} />
          <TextInput
            style={[
              styles.TextInputtj,
              { borderColor: theme.colors.lightInverse },
            ]}
            value={null}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={theme.colors.lightInverse}
          />
          <Spacer top={24} right={8} bottom={24} left={8} />
          <ButtonSolid
            style={[
              styles.ButtonSolidiS,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Sign in'}
          />
          <Spacer top={16} right={8} bottom={16} left={8} />
          <View style={styles.ViewoB}>
            <Text>{'New User?'}</Text>
            <Spacer top={8} right={2} bottom={8} left={2} />
            <Link
              onPress={() => {
                try {
                  navigation.navigate('SignupScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={{ color: theme.colors.primary }}
              title={'Sign up!'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textnt: {
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextWL: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
    marginTop: 4,
  },
  ViewHF: {
    alignItems: 'center',
  },
  TextCH: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
  },
  TextInputmO: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '400',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  TextInputtj: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '400',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ButtonSolidiS: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  ViewoB: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'center',
  },
  ViewHr: {
    paddingLeft: 36,
    paddingRight: 36,
    marginTop: 24,
  },
  KeyboardAwareScrollViewpDContent: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default withTheme(LoginScreen);
