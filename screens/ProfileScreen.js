import React from 'react';
import * as ExampleSavedPropertiesApi from '../apis/ExampleSavedPropertiesApi.js';
import {
  ButtonSolid,
  CircleImage,
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
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ProfileScreen = props => {
  const { theme } = props;

  const [showList, setShowList] = React.useState(false);

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      scrollable={true}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <View>
        <View style={styles.ViewgL}>
          <Touchable>
            <Text style={{ color: theme.colors.secondary }}>
              {'Invite your friends'}
            </Text>
          </Touchable>
          <IconButton
            icon={'Ionicons/ios-settings-outline'}
            size={24}
            color={theme.colors.strong}
          />
        </View>
      </View>

      <View style={styles.ViewNV}>
        <View>
          <View>
            <CircleImage
              source={{
                uri: 'https://static.draftbit.com/images/placeholder-image.png',
              }}
              size={80}
            />
            <View
              style={[
                styles.ViewIx,
                { borderColor: theme.colors.secondary, borderRadius: 64 },
              ]}
            >
              <Icon name={'Ionicons/ios-people-circle-sharp'} size={24} />
              <Spacer top={8} right={4} bottom={8} left={4} />
              <Text style={{ color: theme.colors.strong }}>{'667'}</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={[styles.Texthh, { color: theme.colors.strong }]}>
            {'Lewis Thompson'}
          </Text>

          <Text style={[styles.TextCq, { color: theme.colors.secondary }]}>
            {'View public portfolio'}
          </Text>

          <Text style={[styles.Text_5f, { color: theme.colors.medium }]}>
            {'@username'}
          </Text>
        </View>
        <Spacer top={8} right={32} bottom={8} left={32} />
        <View>
          <IconButton
            icon={'MaterialIcons/messenger-outline'}
            size={24}
            color={theme.colors.strong}
          />
        </View>
      </View>

      <View style={styles.ViewCX}>
        <View
          style={[
            styles.Viewi3,
            {
              backgroundColor: theme.colors.divider,
              borderRadius: 0,
              borderColor: theme.colors.lightest,
            },
          ]}
        >
          <View style={styles.Viewaa}>
            <>
              {showList ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolido7,
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
                    styles.ButtonSoliduT,
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

          <View style={styles.ViewPj}>
            <>
              {!showList ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolidEX,
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
                    styles.ButtonSolidjS,
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

      <ExampleSavedPropertiesApi.FetchSavedPropertiesGET
        method={'GET'}
        limit={16}
      >
        {({ loading, error, data, refetchSavedProperties }) => {
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
              <>
                {showList ? null : (
                  <FlatList
                    data={[]}
                    listKey={'cT6lE7Si'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const historyListData = item;
                      return (
                        <View style={styles.ViewzU}>
                          <Touchable>
                            <View
                              style={[
                                styles.ViewDa,
                                {
                                  borderRadius: 12,
                                  borderColor: theme.colors.divider,
                                  backgroundColor: theme.colors.surface,
                                },
                              ]}
                            >
                              <View style={styles.ViewOa}>
                                <ImageBackground
                                  style={styles.ImageBackgroundDn}
                                  source={{
                                    uri: `${listData?.properties?.image_url}`,
                                  }}
                                  resizeMode={'cover'}
                                />
                              </View>

                              <View style={styles.ViewB1}>
                                <Text
                                  style={[
                                    styles.Textn6,
                                    { color: theme.colors.light },
                                  ]}
                                >
                                  {listData?.properties?.city}
                                </Text>

                                <Text
                                  style={[
                                    styles.Textqb,
                                    { color: theme.colors.strong },
                                  ]}
                                  numberOfLines={1}
                                  ellipsizeMode={'tail'}
                                >
                                  {listData?.properties?.name}{' '}
                                </Text>

                                <View style={styles.View_9G}>
                                  <Text
                                    style={[
                                      styles.TextzX,
                                      { color: theme.colors.primary },
                                    ]}
                                  >
                                    {'$'}
                                    {listData?.properties?.nightly_price}
                                  </Text>

                                  <Text
                                    style={[
                                      styles.Textr4,
                                      { color: theme.colors.primary },
                                    ]}
                                  >
                                    {'/night'}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </Touchable>
                        </View>
                      );
                    }}
                    contentContainerStyle={styles.FlatListcTContent}
                    numColumns={1}
                  />
                )}
              </>
              <>
                {!showList ? null : (
                  <FlatList
                    data={fetchData}
                    listKey={'c5at3zRQ'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          <View style={styles.Vieweh}>
                            <Touchable>
                              <View
                                style={[
                                  styles.View_3W,
                                  {
                                    borderRadius: 12,
                                    borderColor: theme.colors.divider,
                                    backgroundColor: theme.colors.surface,
                                  },
                                ]}
                              >
                                <View style={styles.ViewLl}>
                                  <ImageBackground
                                    style={styles.ImageBackgroundn2}
                                    source={{
                                      uri: `${listData?.properties?.image_url}`,
                                    }}
                                    resizeMode={'cover'}
                                  />
                                </View>

                                <View style={styles.ViewLZ}>
                                  <Text
                                    style={[
                                      styles.Text_1n,
                                      { color: theme.colors.light },
                                    ]}
                                  >
                                    {listData?.properties?.city}
                                  </Text>

                                  <Text
                                    style={[
                                      styles.Textuy,
                                      { color: theme.colors.strong },
                                    ]}
                                    numberOfLines={1}
                                    ellipsizeMode={'tail'}
                                  >
                                    {listData?.properties?.name}{' '}
                                  </Text>

                                  <View style={styles.ViewPS}>
                                    <Text
                                      style={[
                                        styles.Textw2,
                                        { color: theme.colors.primary },
                                      ]}
                                    >
                                      {'$'}
                                      {listData?.properties?.nightly_price}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.Text_9O,
                                        { color: theme.colors.primary },
                                      ]}
                                    >
                                      {'/night'}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </Touchable>
                          </View>
                          <Spacer top={8} right={8} bottom={8} left={8} />
                        </>
                      );
                    }}
                    contentContainerStyle={styles.FlatListc5Content}
                  />
                )}
              </>
            </>
          );
        }}
      </ExampleSavedPropertiesApi.FetchSavedPropertiesGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewgL: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    marginLeft: 16,
    marginTop: 16,
    marginRight: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ViewIx: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 2,
    paddingTop: 2,
  },
  Texthh: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextCq: {
    marginTop: 4,
  },
  Text_5f: {
    marginTop: 4,
  },
  ViewNV: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
  },
  ButtonSolido7: {
    borderRadius: 0,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
  },
  ButtonSoliduT: {
    borderRadius: 0,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  Viewaa: {
    flex: 1,
    opacity: 1,
  },
  ButtonSolidEX: {
    borderRadius: 0,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    borderBottomWidth: 1,
  },
  ButtonSolidjS: {
    borderRadius: 0,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ViewPj: {
    flex: 1,
  },
  Viewi3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  ViewCX: {
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 12,
  },
  ImageBackgroundDn: {
    width: '100%',
    height: '100%',
  },
  ViewOa: {
    flex: 1,
  },
  Textn6: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
  },
  Textqb: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
  },
  TextzX: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
  },
  Textr4: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
  },
  View_9G: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ViewB1: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    flex: 3,
    justifyContent: 'center',
  },
  ViewDa: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ViewzU: {
    flex: 1,
  },
  FlatListcTContent: {
    flex: 1,
  },
  ImageBackgroundn2: {
    width: '100%',
    height: '100%',
  },
  ViewLl: {
    flex: 1,
  },
  Text_1n: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
  },
  Textuy: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
  },
  Textw2: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
  },
  Text_9O: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
  },
  ViewPS: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ViewLZ: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    flex: 3,
    justifyContent: 'center',
  },
  View_3W: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Vieweh: {
    flex: 1,
  },
  FlatListc5Content: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
});

export default withTheme(ProfileScreen);
