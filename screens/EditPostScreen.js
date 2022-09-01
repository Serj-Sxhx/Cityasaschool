import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
  ButtonSolid,
  DatePicker,
  Icon,
  IconButton,
  Link,
  ScreenContainer,
  Spacer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const EditPostScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setCollaborator = (postDetails, collaboratorsList) => {
    console.log(collaboratorsList);
    if (postDetails[0].collaborators) {
      const collaborators = collaboratorsList.find(
        item => postDetails[0].collaborators[0] === item.user_id
      );
      setCollaborators(collaborators ? collaborators.username : '');
      setCollaboratorsIdArray([...postDetails[0].collaborators]);
    }
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

    return [
      'https://qthvouonhshkvbaugrhc.supabase.co/storage/v1/object/public/' +
        data.Key,
    ];
  };

  const validateInput = () => {
    let foundError = false;
    if (learningExperience.length < 0) {
      setLearningExperienceError('Title cannot be empty!');
      foundError = true;
    } else {
      setLearningExperienceError('');
    }

    if (endDate < fromDate) {
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

  const addCollaboratorsToArray = id => {
    return [...collaboratorsIdArray, id];
  };

  const setPostData = postDetails => {
    const postType = postDetails[0].Type;
    if (postType === 'Project') {
      setPostType2(true);
      setPostType1(false);
      setPostType3(false);
    } else if (postType === 'Work Experience') {
      setPostType1(true);
      setPostType2(false);
      setPostType3(false);
    } else if (postType === 'Post') {
      setPostType3(true);
      setPostType2(false);
      setPostType1(false);
    }
    console.log(postDetails[0].to_date, postDetails[0].from_date);
    setLearningExperience(postDetails[0].title);
    setFromDate(new Date(postDetails[0].from_date));
    setEndDate(new Date(postDetails[0].to_date));
    setDescription(postDetails[0].description);
    setExternalLink(postDetails[0].external_url);
    setPublishToPortfolio(postDetails[0].is_public);
    const image = postDetails[0].imagesArray
      ? postDetails[0].imagesArray[0].includes('http')
        ? postDetails[0].imagesArray[0]
        : ''
      : '';
    setSelectedImageVariable(image);
  };

  const { theme } = props;
  const { navigation } = props;

  const restAPISupabaseUpdateAPostPATCH =
    RestAPISupabaseApi.useUpdateAPostPATCH();

  const [allCollaborators, setAllCollaborators] = React.useState([]);
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [collaborators, setCollaborators] = React.useState('');
  const [collaboratorsIdArray, setCollaboratorsIdArray] = React.useState([]);
  const [dateError, setDateError] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [datePickerValue2, setDatePickerValue2] = React.useState(new Date());
  const [description, setDescription] = React.useState('');
  const [descriptionError, setDescriptionError] = React.useState('');
  const [endDate, setEndDate] = React.useState(new Date());
  const [externalLink, setExternalLink] = React.useState('');
  const [fromDate, setFromDate] = React.useState(new Date());
  const [isLoading, setIsLoading] = React.useState(false);
  const [learningExperience, setLearningExperience] = React.useState('');
  const [learningExperienceError, setLearningExperienceError] =
    React.useState('');
  const [learningResources, setLearningResources] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [postImages, setPostImages] = React.useState([]);
  const [postToEdit, setPostToEdit] = React.useState({
    id: 4,
    Type: 'Project',
    tags: null,
    title: 'Test',
    to_date: '2022-08-25',
    user_id: 'ee599a9a-c796-44c3-86ed-20a3c35ecce9',
    location: 'London',
    from_date: '2022-08-17',
    is_public: true,
    created_at: '2022-08-12T12:07:02+00:00',
    description: 'aaaa',
    imagesArray: null,
    external_url: 'test',
  });
  const [postType1, setPostType1] = React.useState(true);
  const [postType2, setPostType2] = React.useState(false);
  const [postType3, setPostType3] = React.useState(false);
  const [publishToPortfolio, setPublishToPortfolio] = React.useState(false);
  const [selectedImageVariable, setSelectedImageVariable] = React.useState('');
  const [showCollaboratorModel, setShowCollaboratorModel] =
    React.useState(false);
  const [switchValue, setSwitchValue] = React.useState(false);
  const [switchValue2, setSwitchValue2] = React.useState(false);
  const [switchValue3, setSwitchValue3] = React.useState(false);
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
      <RestAPISupabaseApi.FetchGetSInglePostGET
        id={props.route?.params?.postID ?? 4}
        onData={fetchData => {
          const handler = async () => {
            try {
              setPostData(fetchData);
              const allCollaborators =
                await RestAPISupabaseApi.getCollaboratorsListGET(Constants, {
                  userId: Constants['UUID'],
                });
              setCollaborator(fetchData, allCollaborators);
            } catch (err) {
              console.error(err);
            }
          };
          handler();
        }}
      >
        {({ loading, error, data, refetchGetSInglePost }) => {
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
              listKey={'jcJ3L9me'}
              keyExtractor={item => item?.id || item?.uuid || item}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <KeyboardAwareScrollView
                    style={{
                      backgroundColor: theme.colors.custom_rgb255_255_255,
                      borderTopRightRadius: 12,
                      borderTopLeftRadius: 12,
                    }}
                    contentContainerStyle={
                      styles.KeyboardAwareScrollView43486cc4Content
                    }
                    extraScrollHeight={72}
                  >
                    {/* Container */}
                    <View>
                      {/* topTitleFrame */}
                      <View style={styles.Viewe27b451b}>
                        <IconButton
                          onPress={() => {
                            try {
                              navigation.goBack();
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          icon={'Entypo/chevron-left'}
                          size={24}
                          color={theme.colors.dark}
                        />
                        <Text
                          style={[
                            styles.Textf37ed692,
                            { color: theme.colors.text },
                          ]}
                        >
                          {'Edit learning experience'}
                        </Text>
                      </View>
                      {/* Choosing Post Type */}
                      <View style={styles.View6728d304}>
                        {/* Label */}
                        <Text
                          style={[
                            styles.Text1928d953,
                            { color: theme.colors.lightGrey },
                          ]}
                        >
                          {'What type of post is this?'}
                        </Text>
                        {/* tagsListFrame */}
                        <View style={styles.View1c2db0dd}>
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
                                        {
                                          color:
                                            theme.colors.custom_rgb255_255_255,
                                        },
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
                                        {
                                          color:
                                            theme.colors.custom_rgb130_130_130,
                                        },
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
                                        {
                                          color:
                                            theme.colors.custom_rgb130_130_130,
                                        },
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
                                        {
                                          color:
                                            theme.colors.custom_rgb255_255_255,
                                        },
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
                                        {
                                          color:
                                            theme.colors.custom_rgb130_130_130,
                                        },
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
                                        {
                                          color:
                                            theme.colors.custom_rgb255_255_255,
                                        },
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
                      {/* Title of Experience */}
                      <View style={styles.Viewf8304bf6}>
                        {/* Label */}
                        <Text
                          style={[
                            styles.Text1928d953,
                            { color: theme.colors.lightGrey },
                          ]}
                        >
                          {'Learning Experience Title'}
                        </Text>
                        {/* inputFrame */}
                        <View
                          style={[
                            styles.View298bd5d3,
                            {
                              backgroundColor: theme.colors.grayLine,
                              borderRadius: 6,
                            },
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
                              styles.TextInput77cabf79,
                              {
                                borderColor: theme.colors.grayLine,
                                backgroundColor: theme.colors.grayLine,
                                color: theme.colors.text,
                              },
                            ]}
                            placeholder={'Give your post a title'}
                            value={learningExperience}
                          />
                        </View>
                        {/* Error */}
                        <Text
                          style={[
                            styles.Textc75d0303,
                            { color: theme.colors.error },
                          ]}
                        >
                          {learningExperienceError}
                        </Text>
                      </View>
                      {/* Time Frame of the Experience */}
                      <View style={styles.Viewf8304bf6}>
                        <View style={styles.Viewdebd3207}>
                          {/* fieldOneFrame */}
                          <View style={styles.View298b43d8}>
                            {/* Label */}
                            <Text
                              style={[
                                styles.Text78989fef,
                                { color: theme.colors.lightGrey },
                              ]}
                            >
                              {'From*'}
                            </Text>
                            {/* inputFrame */}
                            <View
                              style={[
                                styles.View02cf3ec0,
                                {
                                  backgroundColor: theme.colors.grayLine,
                                  borderRadius: 6,
                                },
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
                                styles.Text78989fef,
                                { color: theme.colors.lightGrey },
                              ]}
                            >
                              {'To*'}
                            </Text>
                            {/* inputFrame */}
                            <View
                              style={[
                                styles.View02cf3ec0,
                                {
                                  backgroundColor: theme.colors.grayLine,
                                  borderRadius: 6,
                                },
                              ]}
                            >
                              {/* toDate */}
                              <DatePicker
                                onDateChange={newToDateValue => {
                                  try {
                                    setEndDate(newToDateValue);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                date={endDate}
                                label={'Date'}
                                mode={'date'}
                                leftIconMode={'inset'}
                                type={'solid'}
                              />
                            </View>
                          </View>
                        </View>
                        {/* Error */}
                        <Text
                          style={[
                            styles.Textc75d0303,
                            { color: theme.colors.error },
                          ]}
                        >
                          {dateError}
                        </Text>
                      </View>
                      {/* Description of the Experience */}
                      <View style={styles.Viewf8304bf6}>
                        {/* Label */}
                        <Text
                          style={[
                            styles.Text1928d953,
                            { color: theme.colors.lightGrey },
                          ]}
                        >
                          {'Write a description'}
                        </Text>
                        {/* inputFrame */}
                        <View
                          style={[
                            styles.Viewadc997a1,
                            {
                              backgroundColor: theme.colors.grayLine,
                              borderRadius: 6,
                            },
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
                              styles.TextInput8095e8be,
                              {
                                borderColor: theme.colors.divider,
                                color: theme.colors.text,
                                backgroundColor: theme.colors.grayLine,
                              },
                            ]}
                            placeholder={'Add some details'}
                            value={description}
                            multiline={true}
                            numberOfLines={5}
                            placeholderTextColor={theme.colors.lightGrey}
                          />
                        </View>
                        {/* Error */}
                        <Text
                          style={[
                            styles.Textc75d0303,
                            { color: theme.colors.error },
                          ]}
                        >
                          {descriptionError}
                        </Text>
                      </View>
                      {/* The Collaborators */}
                      <View style={styles.Viewf8304bf6}>
                        {/* Top Line Frame */}
                        <View style={styles.Viewe97d9bb1}>
                          {/* Label */}
                          <Text
                            style={[
                              styles.Text1928d953,
                              { color: theme.colors.lightGrey },
                            ]}
                          >
                            {'Collaborators'}
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
                          style={styles.Touchable1315ec75}
                        >
                          {/* inputFrame */}
                          <View
                            style={[
                              styles.View990e93a9,
                              {
                                backgroundColor: theme.colors.grayLine,
                                borderRadius: 6,
                              },
                            ]}
                          >
                            {/* filledView */}
                            <>
                              {!collaborators?.length ? null : (
                                <View
                                  style={[
                                    styles.View4053945e,
                                    {
                                      backgroundColor: theme.colors.surface,
                                      borderRadius: 18,
                                    },
                                  ]}
                                >
                                  {/* FilledText */}
                                  <Text
                                    style={[
                                      styles.Text44328e3a,
                                      { color: theme.colors.strong },
                                    ]}
                                  >
                                    {collaborators}
                                  </Text>
                                  <IconButton
                                    onPress={() => {
                                      try {
                                        setCollaborators('');
                                        setCollaboratorsIdArray([]);
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                    style={styles.IconButton29534911}
                                    icon={'Entypo/circle-with-cross'}
                                    size={16}
                                    color={theme.colors.strong}
                                  />
                                </View>
                              )}
                            </>
                            {/* Default */}
                            <>
                              {collaborators?.length ? null : (
                                <Text
                                  style={[
                                    styles.Texta5b33fc9,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {'@username'}
                                </Text>
                              )}
                            </>
                          </View>
                        </Touchable>
                      </View>
                      {/* External Link */}
                      <View style={styles.Viewf8304bf6}>
                        {/* Label */}
                        <Text
                          style={[
                            styles.Text1928d953,
                            { color: theme.colors.lightGrey },
                          ]}
                        >
                          {'External Link'}
                        </Text>
                        {/* inputFrame */}
                        <View
                          style={[
                            styles.View298bd5d3,
                            {
                              backgroundColor: theme.colors.grayLine,
                              borderRadius: 6,
                            },
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
                              styles.TextInput77cabf79,
                              {
                                borderColor: theme.colors.grayLine,
                                backgroundColor: theme.colors.grayLine,
                                color: theme.colors.text,
                              },
                            ]}
                            placeholder={'https://example.com /'}
                            value={externalLink}
                          />
                        </View>
                      </View>
                      {/* New Images to Experience */}
                      <View style={styles.View16c57f16}>
                        {/* buttonTouchable */}
                        <>
                          {selectedImageVariable?.length ? null : (
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const selectedImage =
                                      await Utils.openImagePicker({});
                                    setSelectedImageVariable(selectedImage);
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
                                    borderColor:
                                      theme.colors.custom_rgb188_190_193,
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
                          )}
                        </>
                        {/* ImageView */}
                        <>
                          {!selectedImageVariable?.length ? null : (
                            <View style={styles.Viewdebd3207}>
                              <Image
                                style={styles.Imaged06b86ef}
                                source={{ uri: `${selectedImageVariable}` }}
                                resizeMode={'cover'}
                              />
                              <IconButton
                                onPress={() => {
                                  try {
                                    setSelectedImageVariable('');
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
                      </View>
                      {/* Divider Section */}
                      <View style={styles.Viewe93c4254}>
                        {/* divider */}
                        <View
                          style={[
                            styles.Viewb58230c0,
                            { backgroundColor: theme.colors.grayLine },
                          ]}
                        />
                      </View>
                      {/* Publish to Profile Section */}
                      <View style={styles.Viewd93708ee}>
                        <Text
                          style={[
                            styles.Text150de917,
                            { color: theme.colors.text },
                          ]}
                        >
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
                      {/* Saving Changes Section Call to Action */}
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
                          style={[
                            styles.Link091e096b,
                            { color: theme.colors.text },
                          ]}
                          title={'Cancel'}
                        />
                        {/* saveLink */}
                        <>
                          {learningExperience?.length ? null : (
                            <Link
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
                                          if (validateInput()) {
                                            return;
                                          }
                                          setIsLoading(true);
                                          const uploadImageResult =
                                            await uploadImages(
                                              selectedImageVariable
                                            );
                                          await restAPISupabaseUpdateAPostPATCH.mutateAsync(
                                            {
                                              collabs: collaboratorsIdArray,
                                              desc: description,
                                              externalURL: externalLink,
                                              from_date: fromDate,
                                              id:
                                                props.route?.params?.postID ??
                                                4,
                                              imagesArray: uploadImageResult,
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
                                      styles.Link60d34efa,
                                      {
                                        color: theme.colors.custom_rgb17_17_17,
                                      },
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
                                      styles.Linkdfc51f1b,
                                      { color: theme.colors.custom_rgb0_128_0 },
                                    ]}
                                    title={'Saving...'}
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
                        <RestAPISupabaseApi.FetchGetCollaboratorsListGET
                          userId={Constants['UUID']}
                        >
                          {({
                            loading,
                            error,
                            data,
                            refetchGetCollaboratorsList,
                          }) => {
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
                                <View>
                                  <View style={styles.View1c9c923b}>
                                    <Text
                                      style={[
                                        styles.Textf60fff8b,
                                        { color: theme.colors.strong },
                                      ]}
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
                                  data={FilterUsernames(fetchData)}
                                  listKey={'fXqw0hG2'}
                                  keyExtractor={item =>
                                    item?.id || item?.uuid || item
                                  }
                                  renderItem={({ item }) => {
                                    const listData = item;
                                    return (
                                      <View style={styles.View02a568ec}>
                                        <Touchable
                                          onPress={() => {
                                            try {
                                              setCollaborators(
                                                listData?.username
                                              );
                                              setShowCollaboratorModel(false);
                                              const newCollaborators =
                                                addCollaboratorsToArray(
                                                  listData?.user_id
                                                );
                                              setCollaboratorsIdArray(
                                                newCollaborators
                                              );
                                            } catch (err) {
                                              console.error(err);
                                            }
                                          }}
                                        >
                                          <Text
                                            style={[
                                              styles.Textd1cb507d,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {listData?.username}
                                          </Text>
                                        </Touchable>
                                      </View>
                                    );
                                  }}
                                  contentContainerStyle={
                                    styles.FlatListc992f941Content
                                  }
                                  numColumns={1}
                                />
                              </>
                            );
                          }}
                        </RestAPISupabaseApi.FetchGetCollaboratorsListGET>
                      </View>
                    </Modal>
                  </KeyboardAwareScrollView>
                );
              }}
              contentContainerStyle={styles.FlatListc992f941Content}
              numColumns={1}
            />
          );
        }}
      </RestAPISupabaseApi.FetchGetSInglePostGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidf2f7097a: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    marginTop: 16,
    textAlign: 'center',
  },
  Fetch431eb058: {
    minHeight: 40,
  },
  FlatList94bdd9d3Content: {
    flex: 1,
    flexDirection: 'row',
  },
  FlatListc992f941Content: {
    flex: 1,
  },
  IconButton29534911: {
    marginLeft: 12,
  },
  Imaged06b86ef: {
    height: 100,
    width: 100,
  },
  KeyboardAwareScrollView43486cc4Content: {
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
  Link238b60f2: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    lineHeight: 15,
    marginLeft: 6,
  },
  Link60d34efa: {
    fontFamily: 'Montserrat_700Bold',
    marginRight: 6,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 9,
  },
  Link884e3189: {
    fontFamily: 'Montserrat_700Bold',
    marginRight: 6,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 9,
  },
  Linkdfc51f1b: {
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
  Text150de917: {
    fontFamily: 'Inter_500Medium',
    lineHeight: 17,
  },
  Text1928d953: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
  },
  Text2d7b1498: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 14,
  },
  Text44328e3a: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
  },
  Text78989fef: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 6,
  },
  Text7f07edc6: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  Text89f65924: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    lineHeight: 15,
  },
  Text89fe82ea: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
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
  TextInput126aa5eb: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
  },
  TextInput765e7922: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 4,
  },
  TextInput77cabf79: {
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
  TextInputd71dd086: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
  },
  Texta5b33fc9: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    paddingTop: 12,
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
  Textf37ed692: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    lineHeight: 24,
    paddingLeft: 12,
  },
  Textf60fff8b: {
    fontFamily: 'Inter_600SemiBold',
  },
  Touchable1315ec75: {
    height: 50,
    width: '100%',
  },
  Touchable8bd683a8: {
    marginRight: 6,
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
  View0c7a8423: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingLeft: 0,
  },
  View137fd8a7: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
    paddingBottom: 12,
    paddingTop: 12,
  },
  View16c57f16: {
    alignItems: 'flex-start',
    marginTop: 12,
  },
  View1c2db0dd: {
    flexDirection: 'row',
    marginTop: 6,
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
  View298b43d8: {
    flex: 1,
    marginRight: 12,
  },
  View298bd5d3: {
    marginTop: 6,
    overflow: 'hidden',
  },
  View3f6225c1: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
  },
  View4053945e: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    marginLeft: 6,
    marginTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 6,
    width: '35%',
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
  View4bbfab2c: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    marginTop: 4,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  View4fde3881: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  View56167c89: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    marginTop: 4,
    overflow: 'hidden',
  },
  View6728d304: {
    marginTop: 16,
  },
  View70166b3f: {
    flex: 1,
    marginLeft: 4,
  },
  View990e93a9: {
    flex: 1,
    height: 75,
    marginTop: 6,
    overflow: 'hidden',
    width: '100%',
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
  Viewc4aa85ff: {
    borderRightWidth: 1,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  Viewc992f941: {
    flex: 1,
  },
  Viewd93708ee: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingBottom: 12,
    paddingTop: 12,
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
  Viewe27b451b: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 16,
    paddingTop: 0,
  },
  Viewe93c4254: {
    flex: 1,
    marginTop: 12,
  },
  Viewe97d9bb1: {
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Viewec6bbecc: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    marginTop: 4,
    paddingBottom: 16,
    paddingLeft: 14,
    paddingRight: 16,
    paddingTop: 16,
  },
  Viewf8304bf6: {
    marginTop: 12,
  },
  screen: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 30,
  },
});

export default withTheme(EditPostScreen);
