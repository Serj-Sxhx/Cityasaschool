import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  ScreenContainer,
  Spacer,
  Swiper,
  SwiperItem,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const OnboardingScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Swiper
        style={styles.SwiperRk}
        dotColor={theme.colors.light}
        dotActiveColor={theme.colors.medium}
        dotsTouchable={true}
        nextTitleColor={theme.colors.primary}
        nextTitle={'Continue'}
        prevTitle={'Back'}
        prevTitleColor={theme.colors.secondary}
      >
        <SwiperItem style={styles.SwiperItemCg}>
          <View style={styles.Viewkn}>
            <Image
              style={styles.ImagegO}
              source={Images.LogoOnboardingCAS}
              resizeMode={'cover'}
            />
            <Image
              style={styles.Imagey7}
              source={
                Images.CasualLife3dSearchBarWithMicroscopeAndMiniaturePlanetsOnTop
              }
              resizeMode={'contain'}
            />
            <Text style={[styles.Text_4V, { color: theme.colors.dark }]}>
              {
                'Discover in-person and online opportunities to learn new skills'
              }
            </Text>
            <Spacer top={12} right={0} bottom={12} left={0} />
            <Text style={[styles.TextwY, { color: theme.colors.medium }]}>
              {
                'Get connected to new places, people and tools to pursue your passions.'
              }
            </Text>
          </View>
        </SwiperItem>

        <SwiperItem style={styles.SwiperItemzm}>
          <View style={styles.View_5B}>
            <Image
              style={styles.ImageWQ}
              source={Images.LogoOnboardingCAS}
              resizeMode={'cover'}
            />
            <Image
              style={styles.ImageVr}
              source={
                Images.CasualLife3dYoungWomanImaginingThingsWhileReadingEBook
              }
              resizeMode={'contain'}
            />
            <Text style={[styles.TextPf, { color: theme.colors.dark }]}>
              {'Create your own learning pathway'}
            </Text>
            <Spacer top={12} right={0} bottom={12} left={0} />
            <Text style={[styles.TextD5, { color: theme.colors.medium }]}>
              {
                'Choose your adventure and learn at your own pace. Customise your schedule with self-study, in-person and online sessions to reach your own goals.'
              }
            </Text>
          </View>
        </SwiperItem>

        <SwiperItem style={styles.SwiperItem_21}>
          <View style={styles.ViewGK}>
            <Image
              style={styles.ImagefY}
              source={Images.LogoOnboardingCAS}
              resizeMode={'cover'}
            />
            <Image
              style={styles.Imagera}
              source={Images.CasualLife3dBoyInSuperheroCapeRunning}
              resizeMode={'contain'}
            />
            <Text style={[styles.TextNd, { color: theme.colors.dark }]}>
              {'Solve real world problems within communities'}
            </Text>
            <Spacer top={12} right={0} bottom={12} left={0} />
            <Text style={[styles.TexttF, { color: theme.colors.medium }]}>
              {
                "Connect what you're learning with your 'why'. Solve real-world problems with peers. Apply your knowledge in projects and earn badges."
              }
            </Text>
          </View>
        </SwiperItem>

        <SwiperItem style={styles.SwiperItemzU}>
          <View style={styles.ViewYE}>
            <Image
              style={styles.Imagebn}
              source={Images.LogoOnboardingCAS}
              resizeMode={'cover'}
            />
            <Image
              style={styles.ImageSy}
              source={
                Images.Business3dCasualLife3dWomanInSuitNextToSmartphoneScreenShowingNotifications
              }
              resizeMode={'contain'}
            />
            <Text style={[styles.Textks, { color: theme.colors.dark }]}>
              {
                'Build credibility, collect all your acheivements in your portfolio'
              }
            </Text>
            <Spacer top={12} right={0} bottom={12} left={0} />
            <Text style={[styles.Text_6p, { color: theme.colors.medium }]}>
              {
                "CVs and resumes can't communicate the details or depth of your knowledge. Learn, reflect and build a portfolio that showcases your skills."
              }
            </Text>
            <Spacer top={12} right={0} bottom={12} left={0} />
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('CompleteProfileScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidFu,
                { backgroundColor: theme.colors.primary },
              ]}
              title={'Complete My Profile'}
            />
          </View>
        </SwiperItem>
      </Swiper>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImagegO: {
    width: 64,
    height: 64,
  },
  Imagey7: {
    width: '100%',
    height: '50%',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 30,
    marginTop: 30,
  },
  Text_4V: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  TextwY: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: 16,
    textAlign: 'center',
  },
  Viewkn: {
    alignItems: 'center',
    marginTop: 0,
    height: '100%',
    marginBottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  SwiperItemCg: {
    marginBottom: 60,
    marginTop: 30,
  },
  ImageWQ: {
    width: 64,
    height: 64,
  },
  ImageVr: {
    width: '100%',
    height: '50%',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 30,
    marginTop: 30,
  },
  TextPf: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  TextD5: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: 16,
    textAlign: 'center',
  },
  View_5B: {
    alignItems: 'center',
    marginTop: 0,
    height: '100%',
    marginBottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  SwiperItemzm: {
    marginBottom: 60,
    marginTop: 30,
  },
  ImagefY: {
    width: 64,
    height: 64,
  },
  Imagera: {
    width: '100%',
    height: '50%',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 30,
    marginTop: 30,
  },
  TextNd: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  TexttF: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: 16,
    textAlign: 'center',
  },
  ViewGK: {
    alignItems: 'center',
    marginTop: 0,
    height: '100%',
    marginBottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  SwiperItem_21: {
    marginBottom: 60,
    marginTop: 30,
  },
  Imagebn: {
    width: 64,
    height: 64,
  },
  ImageSy: {
    width: '100%',
    height: '50%',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 30,
    marginTop: 30,
  },
  Textks: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  Text_6p: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: 16,
    textAlign: 'center',
  },
  ButtonSolidFu: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
  },
  ViewYE: {
    alignItems: 'center',
    marginTop: 0,
    height: '100%',
    marginBottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  SwiperItemzU: {
    marginBottom: 60,
    marginTop: 30,
  },
  SwiperRk: {
    height: '100%',
    width: '100%',
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 20,
  },
});

export default withTheme(OnboardingScreen);
