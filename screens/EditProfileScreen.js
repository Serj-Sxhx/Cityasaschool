import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  ButtonSolid,
  CircleImage,
  DatePicker,
  Icon,
  IconButton,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const EditProfileScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;

  const restAPISupabaseUpdateProfileDataPATCH =
    RestAPISupabaseApi.useUpdateProfileDataPATCH();

  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const userData = await RestAPISupabaseApi.getProfileDataGET(Constants, {
          uuid: 'a950e463-fb07-4514-995c-98373e16561d',
        });
        console.log(userData?.[0]);
        const fName = userData?.[0].firstName;
        setFirstName(fName);
        const lName = userData?.[0].lastName;
        setLastName(lName);
        const uName = userData?.[0].username;
        const lGoal = userData?.[0].learning_goal;
        setUserName(uName);
        setLearningGoal(lGoal);
        const pPicture = userData?.[0].profile_picture;
        setProfileImageURL(pPicture);
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [learningGoal, setLearningGoal] = React.useState('');
  const [profileImageURL, setProfileImageURL] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [userName, setUserName] = React.useState('');

  return (
    <ScreenContainer style={styles.screen} hasSafeArea={true}>
      {/* topTitleFrame */}
      <View style={styles.View2f41bffa}>
        <IconButton
          icon={'Entypo/chevron-left'}
          size={24}
          color={theme.colors.dark}
        />
        <Text style={[styles.Textf37ed692, { color: theme.colors.text }]}>
          {'Edit Profile'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        enableOnAndroid={false}
        enableAutomaticScroll={true}
      >
        {/* profileImageFrame */}
        <View style={styles.Viewd02a7657}>
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  const selectedImage = await Utils.openImagePicker({});
                  setProfileImageURL(selectedImage);
                  Keyboard.dismiss();
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
          >
            {/* profileImage */}
            <CircleImage
              style={styles.CircleImage199953b3}
              source={{ uri: `${profileImageURL}` }}
              size={83}
            />
          </Touchable>
        </View>
        {/* formFrame */}
        <View style={styles.View9fa86917}>
          {/* firstName Frame */}
          <View style={styles.Viewd8fb5662}>
            {/* Label */}
            <Text
              style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
            >
              {'First Name'}
            </Text>
            {/* inputFrame */}
            <View
              style={[
                styles.View298bd5d3,
                { backgroundColor: theme.colors.grayLine, borderRadius: 6 },
              ]}
            >
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setFirstName(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInputd96db4ff,
                  {
                    borderColor: theme.colors.grayLine,
                    backgroundColor: theme.colors.grayLine,
                    color: theme.colors.text,
                  },
                ]}
                placeholder={'Lewis'}
                value={firstName}
                placeholderTextColor={theme.colors.text}
              />
            </View>
          </View>
          {/* lastName Frame */}
          <View style={styles.Viewd8fb5662}>
            {/* Label */}
            <Text
              style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
            >
              {'Last name'}
            </Text>
            {/* inputFrame */}
            <View
              style={[
                styles.View298bd5d3,
                { backgroundColor: theme.colors.grayLine, borderRadius: 6 },
              ]}
            >
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setLastName(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInputba1eac88,
                  {
                    borderColor: theme.colors.grayLine,
                    backgroundColor: theme.colors.grayLine,
                    color: theme.colors.text,
                  },
                ]}
                placeholder={'Thomas'}
                value={lastName}
                placeholderTextColor={theme.colors.text}
              />
            </View>
          </View>
          {/* userName Frame */}
          <View style={styles.Viewd8fb5662}>
            {/* Label */}
            <Text
              style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
            >
              {'Username*'}
            </Text>
            {/* inputFrame */}
            <View
              style={[
                styles.View298bd5d3,
                { backgroundColor: theme.colors.grayLine, borderRadius: 6 },
              ]}
            >
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setUserName(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInputba1eac88,
                  {
                    borderColor: theme.colors.grayLine,
                    backgroundColor: theme.colors.grayLine,
                    color: theme.colors.text,
                  },
                ]}
                placeholder={'@username'}
                value={userName}
                placeholderTextColor={theme.colors.text}
              />
            </View>
          </View>
          {/* userName Frame */}
          <View style={styles.Viewd8fb5662}>
            {/* Label */}
            <Text
              style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
            >
              {'Learning Goal'}
            </Text>
            {/* inputFrame */}
            <View
              style={[
                styles.View298bd5d3,
                { backgroundColor: theme.colors.grayLine, borderRadius: 6 },
              ]}
            >
              <TextInput
                onChangeText={newTextAreaValue => {
                  try {
                    setLearningGoal(newTextAreaValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInput09eae696,
                  {
                    borderColor: theme.colors.divider,
                    color: theme.colors.text,
                  },
                ]}
                placeholder={
                  'Im interested in working on projects that reduce CO2 emissions and reduce our dependance on fossil fuels. It also really want to learn how to use 3D printers.'
                }
                value={learningGoal}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor={theme.colors.text}
              />
            </View>
          </View>
          {/* Save Button */}
          <>
            {null ? null : (
              <ButtonSolid
                onPress={() => {
                  const handler = async () => {
                    try {
                      await restAPISupabaseUpdateProfileDataPATCH.mutateAsync({
                        city: 'london',
                        learningContext: 'none',
                        learningGoal: learningGoal,
                        profilePicture: 'itcouldbeanything',
                        uuid: 'a950e463-fb07-4514-995c-98373e16561d',
                        website: 'no',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                style={[
                  styles.ButtonSolidddb156aa,
                  { backgroundColor: theme.colors.primary },
                ]}
                title={'Save'}
              />
            )}
          </>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid2d5f6a36: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolidddb156aa: {
    borderRadius: 8,
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 17,
    marginBottom: 31,
    marginTop: 31,
    textAlign: 'center',
  },
  CircleImage199953b3: {
    height: 83,
    width: 83,
  },
  Iconc3fc9aa9: {
    bottom: 0,
    position: 'absolute',
    right: 0,
  },
  Text1928d953: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
  },
  Text21c8e5a2: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 8,
  },
  Text2fdc442c: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  Text7f6ed4c3: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInput0363a3f3: {
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
  TextInput09eae696: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
    paddingBottom: 9,
    paddingLeft: 12,
    paddingRight: 8,
    paddingTop: 9,
  },
  TextInputba1eac88: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
    paddingBottom: 9,
    paddingLeft: 12,
    paddingRight: 9,
    paddingTop: 9,
  },
  TextInputd96db4ff: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
    paddingBottom: 9,
    paddingLeft: 12,
    paddingRight: 9,
    paddingTop: 9,
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
  Textf37ed692: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    lineHeight: 24,
    paddingLeft: 12,
  },
  View107cd99e: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  View298bd5d3: {
    marginTop: 6,
    overflow: 'hidden',
  },
  View2f41bffa: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  View39912261: {
    alignItems: 'center',
  },
  View7ce34d0a: {
    paddingBottom: 30,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 30,
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
  Viewcaa0afd5: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  Viewd02a7657: {
    paddingBottom: 16,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 16,
  },
  Viewd8fb5662: {
    marginBottom: 16,
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

export default withTheme(EditProfileScreen);
