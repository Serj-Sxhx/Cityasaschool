import React from 'react';
import {
  CircleImage,
  Icon,
  IconButton,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { Fetch } from 'react-request';

const PublicProfileScreen = props => {
  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View style={styles.VieweU}>
        <View style={[styles.View_9u, { borderRadius: 8 }]}>
          <View style={styles.ViewkC}>
            <IconButton
              icon={'AntDesign/left'}
              size={24}
              color={theme.colors.dark}
            />
            <Text style={[styles.Text_2R, { color: theme.colors.dark }]}>
              {'Profile'}
            </Text>
          </View>

          <View>
            <IconButton
              icon={'Feather/share'}
              size={24}
              color={theme.colors.dark}
            />
          </View>
        </View>
      </View>

      <View style={styles.ViewsM}>
        <>
          <View>
            <View>
              <CircleImage
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                size={80}
              />
              <View
                style={[
                  styles.Viewf8,
                  { borderColor: theme.colors.secondary, borderRadius: 64 },
                ]}
              >
                <Icon name={'Ionicons/ios-people-circle-sharp'} size={24} />
                <Spacer top={8} right={4} bottom={8} left={4} />
                <Text style={{ color: theme.colors.dark }}>{'667'}</Text>
              </View>
            </View>
          </View>

          <View style={styles.Viewdm}>
            <Text style={[styles.TextH9, { color: theme.colors.dark }]}>
              {'Lewis Thompson'}
            </Text>

            <Text style={[styles.TextVy, { color: theme.colors.medium }]}>
              {'@username'}
            </Text>

            <Text style={[styles.TextU9, { color: theme.colors.lightGrey }]}>
              {'mycoolsite.com'}
            </Text>
          </View>
        </>
      </View>

      <View>
        <View
          style={[
            styles.Viewb0,
            { borderColor: theme.colors.lightGrey, borderRadius: 8 },
          ]}
        >
          <Text style={[styles.TextXe, { color: theme.colors.dark }]}>
            {
              'Im interested in working on projects that reduce CO2 emissions and reduce our dependance on fossil fuels. It also really want to learn how to use 3D printers.'
            }
          </Text>

          <Text style={[styles.TextSq, { color: theme.colors.lightGrey }]}>
            {'1 month ago'}
          </Text>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputKK, { borderColor: theme.colors.divider }]}
            placeholder={'Reply directly...'}
            value={textInputValue}
          />
        </View>
      </View>

      <View style={styles.Viewa4}>
        <View style={styles.ViewjT}>
          <Text style={[styles.TextM3, { color: theme.colors.dark }]}>
            {'Projects'}
          </Text>
          <Spacer top={12} right={8} bottom={12} left={8} />
        </View>
        <FlatList
          data={[]}
          listKey={'tKZVncYK'}
          keyExtractor={({ item }) => item?.id || item?.uuid || item}
          renderItem={({ item }) => {
            const listData = item;
            return <View />;
          }}
          contentContainerStyle={styles.FlatListtKContent}
          numColumns={1}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Text_2R: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
    marginLeft: 8,
  },
  ViewkC: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_9u: {
    paddingLeft: 0,
    paddingBottom: 6,
    paddingRight: 0,
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  VieweU: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  Viewf8: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 2,
    paddingTop: 2,
  },
  TextH9: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextVy: {
    marginTop: 4,
  },
  TextU9: {
    marginTop: 4,
  },
  Viewdm: {
    marginLeft: 8,
  },
  Fetch_9f: {
    minHeight: 40,
  },
  ViewsM: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  TextXe: {
    fontFamily: 'System',
    fontWeight: '400',
    marginBottom: 12,
  },
  TextSq: {
    marginBottom: 12,
  },
  TextInputKK: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  Viewb0: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 12,
    marginBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  TextM3: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 16,
  },
  ViewjT: {
    marginLeft: 0,
    marginRight: 0,
  },
  FlatListtKContent: {
    flex: 1,
  },
  Fetchi4: {
    minHeight: 40,
  },
  Viewa4: {
    marginLeft: 16,
    marginRight: 16,
  },
});

export default withTheme(PublicProfileScreen);
