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
      {/* backBar */}
      <View style={styles.Viewe6b20937}>
        <View style={[styles.Viewac9f1ff4, { borderRadius: 8 }]}>
          <View style={styles.Viewcaa0afd5}>
            <IconButton
              icon={'AntDesign/left'}
              size={24}
              color={theme.colors.dark}
            />
            <Text style={[styles.Text710d4efd, { color: theme.colors.dark }]}>
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
      {/* profileHeader */}
      <View style={styles.Viewca0ec783}>
        <>
          {/* profilPicture */}
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
                  styles.View75c6824c,
                  { borderColor: theme.colors.secondary, borderRadius: 64 },
                ]}
              >
                <Icon name={'Ionicons/ios-people-circle-sharp'} size={24} />
                <Spacer top={8} right={4} bottom={8} left={4} />
                <Text style={{ color: theme.colors.dark }}>{'667'}</Text>
              </View>
            </View>
          </View>
          {/* details */}
          <View style={styles.View59b1f5da}>
            <Text style={[styles.Textdd21953b, { color: theme.colors.dark }]}>
              {'Lewis Thompson'}
            </Text>
            {/* username */}
            <Text style={[styles.Text0d4a572b, { color: theme.colors.medium }]}>
              {'@username'}
            </Text>
            {/* viewPublicPortfolio */}
            <Text
              style={[styles.Text63c35e09, { color: theme.colors.lightGrey }]}
            >
              {'mycoolsite.com'}
            </Text>
          </View>
        </>
      </View>
      {/* bio */}
      <View>
        {/* bioSpeachbubble */}
        <View
          style={[
            styles.View1249e520,
            { borderColor: theme.colors.lightGrey, borderRadius: 8 },
          ]}
        >
          <Text style={[styles.Textf49b842c, { color: theme.colors.dark }]}>
            {
              'Im interested in working on projects that reduce CO2 emissions and reduce our dependance on fossil fuels. It also really want to learn how to use 3D printers.'
            }
          </Text>

          <Text
            style={[styles.Texta312c50d, { color: theme.colors.lightGrey }]}
          >
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
            style={[
              styles.TextInput03ad5433,
              { borderColor: theme.colors.divider },
            ]}
            placeholder={'Reply directly...'}
            value={textInputValue}
          />
        </View>
      </View>
      {/* portfolioTimeline */}
      <View style={styles.View7245b3d8}>
        {/* Title */}
        <View style={styles.View33d4974a}>
          {/* Projects */}
          <Text style={[styles.Text0225aa27, { color: theme.colors.dark }]}>
            {'Projects'}
          </Text>
          <Spacer top={12} right={8} bottom={12} left={8} />
        </View>
        <FlatList
          data={[]}
          listKey={'tKZVncYK'}
          keyExtractor={item => item?.id || item?.uuid || item}
          renderItem={({ item }) => {
            const listData = item;
            return <View />;
          }}
          contentContainerStyle={styles.FlatListc992f941Content}
          numColumns={1}
        />
      </View>
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
  Text0225aa27: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 16,
  },
  Text0d4a572b: {
    marginTop: 4,
  },
  Text63c35e09: {
    marginTop: 4,
  },
  Text710d4efd: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 8,
  },
  TextInput03ad5433: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  Texta312c50d: {
    marginBottom: 12,
  },
  Textdd21953b: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 20,
  },
  Textf49b842c: {
    fontFamily: 'System',
    fontWeight: '400',
    marginBottom: 12,
  },
  View1249e520: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 12,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  View33d4974a: {
    marginLeft: 0,
    marginRight: 0,
  },
  View59b1f5da: {
    marginLeft: 8,
  },
  View7245b3d8: {
    marginLeft: 16,
    marginRight: 16,
  },
  View75c6824c: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
  },
  Viewac9f1ff4: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 6,
  },
  Viewca0ec783: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
  },
  Viewcaa0afd5: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  Viewe6b20937: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
});

export default withTheme(PublicProfileScreen);
