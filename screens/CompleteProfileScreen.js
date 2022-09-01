import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
  ButtonSolid,
  CircleImage,
  Icon,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CompleteProfileScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const uploadImage = async string => {
    if (string.includes('https')) return string;
    const byteNumbers = new Array(string.length);

    const type = string.split(';')[0].split(':')[1];

    function _base64ToArrayBuffer(base64) {
      var binary_string = CustomCode.decode(base64);
      var len = binary_string.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes.buffer;
    }

    const { data, error } = await CustomCode.supabase.storage
      .from('avatar')
      .upload(
        'avatar' + Date.now() + '.' + type.split('/')[1],
        _base64ToArrayBuffer(string.split(';')[1].split(',')[1]),
        {
          contentType: type,
        }
      );

    return (
      'https://qthvouonhshkvbaugrhc.supabase.co/storage/v1/object/public/' +
      data.Key
    );
  };

  const checkRemainingCharacters = () => {
    return 140 - learningGoal.length;
  };

  const { theme } = props;
  const { navigation } = props;

  const restAPISupabaseUpdateProfileDataPATCH =
    RestAPISupabaseApi.useUpdateProfileDataPATCH();

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [city, setCity] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [imageToUpload, setImageToUpload] = React.useState('');
  const [isloading, setIsloading] = React.useState(false);
  const [learningGoal, setLearningGoal] = React.useState('');
  const [personalWebsite, setPersonalWebsite] = React.useState('');
  const [profilePicture, setProfilePicture] = React.useState(
    'https://qthvouonhshkvbaugrhc.supabase.co/storage/v1/object/public/avatar/avatar.png'
  );
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] = React.useState(
    'Secondary High Schooler'
  );
  const [remainingCharacters, setRemainingCharacters] = React.useState(140);

  return (
    <ScreenContainer style={styles.screen} hasSafeArea={true}>
      {/* Complete Your Profile Title */}
      <View style={styles.Viewe6b20937}>
        <View style={[styles.Viewac9f1ff4, { borderRadius: 8 }]}>
          <View style={styles.View3ea2d9b8}>
            <Text style={[styles.Textafe66071, { color: theme.colors.dark }]}>
              {'Complete Your Profile'}
            </Text>

            <Text style={[styles.Text60a7e433, { color: theme.colors.strong }]}>
              {'Connect with who matters most'}
            </Text>
          </View>
        </View>
      </View>

      <KeyboardAwareScrollView
        enableOnAndroid={false}
        enableAutomaticScroll={true}
      >
        <View style={styles.View4173db72}>
          <View style={styles.View4a298bf0}>
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    const selectedImage = await Utils.openImagePicker({
                      allowsEditing: false,
                    });
                    setProfilePicture(selectedImage);
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <View>
                <CircleImage size={100} source={{ uri: `${profilePicture}` }} />
                <Icon
                  style={styles.Iconc3fc9aa9}
                  name={'MaterialIcons/camera-alt'}
                  size={32}
                  color={theme.colors.primary}
                />
              </View>
            </Touchable>
          </View>
        </View>

        <View style={styles.View9fa86917}>
          <View>
            <Text style={[styles.Textcd5d977f, { color: theme.colors.dark }]}>
              {'Learning Goal '}
            </Text>

            <Text
              style={[styles.Text5f5a1012, { color: theme.colors.lightGrey }]}
            >
              {
                'This is also your bio on your profile so people can support you.'
              }
            </Text>
            {/* Learning Goal Input */}
            <TextInput
              onChangeText={newLearningGoalInputValue => {
                try {
                  setLearningGoal(newLearningGoalInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInput4e07df61,
                {
                  borderColor: theme.colors.lightGrey,
                  backgroundColor: theme.colors.divider,
                },
              ]}
              placeholder={
                'Tell others about your interests, what you need and what your goals are.'
              }
              value={learningGoal}
              autoCapitalize={'words'}
              multiline={true}
              placeholderTextColor={theme.colors.lightGrey}
              maxLength={140}
              numberOfLines={2}
            />
            <Text style={{ color: theme.colors.strong }}>
              {'Remaining characters: '}
              {checkRemainingCharacters(remainingCharacters)}{' '}
            </Text>
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>

          <View>
            <Text style={[styles.Text6e66bb17, { color: theme.colors.dark }]}>
              {'I am currently a'}
            </Text>

            <RadioButtonGroup
              onValueChange={newRadioButtonGroupValue => {
                try {
                  setRadioButtonGroupValue2(newRadioButtonGroupValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              value={radioButtonGroupValue2}
            >
              <RadioButtonRow
                style={styles.RadioButtonRow2ef7e399}
                label={'Secondary High Schooler'}
                value={'Secondary High Schooler'}
                color={theme.colors.primary}
                direction={'row'}
                unselectedColor={theme.colors.lightGrey}
              />
              <RadioButtonRow
                style={styles.RadioButtonRow3c9d15eb}
                label={'University Student'}
                value={'University Student'}
                color={theme.colors.primary}
                direction={'row'}
                unselectedColor={theme.colors.lightGrey}
              />
              <RadioButtonRow
                style={styles.RadioButtonRow3c9d15eb}
                label={'Homeschooler'}
                value={'Homeschooler'}
                color={theme.colors.primary}
                direction={'row'}
                unselectedColor={theme.colors.lightGrey}
              />
              <RadioButtonRow
                style={styles.RadioButtonRow3c9d15eb}
                label={'Early Stage Professional'}
                value={'Early Stage Professional'}
                color={theme.colors.primary}
                direction={'row'}
                unselectedColor={theme.colors.lightGrey}
              />
            </RadioButtonGroup>
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>

          <View>
            <Text style={[styles.Textf24170df, { color: theme.colors.dark }]}>
              {'Personal Website'}
            </Text>
            {/* Location Input */}
            <TextInput
              onChangeText={newLocationInputValue => {
                try {
                  setPersonalWebsite(newLocationInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInpute550455e,
                { borderColor: theme.colors.lightGrey },
              ]}
              placeholder={'https://...'}
              value={personalWebsite}
              placeholderTextColor={theme.colors.lightGrey}
              autoCapitalize={'words'}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>

          <View>
            <Text style={[styles.Textbbe15b9b, { color: theme.colors.dark }]}>
              {'City'}
            </Text>
            {/* Location Input */}
            <TextInput
              onChangeText={newLocationInputValue => {
                try {
                  setCity(newLocationInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInput27fd79bb,
                { borderColor: theme.colors.lightGrey },
              ]}
              placeholder={'What is your nearest city?'}
              value={city}
              autoCapitalize={'words'}
              placeholderTextColor={theme.colors.lightGrey}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.View107cd99e}>
        {/* Save Profile */}
        <>
          {isloading ? null : (
            <ButtonSolid
              onPress={() => {
                const handler = async () => {
                  try {
                    setIsloading(true);
                    const uploadLink = await uploadImage(profilePicture);
                    const apiRequest =
                      await restAPISupabaseUpdateProfileDataPATCH.mutateAsync({
                        city: city,
                        learningContext: radioButtonGroupValue2,
                        learningGoal: learningGoal,
                        profilePicture: uploadLink,
                        uuid: Constants['UUID'],
                        website: personalWebsite,
                      });
                    setIsloading(false);
                    navigation.navigate('ProfileScreen');
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={[
                styles.ButtonSolid246bf5fb,
                { backgroundColor: theme.colors.primary },
              ]}
              title={'Continue To Profile'}
            />
          )}
        </>
        {/* Save Profile */}
        <>
          {!isloading ? null : (
            <ButtonSolid
              onPress={() => {
                const handler = async () => {
                  try {
                    setIsloading(true);
                    const uploadLink = await uploadImage(profilePicture);
                    navigation.navigate('ProfileScreen');
                    const apiRequest =
                      await restAPISupabaseUpdateProfileDataPATCH.mutateAsync({
                        city: city,
                        learningContext: radioButtonGroupValue2,
                        learningGoal: learningGoal,
                        profilePicture: uploadLink,
                        uuid: Constants['UUID'],
                        website: personalWebsite,
                      });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={[
                styles.ButtonSolid3d0d6ca3,
                { backgroundColor: theme.colors.primary },
              ]}
              title={'Continue To Profile'}
              disabled={true}
              loading={true}
            />
          )}
        </>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid246bf5fb: {
    borderRadius: 8,
    fontFamily: 'Inter_700Bold',
    textAlign: 'center',
  },
  ButtonSolid3d0d6ca3: {
    borderRadius: 8,
    fontFamily: 'Inter_700Bold',
    textAlign: 'center',
  },
  Iconc3fc9aa9: {
    bottom: 0,
    position: 'absolute',
    right: 0,
  },
  RadioButtonRow2ef7e399: {
    fontFamily: 'Inter_400Regular',
    textAlign: 'left',
  },
  RadioButtonRow3c9d15eb: {
    fontFamily: 'Inter_400Regular',
  },
  Text5f5a1012: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 10,
    marginBottom: 4,
  },
  Text60a7e433: {
    fontFamily: 'Inter_400Regular',
    marginTop: 12,
  },
  Text6e66bb17: {
    fontFamily: 'Inter_600SemiBold',
  },
  TextInput27fd79bb: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  TextInput4e07df61: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  TextInpute550455e: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  Textafe66071: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    marginLeft: 8,
  },
  Textbbe15b9b: {
    fontFamily: 'System',
    fontWeight: '600',
    marginBottom: 4,
  },
  Textcd5d977f: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    marginBottom: 4,
  },
  Textf24170df: {
    fontFamily: 'System',
    fontWeight: '600',
    marginBottom: 4,
  },
  View107cd99e: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  View3ea2d9b8: {
    alignItems: 'center',
    flex: 1,
  },
  View4173db72: {
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
  },
  View4a298bf0: {
    alignItems: 'flex-start',
  },
  View9fa86917: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Viewac9f1ff4: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 6,
  },
  Viewe6b20937: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  screen: {
    justifyContent: 'space-around',
  },
});

export default withTheme(CompleteProfileScreen);
