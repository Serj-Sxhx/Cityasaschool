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
        style={styles.ImageBackground5818f357}
        source={Images._3185947}
        resizeMode={'cover'}
      >
        {/* welcome hero section */}
        <View style={styles.View39912261}>
          <Image
            style={styles.Image4a4d6259}
            resizeMode={'cover'}
            source={Images.LogoOnboardingCAS}
          />
          <Text style={[styles.Text3cdf0409, { color: theme.colors.dark }]}>
            {'CITY AS A SCHOOL'}
          </Text>

          <Text style={[styles.Text2d3a30c5, { color: theme.colors.dark }]}>
            {
              'Build projects within hybrid communities, track your achievements in a customisable portfolio, and accelerate your career.'
            }
          </Text>
        </View>
        {/* call to actions section */}
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
              styles.ButtonSolid2d5f6a36,
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
              styles.ButtonOutline963af03b,
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
  ButtonOutline963af03b: {
    borderRadius: 8,
    borderWidth: 1,
    fontFamily: 'Inter_700Bold',
    marginTop: 16,
    textAlign: 'center',
  },
  ButtonSolid2d5f6a36: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  Image4a4d6259: {
    height: 64,
    width: 64,
  },
  ImageBackground5818f357: {
    height: '100%',
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
  Text2d3a30c5: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 16,
    textAlign: 'center',
  },
  Text3cdf0409: {
    fontFamily: 'Questrial_400Regular',
    fontSize: 36,
    marginBottom: 8,
    marginTop: 12,
    textAlign: 'center',
  },
  View39912261: {
    alignItems: 'center',
  },
});

export default withTheme(WelcomeScreen);
