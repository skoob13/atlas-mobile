import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';


const Avatar = ({ uri, children }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{ uri }}
    />
    <Text style={styles.name}>
      {children}
    </Text>
  </View>
);

export default Avatar;
