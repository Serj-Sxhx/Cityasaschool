import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import * as CustomCode from '../components.js';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  CircleImage,
  IconButton,
  ScreenContainer,
  Spacer,
  Swiper,
  SwiperItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
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

const PostDetailALCopyScreen = props => {
  const { theme } = props;

  const [commentText, setCommentText] = React.useState('');
  const [sendBlueBtn, setSendBlueBtn] = React.useState(false);
  const [teachMeDisabledView, setTeachMeDisabledView] = React.useState(false);
  const [teachMeEnabledvView, setTeachMeEnabledvView] = React.useState(true);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={true}
    >
      {/* backBar */}
      <View style={styles.View59023f9d}>
        <View style={[styles.View8913dc8a, { borderRadius: 8 }]}>
          <View style={styles.Viewf365b968}>
            <IconButton
              style={styles.IconButton2362b272}
              icon={'AntDesign/left'}
              color={theme.colors.dark}
              size={24}
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

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        <View>
          <RestAPISupabaseApi.FetchGetSInglePostGET method={'GET'} id={4}>
            {({ loading, error, data, refetchGetSInglePost }) => {
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
                  <View style={styles.Viewdf29e2e2}>
                    <Swiper
                      data={(fetchData && fetchData[0])?.imagesArray}
                      listKey={'D9WZbDMS'}
                      keyExtractor={item => item?.id || item?.uuid || item}
                      renderItem={({ item }) => {
                        const swiperData = item;
                        return (
                          <SwiperItem>
                            <ImageBackground
                              style={styles.ImageBackgrounda98db7de}
                              resizeMode={'cover'}
                              source={{
                                uri: `${
                                  (fetchData && fetchData[0])?.imagesArray[0]
                                }`,
                              }}
                            />
                          </SwiperItem>
                        );
                      }}
                      style={styles.Swiperdd390f93}
                      dotColor={theme.colors.light}
                      dotActiveColor={theme.colors.primary}
                      dotsTouchable={true}
                      loop={true}
                    />
                  </View>

                  <View>
                    <View style={styles.View3e53e40e}>
                      <CircleImage
                        source={{
                          uri: `${(fetchData && fetchData[0])?.imagesArray[0]}`,
                        }}
                        size={48}
                      />
                      {/* Name */}
                      <Text
                        style={[
                          styles.Text86d00f47,
                          { color: theme.colors.lightGrey },
                        ]}
                      >
                        {'Arvind L'}
                      </Text>
                      {/* Post Title */}
                      <Text
                        style={[
                          styles.Textffd4bb7e,
                          { color: theme.colors.custom_rgb0_0_0 },
                        ]}
                        textBreakStrategy={'highQuality'}
                        ellipsizeMode={'tail'}
                        allowFontScaling={true}
                        numberOfLines={2}
                      >
                        {(fetchData && fetchData[0])?.title}
                      </Text>
                      {/* Description */}
                      <View style={styles.View4a462c49}>
                        <Text
                          style={[
                            styles.Text091c8f8d,
                            { color: theme.colors.text },
                          ]}
                        >
                          {(fetchData && fetchData[0])?.description}
                        </Text>
                        <IconButton
                          onPress={() => {
                            const handler = async () => {
                              try {
                                await WebBrowser.openBrowserAsync(
                                  `${(fetchData && fetchData[0])?.external_url}`
                                );
                              } catch (err) {
                                console.error(err);
                              }
                            };
                            handler();
                          }}
                          style={styles.IconButton5eed0eda}
                          icon={'Feather/arrow-up-right'}
                          size={18}
                          color={theme.colors.custom_rgb0_0_0}
                        />
                      </View>
                      {/* Learning Resources */}
                      <View style={styles.View91edb4b3}>
                        <Text
                          style={[
                            styles.Text50128c40,
                            { color: theme.colors.text },
                          ]}
                        >
                          {'What learning resources did I use?'}
                        </Text>
                      </View>
                      {/* Tab List Resources */}
                      <View style={styles.View6728d304}>
                        <View style={styles.Viewdebd3207}>
                          <View
                            style={[
                              styles.View2e23c670,
                              {
                                borderRadius: 64,
                                borderColor: theme.colors.lightGrey,
                              },
                            ]}
                          >
                            <CircleImage
                              style={styles.CircleImage84575dc9}
                              size={60}
                              source={{ uri: 'https://picsum.photos/40/40' }}
                            />
                            <Spacer right={2} left={2} />
                            <Text
                              style={[
                                styles.Textde21574d,
                                { color: theme.colors.medium },
                              ]}
                            >
                              {(fetchData && fetchData[0])?.collaborators[0]}
                            </Text>
                          </View>
                          <Spacer top={8} right={6} bottom={8} left={6} />
                        </View>
                      </View>
                      {/* Collaborators */}
                      <View style={styles.View6728d304}>
                        <Text
                          style={[
                            styles.Text8186d1fb,
                            { color: theme.colors.dark },
                          ]}
                        >
                          {'Collaborators'}
                        </Text>
                      </View>
                      {/* Tab List Collaborators */}
                      <View style={styles.View6728d304}>
                        <FlatList
                          data={(fetchData && fetchData[0])?.collaborators}
                          listKey={'y9IAsaAi'}
                          keyExtractor={item => item?.id || item?.uuid || item}
                          renderItem={({ item }) => {
                            const listData = item;
                            return (
                              <View style={styles.Viewdebd3207}>
                                <View
                                  style={[
                                    styles.View2e23c670,
                                    {
                                      borderRadius: 64,
                                      borderColor: theme.colors.lightGrey,
                                    },
                                  ]}
                                >
                                  <CircleImage
                                    style={styles.CircleImage84575dc9}
                                    size={60}
                                    source={{
                                      uri: 'https://picsum.photos/40/40',
                                    }}
                                  />
                                  <Spacer right={2} left={2} />
                                  <Text
                                    style={[
                                      styles.Textde21574d,
                                      { color: theme.colors.medium },
                                    ]}
                                  >
                                    {
                                      (fetchData && fetchData[0])
                                        ?.collaborators[0]
                                    }
                                  </Text>
                                </View>
                                <Spacer top={8} right={6} bottom={8} left={6} />
                              </View>
                            );
                          }}
                          contentContainerStyle={styles.FlatListc992f941Content}
                          numColumns={1}
                        />
                      </View>
                      {/* Mentors */}
                      <View style={styles.View6728d304}>
                        <Text
                          style={[
                            styles.Text8186d1fb,
                            { color: theme.colors.dark },
                          ]}
                        >
                          {'Mentors'}
                        </Text>
                      </View>
                      {/* Tab List Collaborators */}
                      <View style={styles.View6728d304}>
                        <View style={styles.Viewdebd3207}>
                          <View
                            style={[
                              styles.View2e23c670,
                              {
                                borderRadius: 64,
                                borderColor: theme.colors.lightGrey,
                              },
                            ]}
                          >
                            <CircleImage
                              style={styles.CircleImage84575dc9}
                              size={60}
                              source={{ uri: 'https://picsum.photos/40/40' }}
                            />
                            <Spacer right={2} left={2} />
                            <Text
                              style={[
                                styles.Textde21574d,
                                { color: theme.colors.medium },
                              ]}
                            >
                              {(fetchData && fetchData[0])?.collaborators[0]}
                            </Text>
                          </View>
                          <Spacer top={8} right={6} bottom={8} left={6} />
                        </View>
                      </View>
                      {/* Metadata */}
                      <View style={styles.Vieweae2c4cc}>
                        <Utils.CustomCodeErrorBoundary>
                          <CustomCode.ChangeTimeFormat
                            timeString="2022-08-12T12:07:02+00:00"
                            neededInFormat="hh:mm"
                          />{' '}
                        </Utils.CustomCodeErrorBoundary>
                        <Spacer right={8} left={8} top={4} bottom={4} />
                        <View style={styles.Viewdebd3207}>
                          <Utils.CustomCodeErrorBoundary>
                            <CustomCode.ChangeTimeFormat
                              timeString="2012-04-17"
                              neededInFormat="DD/MM/YYYY"
                            />{' '}
                          </Utils.CustomCodeErrorBoundary>
                          <Text style={{ color: theme.colors.strong }}>
                            {' - '}
                          </Text>
                          <Utils.CustomCodeErrorBoundary>
                            <CustomCode.ChangeTimeFormat
                              timeString="2022-08-17"
                              neededInFormat="DD/MM/YYYY"
                            />{' '}
                          </Utils.CustomCodeErrorBoundary>
                        </View>
                        <>
                          {!(fetchData && fetchData[0])?.tags ? null : (
                            <Text
                              style={[
                                styles.Text305d2b38,
                                { color: theme.colors.lightGrey },
                              ]}
                            >
                              {(fetchData && fetchData[0])?.tags}
                            </Text>
                          )}
                        </>
                      </View>
                    </View>
                  </View>
                </>
              );
            }}
          </RestAPISupabaseApi.FetchGetSInglePostGET>
        </View>

        <View style={styles.View4bd73d41}>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setCommentText(newTextInputValue);
                setSendBlueBtn(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.TextInput50046838,
              {
                borderColor: theme.colors.divider,
                backgroundColor: theme.colors.grayLine,
                color: theme.colors.lightGrey,
              },
            ]}
            placeholder={'Reply directly...'}
            value={null}
          />
          {/* Send Blue Button */}
          <>
            {!commentText?.length ? null : (
              <View style={styles.View47a2ccb5}>
                {/* Enabled */}
                <Touchable>
                  <Image
                    style={styles.Image75b153c6}
                    resizeMode={'cover'}
                    source={Images.SendMsg}
                  />
                </Touchable>
              </View>
            )}
          </>
          {/* TeachMe Views */}
          <>
            {!!sendBlueBtn ? null : (
              <View>
                {/* TeachMe disabled View */}
                <>
                  {!teachMeDisabledView ? null : (
                    <View style={styles.View114af9e0}>
                      {/* Disabled */}
                      <Touchable
                        onPress={() => {
                          try {
                            setTeachMeEnabledvView(true);
                            setTeachMeDisabledView(false);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <Image
                          style={styles.Image16bc1575}
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
                {/* TeachMe enabled View */}
                <>
                  {!teachMeEnabledvView ? null : (
                    <View style={styles.View114af9e0}>
                      {/* Enabled */}
                      <Touchable
                        onPress={() => {
                          try {
                            setTeachMeEnabledvView(false);
                            setTeachMeDisabledView(true);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <Image
                          style={styles.Imageeb5bcc4b}
                          resizeMode={'cover'}
                          source={Images.TeachMe}
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
              </View>
            )}
          </>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  CircleImage84575dc9: {
    height: 32,
    width: 32,
  },
  FlatListc992f941Content: {
    flex: 1,
  },
  IconButton2362b272: {
    marginTop: 10,
  },
  IconButton5eed0eda: {
    left: 5,
  },
  Image16bc1575: {
    height: 28,
    marginLeft: 10,
    marginTop: 0,
    opacity: 1,
    width: 28,
  },
  Image75b153c6: {
    height: 40,
    opacity: 1,
    width: 41.6,
  },
  ImageBackgrounda98db7de: {
    height: '100%',
    width: '100%',
  },
  Imageeb5bcc4b: {
    height: 24,
    marginLeft: 14,
    marginTop: 0,
    opacity: 1,
    width: 24,
  },
  Swiperdd390f93: {
    height: 300,
    width: '100%',
  },
  Text091c8f8d: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 16.94,
    textAlign: 'left',
  },
  Text1801c1d6: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14.32,
  },
  Text305d2b38: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14.32,
    marginTop: 4,
  },
  Text37818285: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14.32,
    marginTop: 4,
  },
  Text50128c40: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    lineHeight: 16.94,
  },
  Text7394986c: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14.32,
    textAlign: 'center',
  },
  Text8186d1fb: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    lineHeight: 16.94,
  },
  Text86d00f47: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14.32,
    marginTop: 12,
  },
  TextInput50046838: {
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
  Textde21574d: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  Texte3e27a3c: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14.32,
    marginTop: 4,
    textAlign: 'center',
  },
  Textffd4bb7e: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    lineHeight: 16.94,
    marginTop: 32,
  },
  View114af9e0: {
    alignItems: 'center',
    height: 42,
    opacity: 1,
    width: 52,
  },
  View2e23c670: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
  },
  View3e53e40e: {
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  View47a2ccb5: {
    alignItems: 'center',
    height: 40,
    opacity: 1,
    width: 41.6,
  },
  View4a462c49: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
    paddingBottom: 8,
    paddingRight: 26,
    paddingTop: 8,
  },
  View4bd73d41: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16.5,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 11.5,
  },
  View59023f9d: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  View6728d304: {
    marginTop: 16,
  },
  View8913dc8a: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 6,
  },
  View91edb4b3: {
    marginTop: 8,
  },
  Viewdebd3207: {
    flexDirection: 'row',
  },
  Viewdf29e2e2: {
    width: '100%',
  },
  Vieweae2c4cc: {
    marginTop: 16,
    paddingTop: 12,
  },
  Viewf365b968: {
    flex: 1,
    height: 44,
    width: 44,
  },
});

export default withTheme(PostDetailALCopyScreen);
