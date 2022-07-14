import React from 'react';
import * as ExamplePropertiesApi from '../apis/ExamplePropertiesApi.js';
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

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={true}
    >
      <Text style={[styles.Text_7m, { color: theme.colors.primary }]}>
        {"What's new in the community"}
      </Text>

      <ExamplePropertiesApi.FetchListOfPropertiesGET method={'GET'} limit={12}>
        {({ loading, error, data, refetchListOfProperties }) => {
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
              keyExtractor={({ item }) => item?.id || item?.uuid || item}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <>
                    <View
                      style={[
                        styles.ViewgM,
                        {
                          backgroundColor: theme.colors.surface,
                          borderRadius: 8,
                          borderColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Touchable>
                        <View style={styles.VieweU}>
                          <ImageBackground
                            style={[
                              styles.ImageBackgrounde5,
                              { borderRadius: theme.roundness },
                            ]}
                            resizeMode={'cover'}
                            source={{ uri: `${listData?.image_url}` }}
                          >
                            <View style={styles.ViewEQ}>
                              <View
                                style={[
                                  styles.ViewmC,
                                  {
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 8,
                                  },
                                ]}
                              >
                                <CircleImage
                                  style={styles.CircleImageaB}
                                  source={{
                                    uri: 'https://static.draftbit.com/images/placeholder-image.png',
                                  }}
                                  size={60}
                                />
                              </View>
                            </View>
                          </ImageBackground>
                        </View>

                        <View style={styles.ViewI9}>
                          <View>
                            <>
                              {!listData ? null : (
                                <Text
                                  style={[
                                    styles.Texta2,
                                    { color: theme.colors.lightInverse },
                                  ]}
                                >
                                  {'[user Name]'}
                                </Text>
                              )}
                            </>
                            <Text
                              style={[
                                styles.TextK6,
                                { color: theme.colors.strong },
                              ]}
                              textBreakStrategy={'highQuality'}
                              ellipsizeMode={'tail'}
                              allowFontScaling={true}
                              numberOfLines={2}
                            >
                              {listData?.name}
                            </Text>
                            <Spacer top={4} right={8} bottom={4} left={8} />
                            <Text
                              style={[
                                styles.TextbS,
                                { color: theme.colors.medium },
                              ]}
                              ellipsizeMode={'tail'}
                              numberOfLines={2}
                            >
                              {listData?.description}
                            </Text>
                            <Divider
                              style={styles.DividerQb}
                              color={theme.colors.divider}
                            />
                            <View style={styles.ViewDu}>
                              <Text
                                style={{ color: theme.colors.lightInverse }}
                              >
                                {'[hours ago]'}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </Touchable>

                      <View style={styles.ViewFN}>
                        <TextInput
                          onChangeText={newTextInputValue => {
                            const textInputValue = newTextInputValue;
                            try {
                              setTextInputValue(textInputValue);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={[
                            styles.TextInput_14,
                            { borderColor: theme.colors.divider },
                          ]}
                          placeholder={'Reply directly'}
                          value={textInputValue}
                        />
                        <View style={styles.ViewC0}>
                          <IconButton
                            icon={'Ionicons/md-people-circle-outline'}
                            size={32}
                          />
                          <Text style={{ color: theme.colors.lightInverse }}>
                            {'Teach me!'}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <Spacer top={12} right={8} bottom={12} left={8} />
                  </>
                );
              }}
              contentContainerStyle={styles.FlatListpSContent}
            />
          );
        }}
      </ExamplePropertiesApi.FetchListOfPropertiesGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Text_7m: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 24,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  CircleImageaB: {
    marginLeft: 8,
    marginTop: 8,
    marginBottom: 8,
    marginRight: 8,
  },
  ViewmC: {
    paddingLeft: 8,
    paddingTop: 4,
    paddingRight: 8,
    paddingBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewEQ: {
    alignItems: 'flex-start',
    marginTop: 0,
  },
  ImageBackgrounde5: {
    width: '100%',
    height: '100%',
  },
  VieweU: {
    height: 240,
  },
  Texta2: {
    marginBottom: 4,
  },
  TextK6: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 18,
  },
  TextbS: {
    lineHeight: 24,
    fontFamily: 'System',
    fontWeight: '400',
  },
  DividerQb: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ViewDu: {
    alignItems: 'flex-start',
  },
  ViewI9: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  TextInput_14: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    width: '100%',
    marginRight: 16,
  },
  ViewC0: {
    alignItems: 'center',
  },
  ViewFN: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewgM: {
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  FlatListpSContent: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default withTheme(DiscoverScreen);
