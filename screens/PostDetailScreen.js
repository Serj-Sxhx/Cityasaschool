import React from 'react';
import {
  CircleImage,
  IconButton,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const PostDetailScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={true}
    ></ScreenContainer>
  );
};

const styles = StyleSheet.create({
  CircleImage84575dc9: {
    height: 32,
    width: 32,
  },
  ImageBackgrounda98db7de: {
    height: '100%',
    width: '100%',
  },
  Text0225aa27: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 16,
  },
  Text708dc895: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    marginTop: 8,
  },
  Text7790f9ae: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 16,
  },
  Text99271a5e: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 26,
    textAlign: 'left',
  },
  Texta05fab94: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 16,
    marginTop: 4,
  },
  Textde21574d: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  View4d57199b: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  View5de8a19e: {
    height: 380,
    width: '100%',
  },
  View80bfe8df: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
  },
  View87986e2b: {
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
  },
  Viewac9f1ff4: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 6,
  },
  Viewc992f941: {
    flex: 1,
  },
  Viewdebd3207: {
    flexDirection: 'row',
  },
});

export default withTheme(PostDetailScreen);
