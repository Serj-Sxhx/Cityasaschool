import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import relativeTime from '../custom/relativeTime';
import {
  CircleImage,
  Divider,
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
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const DiscoverScreen = props => {
  const { theme } = props;

  const [replyText, setReplyText] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={true}
    >
      <Text style={[styles.Text2977fcf6, { color: theme.colors.primary }]}>
        {"What's new in the community"}
      </Text>

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
              listKey={'pSOgSW3b'}
              keyExtractor={item => item?.id || item?.uuid || item}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <>
                    <View
                      style={[
                        styles.Viewcabc33e8,
                        {
                          backgroundColor: theme.colors.surface,
                          borderRadius: 8,
                          borderColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Touchable>
                        <View style={styles.View159f4146}>
                          <ImageBackground
                            style={[
                              styles.ImageBackground69e94ca6,
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
                            <View style={styles.Viewe7575ee4}>
                              <View
                                style={[
                                  styles.View5593f1db,
                                  {
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 8,
                                  },
                                ]}
                              >
                                <CircleImage
                                  style={styles.CircleImage6b3d7138}
                                  size={60}
                                  source={{
                                    uri: `${listData?.profiles?.profile_picture}`,
                                  }}
                                />
                              </View>
                            </View>
                          </ImageBackground>
                        </View>

                        <View style={styles.View8db74792}>
                          <View>
                            <Text
                              style={[
                                styles.Textfe4881a7,
                                { color: theme.colors.lightGrey },
                              ]}
                            >
                              {listData?.profiles?.username}
                            </Text>

                            <Text
                              style={[
                                styles.Texte8e51639,
                                { color: theme.colors.dark },
                              ]}
                              textBreakStrategy={'highQuality'}
                              ellipsizeMode={'tail'}
                              allowFontScaling={true}
                              numberOfLines={2}
                            >
                              {listData?.title}
                            </Text>
                            <Spacer top={4} right={8} bottom={4} left={8} />
                            <Text
                              style={[
                                styles.Textd1cb507d,
                                { color: theme.colors.strong },
                              ]}
                              ellipsizeMode={'tail'}
                              numberOfLines={2}
                            >
                              {listData?.description}
                            </Text>
                            <Divider
                              style={styles.Divider22627dc6}
                              color={theme.colors.divider}
                            />
                            <View style={styles.View4a298bf0}>
                              <Text
                                style={[
                                  styles.Text7acdf8ca,
                                  { color: theme.colors.lightGrey },
                                ]}
                              >
                                {relativeTime(listData?.created_at)}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </Touchable>

                      <View style={styles.View229567ec}>
                        <TextInput
                          onChangeText={newTextInputValue => {
                            try {
                              setReplyText(newTextInputValue);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={[
                            styles.TextInput95389a2b,
                            {
                              borderColor: theme.colors.divider,
                              backgroundColor: theme.colors.light,
                            },
                          ]}
                          placeholder={'Reply directly'}
                          value={replyText}
                        />
                        <View style={styles.View39912261}>
                          <IconButton
                            icon={'Ionicons/md-people-circle-outline'}
                            size={32}
                          />
                          <Text style={{ color: theme.colors.lightGrey }}>
                            {'Teach me!'}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <Spacer top={12} right={8} bottom={12} left={8} />
                  </>
                );
              }}
              contentContainerStyle={styles.FlatList8db74792Content}
            />
          );
        }}
      </RestAPISupabaseApi.FetchDiscoverPostsConnectedGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  CircleImage6b3d7138: {
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
  },
  Divider22627dc6: {
    height: 1,
    marginBottom: 12,
    marginTop: 12,
  },
  FlatList8db74792Content: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  ImageBackground69e94ca6: {
    height: '100%',
    width: '100%',
  },
  Text2977fcf6: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 24,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  Text7acdf8ca: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
  },
  TextInput95389a2b: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    marginRight: 16,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    width: '100%',
  },
  Textd1cb507d: {
    fontFamily: 'Inter_400Regular',
  },
  Texte8e51639: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
  },
  Textfe4881a7: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    marginBottom: 4,
  },
  View159f4146: {
    height: 240,
  },
  View229567ec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  View39912261: {
    alignItems: 'center',
  },
  View4a298bf0: {
    alignItems: 'flex-start',
  },
  View5593f1db: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
  },
  View8db74792: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  Viewcabc33e8: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    overflow: 'hidden',
  },
  Viewe7575ee4: {
    alignItems: 'flex-start',
    marginTop: 0,
  },
});

export default withTheme(DiscoverScreen);
