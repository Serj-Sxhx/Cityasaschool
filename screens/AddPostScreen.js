import React from 'react';
import * as RestAPISupabaseApi from '../apis/RestAPISupabaseApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
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

const AddPostScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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

  const { theme } = props;
  const { navigation } = props;

  const restAPISupabaseAddAPortfolioPostPOST =
    RestAPISupabaseApi.useAddAPortfolioPostPOST();

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [collaborators, setCollaborators] = React.useState('');
  const [collaboratorsIDArray, setCollaboratorsIDArray] = React.useState([]);
  const [dateError, setDateError] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [descriptionError, setDescriptionError] = React.useState('');
  const [externalLink, setExternalLink] = React.useState('');
  const [fromDate, setFromDate] = React.useState(new Date());
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
      <KeyboardAwareScrollView
        style={{
          backgroundColor: theme.colors.custom_rgb255_255_255,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
        }}
        contentContainerStyle={styles.KeyboardAwareScrollView6d1f2881Content}
        extraScrollHeight={72}
      >
        {/* Container */}
        <View>
          {/* Add Learning Experience TItle */}
          <View style={styles.View17c6db03}>
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
            <Text style={[styles.Text920e7b39, { color: theme.colors.text }]}>
              {'Add a learning experience'}
            </Text>
          </View>
          {/* What type of Post */}
          <View style={styles.View6728d304}>
            {/* Label */}
            <Text
              style={[styles.Texta35c9d42, { color: theme.colors.lightGrey }]}
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
                          styles.Viewb42ea75d,
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
                            styles.Textb6d90182,
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
                          styles.Viewd27f7a13,
                          {
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                            borderBottomRightRadius: 6,
                            borderBottomLeftRadius: 6,
                            backgroundColor: theme.colors.grayLine,
                          },
                        ]}
                      >
                        {/* tagLabel */}
                        <Text
                          style={[
                            styles.Text27d0a1f1,
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
                          styles.Viewd27f7a13,
                          {
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                            borderBottomRightRadius: 6,
                            borderBottomLeftRadius: 6,
                            backgroundColor: theme.colors.grayLine,
                          },
                        ]}
                      >
                        {/* tagLabel */}
                        <Text
                          style={[
                            styles.Text27d0a1f1,
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
          <View style={styles.Viewf8304bf6}>
            {/* Label */}
            <Text
              style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
            >
              {'Learning Experience Title'}
            </Text>
            {/* inputFrame */}
            <View
              style={[
                styles.Viewd9abae18,
                { backgroundColor: theme.colors.grayLine, borderRadius: 6 },
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
                  styles.TextInputb6fa1da3,
                  {
                    backgroundColor: theme.colors.grayLine,
                    borderColor: theme.colors.grayLine,
                    color: theme.colors.text,
                  },
                ]}
                placeholder={'Give your post a title'}
                value={learningExperience}
              />
              {/* Error */}
              <Text
                style={[styles.Textaa510f69, { color: theme.colors.error }]}
              >
                {learningExperienceError}
              </Text>
            </View>
          </View>
          {/* Experience Timeframe */}
          <View style={styles.Viewf8304bf6}>
            {/* RowDisplay */}
            <View style={styles.View18c69117}>
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
                    { backgroundColor: theme.colors.grayLine, borderRadius: 6 },
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
          <View style={styles.Viewf8304bf6}>
            {/* Label */}
            <Text
              style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
            >
              {'Write a description'}
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
                    setDescription(newDescriptionLongFormValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInputa20b097c,
                  {
                    borderColor: theme.colors.divider,
                    backgroundColor: theme.colors.grayLine,
                    color: theme.colors.text,
                  },
                ]}
                placeholder={'Add some details'}
                value={description}
                multiline={true}
                placeholderTextColor={theme.colors.lightGrey}
                numberOfLines={5}
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
          {/* Add Collaborators Sections */}
          <View style={styles.Viewf8304bf6}>
            {/* Top Line Frame */}
            <View style={styles.Viewe97d9bb1}>
              {/* Label */}
              <Text
                style={[styles.Text1928d953, { color: theme.colors.lightGrey }]}
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
                  styles.View76f9a9b9,
                  { borderRadius: 6, backgroundColor: theme.colors.grayLine },
                ]}
              >
                {/* filledView */}
                <>
                  {!collaborators?.length ? null : (
                    <View
                      style={[
                        styles.Viewa8658c49,
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
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={styles.IconButton29534911}
                        icon={'Entypo/circle-with-cross'}
                        color={theme.colors.strong}
                        size={16}
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
                      {'  @username'}
                    </Text>
                  )}
                </>
              </View>
            </Touchable>
          </View>
          {/* External Link Setup Section */}
          <View style={styles.Viewf8304bf6}>
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
                  styles.TextInput77cabf79,
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
          {/* Setup Images Section */}
          <View style={styles.View16c57f16}>
            {/* buttonTouchable */}
            <>
              {selectedImageVariable?.length ? null : (
                <Touchable
                  onPress={() => {
                    const handler = async () => {
                      try {
                        const selectedImage = await Utils.openImagePicker({});
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
                        styles.Text8084ce22,
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
                    resizeMode={'cover'}
                    source={{ uri: `${selectedImageVariable}` }}
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
                    color={theme.colors.custom_rgb0_0_0}
                    size={16}
                  />
                </View>
              )}
            </>
          </View>
          {/* Divider */}
          <View style={styles.Viewe93c4254}>
            {/* divider */}
            <View
              style={[
                styles.Viewb58230c0,
                { backgroundColor: theme.colors.grayLine },
              ]}
            />
          </View>
          {/* Publish to Portfolio Section */}
          <View style={styles.Viewd93708ee}>
            <Text style={[styles.Text019452d4, { color: theme.colors.text }]}>
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
                        const uploadImageResult = await uploadImages(
                          selectedImageVariable
                        );
                        await restAPISupabaseAddAPortfolioPostPOST.mutateAsync({
                          collabs: collaboratorsIDArray,
                          desc: description,
                          externalURL: externalLink,
                          from_date: fromDate,
                          imagesArray: uploadImageResult,
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
                    styles.Linka5e067eb,
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
                              const uploadImageResult = await uploadImages(
                                selectedImageVariable
                              );
                              await restAPISupabaseAddAPortfolioPostPOST.mutateAsync(
                                {
                                  collabs: collaboratorsIDArray,
                                  desc: description,
                                  externalURL: externalLink,
                                  from_date: fromDate,
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
                          styles.Linkdfc51f1b,
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
              styles.Viewd85959fd,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <RestAPISupabaseApi.FetchGetCollaboratorsListGET
              userId={Constants['UUID']}
            >
              {({ loading, error, data, refetchGetCollaboratorsList }) => {
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
                      <View style={styles.Viewc9607b0d}>
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
                          size={32}
                          icon={'Entypo/circle-with-cross'}
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
                      listKey={'Zc0Zse7k'}
                      keyExtractor={item => item?.id || item?.uuid || item}
                      renderItem={({ item }) => {
                        const listData = item;
                        return (
                          <View style={styles.View02a568ec}>
                            <Touchable
                              onPress={() => {
                                try {
                                  setCollaborators(listData?.username);
                                  setShowCollaboratorModel(false);
                                  const addedCollabToArray =
                                    addCollaboratorToArray(listData?.user_id);
                                  setCollaboratorsIDArray(addedCollabToArray);
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
                      contentContainerStyle={styles.FlatListc992f941Content}
                      numColumns={1}
                    />
                  </>
                );
              }}
            </RestAPISupabaseApi.FetchGetCollaboratorsListGET>
          </View>
        </Modal>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Fetch431eb058: {
    minHeight: 40,
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
  KeyboardAwareScrollView6d1f2881Content: {
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
  Linka5e067eb: {
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
  Text019452d4: {
    fontFamily: 'Inter_500Medium',
    lineHeight: 17,
  },
  Text0486d022: {
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
  },
  Text1928d953: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
  },
  Text1dbe0689: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    lineHeight: 15,
  },
  Text27d0a1f1: {
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
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
  Text8084ce22: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 11,
    lineHeight: 14,
    marginLeft: 4,
  },
  Text89f65924: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    lineHeight: 15,
  },
  Text920e7b39: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    lineHeight: 24,
    paddingLeft: 12,
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
  TextInputa20b097c: {
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
  TextInputb6fa1da3: {
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
  Texta35c9d42: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 19,
  },
  Texta5b33fc9: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    paddingTop: 12,
  },
  Textaa510f69: {
    fontFamily: 'Montserrat_400Regular',
  },
  Textb6d90182: {
    fontFamily: 'Inter_400Regular',
    lineHeight: 17,
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
  View17c6db03: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 16,
    paddingTop: 0,
  },
  View18c69117: {
    flex: 1,
    flexDirection: 'row',
  },
  View1c2db0dd: {
    flexDirection: 'row',
    marginTop: 6,
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
  View6728d304: {
    marginTop: 16,
  },
  View76f9a9b9: {
    flex: 1,
    height: 75,
    marginTop: 6,
    overflow: 'hidden',
    width: '100%',
  },
  Viewa8658c49: {
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
  Viewadc997a1: {
    height: 169,
    marginTop: 6,
    overflow: 'hidden',
  },
  Viewb42ea75d: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
  },
  Viewb58230c0: {
    height: '100%',
    width: 1,
  },
  Viewc9607b0d: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 6,
    paddingTop: 16,
  },
  Viewc992f941: {
    flex: 1,
  },
  Viewd27f7a13: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
  },
  Viewd85959fd: {
    alignSelf: 'center',
    bottom: 1,
    flex: 1,
    height: '70%',
    position: 'absolute',
    width: '87%',
    zIndex: 10,
  },
  Viewd93708ee: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingBottom: 12,
    paddingTop: 12,
  },
  Viewd9abae18: {
    marginTop: 6,
    overflow: 'hidden',
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
  Viewe93c4254: {
    flex: 1,
    marginTop: 12,
  },
  Viewe97d9bb1: {
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default withTheme(AddPostScreen);
