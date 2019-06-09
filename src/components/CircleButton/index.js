import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import assets from 'assets';
import styles from './styles';


const CircleButton = ({ onPress, style }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.9}
    style={[styles.button, style]}
    hitSlop={{ top: 16, right: 16, bottom: 16, left: 16 }}
  >
    <Image source={assets.back} />
  </TouchableOpacity>
);

export default CircleButton;
