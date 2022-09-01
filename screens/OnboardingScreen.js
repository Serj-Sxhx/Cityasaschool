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
        style={styles.Swiper812343c9}
        dotColor={theme.colors.background}
        nextTitleColor={theme.colors.primary}
        prevTitleColor={theme.colors.secondary}
        dotsTouchable={false}
      >
        {/* Swiper Item 1 */}
        <SwiperItem style={styles.SwiperItema8f186c3}>
          <View style={styles.View73210bea}>
            <Image
              style={styles.Image4a4d6259}
              resizeMode={'cover'}
              source={Images.LogoOnboardingCAS}
            />
            <Image
              style={styles.Image9d60286b}
              resizeMode={'contain'}
              source={
                Images.CasualLife3dSearchBarWithMicroscopeAndMiniaturePlanetsOnTop
              }
            />
            <Text style={[styles.Textd89ba4c2, { color: theme.colors.dark }]}>
              {
                'Discover in-person and online opportunities to learn new skills'
              }
            </Text>
            <Spacer left={0} bottom={8} top={8} right={0} />
            <Text
              style={[styles.Text8540924c, { color: theme.colors.lightGrey }]}
            >
              {
                'Get connected to new places, people and tools to pursue your passions.'
              }
            </Text>
            {/* progressIndicatorFrame */}
            <View style={styles.View050cdbef}>
              {/* indicatorActive */}
              <View
                style={[
                  styles.Viewe09cfcf3,
                  { backgroundColor: theme.colors.lightGrey, borderRadius: 64 },
                ]}
              />
              {/* indicatorUnactive */}
              <View
                style={[
                  styles.View71733889,
                  {
                    borderRadius: 64,
                    backgroundColor: theme.colors.custom_rgb217_217_217,
                  },
                ]}
              />
              {/* indicatorUnactive */}
              <View
                style={[
                  styles.Viewfdbfa451,
                  {
                    backgroundColor: theme.colors.custom_rgb217_217_217,
                    borderRadius: 64,
                  },
                ]}
              />
              {/* indicatorUnactive */}
              <View
                style={[
                  styles.Viewfdbfa451,
                  {
                    backgroundColor: theme.colors.custom_rgb217_217_217,
                    borderRadius: 64,
                  },
                ]}
              />
            </View>
          </View>
        </SwiperItem>
        {/* Swiper Item 2 */}
        <SwiperItem style={styles.SwiperItema8f186c3}>
          <View style={styles.Viewe91b4abc}>
            <Image
              style={styles.Image4a4d6259}
              source={Images.LogoOnboardingCAS}
              resizeMode={'cover'}
            />
            <Image
              style={styles.Imaged2a2d489}
              resizeMode={'contain'}
              source={
                Images.CasualLife3dYoungWomanImaginingThingsWhileReadingEBook
              }
            />
            <Text style={[styles.Textd89ba4c2, { color: theme.colors.dark }]}>
              {'Create your own learning pathway'}
            </Text>
            <Spacer right={0} top={8} bottom={8} left={0} />
            <Text
              style={[styles.Text701b9364, { color: theme.colors.lightGrey }]}
            >
              {
                'Choose your adventure and learn at your own pace. Customise your schedule with self-study, in-person and online sessions to reach your own goals.'
              }
            </Text>
            {/* progressIndicatorFrame */}
            <View style={styles.View050cdbef}>
              {/* indicatorUnactive */}
              <View
                style={[
                  styles.Viewfdbfa451,
                  {
                    backgroundColor: theme.colors.custom_rgb217_217_217,
                    borderRadius: 64,
                  },
                ]}
              />
              {/* indicatorActive */}
              <View
                style={[
                  styles.View1981dca8,
                  { backgroundColor: theme.colors.lightGrey, borderRadius: 64 },
                ]}
              />
              {/* indicatorUnactive */}
              <View
                style={[
                  styles.Viewfdbfa451,
                  {
                    backgroundColor: theme.colors.custom_rgb217_217_217,
                    borderRadius: 64,
                  },
                ]}
              />
              {/* indicatorUnactive */}
              <View
                style={[
                  styles.Viewfdbfa451,
                  {
                    backgroundColor: theme.colors.custom_rgb217_217_217,
                    borderRadius: 64,
                  },
                ]}
              />
            </View>
          </View>
        </SwiperItem>
        {/* Swiper Item 3 */}
        <SwiperItem style={styles.SwiperItema8f186c3}>
          <View style={styles.Viewe91b4abc}>
            <Image
              style={styles.Image4a4d6259}
              source={Images.LogoOnboardingCAS}
              resizeMode={'cover'}
            />
            <Image
              style={styles.Imaged2a2d489}
              resizeMode={'contain'}
              source={Images.CasualLife3dBoyInSuperheroCapeRunning}
            />
            <Text style={[styles.Text7d8ecd14, { color: theme.colors.dark }]}>
              {'Solve real world problems within communities'}
            </Text>
            <Spacer right={0} left={0} top={8} bottom={8} />
            <Text
              style={[styles.Text701b9364, { color: theme.colors.lightGrey }]}
            >
              {
                "Connect what you're learning with your 'why'. Solve real-world problems with peers. Apply your knowledge in projects and earn badges."
              }
            </Text>
            {/* progressIndicatorFrame */}
            <View style={styles.View050cdbef}>
              {/* indicatorUnactive */}
              <View
                style={[
                  styles.Viewfdbfa451,
                  {
                    backgroundColor: theme.colors.custom_rgb217_217_217,
                    borderRadius: 64,
                  },
                ]}
              />
              {/* indicatorUnactive */}
              <View
                style={[
                  styles.Viewfdbfa451,
                  {
                    backgroundColor: theme.colors.custom_rgb217_217_217,
                    borderRadius: 64,
                  },
                ]}
              />
              {/* indicatorActive */}
              <View
                style={[
                  styles.View1981dca8,
                  { backgroundColor: theme.colors.lightGrey, borderRadius: 64 },
                ]}
              />
              {/* indicatorUnactive */}
              <View
                style={[
                  styles.Viewfdbfa451,
                  {
                    backgroundColor: theme.colors.custom_rgb217_217_217,
                    borderRadius: 64,
                  },
                ]}
              />
            </View>
          </View>
        </SwiperItem>
        {/* Swiper Item 4 */}
        <SwiperItem style={styles.SwiperItema8f186c3}>
          <View style={styles.View3838ff66}>
            <Image
              style={styles.Image4a4d6259}
              source={Images.LogoOnboardingCAS}
              resizeMode={'cover'}
            />
            <Image
              style={styles.Image542ff57f}
              resizeMode={'contain'}
              source={
                Images.Business3dCasualLife3dWomanInSuitNextToSmartphoneScreenShowingNotifications
              }
            />
            <Text style={[styles.Textb1597f0c, { color: theme.colors.dark }]}>
              {
                'Build credibility, collect all your acheivements in your portfolio'
              }
            </Text>
            <Spacer right={0} left={0} bottom={8} top={8} />
            <Text
              style={[styles.Text701b9364, { color: theme.colors.lightGrey }]}
            >
              {
                "CVs and resumes can't communicate the details or depth of your knowledge. Learn, reflect and build a portfolio that showcases your skills."
              }
            </Text>
            <Spacer top={12} right={0} bottom={12} left={0} />
            {/* progressIndicatorFrame */}
            <View style={styles.View050cdbef}>
              {/* indicatorUnactive */}
              <View
                style={[
                  styles.Viewfdbfa451,
                  {
                    backgroundColor: theme.colors.custom_rgb217_217_217,
                    borderRadius: 64,
                  },
                ]}
              />
              {/* indicatorUnactive */}
              <View
                style={[
                  styles.Viewfdbfa451,
                  {
                    backgroundColor: theme.colors.custom_rgb217_217_217,
                    borderRadius: 64,
                  },
                ]}
              />
              {/* indicatorUnactive */}
              <View
                style={[
                  styles.Viewfdbfa451,
                  {
                    backgroundColor: theme.colors.custom_rgb217_217_217,
                    borderRadius: 64,
                  },
                ]}
              />
              {/* indicatorActive */}
              <View
                style={[
                  styles.View1981dca8,
                  { backgroundColor: theme.colors.lightGrey, borderRadius: 64 },
                ]}
              />
            </View>
            {/* buttonFrame */}
            <View style={styles.View60c02e0a}>
              {/* continueSwiperButton */}
              <ButtonSolid
                onPress={() => {
                  try {
                    navigation.navigate('CompleteProfileScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.ButtonSolid01fbd9dc,
                  { backgroundColor: theme.colors.secondary },
                ]}
                title={'Continue'}
              />
            </View>
          </View>
        </SwiperItem>
      </Swiper>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid01fbd9dc: {
    borderRadius: 8,
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 17,
    paddingBottom: 10,
    paddingLeft: 42,
    paddingRight: 42,
    paddingTop: 10,
    textAlign: 'center',
  },
  ButtonSolid3ad503ba: {
    borderRadius: 8,
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 17,
    paddingBottom: 10,
    paddingLeft: 42,
    paddingRight: 42,
    paddingTop: 10,
    textAlign: 'center',
  },
  Image4a4d6259: {
    height: 64,
    width: 64,
  },
  Image542ff57f: {
    height: 300,
    marginBottom: 16,
    marginTop: 16,
    width: 360,
  },
  Image9d60286b: {
    height: 300,
    marginBottom: 16,
    marginTop: 16,
    width: 360,
  },
  Imaged2a2d489: {
    height: 300,
    marginBottom: 16,
    marginTop: 16,
    width: 360,
  },
  Swiper812343c9: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 20,
    height: '100%',
    width: '100%',
  },
  SwiperItema8f186c3: {
    marginBottom: 60,
    marginTop: 30,
  },
  Text701b9364: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center',
  },
  Text7d8ecd14: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center',
  },
  Text8540924c: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center',
  },
  Textb1597f0c: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center',
  },
  Textd89ba4c2: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center',
  },
  View050cdbef: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 90,
    marginRight: 90,
    marginTop: 36,
  },
  View1981dca8: {
    height: 4,
    marginLeft: 6,
    width: 50,
  },
  View3838ff66: {
    alignItems: 'center',
    flex: 1,
    marginBottom: 0,
    marginTop: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  View60c02e0a: {
    alignSelf: 'stretch',
    marginTop: 16,
  },
  View71733889: {
    height: 4,
    marginLeft: 6,
    width: 25,
  },
  View73210bea: {
    alignItems: 'center',
    height: '100%',
    marginBottom: 0,
    marginTop: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  Viewe09cfcf3: {
    height: 4,
    width: 50,
  },
  Viewe91b4abc: {
    alignItems: 'center',
    height: '100%',
    marginBottom: 0,
    marginTop: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  Viewfdbfa451: {
    height: 4,
    marginLeft: 6,
    width: 25,
  },
});

export default withTheme(OnboardingScreen);
