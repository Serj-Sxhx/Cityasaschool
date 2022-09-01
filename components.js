import React from 'react';
import { Text } from 'react-native';
import { decode, encode } from 'base-64';
import { createClient } from '@supabase/supabase-js';

const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0aHZvdW9uaHNoa3ZiYXVncmhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTUyOTQ3OTUsImV4cCI6MTk3MDg3MDc5NX0.qlFLjO6sBHJWx_oaEiF1r4QLaNKRKrnEIwUQRvIQrpI';

const supabase = createClient(
  'https://qthvouonhshkvbaugrhc.supabase.co',
  API_KEY
);

export { decode, encode, supabase };

// For dynamic image height
import { View, FlatList, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

export function ScaleImage(props) {
  const { uri } = props;
  return <Image width={Dimensions.get('window').width} source={{ uri: uri }} />;
}

// To change the time format
import moment from 'moment';
export function ChangeTimeFormat(props) {
  const { timeString, neededInFormat } = props;
  console.log('input is', timeString);
  return <Text> {moment(timeString).format(neededInFormat)} </Text>;
}
