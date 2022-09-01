import React from 'react';
import Images from '../config/Images';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const CameraPermissionsScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      {/* Header Wrapper */}
      <View style={styles.View8cc519a9}>
        {/* Calendar Icon 140 140 */}
        <Image
          style={styles.Image7c46d9a9}
          source={Images.ScreenShot20211122At33505PM}
          resizeMode={'contain'}
        />
      </View>
      {/* Content Wrapper */}
      <View style={styles.View243cffa7}>
        {/* Title  */}
        <Text style={[styles.Text71724681, { color: theme.colors.dark }]}>
          {'Enable Camera'}
        </Text>
        {/* Text for Icon */}
        <Text style={[styles.Text46ba70a9, { color: theme.colors.dark }]}>
          {
            "We'll need this for taking photos, accessing the camera roll, or recording video."
          }
        </Text>
      </View>
      {/* Footer Wrapper */}
      <View style={styles.View545158ff}>
        <Touchable>
          {/* Button Information */}
          <Text
            style={[
              theme.typography.button,
              styles.Text07d4fe12,
              { color: theme.colors.light },
            ]}
          >
            {'Skip'}
          </Text>
        </Touchable>

        <Button
          style={[styles.Buttonce614fac, { borderRadius: 40 }]}
          type={'solid'}
          color={theme.colors.null}
        >
          {'ENABLE CAMERA'}
        </Button>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Buttonce614fac: {
    marginBottom: 40,
    marginTop: 18,
  },
  Image7c46d9a9: {
    height: 140,
    width: 140,
  },
  Text07d4fe12: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  Text46ba70a9: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 6,
    textAlign: 'center',
  },
  Text71724681: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  View243cffa7: {
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'center',
    marginLeft: 12,
    marginRight: 12,
    minHeight: '15%',
  },
  View545158ff: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'flex-end',
    marginLeft: 12,
    marginRight: 12,
    maxHeight: '33%',
  },
  View8cc519a9: {
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'flex-end',
    marginLeft: 12,
    marginRight: 12,
  },
});

export default withTheme(CameraPermissionsScreen);
