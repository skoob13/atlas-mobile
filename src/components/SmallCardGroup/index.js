import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles';


const SmallCard = ({ title }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => console.log('onPress')}
    activeOpacity={0.9}
  >
    <View style={styles.card}>
      <View style={[styles.row, styles.firstRow]}>
        <Image
          source={{ uri: 'https://pp.userapi.com/c853520/v853520138/5f599/9B4BNXMMIjs.jpg' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://pp.userapi.com/c853520/v853520138/5f599/9B4BNXMMIjs.jpg' }}
          style={styles.image}
        />
      </View>
      <View style={[styles.row, styles.secondRow]}>
        <Image
          source={{ uri: 'https://pp.userapi.com/c853520/v853520138/5f599/9B4BNXMMIjs.jpg' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://pp.userapi.com/c853520/v853520138/5f599/9B4BNXMMIjs.jpg' }}
          style={styles.image}
        />
      </View>

      <View style={styles.user}>
        <Image
          source={{ uri: 'https://atozhairstyles.com/wp-content/uploads/2017/07/5-Brush-Over.jpg?x70181' }}
          style={styles.userImage}
        />
      </View>
    </View>
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
