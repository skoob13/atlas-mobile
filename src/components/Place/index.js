import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import assets from 'assets';
import styles from './styles';

const Place = ({  }) => (
  <View style={styles.card}>
    <Image
      style={styles.cardImage}
      source={{ uri: 'https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg' }}
    />
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>
        Le Moujik
      </Text>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {}}
        hitSlop={{ left: 16, right: 16 }}
        style={{ width: 48, height: 48, alignItems: 'center', justifyContent: 'center' }}
      >
        <Image source={assets.emotion} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {}}
        hitSlop={{ left: 16, right: 16 }}
        style={{ alignItems: 'center', justifyContent: 'center', height: 48, marginLeft: 16 }}
      >
        <Image source={assets.bookmark} />
      </TouchableOpacity>
    </View>
    <Text style={styles.cardDescription}>
      Нетерпеливое русское требование: «быстро!» французы превратили в особый жанр заведений, где обслуживают сразу, не медля, и без особых ресторанных церемоний — в бистрО.
    </Text>
    <View style={styles.cardMeta}>
      <Text style={styles.metaText}>
        Пн-пт с 08:00 до 24:00
      </Text>
      <Text style={styles.metaText}>
        2km
      </Text>
    </View>
  </View>
);

export default Place;
