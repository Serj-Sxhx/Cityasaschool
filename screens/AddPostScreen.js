import React from 'react';
import {
  ButtonSolid,
  DatePicker,
  Icon,
  IconButton,
  ScreenContainer,
  Spacer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const AddPostScreen = props => {
  const { theme } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [postImages, setPostImages] = React.useState([]);
  const [switchValue, setSwitchValue] = React.useState(false);
  const [switchValue2, setSwitchValue2] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.surface }}
      scrollable={true}
      hasTopSafeArea={true}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={styles.KeyboardAwareScrollViewpRContent}
        extraScrollHeight={72}
      >
        <View style={styles.ViewaF}>
          <View style={styles.ViewmM}>
            <IconButton
              icon={'Feather/x'}
              size={24}
              color={theme.colors.dark}
            />
            <Text style={[styles.TextBi, { color: theme.colors.dark }]}>
              {'Add a learning experience'}
            </Text>
          </View>
        </View>

        <View style={styles.Viewih}>
          <Text style={[styles.Textch, { color: theme.colors.medium }]}>
            {'Learning Experience Title'}
          </Text>

          <View
            style={[
              styles.ViewRP,
              { borderRadius: 8, borderColor: theme.colors.divider },
            ]}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.TextInputOb, { color: theme.colors.dark }]}
              value={null}
              placeholder={'you@domain.tld'}
              keyboardType={'email-address'}
            />
          </View>
        </View>

        <View style={styles.ViewG4}>
          <View style={styles.View_7D}>
            <Text style={[styles.TextbT, { color: theme.colors.medium }]}>
              {'From'}
            </Text>

            <View
              style={[
                styles.ViewUN,
                { borderRadius: 8, borderColor: theme.colors.divider },
              ]}
            >
              <DatePicker
                onDateChange={newDatePickerValue => {
                  try {
                    setDatePickerValue(newDatePickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                date={datePickerValue}
                label={'Date'}
                mode={'date'}
                leftIconMode={'inset'}
                type={'solid'}
              />
            </View>
          </View>

          <View style={styles.Viewcv}>
            <Text style={[styles.Text_7n, { color: theme.colors.medium }]}>
              {'To'}
            </Text>

            <View
              style={[
                styles.Viewjg,
                { borderRadius: 8, borderColor: theme.colors.divider },
              ]}
            >
              <DatePicker
                onDateChange={newDatePickerValue => {
                  try {
                    setDatePickerValue(newDatePickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                date={datePickerValue}
                label={'Date'}
                mode={'date'}
                leftIconMode={'inset'}
                type={'solid'}
              />
            </View>
          </View>
        </View>

        <View style={styles.ViewGD}>
          <Text style={[styles.TextCU, { color: theme.colors.medium }]}>
            {'Location'}
          </Text>

          <View
            style={[
              styles.ViewGY,
              { borderRadius: 8, borderColor: theme.colors.divider },
            ]}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.TextInputJB, { color: theme.colors.dark }]}
              value={null}
              placeholder={'you@domain.tld'}
              keyboardType={'email-address'}
            />
          </View>
        </View>
        <Spacer top={12} right={8} bottom={12} left={8} />
        <View style={styles.ViewAG}>
          <Text style={[styles.Texta8, { color: theme.colors.medium }]}>
            {'What Learning Resources Did You Use?'}
          </Text>

          <View
            style={[
              styles.ViewPy,
              { borderRadius: 8, borderColor: theme.colors.divider },
            ]}
          >
            <View style={styles.ViewBZ}>
              <TextInput
                onChangeText={newTextInputValue => {
                  const textInputValue = newTextInputValue;
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[styles.TextInputBG, { color: theme.colors.dark }]}
                value={null}
                placeholder={'19.99'}
                keyboardType={'decimal-pad'}
              />
            </View>
          </View>
        </View>

        <View style={styles.ViewBy}>
          <Text style={[styles.TextWL, { color: theme.colors.medium }]}>
            {'Collaborators'}
          </Text>

          <View
            style={[
              styles.View_57,
              { borderRadius: 8, borderColor: theme.colors.divider },
            ]}
          >
            <View style={styles.Viewli}>
              <TextInput
                onChangeText={newTextInputValue => {
                  const textInputValue = newTextInputValue;
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[styles.TextInputdI, { color: theme.colors.dark }]}
                value={null}
                placeholder={'7214-998-5419'}
                keyboardType={'numbers-and-punctuation'}
              />
            </View>
          </View>
        </View>
        <Spacer top={12} right={8} bottom={12} left={8} />
        <View>
          <Text style={[styles.TextTO, { color: theme.colors.medium }]}>
            {'Describe Your Experience'}
          </Text>

          <View
            style={[
              styles.ViewYw,
              { borderRadius: 8, borderColor: theme.colors.divider },
            ]}
          >
            <View style={styles.View_83}>
              <TextInput
                onChangeText={newDescriptionInputValue => {
                  const textInputValue = newDescriptionInputValue;
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[styles.TextInputkJ, { color: theme.colors.dark }]}
                placeholder={'...'}
                value={null}
                keyboardType={'decimal-pad'}
                multiline={true}
                numberOfLines={6}
              />
            </View>
          </View>
        </View>
        <Spacer top={12} right={8} bottom={12} left={8} />
        <View>
          <Text style={[styles.Textr9, { color: theme.colors.medium }]}>
            {'External Link'}
          </Text>

          <View
            style={[
              styles.ViewwS,
              { borderRadius: 8, borderColor: theme.colors.divider },
            ]}
          >
            <View
              style={[
                styles.Viewqi,
                {
                  backgroundColor: theme.colors.light,
                  borderColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextFE, { color: theme.colors.medium }]}>
                {'https://'}
              </Text>
            </View>

            <View style={styles.ViewrA}>
              <TextInput
                onChangeText={newTextInputValue => {
                  const textInputValue = newTextInputValue;
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[styles.TextInputSV, { color: theme.colors.dark }]}
                value={null}
                placeholder={'Enter a value...'}
              />
            </View>
          </View>
          <Spacer top={12} right={8} bottom={12} left={8} />
        </View>

        <View
          style={[
            styles.ViewYa,
            { borderRadius: 64, borderColor: theme.colors.divider },
          ]}
        >
          <Touchable style={styles.Touchableda}>
            <View style={styles.Viewzf}>
              <Icon name={'Ionicons/add'} size={24} />
              <Text style={[styles.TextAG, { color: theme.colors.dark }]}>
                {'Images'}
              </Text>
            </View>
          </Touchable>
        </View>

        <View>
          <FlatList
            data={[]}
            listKey={'0YI6gcnw'}
            keyExtractor={({ item }) => item?.id || item?.uuid || item}
            renderItem={({ item }) => {
              const listData = item;
              return null;
            }}
            contentContainerStyle={styles.FlatList_0YContent}
            numColumns={1}
          />
        </View>

        <View style={styles.Viewbl}>
          <Text style={[styles.TextRi, { color: theme.colors.dark }]}>
            {'Post To Public Portfolio'}
          </Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue2(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={switchValue2}
          />
        </View>
        <>
          {!switchValue2 ? null : (
            <ButtonSolid
              style={[
                styles.ButtonSolidam,
                { backgroundColor: theme.colors.primary },
              ]}
              title={'Post Publicly'}
            />
          )}
        </>
        <>
          {switchValue2 ? null : (
            <ButtonSolid
              style={[
                styles.ButtonSolidHH,
                { backgroundColor: theme.colors.primary },
              ]}
              title={'Add To History'}
            />
          )}
        </>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextBi: {
    paddingLeft: 12,
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewmM: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewaF: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingTop: 0,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Textch: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputOb: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
  },
  ViewRP: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginTop: 4,
  },
  Viewih: {
    marginTop: 16,
  },
  TextbT: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewUN: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_7D: {
    width: '50%',
    paddingRight: 0,
    marginRight: 0,
  },
  Text_7n: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewjg: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewcv: {
    width: '50%',
    minWidth: '50%',
  },
  ViewG4: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 16,
    marginBottom: 0,
  },
  TextCU: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputJB: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
  },
  ViewGY: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginTop: 4,
  },
  ViewGD: {
    marginTop: 16,
  },
  Texta8: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputBG: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
  },
  ViewBZ: {
    flex: 1,
    marginLeft: 4,
  },
  ViewPy: {
    paddingLeft: 14,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewAG: {
    marginTop: 16,
  },
  TextWL: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputdI: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
  },
  Viewli: {
    flex: 1,
  },
  View_57: {
    paddingLeft: 14,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewBy: {
    marginTop: 16,
  },
  TextTO: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputkJ: {
    marginLeft: 4,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
  },
  View_83: {
    flex: 1,
  },
  ViewYw: {
    paddingLeft: 14,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Textr9: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextFE: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '400',
  },
  Viewqi: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 16,
    borderRightWidth: 1,
  },
  TextInputSV: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
  },
  ViewrA: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  ViewwS: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  TextAG: {
    marginLeft: 4,
  },
  Viewzf: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Touchableda: {
    width: '100%',
    height: '100%',
  },
  ViewYa: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 16,
    marginBottom: 16,
    width: '30%',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 4,
    paddingTop: 4,
    paddingBottom: 4,
    height: 30,
  },
  FlatList_0YContent: {
    flex: 1,
    flexDirection: 'row',
  },
  FetchSG: {
    minHeight: 40,
  },
  TextRi: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewbl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingLeft: 0,
  },
  ButtonSolidam: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 16,
  },
  ButtonSolidHH: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 16,
  },
  KeyboardAwareScrollViewpRContent: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 36,
  },
});

export default withTheme(AddPostScreen);
