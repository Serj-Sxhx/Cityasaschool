import React from 'react';
import Images from '../config/Images';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const CameraPermissionsScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <View style={styles.Viewsh}>
        <Image
          style={styles.Imagemn}
          source={Images.ScreenShot20211122At33505PM}
          resizeMode={'contain'}
        />
      </View>

      <View style={styles.Viewnc}>
        <Text style={[styles.Texta8, { color: theme.colors.dark }]}>
          {'Enable Camera'}
        </Text>

        <Text style={[styles.Text_7C, { color: theme.colors.dark }]}>
          {
            "We'll need this for taking photos, accessing the camera roll, or recording video."
          }
        </Text>
      </View>

      <View style={styles.ViewDp}>
        <Touchable>
          <Text
            style={[
              theme.typography.button,
              styles.Textri,
              { color: theme.colors.light },
            ]}
          >
            {'Skip'}
          </Text>
        </Touchable>

        <Button
          style={[styles.ButtontG, { borderRadius: 40 }]}
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
  Imagemn: {
    width: 140,
    height: 140,
  },
  Viewsh: {
    flexGrow: 1,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 12,
    marginRight: 12,
  },
  Texta8: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Text_7C: {
    marginTop: 6,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  Viewnc: {
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'center',
    minHeight: '15%',
    marginLeft: 12,
    marginRight: 12,
  },
  Textri: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  ButtontG: {
    marginTop: 18,
    marginBottom: 40,
  },
  ViewDp: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'flex-end',
    marginLeft: 12,
    marginRight: 12,
    maxHeight: '33%',
  },
});

export default withTheme(CameraPermissionsScreen);
