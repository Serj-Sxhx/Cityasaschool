import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import * as CustomCode from '../components.js';
import Images from '../config/Images';
import relativeTime from '../custom/relativeTime';
import * as Utils from '../utils';
import {
  CircleImage,
  Divider,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const DiscoverALCopyScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [replyText, setReplyText] = React.useState('');
  const [teachMe_disabled_view, setTeachMe_disabled_view] =
    React.useState(false);
  const [teachMe_enabled_view, setTeachMe_enabled_view] = React.useState(true);

  return (
    <ScreenContainer
      style={[styles.screen, { backgroundColor: theme.colors.background }]}
      scrollable={true}
      hasTopSafeArea={true}
      hasBottomSafeArea={true}
      hasSafeArea={true}
    >
      {/* Heading */}
      <Text style={[styles.Text17c13671, { color: theme.colors.primary }]}>
        {"What's new in the community"}
      </Text>
      {/* Feeds */}
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        <View>
          <RestAPISupabaseApi.FetchDiscoverPostsConnectedGET method={'GET'}>
            {({ loading, error, data, refetchDiscoverPostsConnected }) => {
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
                <FlatList
                  data={fetchData}
                  listKey={'MPDzsmm3'}
                  keyExtractor={item => item?.id || item?.uuid || item}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <>
                        <View
                          style={[
                            styles.Viewcc73352b,
                            {
                              borderRadius: 12,
                              borderColor: theme.colors.custom_rgb188_190_193,
                              backgroundColor: theme.colors.surface,
                            },
                          ]}
                        >
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('PostDetailALCopyScreen');
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <View>
                              <ImageBackground
                                style={[
                                  styles.ImageBackgroundee9fafd6,
                                  { borderRadius: theme.roundness },
                                ]}
                                resizeMode={'cover'}
                                source={{
                                  uri: `${
                                    listData?.imagesArray &&
                                    listData?.imagesArray[0]
                                  }`,
                                }}
                              >
                                <CircleImage
                                  style={styles.CircleImagefde59cf5}
                                  source={{
                                    uri: `${listData?.profiles?.profile_picture}`,
                                  }}
                                  size={60}
                                />
                              </ImageBackground>
                            </View>

                            <View style={styles.Viewaec7c36c}>
                              <View>
                                <Text
                                  style={[
                                    styles.Texta1070ab9,
                                    { color: theme.colors.lightGrey },
                                  ]}
                                >
                                  {listData?.profiles?.username}
                                </Text>

                                <Text
                                  style={[
                                    styles.Text061c0ac8,
                                    { color: theme.colors.dark },
                                  ]}
                                  textBreakStrategy={'highQuality'}
                                  ellipsizeMode={'tail'}
                                  allowFontScaling={true}
                                  numberOfLines={2}
                                >
                                  {listData?.title}
                                </Text>

                                <Text
                                  style={[
                                    styles.Text4f259772,
                                    { color: theme.colors.text },
                                  ]}
                                  numberOfLines={10}
                                  ellipsizeMode={'tail'}
                                >
                                  {listData?.description}
                                </Text>

                                <View style={styles.Viewdaace307}>
                                  <Text
                                    style={[
                                      styles.Text75305095,
                                      { color: theme.colors.lightGrey },
                                    ]}
                                  >
                                    {relativeTime(listData?.created_at)}
                                  </Text>
                                  <>
                                    {!listData?.tags ? null : (
                                      <Text
                                        style={[
                                          styles.Textff512f08,
                                          { color: theme.colors.lightGrey },
                                        ]}
                                      >
                                        {JSON.stringify(listData?.tags)}
                                      </Text>
                                    )}
                                  </>
                                </View>
                              </View>
                            </View>
                          </Touchable>

                          <View style={styles.View118ea423}>
                            <TextInput
                              onChangeText={newTextInputValue => {
                                try {
                                  setReplyText(newTextInputValue);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={[
                                styles.TextInput02f84a4b,
                                {
                                  color: theme.colors.lightGrey,
                                  borderColor: theme.colors.divider,
                                  backgroundColor: theme.colors.grayLine,
                                },
                              ]}
                              placeholder={'Reply...'}
                              value={replyText}
                              returnKeyLabel={'Send'}
                            />
                            {/* TeachMe enabled View */}
                            <>
                              {!teachMe_enabled_view ? null : (
                                <View style={styles.View114af9e0}>
                                  {/* Enabled */}
                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setTeachMe_enabled_view(false);
                                        setTeachMe_disabled_view(true);
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <Image
                                      style={styles.Imageeb5bcc4b}
                                      source={Images.TeachMe}
                                      resizeMode={'cover'}
                                    />
                                    <Text
                                      style={[
                                        styles.Texte3e27a3c,
                                        { color: theme.colors.lightGrey },
                                      ]}
                                    >
                                      {'Teach me!'}
                                    </Text>
                                  </Touchable>
                                </View>
                              )}
                            </>
                            {/* TeachMe disabled View */}
                            <>
                              {!teachMe_disabled_view ? null : (
                                <View style={styles.View114af9e0}>
                                  {/* Disabled */}
                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setTeachMe_enabled_view(true);
                                        setTeachMe_disabled_view(false);
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <Image
                                      style={styles.Imagea8d940bc}
                                      source={Images.TeachMePressed}
                                      resizeMode={'center'}
                                    />
                                    <Text
                                      style={[
                                        styles.Text7394986c,
                                        { color: theme.colors.lightGrey },
                                      ]}
                                    >
                                      {'Teach me!'}
                                    </Text>
                                  </Touchable>
                                </View>
                              )}
                            </>
                          </View>
                        </View>
                        <Spacer top={12} right={8} bottom={12} left={8} />
                      </>
                    );
                  }}
                  contentContainerStyle={styles.FlatList78e9a74bContent}
                />
              );
            }}
          </RestAPISupabaseApi.FetchDiscoverPostsConnectedGET>
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.View98f70bdb}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('AddPostALCopyScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchablea98db7de}
        >
          <Image
            style={styles.Image8dc796a9}
            resizeMode={'cover'}
            source={Images.FloatingAddbtn}
          />
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  CircleImagefde59cf5: {
    height: 48,
    marginBottom: 8,
    marginLeft: 14,
    marginRight: 8,
    marginTop: 16,
    width: 48,
  },
  Divider22627dc6: {
    height: 1,
    marginBottom: 12,
    marginTop: 12,
  },
  FlatList78e9a74bContent: {
    marginTop: 15,
    paddingBottom: 16,
    paddingLeft: 15,
    paddingRight: 15,
  },
  Image8dc796a9: {
    height: '100%',
    width: '100%',
  },
  ImageBackgroundee9fafd6: {
    height: 150,
    width: '100%',
  },
  Imagea8d940bc: {
    height: 28,
    marginLeft: 12,
    marginTop: 0,
    opacity: 1,
    width: 28,
  },
  Imageeb5bcc4b: {
    height: 24,
    marginLeft: 14,
    marginTop: 0,
    opacity: 1,
    width: 24,
  },
  Text061c0ac8: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    lineHeight: 16.94,
    marginTop: 11,
  },
  Text17c13671: {
    fontFamily: 'Inter_700Bold',
    fontSize: 22,
    lineHeight: 29.4,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 40,
  },
  Text4f259772: {
    fontFamily: 'Inter_400Regular',
    lineHeight: 16.94,
    marginTop: 16,
  },
  Text7394986c: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14.32,
    textAlign: 'center',
  },
  Text75305095: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14.32,
  },
  TextInput02f84a4b: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 12,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Montserrat_400Regular',
    height: 41,
    lineHeight: 17.07,
    marginRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 8,
    paddingTop: 12,
    width: '100%',
  },
  Texta1070ab9: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14.32,
    marginBottom: 4,
  },
  Texte3e27a3c: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14.32,
    marginTop: 4,
    textAlign: 'center',
  },
  Textff512f08: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14.32,
    marginTop: 4,
  },
  Touchablea98db7de: {
    height: '100%',
    width: '100%',
  },
  View114af9e0: {
    alignItems: 'center',
    height: 42,
    opacity: 1,
    width: 52,
  },
  View118ea423: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16.5,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 11.5,
  },
  View98f70bdb: {
    bottom: 17,
    height: 60,
    left: 15,
    position: 'absolute',
    width: 60,
    zIndex: 2,
  },
  Viewaec7c36c: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 16,
  },
  Viewcc73352b: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    marginBottom: 20,
    overflow: 'hidden',
  },
  Viewdaace307: {
    alignItems: 'flex-start',
    marginTop: 16,
  },
  screen: {
    height: '100%',
  },
});

export default withTheme(DiscoverALCopyScreen);
