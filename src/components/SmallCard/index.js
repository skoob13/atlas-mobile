import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';


const SmallCard = ({ title, uri, navigation, item }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate({
      routeName: 'Place',
      params: item,
    })}
    activeOpacity={0.9}
  >
    <Image
      source={{ uri }}
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
