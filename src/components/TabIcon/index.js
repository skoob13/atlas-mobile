import React from 'react';
import { Image, View } from 'react-native';

import styles from './styles';

// eslint-disable-next-line
export default ({ image, imageFocused }) => ({ focused }) => (
  <View style={styles.container}>
    <Image source={focused ? imageFocused : image} />
  </View>
);
