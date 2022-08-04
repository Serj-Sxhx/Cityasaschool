import React from 'react';
import * as ExamplePropertiesApi from '../apis/ExamplePropertiesApi.js';
import {
  CircleImage,
  IconButton,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const PostDetailScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={true}
    >
      <ExamplePropertiesApi.FetchIndividualPropertyGET method={'GET'} id={1}>
        {({ loading, error, data, refetchIndividualProperty }) => {
          const fetchData = data;
          if (!fetchData || loading) {
            return <ActivityIndicator />;
          }

          if (error) {
            return (
              <Text style={{ textAlign: 'center' }}>
                There was a problem fetching this data
              </Text>
            );
          }

          return (
            <>
              <View style={styles.ViewvM}>
                <ImageBackground
                  style={styles.ImageBackground_1b}
                  source={{ uri: `${fetchData?.image_url}` }}
                  resizeMode={'cover'}
                >
                  <View style={styles.Viewlj}>
                    <View style={[styles.Viewl1, { borderRadius: 8 }]}>
                      <View style={styles.Viewjs}>
                        <IconButton
                          icon={'AntDesign/left'}
                          size={24}
                          color={theme.colors.dark}
                        />
                      </View>

                      <View>
                        <IconButton
                          icon={'Feather/share'}
                          size={24}
                          color={theme.colors.dark}
                        />
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View>
                <View style={styles.Viewmy}>
                  <CircleImage
                    source={{
                      uri: 'https://static.draftbit.com/images/placeholder-image.png',
                    }}
                    size={60}
                  />
                  <Text
                    style={[styles.TextvN, { color: theme.colors.lightGrey }]}
                  >
                    {'[legal name]'}
                  </Text>

                  <Text
                    style={[styles.TexttG, { color: theme.colors.dark }]}
                    textBreakStrategy={'highQuality'}
                    ellipsizeMode={'tail'}
                    allowFontScaling={true}
                    numberOfLines={2}
                  >
                    {fetchData?.name}
                  </Text>
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View>
                    <Text
                      style={[styles.TextHi, { color: theme.colors.medium }]}
                    >
                      {fetchData?.description}
                    </Text>
                    <Spacer top={12} right={8} bottom={12} left={8} />
                  </View>

                  <View>
                    <Text style={[styles.TextC8, { color: theme.colors.dark }]}>
                      {'What learning resources did I use?'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                  </View>

                  <View>
                    <View style={styles.View_6k}>
                      <View
                        style={[
                          styles.ViewVr,
                          {
                            borderRadius: 64,
                            borderColor: theme.colors.lightGrey,
                          },
                        ]}
                      >
                        <CircleImage
                          style={styles.CircleImagegh}
                          source={{
                            uri: 'https://static.draftbit.com/images/placeholder-image.png',
                          }}
                          size={60}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.Text_37,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.beds}
                          {' beds'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text style={[styles.TextVS, { color: theme.colors.dark }]}>
                      {'Collaborators'}
                    </Text>
                  </View>
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View>
                    <View style={styles.ViewIa}>
                      <View
                        style={[
                          styles.Viewnb,
                          {
                            borderRadius: 64,
                            borderColor: theme.colors.lightGrey,
                          },
                        ]}
                      >
                        <CircleImage
                          style={styles.CircleImagerN}
                          source={{
                            uri: 'https://static.draftbit.com/images/placeholder-image.png',
                          }}
                          size={60}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.TextvT,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.beds}
                          {' beds'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text style={[styles.TextPD, { color: theme.colors.dark }]}>
                      {'Mentors'}
                    </Text>
                  </View>
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View>
                    <View style={styles.Viewd1}>
                      <View
                        style={[
                          styles.ViewXA,
                          {
                            borderRadius: 64,
                            borderColor: theme.colors.lightGrey,
                          },
                        ]}
                      >
                        <CircleImage
                          style={styles.CircleImagedI}
                          source={{
                            uri: 'https://static.draftbit.com/images/placeholder-image.png',
                          }}
                          size={60}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.TextlG,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.beds}
                          {' beds'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text style={{ color: theme.colors.lightGrey }}>
                      {'08:24'}
                    </Text>

                    <Text style={{ color: theme.colors.lightGrey }}>
                      {'04/09/2021 - 08/10/2021'}
                    </Text>

                    <Text style={{ color: theme.colors.lightGrey }}>
                      {'#this #that'}
                    </Text>
                  </View>
                </View>
              </View>
            </>
          );
        }}
      </ExamplePropertiesApi.FetchIndividualPropertyGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Viewjs: {
    flex: 1,
  },
  Viewl1: {
    paddingLeft: 0,
    paddingBottom: 6,
    paddingRight: 0,
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewlj: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  ImageBackground_1b: {
    width: '100%',
    height: '100%',
  },
  ViewvM: {
    width: '100%',
    height: 380,
  },
  TextvN: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    marginTop: 8,
  },
  TexttG: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 16,
    marginTop: 4,
  },
  TextHi: {
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'left',
    fontSize: 14,
  },
  TextC8: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 16,
  },
  CircleImagegh: {
    width: 32,
    height: 32,
  },
  Text_37: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  ViewVr: {
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingLeft: 2,
    paddingTop: 2,
    paddingRight: 2,
    paddingBottom: 2,
    flexWrap: 'wrap',
  },
  View_6k: {
    flexDirection: 'row',
  },
  TextVS: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 16,
  },
  CircleImagerN: {
    width: 32,
    height: 32,
  },
  TextvT: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  Viewnb: {
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingLeft: 2,
    paddingTop: 2,
    paddingRight: 2,
    paddingBottom: 2,
    flexWrap: 'wrap',
  },
  ViewIa: {
    flexDirection: 'row',
  },
  TextPD: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 16,
  },
  CircleImagedI: {
    width: 32,
    height: 32,
  },
  TextlG: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  ViewXA: {
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingLeft: 2,
    paddingTop: 2,
    paddingRight: 2,
    paddingBottom: 2,
    flexWrap: 'wrap',
  },
  Viewd1: {
    flexDirection: 'row',
  },
  Viewmy: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
});

export default withTheme(PostDetailScreen);
