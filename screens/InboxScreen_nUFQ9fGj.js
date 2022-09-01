import React from 'react';
import {
  ButtonSolid,
  IconButton,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
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
      {/* backBar */}
      <View style={styles.Viewe6b20937}>
        <View style={[styles.Viewac9f1ff4, { borderRadius: 8 }]}>
          <View style={styles.Viewcaa0afd5}>
            <IconButton
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
              color={theme.colors.dark}
              icon={'AntDesign/left'}
              size={24}
            />
            <Text style={[styles.Text21c8e5a2, { color: theme.colors.dark }]}>
              {'Inbox'}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.View60451373}>
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
              {showList ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolid191e6415,
                    {
                      color: theme.colors.primary,
                      borderColor: theme.colors.primary,
                      backgroundColor: theme.colors.surface,
                    },
                  ]}
                  title={'Messages'}
                />
              )}
            </>
            {/* LeftButtonInactive */}
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
                  title={'Messages'}
                />
              )}
            </>
          </View>

          <View style={styles.Viewc992f941}>
            {/* RightButtonActive */}
            <>
              {!showList ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolid90931bef,
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
            {/* RightButtonInactive */}
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
                    styles.ButtonSolid8d12dc72,
                    {
                      color: theme.colors.medium,
                      backgroundColor: theme.colors.surface,
                    },
                  ]}
                  title={'Notifications'}
                />
              )}
            </>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid191e6415: {
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRadius: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolid8d12dc72: {
    borderRadius: 0,
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
  ButtonSolidf27900c1: {
    borderRadius: 0,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  FlatList7591d95eContent: {
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  FlatListe6b20937Content: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  ImageBackgrounda98db7de: {
    height: '100%',
    width: '100%',
  },
  Text21c8e5a2: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 8,
  },
  Text3a7d0e3b: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
  },
  Text4ff4a91f: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
  },
  Text52b0b843: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
  },
  Textc28cf954: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
  },
  Textc3380ce3: {
    fontFamily: 'Poppins_600SemiBold',
  },
  Textc430b794: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
  },
  View47eccd08: {
    flex: 1,
    opacity: 1,
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
  View5152e902: {
    height: 140,
  },
  View60451373: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  View622532bb: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  View6af843ad: {
    flex: 3,
    justifyContent: 'center',
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  View76d90f06: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 4,
  },
  View7d6a39b7: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Viewa4bdd040: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    overflow: 'hidden',
  },
  Viewac9f1ff4: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 6,
  },
  Viewb7efd8d7: {
    flex: 1,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  Viewc992f941: {
    flex: 1,
  },
  Viewcaa0afd5: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  Viewd8f97984: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  Viewe6b20937: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
});

export default withTheme(InboxScreen_nUFQ9fGj);
