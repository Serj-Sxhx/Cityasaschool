import React from 'react';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  ButtonSolid,
  CircleImage,
  Icon,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CompleteProfileScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);

  return (
    <ScreenContainer style={styles.screen} hasSafeArea={true}>
      <View style={styles.Viewzh}>
        <View style={[styles.ViewPe, { borderRadius: 8 }]}>
          <View style={styles.ViewAE}>
            <Text style={[styles.TextF7, { color: theme.colors.strong }]}>
              {'Complete your profile'}
            </Text>
          </View>
        </View>
      </View>

      <KeyboardAwareScrollView
        enableOnAndroid={false}
        enableAutomaticScroll={true}
      >
        <View style={styles.ViewCw}>
          <View style={styles.ViewMH}>
            <Touchable
              onPress={async () => {
                try {
                  await Utils.openImagePicker({ allowsEditing: false });
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View>
                <CircleImage source={Images.Avatar} size={100} />
                <Icon
                  style={styles.Iconb6}
                  name={'MaterialIcons/camera-alt'}
                  size={32}
                  color={theme.colors.primary}
                />
              </View>
            </Touchable>
          </View>
        </View>

        <View style={styles.View_3s}>
          <View>
            <Text style={[styles.Textzz, { color: theme.colors.strong }]}>
              {'First Name'}
            </Text>
            <TextInput
              style={[
                styles.TextInputlV,
                { borderColor: theme.colors.lightInverse },
              ]}
              placeholder={'First Name'}
              value={null}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightInverse}
            />
          </View>
          <Spacer top={12} right={8} bottom={12} left={8} />
          <View>
            <Text style={[styles.TextJ8, { color: theme.colors.strong }]}>
              {'Last Name'}
            </Text>
            <TextInput
              style={[
                styles.TextInputsP,
                { borderColor: theme.colors.lightInverse },
              ]}
              value={null}
              placeholder={'Name'}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightInverse}
            />
          </View>
          <Spacer top={16} right={8} bottom={16} left={8} />
          <View>
            <Text style={[styles.TextPG, { color: theme.colors.strong }]}>
              {'User Name'}
            </Text>
            <TextInput
              style={[
                styles.TextInputZt,
                { borderColor: theme.colors.lightInverse },
              ]}
              value={null}
              placeholder={'Name'}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightInverse}
            />
            <Spacer top={16} right={8} bottom={16} left={8} />
          </View>

          <View>
            <Text style={[styles.TextUC, { color: theme.colors.strong }]}>
              {'Learning Goal / Bio'}
            </Text>
            <TextInput
              style={[
                styles.TextInputZG,
                { borderColor: theme.colors.lightInverse },
              ]}
              value={null}
              placeholder={'Name'}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightInverse}
              numberOfLines={4}
              maxLength={320}
              multiline={true}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.Vieww9}>
        <ButtonSolid
          onPress={() => {
            try {
              navigation.navigate('ProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.ButtonSolide4,
            { backgroundColor: theme.colors.primary },
          ]}
          title={'Continue To Profile'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextF7: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
    marginLeft: 8,
  },
  ViewAE: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewPe: {
    paddingLeft: 0,
    paddingBottom: 6,
    paddingRight: 0,
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewzh: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  Iconb6: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  ViewMH: {
    alignItems: 'center',
  },
  ViewCw: {
    paddingLeft: 16,
    paddingTop: 30,
    paddingRight: 16,
    paddingBottom: 30,
  },
  Textzz: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputlV: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  TextJ8: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputsP: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  TextPG: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputZt: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  TextUC: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputZG: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  View_3s: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ButtonSolide4: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  Vieww9: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 16,
  },
  screen: {
    justifyContent: 'space-around',
  },
});

export default withTheme(CompleteProfileScreen);
