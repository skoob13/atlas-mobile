import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';


const SmallCard = ({ title }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => console.log('onPress')}
    activeOpacity={0.9}
  >
    <Image
      source={{ uri: 'https://pp.userapi.com/c853520/v853520138/5f599/9B4BNXMMIjs.jpg' }}
      style={styles.image}
    />
    <Text
      style={styles.title}
      numberOfLines={2}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

SmallCard.propTypes = {
  title: PropTypes.string,
};

export default SmallCard;
