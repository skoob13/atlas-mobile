import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles';


const SmallCard = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate({
      routeName: 'PlacesList',
      params: item,
    })}
    activeOpacity={0.9}
  >
    <View style={styles.card}>
      <View style={[styles.row, styles.firstRow]}>
        <Image
          source={{ uri: item.places[0].meta.imageUrl }}
          style={styles.image}
        />
        <Image
          source={{ uri: item.places[1].meta.imageUrl }}
          style={styles.image}
        />
      </View>
      <View style={[styles.row, styles.secondRow]}>
        <Image
          source={{ uri: item.places[2].meta.imageUrl }}
          style={styles.image}
        />
        <Image
          source={{ uri: item.places[3].meta.imageUrl }}
          style={styles.image}
        />
      </View>

      <View style={styles.user}>
        <Image
          source={{ uri: item.user.image }}
          style={styles.userImage}
        />
      </View>
    </View>
    <Text
      style={styles.title}
      numberOfLines={2}
    >
      {item.title}
    </Text>
  </TouchableOpacity>
);

SmallCard.propTypes = {
  title: PropTypes.string,
};

export default SmallCard;
