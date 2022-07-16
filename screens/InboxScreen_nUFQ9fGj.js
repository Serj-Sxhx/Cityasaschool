import React from 'react';
import * as ExampleSavedPropertiesApi from '../apis/ExampleSavedPropertiesApi.js';
import {
  ButtonSolid,
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

const InboxScreen_nUFQ9fGj = props => {
  const { theme } = props;
  const { navigation } = props;

  const [showList, setShowList] = React.useState(false);

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      scrollable={true}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <View style={styles.Viewnd}>
        <View style={[styles.Viewne, { borderRadius: 8 }]}>
          <View style={styles.ViewlO}>
            <IconButton
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
              icon={'AntDesign/left'}
              size={24}
              color={theme.colors.strong}
            />
            <Text style={[styles.TextbA, { color: theme.colors.strong }]}>
              {'Inbox'}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.View_7k}>
        <View
          style={[
            styles.ViewaM,
            {
              backgroundColor: theme.colors.divider,
              borderRadius: 0,
              borderColor: theme.colors.lightest,
            },
          ]}
        >
          <View style={styles.View_5s}>
            <>
              {showList ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolid_7X,
                    {
                      backgroundColor: theme.colors.surface,
                      color: theme.colors.primary,
                      borderColor: theme.colors.primary,
                    },
                  ]}
                  title={'Messages'}
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
                    styles.ButtonSolidbs,
                    {
                      backgroundColor: theme.colors.surface,
                      color: theme.colors.medium,
                    },
                  ]}
                  title={'Messages'}
                />
              )}
            </>
          </View>

          <View style={styles.Viewqn}>
            <>
              {!showList ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolidI2,
                    {
                      backgroundColor: theme.colors.surface,
                      color: theme.colors.primary,
                      borderColor: theme.colors.primary,
                    },
                  ]}
                  title={'Notifications'}
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
                    styles.ButtonSolidVG,
                    {
                      backgroundColor: theme.colors.surface,
                      color: theme.colors.medium,
                    },
                  ]}
                  title={'Notifications'}
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
                    data={fetchData}
                    listKey={'z0sdgSIC'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const gridData = item;
                      return (
                        <View style={styles.Viewek}>
                          <Touchable>
                            <View
                              style={[
                                styles.ViewIl,
                                {
                                  borderRadius: 12,
                                  borderColor: theme.colors.divider,
                                  backgroundColor: theme.colors.surface,
                                },
                              ]}
                            >
                              <View style={styles.ViewlB}>
                                <ImageBackground
                                  style={styles.ImageBackgrounda5}
                                  source={{
                                    uri: `${gridData?.properties?.image_url}`,
                                  }}
                                  resizeMode={'cover'}
                                />
                              </View>

                              <View style={styles.View_2C}>
                                <Text
                                  style={[
                                    styles.Textya,
                                    { color: theme.colors.strong },
                                  ]}
                                  numberOfLines={1}
                                  ellipsizeMode={'tail'}
                                >
                                  {gridData?.properties?.name}{' '}
                                </Text>

                                <View style={styles.Viewwh}>
                                  <Text
                                    style={[
                                      styles.TextKA,
                                      { color: theme.colors.primary },
                                    ]}
                                  >
                                    {'$'}
                                    {gridData?.properties?.nightly_price}
                                  </Text>

                                  <Text
                                    style={[
                                      styles.TextxG,
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
                    contentContainerStyle={styles.FlatListz0Content}
                    numColumns={2}
                  />
                )}
              </>
              <>
                {!showList ? null : (
                  <FlatList
                    data={fetchData}
                    listKey={'atJpx918'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          <View style={styles.ViewMf}>
                            <Touchable>
                              <View
                                style={[
                                  styles.ViewXV,
                                  {
                                    borderRadius: 12,
                                    borderColor: theme.colors.divider,
                                    backgroundColor: theme.colors.surface,
                                  },
                                ]}
                              >
                                <View style={styles.ViewFK}>
                                  <ImageBackground
                                    style={styles.ImageBackgroundVt}
                                    source={{
                                      uri: `${listData?.properties?.image_url}`,
                                    }}
                                    resizeMode={'cover'}
                                  />
                                </View>

                                <View style={styles.ViewlZ}>
                                  <Text
                                    style={[
                                      styles.Textjx,
                                      { color: theme.colors.light },
                                    ]}
                                  >
                                    {listData?.properties?.city}
                                  </Text>

                                  <Text
                                    style={[
                                      styles.TextHS,
                                      { color: theme.colors.strong },
                                    ]}
                                    numberOfLines={1}
                                    ellipsizeMode={'tail'}
                                  >
                                    {listData?.properties?.name}{' '}
                                  </Text>

                                  <View style={styles.ViewoC}>
                                    <Text
                                      style={[
                                        styles.TextMJ,
                                        { color: theme.colors.primary },
                                      ]}
                                    >
                                      {'$'}
                                      {listData?.properties?.nightly_price}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.TextvB,
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
                    contentContainerStyle={styles.FlatListatContent}
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
  TextbA: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
    marginLeft: 8,
  },
  ViewlO: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewne: {
    paddingLeft: 0,
    paddingBottom: 6,
    paddingRight: 0,
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewnd: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  ButtonSolid_7X: {
    borderRadius: 0,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
  },
  ButtonSolidbs: {
    borderRadius: 0,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  View_5s: {
    flex: 1,
    opacity: 1,
  },
  ButtonSolidI2: {
    borderRadius: 0,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    borderBottomWidth: 1,
  },
  ButtonSolidVG: {
    borderRadius: 0,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  Viewqn: {
    flex: 1,
  },
  ViewaM: {
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
  View_7k: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  ImageBackgrounda5: {
    width: '100%',
    height: '100%',
  },
  ViewlB: {
    height: 140,
  },
  Textya: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
  },
  TextKA: {
    fontFamily: 'Poppins_600SemiBold',
  },
  TextxG: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
  },
  Viewwh: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_2C: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'space-between',
    flex: 1,
  },
  ViewIl: {
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Viewek: {
    flex: 1,
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
  },
  FlatListz0Content: {
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
  },
  ImageBackgroundVt: {
    width: '100%',
    height: '100%',
  },
  ViewFK: {
    flex: 1,
  },
  Textjx: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
  },
  TextHS: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
  },
  TextMJ: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
  },
  TextvB: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
  },
  ViewoC: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ViewlZ: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    flex: 3,
    justifyContent: 'center',
  },
  ViewXV: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ViewMf: {
    flex: 1,
  },
  FlatListatContent: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
});

export default withTheme(InboxScreen_nUFQ9fGj);
