import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import removeItemFromArray from '../custom/removeItemFromArray';
import * as Utils from '../utils';
import {
  CircleImage,
  DatePicker,
  Icon,
  IconButton,
  Link,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddPostALCopyScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const removeImagefromArray = data => {
    return imageArray.filter(item => item.index !== data.index);
  };

  const FilterUsernames = data => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    return data.filter(item =>
      item.username.toLowerCase().includes(usernameSearch.toLowerCase())
    );
  };

  const uploadImages = async string => {
    if (string.includes('https') || !string.trim().length)
      return [string.trim()];
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
      .from('postimages')
      .upload(
        'postimage' + Date.now() + '.' + type.split('/')[1],
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

  const addCollaboratorToArray = id => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    return [...collaboratorsIDArray, id];
  };

  const validateInputs = () => {
    let foundError = false;
    if (learningExperience.length < 0) {
      setLearningExperienceError('Title cannot be empty!');
      foundError = true;
    } else {
      setLearningExperienceError('');
    }

    if (toDate < fromDate) {
      setDateError('from Date must be less the to Date');
      foundError = true;
    } else {
      setDateError('');
    }

    if (description.length <= 0) {
      setDescriptionError('Description cannot be empty!');
      foundError = true;
    } else {
      setDescriptionError('');
    }

    return foundError;
  };

  const AddImagetoArray = data => {
    let newIndex = imageArray.length;
    return [...imageArray, { index: newIndex, data }];
  };

  const uploadMultipleImages = async data => {
    console.log('data from upload multiple', data);
    const newArray = [];

    for (let item of imageArray) {
      let url = await uploadImages(item.data);
      console.log(url);
      newArray.push(url);
    }
    return newArray;
  };

  const filterTags = data => {
    return data.filter(item =>
      item.name.toLowerCase().includes(usernameSearch.toLowerCase())
    );
  };

  const { theme } = props;
  const { navigation } = props;

  const restAPISupabaseAddAPortfolioPostPOST =
    RestAPISupabaseApi.useAddAPortfolioPostPOST();

  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const tags = await RestAPISupabaseApi.tagsGetAllTagsGET(Constants);
        setTagsArray(tags);
        const collaboratorsList =
          await RestAPISupabaseApi.getCollaboratorsListGET(Constants, {
            userId: Constants['UUID'],
          });
        setCollaboratorsList(collaboratorsList);
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [collaborators, setCollaborators] = React.useState('');
  const [collaboratorsIDArray, setCollaboratorsIDArray] = React.useState([]);
  const [collaboratorsList, setCollaboratorsList] = React.useState([]);
  const [dateError, setDateError] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [descriptionError, setDescriptionError] = React.useState('');
  const [externalLink, setExternalLink] = React.useState('');
  const [fromDate, setFromDate] = React.useState(new Date());
  const [imageArray, setImageArray] = React.useState([]);
  const [imagesUploadArray, setImagesUploadArray] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [learningExperience, setLearningExperience] = React.useState('');
  const [learningExperienceError, setLearningExperienceError] =
    React.useState('');
  const [learningResources, setLearningResources] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [postImages, setPostImages] = React.useState([]);
  const [postType1, setPostType1] = React.useState(true);
  const [postType2, setPostType2] = React.useState(false);
  const [postType3, setPostType3] = React.useState(false);
  const [publishToPortfolio, setPublishToPortfolio] = React.useState(false);
  const [selectedColabs, setSelectedColabs] = React.useState([]);
  const [selectedImageVariable, setSelectedImageVariable] = React.useState('');
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [showCollaboratorModel, setShowCollaboratorModel] =
    React.useState(false);
  const [showTagsModal, setShowTagsModal] = React.useState(false);
  const [switchValue, setSwitchValue] = React.useState(false);
  const [switchValue2, setSwitchValue2] = React.useState(false);
  const [switchValue3, setSwitchValue3] = React.useState(false);
  const [tagsArray, setTagsArray] = React.useState([]);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [toDate, setToDate] = React.useState(new Date());
  const [typeOfProject, setTypeOfProject] = React.useState('Work Experience');
  const [usernameSearch, setUsernameSearch] = React.useState('');

  return (
    <ScreenContainer
      style={[styles.screen, { backgroundColor: theme.colors.lightGrey }]}
      scrollable={true}
      hasTopSafeArea={true}
    >
      <KeyboardAwareScrollView
        style={{
          backgroundColor: theme.colors.custom_rgb255_255_255,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
          borderRadius: 12,
        }}
        contentContainerStyle={styles.KeyboardAwareScrollView721b19b7Content}
        extraScrollHeight={72}
      >
        {/* Container */}
        <View>
          {/* Add Learning Experience TItle */}
          <View style={styles.View00a48c51}>
            <IconButton
              onPress={() => {
                try {
                  navigation.navigate('ProfileScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              icon={'Entypo/chevron-left'}
              size={24}
              color={theme.colors.dark}
            />
            <Text style={[styles.Textdf6a4e51, { color: theme.colors.text }]}>
              {'Add a learning experience'}
            </Text>
          </View>
          {/* What type of Post */}
          <View style={styles.View8bdb860c}>
            {/* Label */}
            <Text
              style={[styles.Text053f977e, { color: theme.colors.lightGrey }]}
            >
              {'What type of post is this?'}
            </Text>
            {/* tagsListFrame */}
            <View style={styles.View686558a6}>
              {/* option1Frame */}
              <View>
                {/* tagTouchableActive */}
                <>
                  {!postType1 ? null : (
                    <Touchable style={styles.Touchable8bd683a8}>
                      {/* tagBodyActive */}
                      <View
                        style={[
                          styles.View3f6225c1,
                          {
                            backgroundColor: theme.colors.secondary,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                            borderBottomRightRadius: 6,
                            borderBottomLeftRadius: 6,
                          },
                        ]}
                      >
                        {/* tagLabel */}
                        <Text
                          style={[
                            styles.Textd8063e63,
                            { color: theme.colors.custom_rgb255_255_255 },
                          ]}
                        >
                          {'Work Experience'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* tagTouchableInactive */}
                <>
                  {postType1 ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setTypeOfProject('Work Experience');
                          setPostType1(true);
                          setPostType2(false);
                          setPostType3(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable8bd683a8}
                    >
                      {/* tagBodyInactive */}
                      <View
                        style={[
                          styles.Viewdf9865cc,
                          {
                            backgroundColor: theme.colors.grayLine,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                            borderBottomRightRadius: 6,
                            borderBottomLeftRadius: 6,
                          },
                        ]}
                      >
                        {/* tagLabel */}
                        <Text
                          style={[
                            styles.Text0486d022,
                            { color: theme.colors.custom_rgb130_130_130 },
                          ]}
                        >
                          {'Work Experience'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* option2Frame */}
              <View>
                {/* tagTouchable */}
                <>
                  {postType2 ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setTypeOfProject('Project');
                          setPostType1(false);
                          setPostType3(false);
                          setPostType2(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable8bd683a8}
                    >
                      {/* tagBodyInactive */}
                      <View
                        style={[
                          styles.Viewdf9865cc,
                          {
                            backgroundColor: theme.colors.grayLine,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                            borderBottomRightRadius: 6,
                            borderBottomLeftRadius: 6,
                          },
                        ]}
                      >
                        {/* tagLabel */}
                        <Text
                          style={[
                            styles.Text0486d022,
                            { color: theme.colors.custom_rgb130_130_130 },
                          ]}
                        >
                          {'Project'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* tagTouchableActive */}
                <>
                  {!postType2 ? null : (
                    <Touchable style={styles.Touchable8bd683a8}>
                      {/* tagBodyActive */}
                      <View
                        style={[
                          styles.View3f6225c1,
                          {
                            backgroundColor: theme.colors.secondary,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                            borderBottomRightRadius: 6,
                            borderBottomLeftRadius: 6,
                          },
                        ]}
                      >
                        {/* tagLabel */}
                        <Text
                          style={[
                            styles.Textd8063e63,
                            { color: theme.colors.custom_rgb255_255_255 },
                          ]}
                        >
                          {'Project'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* option3Frame */}
              <View>
                {/* tagTouchable */}
                <>
                  {postType3 ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setTypeOfProject('Post');
                          setPostType1(false);
                          setPostType2(false);
                          setPostType3(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable8bd683a8}
                    >
                      {/* tagBodyInactive */}
                      <View
                        style={[
                          styles.Viewdf9865cc,
                          {
                            backgroundColor: theme.colors.grayLine,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                            borderBottomRightRadius: 6,
                            borderBottomLeftRadius: 6,
                          },
                        ]}
                      >
                        {/* tagLabel */}
                        <Text
                          style={[
                            styles.Text0486d022,
                            { color: theme.colors.custom_rgb130_130_130 },
                          ]}
                        >
                          {'Post'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* tagTouchableActive */}
                <>
                  {!postType3 ? null : (
                    <Touchable style={styles.Touchable8bd683a8}>
                      {/* tagBodyActive */}
                      <View
                        style={[
                          styles.View3f6225c1,
                          {
                            backgroundColor: theme.colors.secondary,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                            borderBottomRightRadius: 6,
                            borderBottomLeftRadius: 6,
                          },
                        ]}
                      >
                        {/* tagLabel */}
                        <Text
                          style={[
                            styles.Textd8063e63,
                            { color: theme.colors.custom_rgb255_255_255 },
                          ]}
                        >
                          {'Post'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
            </View>
          </View>
          {/* Experience Title */}
          <View style={styles.View6728d304}>
            {/* Label */}
            <Text
              style={[styles.Text053f977e, { color: theme.colors.lightGrey }]}
            >
              {'Learning Experience Title'}
            </Text>
            {/* inputFrame */}
            <View
              style={[
                styles.View2964c6ed,
                { backgroundColor: theme.colors.grayLine, borderRadius: 8 },
              ]}
            >
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setLearningExperience(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInputa9d32b61,
                  {
                    borderColor: theme.colors.grayLine,
                    backgroundColor: theme.colors.grayLine,
                    color: theme.colors.text,
                  },
                ]}
                placeholder={'Give your post a title'}
                value={learningExperience}
              />
              {/* Error */}
              <Text
                style={[styles.Textc75d0303, { color: theme.colors.error }]}
              >
                {learningExperienceError}
              </Text>
            </View>
          </View>
          {/* Experience Timeframe */}
          <View style={styles.View6728d304}>
            {/* RowDisplay */}
            <View style={styles.View18c69117}>
              {/* fieldOneFrame */}
              <View style={styles.View298b43d8}>
                {/* Label */}
                <Text
                  style={[
                    styles.Text4d71caa5,
                    { color: theme.colors.lightGrey },
                  ]}
                >
                  {'From*'}
                </Text>
                {/* inputFrame */}
                <View
                  style={[
                    styles.View5253684f,
                    { backgroundColor: theme.colors.grayLine, borderRadius: 8 },
                  ]}
                >
                  {/* fromDate */}
                  <DatePicker
                    onDateChange={newFromDateValue => {
                      try {
                        setFromDate(newFromDateValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    date={fromDate}
                    label={'Date'}
                    mode={'date'}
                    leftIconMode={'inset'}
                    type={'solid'}
                  />
                </View>
              </View>
              {/* fieldTwoFrame */}
              <View style={styles.Viewc992f941}>
                {/* Label */}
                <Text
                  style={[
                    styles.Text4d71caa5,
                    { color: theme.colors.lightGrey },
                  ]}
                >
                  {'To*'}
                </Text>
                {/* inputFrame */}
                <View
                  style={[
                    styles.View02cf3ec0,
                    { backgroundColor: theme.colors.grayLine, borderRadius: 6 },
                  ]}
                >
                  {/* toDate */}
                  <DatePicker
                    onDateChange={newToDateValue => {
                      try {
                        setToDate(newToDateValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    date={toDate}
                    label={'Date'}
                    mode={'date'}
                    leftIconMode={'inset'}
                    type={'solid'}
                  />
                </View>
              </View>
            </View>
            {/* Error */}
            <Text style={[styles.Textc75d0303, { color: theme.colors.error }]}>
              {dateError}
            </Text>
          </View>
          {/* Description Section */}
          <View style={styles.View6728d304}>
            {/* Label */}
            <Text
              style={[styles.Text053f977e, { color: theme.colors.lightGrey }]}
            >
              {'Write a description'}
            </Text>
            {/* inputFrame */}
            <View
              style={[
                styles.View5f6fdb8f,
                { backgroundColor: theme.colors.grayLine, borderRadius: 8 },
              ]}
            >
              {/* descriptionLongForm */}
              <TextInput
                onChangeText={newDescriptionLongFormValue => {
                  try {
                    setDescription(newDescriptionLongFormValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInput6a384b99,
                  {
                    borderColor: theme.colors.divider,
                    color: theme.colors.lightGrey,
                    backgroundColor: theme.colors.grayLine,
                  },
                ]}
                placeholder={'Add some details'}
                value={description}
                multiline={true}
                numberOfLines={5}
                placeholderTextColor={theme.colors.lightGrey}
                autoCapitalize={'sentences'}
              />
              {/* Error */}
              <Text
                style={[styles.Textc75d0303, { color: theme.colors.error }]}
              >
                {descriptionError}
              </Text>
            </View>
          </View>
          {/* locationFrame */}
          <View style={styles.View6728d304}>
            {/* Label */}
            <Text
              style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
            >
              {'Location*'}
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
                    setLocation(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInput071ba471,
                  {
                    borderColor: theme.colors.grayLine,
                    backgroundColor: theme.colors.grayLine,
                    color: theme.colors.lightGrey,
                  },
                ]}
                placeholder={'Location'}
                value={location}
              />
            </View>
          </View>
          {/* LearningResources */}
          <View style={styles.View6728d304}>
            {/* Label */}
            <Text
              style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
            >
              {'What Learning resources did you use?'}
            </Text>
            {/* inputFrame */}
            <View
              style={[
                styles.Viewadc997a1,
                { backgroundColor: theme.colors.grayLine, borderRadius: 6 },
              ]}
            >
              {/* descriptionLongForm */}
              <TextInput
                onChangeText={newDescriptionLongFormValue => {
                  try {
                    setLearningResources(newDescriptionLongFormValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInput8095e8be,
                  {
                    borderColor: theme.colors.divider,
                    color: theme.colors.text,
                    backgroundColor: theme.colors.grayLine,
                  },
                ]}
                placeholder={'Add some details'}
                value={learningResources}
                multiline={true}
                numberOfLines={5}
                placeholderTextColor={theme.colors.lightGrey}
              />
            </View>
          </View>
          {/* Add Collaborators Sections */}
          <View style={styles.View6728d304}>
            {/* Top Line Frame */}
            <View style={styles.Viewe97d9bb1}>
              {/* Label */}
              <Text
                style={[styles.Text37028932, { color: theme.colors.lightGrey }]}
              >
                {'Collaborators'}
              </Text>
              {/* helpLabel */}
              <Text
                style={[styles.Text0c4e24d7, { color: theme.colors.lightGrey }]}
              >
                {"Can't find someone?"}
                <Link
                  style={[
                    styles.Link5861ea05,
                    { color: theme.colors.secondary },
                  ]}
                  title={'Send an invite.'}
                />
              </Text>
            </View>

            <Touchable
              onPress={() => {
                try {
                  setShowCollaboratorModel(!showCollaboratorModel);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchablee7d21060}
            >
              {/* inputFrame */}
              <View
                style={[
                  styles.View209564d9,
                  { backgroundColor: theme.colors.grayLine },
                ]}
              >
                {/* filledView */}
                <>
                  {!collaboratorsIDArray?.length ? null : (
                    <View
                      style={[
                        styles.View5601fd8e,
                        { backgroundColor: theme.colors.grayLine },
                      ]}
                    >
                      <FlatList
                        data={collaboratorsIDArray}
                        listKey={'T0nWIHy1'}
                        keyExtractor={item => item?.id || item?.uuid || item}
                        renderItem={({ item }) => {
                          const listData = item;
                          return (
                            <View
                              style={[
                                styles.Viewbb8d5822,
                                {
                                  borderRadius: 28,
                                  backgroundColor: theme.colors.background,
                                },
                              ]}
                            >
                              <CircleImage
                                style={styles.CircleImage8bd683a8}
                                source={{ uri: `${listData?.profile_picture}` }}
                                size={24}
                              />
                              {/* FilledText */}
                              <Text
                                style={[
                                  styles.Text44328e3a,
                                  { color: theme.colors.strong },
                                ]}
                              >
                                {listData?.username}
                              </Text>
                              <IconButton
                                onPress={() => {
                                  try {
                                    const newArray = removeItemFromArray(
                                      collaboratorsIDArray,
                                      listData,
                                      'user_id'
                                    );

                                    const valuev7bGSWMu = newArray;
                                    setCollaboratorsIDArray(valuev7bGSWMu);
                                    const test = valuev7bGSWMu;
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={styles.IconButtonda2fc39f}
                                icon={'Entypo/circle-with-cross'}
                                size={16}
                                color={theme.colors.strong}
                              />
                            </View>
                          );
                        }}
                        style={styles.FlatListb320c616}
                        contentContainerStyle={styles.FlatListb320c616Content}
                        numColumns={1}
                        horizontal={true}
                      />
                    </View>
                  )}
                </>
                {/* Default */}
                <>
                  {collaboratorsIDArray?.length ? null : (
                    <Text
                      style={[
                        styles.Texte9d8dc69,
                        { color: theme.colors.strong },
                      ]}
                    >
                      {'  @username'}
                    </Text>
                  )}
                </>
              </View>
            </Touchable>
          </View>
          {/* mentorsFrame */}
          <View style={styles.View6728d304}>
            {/* Top Line Frame */}
            <View style={styles.Viewe97d9bb1}>
              {/* Label */}
              <Text
                style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
              >
                {'Mentors'}
              </Text>
              {/* helpLabel */}
              <Text
                style={[styles.Text0c4e24d7, { color: theme.colors.lightGrey }]}
              >
                {"Can't find someone?"}
                <Link
                  style={[
                    styles.Link5861ea05,
                    { color: theme.colors.secondary },
                  ]}
                  title={'Send an invite.'}
                />
              </Text>
            </View>
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
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInput071ba471,
                  {
                    borderColor: theme.colors.grayLine,
                    backgroundColor: theme.colors.grayLine,
                    color: theme.colors.lightGrey,
                  },
                ]}
                placeholder={'@friends_username'}
                value={textInputValue}
              />
            </View>
          </View>
          {/* External Link Setup Section */}
          <View style={styles.View6728d304}>
            {/* Label */}
            <Text
              style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
            >
              {'External Link'}
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
                    setExternalLink(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInput539c7e08,
                  {
                    borderColor: theme.colors.grayLine,
                    backgroundColor: theme.colors.grayLine,
                    color: theme.colors.text,
                  },
                ]}
                placeholder={'https://example.com /'}
                value={externalLink}
                autoCapitalize={'none'}
                keyboardType={'url'}
              />
            </View>
          </View>
          {/* skillTagsFrame */}
          <View style={styles.View6728d304}>
            {/* Label */}
            <Text
              style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
            >
              {'Skill Tags'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  setShowTagsModal(!showTagsModal);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchablee7d21060}
            >
              {/* inputFrame */}
              <View
                style={[
                  styles.View209564d9,
                  { backgroundColor: theme.colors.grayLine },
                ]}
              >
                {/* filledView */}
                <>
                  {!collaboratorsIDArray?.length ? null : (
                    <View
                      style={[
                        styles.View8deffbf3,
                        { backgroundColor: theme.colors.grayLine },
                      ]}
                    >
                      <FlatList
                        data={selectedTags}
                        listKey={'DMUj5Etw'}
                        keyExtractor={item => item?.id || item?.uuid || item}
                        renderItem={({ item }) => {
                          const listData = item;
                          return (
                            <View
                              style={[
                                styles.Viewbb8d5822,
                                {
                                  borderRadius: 28,
                                  backgroundColor: theme.colors.background,
                                },
                              ]}
                            >
                              <CircleImage
                                style={styles.CircleImage8bd683a8}
                                source={{ uri: `${listData?.profile_picture}` }}
                                size={24}
                              />
                              {/* FilledText */}
                              <Text
                                style={[
                                  styles.Text44328e3a,
                                  { color: theme.colors.strong },
                                ]}
                              >
                                {listData?.username}
                              </Text>
                              <IconButton
                                onPress={() => {
                                  try {
                                    const newArray = removeItemFromArray(
                                      collaboratorsIDArray,
                                      listData,
                                      'user_id'
                                    );

                                    const valueleVSfbxe = newArray;
                                    setCollaboratorsIDArray(valueleVSfbxe);
                                    const test = valueleVSfbxe;
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={styles.IconButtonda2fc39f}
                                icon={'Entypo/circle-with-cross'}
                                size={16}
                                color={theme.colors.strong}
                              />
                            </View>
                          );
                        }}
                        style={styles.FlatListb320c616}
                        contentContainerStyle={styles.FlatListb320c616Content}
                        numColumns={1}
                        horizontal={true}
                      />
                    </View>
                  )}
                </>
                {/* Default */}
                <>
                  {selectedTags?.length ? null : (
                    <Text
                      style={[
                        styles.Texte9d8dc69,
                        { color: theme.colors.strong },
                      ]}
                    >
                      {'Add Skills'}
                    </Text>
                  )}
                </>
              </View>
            </Touchable>
          </View>
          {/* Setup Images Section */}
          <View style={styles.Viewdaace307}>
            {/* buttonTouchable */}
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    const selectedImage = await Utils.openImagePicker({});
                    setSelectedImageVariable(selectedImage);
                    const Test = AddImagetoArray(selectedImage);

                    const valueT9Ksq6dE = Test;
                    setImageArray(valueT9Ksq6dE);
                    const abc = valueT9Ksq6dE;
                    console.log(abc);
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              {/* buttonFrame */}
              <View
                style={[
                  styles.View0aa81b12,
                  {
                    borderRadius: 16,
                    borderColor: theme.colors.custom_rgb188_190_193,
                  },
                ]}
              >
                <Icon
                  name={'Ionicons/add'}
                  size={12}
                  color={theme.colors.custom_rgb188_190_193}
                />
                <Text
                  style={[
                    styles.Textbf9c145e,
                    { color: theme.colors.lightGrey },
                  ]}
                >
                  {'Images'}
                </Text>
              </View>
            </Touchable>
            <FlatList
              data={imageArray}
              listKey={'oFzJDgvi'}
              keyExtractor={item => item?.id || item?.uuid || item}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <>
                    {/* ImageView */}
                    <>
                      {!selectedImageVariable?.length ? null : (
                        <View style={styles.Viewdebd3207}>
                          <Image
                            style={styles.Imaged06b86ef}
                            source={{ uri: `${listData?.data}` }}
                            resizeMode={'cover'}
                          />
                          <IconButton
                            onPress={() => {
                              try {
                                const newArray = removeImagefromArray(listData);

                                const valueeqlD57cq = newArray;
                                setImageArray(valueeqlD57cq);
                                const test = valueeqlD57cq;
                                console.log(test);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={styles.IconButton29534911}
                            icon={'Entypo/circle-with-cross'}
                            size={16}
                            color={theme.colors.custom_rgb0_0_0}
                          />
                        </View>
                      )}
                    </>
                  </>
                );
              }}
              contentContainerStyle={styles.FlatListd737eb47Content}
              numColumns={1}
              horizontal={true}
            />
          </View>
          {/* Divider */}
          <View style={styles.Viewa3bf44d1}>
            {/* divider */}
            <View
              style={[
                styles.Viewb58230c0,
                { backgroundColor: theme.colors.grayLine },
              ]}
            />
          </View>
          {/* Publish to Portfolio Section */}
          <View style={styles.Viewf315d1fb}>
            <Text style={[styles.Text150de917, { color: theme.colors.text }]}>
              {'Publish to Portfolio'}
            </Text>
            <Switch
              onValueChange={newSwitchValue => {
                try {
                  setPublishToPortfolio(newSwitchValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              value={publishToPortfolio}
            />
          </View>
          {/* Save Changes Call to Actions */}
          <View style={styles.View137fd8a7}>
            {/* cancelLink */}
            <Link
              onPress={() => {
                try {
                  navigation.navigate('ProfileScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.Link091e096b, { color: theme.colors.text }]}
              title={'Cancel'}
            />
            {/* saveLink */}
            <>
              {learningExperience?.length ? null : (
                <Link
                  onPress={() => {
                    const handler = async () => {
                      try {
                        if (validateInputs()) {
                          return;
                        }
                        setIsLoading(true);
                        const uploadImageResult = await uploadMultipleImages(
                          imageArray
                        );
                        await restAPISupabaseAddAPortfolioPostPOST.mutateAsync({
                          collabs: collaboratorsIDArray,
                          desc: description,
                          externalURL: externalLink,
                          from_date: fromDate,
                          imagesArray: imagesUploadArray,
                          isPublic: publishToPortfolio,
                          title: learningExperience,
                          to_date: toDate,
                          type: typeOfProject,
                          userId: Constants['UUID'],
                        });
                        setIsLoading(false);
                        navigation.navigate('ProfileScreen');
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  style={[
                    styles.Link884e3189,
                    { color: theme.colors.custom_rgb188_190_193 },
                  ]}
                  title={'Save'}
                />
              )}
            </>
            <>
              {!learningExperience?.length ? null : (
                <View>
                  {/* saveLink */}
                  <>
                    {isLoading ? null : (
                      <Link
                        onPress={() => {
                          const handler = async () => {
                            try {
                              if (validateInputs()) {
                                return;
                              }
                              setIsLoading(true);
                              const uploadImageResult =
                                await uploadMultipleImages(imageArray);

                              const valueStYR6bfK = uploadImageResult;
                              setImagesUploadArray(valueStYR6bfK);
                              const sendThisOne = valueStYR6bfK;
                              await restAPISupabaseAddAPortfolioPostPOST.mutateAsync(
                                {
                                  collabs: collaboratorsIDArray,
                                  desc: description,
                                  externalURL: externalLink,
                                  from_date: fromDate,
                                  imagesArray: sendThisOne,
                                  isPublic: publishToPortfolio,
                                  title: learningExperience,
                                  to_date: toDate,
                                  type: typeOfProject,
                                  userId: Constants['UUID'],
                                }
                              );
                              setIsLoading(false);
                              navigation.navigate('ProfileScreen');
                            } catch (err) {
                              console.error(err);
                            }
                          };
                          handler();
                        }}
                        style={[
                          styles.Linkeaa14373,
                          { color: theme.colors.custom_rgb17_17_17 },
                        ]}
                        title={'Save'}
                      />
                    )}
                  </>
                  {/* savingLink */}
                  <>
                    {!isLoading ? null : (
                      <Link
                        style={[
                          styles.Link0e737584,
                          { color: theme.colors.custom_rgb0_128_0 },
                        ]}
                        title={'Saving Post...'}
                      />
                    )}
                  </>
                </View>
              )}
            </>
          </View>
        </View>
        {/* Modal Collaborator */}
        <Modal
          visible={showCollaboratorModel}
          animationType={'none'}
          transparent={true}
        >
          {/* Collabs */}
          <View
            style={[
              styles.View46d0a844,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View>
              <View style={styles.View1c9c923b}>
                <Text
                  style={[styles.Textf60fff8b, { color: theme.colors.strong }]}
                >
                  {'Select A Collaborator'}
                </Text>
                <IconButton
                  onPress={() => {
                    try {
                      setShowCollaboratorModel(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  icon={'Entypo/circle-with-cross'}
                  size={32}
                  color={theme.colors.custom_rgb0_0_0}
                />
              </View>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setUsernameSearch(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInputa3ba74e4,
                  { borderColor: theme.colors.divider },
                ]}
                value={usernameSearch}
                placeholder={'Enter a value...'}
              />
            </View>
            <FlatList
              data={FilterUsernames(collaboratorsList)}
              listKey={'vb1ILtaV'}
              keyExtractor={item => item?.id || item?.uuid || item}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <View style={styles.View02a568ec}>
                    <Touchable
                      onPress={() => {
                        try {
                          setShowCollaboratorModel(false);
                          const addedCollabToArray =
                            addCollaboratorToArray(listData);

                          const value07jixZJ9 = addedCollabToArray;
                          setCollaboratorsIDArray(value07jixZJ9);
                          const test = value07jixZJ9;
                          console.log(test);
                          setUsernameSearch('');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View style={[styles.View2cc54530, { borderRadius: 28 }]}>
                        <CircleImage
                          style={styles.CircleImage8bd683a8}
                          size={24}
                          source={{ uri: `${listData?.profile_picture}` }}
                        />
                        <Text
                          style={[
                            styles.Textd1cb507d,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {listData?.username}
                        </Text>
                      </View>
                    </Touchable>
                  </View>
                );
              }}
              contentContainerStyle={styles.FlatListc992f941Content}
              numColumns={1}
            />
          </View>
        </Modal>
        {/* Modal Tags */}
        <Modal
          visible={showTagsModal}
          animationType={'none'}
          transparent={true}
        >
          {/* Tags */}
          <View
            style={[
              styles.View46d0a844,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View>
              <View style={styles.View1c9c923b}>
                <Text
                  style={[styles.Textf60fff8b, { color: theme.colors.strong }]}
                >
                  {'Select A Collaborator'}
                </Text>
                <IconButton
                  onPress={() => {
                    try {
                      setShowTagsModal(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  icon={'Entypo/circle-with-cross'}
                  size={32}
                  color={theme.colors.custom_rgb0_0_0}
                />
              </View>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setUsernameSearch(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInputa3ba74e4,
                  { borderColor: theme.colors.divider },
                ]}
                value={usernameSearch}
                placeholder={'Enter a value...'}
              />
            </View>
            <FlatList
              data={filterTags(tagsArray)}
              listKey={'GoWL1y2b'}
              keyExtractor={item => item?.id || item?.uuid || item}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <View style={styles.View02a568ec}>
                    <Touchable
                      onPress={() => {
                        try {
                          setShowCollaboratorModel(false);
                          const addedCollabToArray =
                            addCollaboratorToArray(listData);

                          const value7pjRvY7G = addedCollabToArray;
                          setCollaboratorsIDArray(value7pjRvY7G);
                          const test = value7pjRvY7G;
                          console.log(test);
                          setUsernameSearch('');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View style={[styles.View2cc54530, { borderRadius: 28 }]}>
                        <Text
                          style={[
                            styles.Textd1cb507d,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {listData?.name}
                        </Text>
                      </View>
                    </Touchable>
                  </View>
                );
              }}
              contentContainerStyle={styles.FlatListc992f941Content}
              numColumns={1}
            />
          </View>
        </Modal>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  CircleImage8bd683a8: {
    marginRight: 6,
  },
  FlatListb320c616: {
    width: '100%',
  },
  FlatListb320c616Content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 6,
  },
  FlatListc992f941Content: {
    flex: 1,
  },
  FlatListd737eb47Content: {
    flex: 1,
    flexWrap: 'wrap',
  },
  IconButton29534911: {
    marginLeft: 12,
  },
  IconButtonda2fc39f: {
    marginLeft: 6,
  },
  Imaged06b86ef: {
    height: 100,
    width: 100,
  },
  KeyboardAwareScrollView721b19b7Content: {
    marginTop: 12,
    paddingBottom: 36,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 16,
  },
  Link091e096b: {
    fontFamily: 'Montserrat_400Regular',
    marginRight: 6,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 9,
  },
  Link0e737584: {
    fontFamily: 'Montserrat_700Bold',
    marginRight: 6,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 9,
  },
  Link5861ea05: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    lineHeight: 14.52,
    marginLeft: 6,
  },
  Link884e3189: {
    fontFamily: 'Montserrat_700Bold',
    marginRight: 6,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 9,
  },
  Linkeaa14373: {
    fontFamily: 'Montserrat_700Bold',
    marginRight: 6,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 9,
  },
  Text0486d022: {
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
  },
  Text053f977e: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19.36,
  },
  Text0c4e24d7: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    lineHeight: 14.52,
  },
  Text150de917: {
    fontFamily: 'Inter_500Medium',
    lineHeight: 17,
  },
  Text1928d953: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
  },
  Text37028932: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
  },
  Text44328e3a: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
  },
  Text4d71caa5: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19.36,
    marginBottom: 6,
  },
  TextInput071ba471: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 17,
    paddingBottom: 9,
    paddingLeft: 12,
    paddingRight: 9,
    paddingTop: 9,
  },
  TextInput539c7e08: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 17,
    paddingBottom: 9,
    paddingLeft: 12,
    paddingRight: 9,
    paddingTop: 9,
  },
  TextInput6a384b99: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Montserrat_400Regular',
    height: '100%',
    lineHeight: 17.07,
    paddingBottom: 9,
    paddingLeft: 16,
    paddingRight: 9,
    paddingTop: 12,
  },
  TextInput8095e8be: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Montserrat_400Regular',
    height: '100%',
    lineHeight: 17,
    paddingBottom: 9,
    paddingLeft: 12,
    paddingRight: 9,
    paddingTop: 9,
  },
  TextInputa3ba74e4: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Inter_400Regular',
    marginBottom: 16,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  TextInputa9d32b61: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 17,
    paddingBottom: 9,
    paddingLeft: 12,
    paddingRight: 9,
    paddingTop: 9,
  },
  Textbf9c145e: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14,
    marginLeft: 4,
  },
  Textc75d0303: {
    fontFamily: 'Montserrat_400Regular',
  },
  Textd1cb507d: {
    fontFamily: 'Inter_400Regular',
  },
  Textd8063e63: {
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
  },
  Textdf6a4e51: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    lineHeight: 24.2,
    paddingLeft: 12,
  },
  Texte9d8dc69: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
  },
  Textf60fff8b: {
    fontFamily: 'Inter_600SemiBold',
  },
  Touchable8bd683a8: {
    marginRight: 6,
  },
  Touchablee7d21060: {
    height: '100%',
    minHeight: 50,
    width: '100%',
  },
  View00a48c51: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
  },
  View02a568ec: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  View02cf3ec0: {
    overflow: 'hidden',
  },
  View0aa81b12: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 6,
  },
  View137fd8a7: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
    paddingBottom: 12,
    paddingTop: 12,
  },
  View18c69117: {
    flex: 1,
    flexDirection: 'row',
  },
  View1c9c923b: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 6,
    paddingTop: 16,
  },
  View209564d9: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    paddingBottom: 6,
    width: '100%',
  },
  View2964c6ed: {
    height: 41,
    marginTop: 8,
    overflow: 'hidden',
  },
  View298b43d8: {
    flex: 1,
    marginRight: 12,
  },
  View298bd5d3: {
    marginTop: 6,
    overflow: 'hidden',
  },
  View2cc54530: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 6,
    marginTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 6,
  },
  View3f6225c1: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
  },
  View46d0a844: {
    alignSelf: 'center',
    bottom: 1,
    flex: 1,
    height: '70%',
    position: 'absolute',
    width: '87%',
    zIndex: 10,
  },
  View5253684f: {
    overflow: 'hidden',
  },
  View5601fd8e: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    marginLeft: 6,
    marginTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 6,
  },
  View5f6fdb8f: {
    height: 169,
    marginTop: 8,
    overflow: 'hidden',
  },
  View6728d304: {
    marginTop: 16,
  },
  View686558a6: {
    flexDirection: 'row',
    marginTop: 8,
  },
  View8bdb860c: {
    marginTop: 17,
  },
  View8deffbf3: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    marginLeft: 6,
    marginTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 6,
  },
  Viewa3bf44d1: {
    flex: 1,
    marginTop: 16,
  },
  Viewadc997a1: {
    height: 169,
    marginTop: 6,
    overflow: 'hidden',
  },
  Viewb58230c0: {
    height: '100%',
    width: 1,
  },
  Viewbb8d5822: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 6,
    marginRight: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 6,
  },
  Viewc992f941: {
    flex: 1,
  },
  Viewdaace307: {
    alignItems: 'flex-start',
    marginTop: 16,
  },
  Viewdebd3207: {
    flexDirection: 'row',
  },
  Viewdf9865cc: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
  },
  Viewe97d9bb1: {
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Viewf315d1fb: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
    marginTop: 16,
    paddingBottom: 6.5,
    paddingTop: 6.5,
  },
  screen: {
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
  },
});

export default withTheme(AddPostALCopyScreen);
