import React from 'react';
import Images from '../config/Images';
import {
  ButtonOutline,
  ButtonSolid,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <ImageBackground
        style={styles.ImageBackgroundSQ}
        source={Images.IphoneBackgroundWhite}
        resizeMode={'cover'}
      >
        <View style={styles.Viewd6}>
          <Image
            style={styles.Imageg5}
            source={Images.LogoOnboardingCAS}
            resizeMode={'cover'}
          />
          <Text style={[styles.TextAJ, { color: theme.colors.dark }]}>
            {'CITY AS A SCHOOL'}
          </Text>

          <Text style={[styles.Text_83, { color: theme.colors.dark }]}>
            {
              'Build projects within hybrid communities, track your achievements in a customisable portfolio, and accelerate your career.'
            }
          </Text>
        </View>

        <View>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('SignupScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidUq,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Sign Up'}
          />
          <ButtonOutline
            onPress={() => {
              try {
                navigation.navigate('LoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonOutlineN4,
              {
                borderColor: theme.colors.primary,
                color: theme.colors.primary,
              },
            ]}
            title={'Log In'}
          />
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imageg5: {
    width: 64,
    height: 64,
  },
  TextAJ: {
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'Questrial_400Regular',
    marginBottom: 8,
    marginTop: 12,
  },
  Text_83: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  Viewd6: {
    alignItems: 'center',
  },
  ButtonSolidUq: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonOutlineN4: {
    borderRadius: 8,
    fontFamily: 'Inter_700Bold',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 16,
  },
  ImageBackgroundSQ: {
    height: '100%',
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(WelcomeScreen);
