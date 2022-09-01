import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonSolid,
  CircleImage,
  FAB,
  Icon,
  IconButton,
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
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const ProfileScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const filterPosts = data => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    if (data) {
      return data?.filter(item =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  };

  const { theme } = props;
  const { navigation } = props;

  const restAPISupabaseDeletePostDELETE =
    RestAPISupabaseApi.useDeletePostDELETE();

  const [searchValue, setSearchValue] = React.useState('');
  const [showList, setShowList] = React.useState(true);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      {/* topbar */}
      <View>
        <View style={styles.View4aef8123}>
          <Touchable></Touchable>
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('SettingsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            icon={'Ionicons/ios-settings-outline'}
            size={24}
            color={theme.colors.dark}
          />
        </View>
      </View>
      {/* fetchFrame */}
      <View>
        <RestAPISupabaseApi.FetchGetProfileDataGET uuid={Constants['UUID']}>
          {({ loading, error, data, refetchGetProfileData }) => {
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
                listKey={'3D8o6nvj'}
                keyExtractor={item => item?.id || item?.uuid || item}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      {/* profileHeader */}
                      <View style={styles.View72ed2600}>
                        {/* profilPicture */}
                        <View>
                          <View>
                            <CircleImage
                              size={80}
                              source={{ uri: `${listData?.profile_picture}` }}
                            />
                            <View
                              style={[
                                styles.Viewbe9258c0,
                                {
                                  borderColor: theme.colors.secondary,
                                  borderRadius: 64,
                                  backgroundColor:
                                    theme.colors.custom_rgb255_255_255,
                                },
                              ]}
                            >
                              <Icon
                                name={'Ionicons/ios-people-circle-sharp'}
                                size={24}
                              />
                              <Spacer top={8} right={4} bottom={8} left={4} />
                              <Text style={{ color: theme.colors.dark }}>
                                {'667'}
                              </Text>
                            </View>
                          </View>
                        </View>
                        {/* details */}
                        <View>
                          <Text
                            style={[
                              styles.Textdd21953b,
                              { color: theme.colors.dark },
                            ]}
                          >
                            {listData?.firstName} {listData?.lastName}
                          </Text>
                          {/* username */}
                          <Text
                            style={[
                              styles.Text0d4a572b,
                              { color: theme.colors.medium },
                            ]}
                          >
                            {'@'}
                            {listData?.username}
                          </Text>
                        </View>
                        <Spacer top={8} right={32} bottom={8} left={32} />
                        {/* Inbox */}
                        <View></View>
                      </View>
                    </>
                  );
                }}
                numColumns={1}
              />
            );
          }}
        </RestAPISupabaseApi.FetchGetProfileDataGET>
      </View>
      {/* tabsFrame */}
      <View style={styles.Viewa4d83a6c}>
        <View
          style={[
            styles.View50ca9e9d,
            {
              backgroundColor: theme.colors.divider,
              borderRadius: 0,
              borderColor: theme.colors.lightest,
            },
          ]}
        >
          <View style={styles.View47eccd08}>
            {/* LeftButtonActive */}
            <>
              {!showList ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolid3758cf77,
                    {
                      backgroundColor: theme.colors.surface,
                      color: theme.colors.primary,
                      borderColor: theme.colors.primary,
                    },
                  ]}
                  title={'History'}
                />
              )}
            </>
            {/* LeftButtonInactive */}
            <>
              {showList ? null : (
                <ButtonSolid
                  onPress={() => {
                    try {
                      setShowList(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolidf27900c1,
                    {
                      backgroundColor: theme.colors.surface,
                      color: theme.colors.medium,
                    },
                  ]}
                  title={'History'}
                />
              )}
            </>
          </View>

          <View style={styles.Viewc992f941}>
            {/* RightButtonActive */}
            <>
              {showList ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolid90931bef,
                    {
                      backgroundColor: theme.colors.surface,
                      color: theme.colors.primary,
                      borderColor: theme.colors.primary,
                    },
                  ]}
                  title={'Schedule'}
                />
              )}
            </>
            {/* RightButtonInactive */}
            <>
              {!showList ? null : (
                <ButtonSolid
                  onPress={() => {
                    try {
                      setShowList(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolidf27900c1,
                    {
                      backgroundColor: theme.colors.surface,
                      color: theme.colors.medium,
                    },
                  ]}
                  title={'Schedule'}
                />
              )}
            </>
          </View>
        </View>
      </View>
      {/* scheduleFetchFrame */}
      <>
        {showList ? null : (
          <View style={styles.View0419a0dc}>
            {/* emptyStateFrame Fr Schedule */}
            <View style={styles.View7309e7d0}>
              {/* emptyStateImageFrame */}
              <View style={styles.View53a0f027}>
                {/* emtpyStateCalendarImage */}
                <Image
                  style={styles.Imaged96d9dd6}
                  resizeMode={'cover'}
                  source={Images.ScreenShot20220523At17091}
                />
              </View>
              {/* headerFrame */}
              <View style={styles.View53a0f027}>
                {/* header */}
                <Text
                  style={[styles.Text3f205912, { color: theme.colors.text }]}
                >
                  {'Your schedule is empty'}
                </Text>
              </View>
              {/* messageFrame */}
              <View style={styles.View93b0ad28}>
                {/* message */}
                <Text
                  style={[styles.Textda3c37fb, { color: theme.colors.text }]}
                >
                  {
                    'Build your own learning schedule by searching for experiences on the discover or experiences page.'
                  }
                </Text>
              </View>
              {/* call To Action Frame */}
              <View></View>
            </View>
          </View>
        )}
      </>
      {/* historyFrameFetch */}
      <>
        {!showList ? null : (
          <View style={styles.Viewc992f941}>
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={true}
              keyboardShouldPersistTaps={'never'}
            >
              <RestAPISupabaseApi.FetchPortfolioPostsGET
                uuid={Constants['UUID']}
              >
                {({ loading, error, data, refetchPortfolioPosts }) => {
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
                      {/* emptyStateFrame Fr History */}
                      <>
                        {fetchData?.length ? null : (
                          <View style={styles.Viewe8c798da}>
                            {/* emptyStateImageFrame */}
                            <View style={styles.View53a0f027}>
                              {/* emtpyStateCalendarImage */}
                              <Image
                                style={styles.Imagee913b3f5}
                                source={Images.ScreenShot20220523At17091}
                                resizeMode={'cover'}
                              />
                            </View>
                            {/* headerFrame */}
                            <View style={styles.View53a0f027}>
                              {/* header */}
                              <Text
                                style={[
                                  styles.Text13a218dc,
                                  { color: theme.colors.text },
                                ]}
                              >
                                {'Your Portfolio is Empty'}
                              </Text>
                            </View>
                            {/* messageFrame */}
                            <View style={styles.View93b0ad28}>
                              {/* message */}
                              <Text
                                style={[
                                  styles.Text98bb4944,
                                  { color: theme.colors.text },
                                ]}
                              >
                                {'Add a post using the blue button'}
                              </Text>
                            </View>
                          </View>
                        )}
                      </>
                      {/* searchComponentFrame */}
                      <>
                        {!fetchData?.length ? null : (
                          <View>
                            {/* searchFrame */}
                            <View style={styles.View34d1476f}>
                              {/* leftSideFrame */}
                              <View
                                style={[
                                  styles.Viewd06b4b12,
                                  {
                                    borderColor:
                                      theme.colors.custom_rgb223_223_223,
                                    borderTopLeftRadius: 8,
                                    borderBottomLeftRadius: 8,
                                  },
                                ]}
                              >
                                {/* iconFrame */}
                                <View style={styles.View22ee9013}>
                                  <Icon
                                    name={'Ionicons/md-search'}
                                    size={18}
                                    color={theme.colors.custom_rgb17_17_17}
                                  />
                                </View>
                              </View>
                              {/* inputFrame */}
                              <View
                                style={[
                                  styles.Viewe792511e,
                                  {
                                    borderColor:
                                      theme.colors.custom_rgb223_223_223,
                                  },
                                ]}
                              >
                                <TextInput
                                  onChangeText={newTextInputValue => {
                                    try {
                                      setSearchValue(newTextInputValue);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  style={[
                                    styles.TextInput6d05c604,
                                    {
                                      borderColor:
                                        theme.colors.custom_rgb255_255_255,
                                    },
                                  ]}
                                  placeholder={'Search'}
                                  value={searchValue}
                                  placeholderTextColor={
                                    theme.colors.custom_rgb189_189_189
                                  }
                                />
                              </View>
                              {/* rightSideTouchable */}
                              <Touchable>
                                {/* rightSideFrame */}
                                <View
                                  style={[
                                    styles.Viewd9a93ac3,
                                    {
                                      borderColor:
                                        theme.colors.custom_rgb223_223_223,
                                      borderBottomRightRadius: 8,
                                      borderTopRightRadius: 8,
                                    },
                                  ]}
                                >
                                  {/* iconFrame */}
                                  <View style={styles.View22ee9013}>
                                    <Icon
                                      name={'Ionicons/options'}
                                      size={18}
                                      color={theme.colors.custom_rgb17_17_17}
                                    />
                                  </View>
                                </View>
                              </Touchable>
                            </View>
                          </View>
                        )}
                      </>
                      <FlatList
                        data={filterPosts(fetchData)}
                        listKey={'OQfT3L7w'}
                        keyExtractor={item => item?.id || item?.uuid || item}
                        renderItem={({ item }) => {
                          const listData = item;
                          return (
                            <>
                              {/* historyContentFrame */}
                              <View style={styles.Viewbfdca2d3}>
                                {/* cardFrame */}
                                <View
                                  style={[
                                    styles.View95decc74,
                                    { borderColor: theme.colors.grayLine },
                                  ]}
                                >
                                  {/* dateFrame */}
                                  <View style={styles.View7d6a39b7}>
                                    {/* dataPoint */}
                                    <Text
                                      style={[
                                        styles.Textbd4d9b91,
                                        {
                                          color:
                                            theme.colors.custom_rgb188_190_193,
                                        },
                                      ]}
                                    >
                                      {listData?.to_date}
                                    </Text>
                                    {/* iconFrame */}
                                    <View style={styles.View22ee9013}>
                                      <>
                                        {!listData?.is_public ? null : (
                                          <Icon
                                            name={'Ionicons/ios-eye'}
                                            size={18}
                                            color={
                                              theme.colors.custom_rgb0_128_0
                                            }
                                          />
                                        )}
                                      </>
                                      <>
                                        {listData?.is_public ? null : (
                                          <Icon
                                            name={'Ionicons/ios-eye'}
                                            size={18}
                                            color={
                                              theme.colors.custom_rgb102_102_102
                                            }
                                          />
                                        )}
                                      </>
                                    </View>
                                  </View>
                                  {/* titleFrame */}
                                  <View style={styles.View6d8bb63f}>
                                    <View style={styles.View83909238}>
                                      {/* dataPoint */}
                                      <Text
                                        style={[
                                          styles.Text28e56f67,
                                          { color: theme.colors.text },
                                        ]}
                                      >
                                        {listData?.title}
                                      </Text>
                                    </View>
                                    {/* iconFrame */}
                                    <View style={styles.View22ee9013}>
                                      <IconButton
                                        onPress={() => {
                                          try {
                                            navigation.navigate(
                                              'EditPostScreen',
                                              { postID: listData?.id }
                                            );
                                          } catch (err) {
                                            console.error(err);
                                          }
                                        }}
                                        icon={'Foundation/page-edit'}
                                        color={theme.colors.custom_rgb0_0_0}
                                        size={24}
                                      />
                                    </View>
                                  </View>
                                  {/* richTextFrame */}
                                  <View style={styles.Viewbfdca2d3}>
                                    <Text
                                      style={[
                                        styles.Text37028932,
                                        { color: theme.colors.lightGrey },
                                      ]}
                                    >
                                      {listData?.description}
                                    </Text>
                                  </View>
                                  {/* readImagesFrame */}
                                  <View style={styles.Viewdebd3207}>
                                    {/* ImagesList */}
                                    <FlatList
                                      data={listData?.imagesArray}
                                      listKey={'mct1oIsg'}
                                      keyExtractor={item =>
                                        item?.id || item?.uuid || item
                                      }
                                      renderItem={({ item }) => {
                                        const imagesListData = item;
                                        return (
                                          <>
                                            {/* recordFrame */}
                                            <View style={styles.View4a298bf0}>
                                              <Image
                                                style={styles.Imageef3e7edc}
                                                resizeMode={'cover'}
                                                source={{
                                                  uri: `${imagesListData}`,
                                                }}
                                              />
                                            </View>
                                          </>
                                        );
                                      }}
                                      contentContainerStyle={
                                        styles.FlatListc992f941Content
                                      }
                                      numColumns={1}
                                      horizontal={true}
                                    />
                                  </View>
                                  {/* deleteTouchable */}
                                  <Touchable
                                    onPress={() => {
                                      const handler = async () => {
                                        try {
                                          await restAPISupabaseDeletePostDELETE.mutateAsync(
                                            { id: listData?.id }
                                          );
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      };
                                      handler();
                                    }}
                                  >
                                    <Text
                                      style={[
                                        styles.Text896c1675,
                                        { color: theme.colors.lightGrey },
                                      ]}
                                    >
                                      {'Delete'}
                                    </Text>
                                  </Touchable>
                                </View>
                              </View>
                            </>
                          );
                        }}
                        contentContainerStyle={styles.FlatList60fd33c9Content}
                        numColumns={1}
                      />
                    </>
                  );
                }}
              </RestAPISupabaseApi.FetchPortfolioPostsGET>
            </KeyboardAwareScrollView>
          </View>
        )}
      </>
      <>
        {!showList ? null : (
          <FAB
            onPress={() => {
              try {
                navigation.navigate('AddPostScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.FAB432dbc90}
            size={48}
          />
        )}
      </>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid3758cf77: {
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRadius: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolid90931bef: {
    borderBottomWidth: 1,
    borderRadius: 0,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolidae637dd6: {
    borderRadius: 8,
    fontFamily: 'Roboto_700Bold',
    fontSize: 13,
    lineHeight: 15,
    paddingBottom: 3,
    paddingTop: 3,
    textAlign: 'center',
  },
  ButtonSolidf27900c1: {
    borderRadius: 0,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  FAB432dbc90: {
    bottom: 36,
    left: 8,
    position: 'absolute',
  },
  Fetch431eb058: {
    minHeight: 40,
  },
  FlatList60fd33c9Content: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  FlatListc992f941Content: {
    flex: 1,
  },
  Imagecac4aca8: {
    height: 94,
    width: 94,
  },
  Imaged96d9dd6: {
    height: 89,
    width: 82,
  },
  Imagee913b3f5: {
    height: 89,
    width: 82,
  },
  Imageef3e7edc: {
    height: 69,
    width: 101,
  },
  Text0d4a572b: {
    marginTop: 4,
  },
  Text13a218dc: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    lineHeight: 24,
  },
  Text28e56f67: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
    paddingBottom: 9,
    paddingRight: 9,
    paddingTop: 9,
  },
  Text37028932: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
  },
  Text37ce86d3: {
    alignSelf: 'center',
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14,
    paddingLeft: 12,
    paddingRight: 12,
  },
  Text3f205912: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    lineHeight: 24,
  },
  Text402b0f3e: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
    paddingBottom: 6,
    paddingRight: 9,
    paddingTop: 6,
  },
  Text896c1675: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  Text98bb4944: {
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
  },
  TextInput60bc465a: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  TextInput6d05c604: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  Textbac1cded: {
    alignSelf: 'center',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
    paddingBottom: 9,
    paddingRight: 9,
    paddingTop: 9,
  },
  Textbd4d9b91: {
    alignSelf: 'center',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
    paddingBottom: 9,
    paddingRight: 9,
    paddingTop: 9,
  },
  Textcc81cc16: {
    alignSelf: 'center',
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14,
    paddingLeft: 12,
    paddingRight: 12,
  },
  Textda3c37fb: {
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
  },
  Textdd21953b: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 20,
  },
  Texte69ec2ac: {
    marginTop: 4,
  },
  Textfc5f1d74: {
    alignSelf: 'center',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
    paddingBottom: 6,
    paddingRight: 9,
    paddingTop: 6,
  },
  View0419a0dc: {
    flexGrow: 1,
    flexShrink: 0,
  },
  View22ee9013: {
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  View34d1476f: {
    flexDirection: 'row',
    marginRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingTop: 12,
  },
  View47eccd08: {
    flex: 1,
    opacity: 1,
  },
  View4a298bf0: {
    alignItems: 'flex-start',
  },
  View4aef8123: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  },
  View4d6c3933: {
    justifyContent: 'center',
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
  },
  View50ca9e9d: {
    alignItems: 'center',
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    flexDirection: 'row',
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  },
  View53a0f027: {
    alignItems: 'center',
    paddingBottom: 12,
    paddingTop: 12,
  },
  View6d8bb63f: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  View72ed2600: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
  },
  View7309e7d0: {
    marginTop: 80,
    paddingLeft: 16,
    paddingRight: 16,
  },
  View7d6a39b7: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  View826fe17c: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
  View83909238: {
    alignItems: 'flex-start',
    flex: 1,
  },
  View88c44c3e: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  View93b0ad28: {
    alignItems: 'center',
    paddingBottom: 12,
    paddingTop: 12,
  },
  View95decc74: {
    borderBottomWidth: 1,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  Viewa4d83a6c: {
    flexGrow: 0,
    flexShrink: 0,
    marginTop: 12,
    paddingLeft: 0,
    paddingRight: 0,
  },
  Viewa7427416: {
    flex: 1,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  Viewa9c4d9b1: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  Viewb6fbb297: {
    justifyContent: 'center',
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
  },
  Viewba9a4406: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  Viewbe9258c0: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    marginTop: -12,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
  },
  Viewbfdca2d3: {
    paddingBottom: 12,
    paddingTop: 12,
  },
  Viewc992f941: {
    flex: 1,
  },
  Viewd06b4b12: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
  Viewd9a93ac3: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  Viewdebd3207: {
    flexDirection: 'row',
  },
  Viewe792511e: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  Viewe8c798da: {
    marginTop: 80,
  },
  Viewed32203e: {
    justifyContent: 'center',
    paddingBottom: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
});

export default withTheme(ProfileScreen);
