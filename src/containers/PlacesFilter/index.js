import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import memo from 'memoize-one';

import assets from 'assets';

import styles from './styles';


// const items = [
//   'Все',
//   'Избранное',
//   'Пешие',
//   'Велосипедные',
//   'Беговые',
//   'Для фотографов',
//   'Инстаграмные',
//   'Бары',
//   'Рестораны',
// ];

const PlacesFilter = ({ navigation, categories }) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.header} />
      <TouchableOpacity
        onPress={() => {
          navigation.getParam('setCategory')(null);
          navigation.goBack();
        }}
      >
        <Text
          style={[styles.item, !navigation.getParam('current') && {
            fontWeight: '500',
          }]}
        >
          Все вместе
        </Text>
      </TouchableOpacity>
      {categories.map(({ id, name }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.getParam('setCategory')({
              id,
              name,
            });
            navigation.goBack();
          }}
          key={id}
        >
          <Text
            style={[styles.item, navigation.getParam('current') === id && {
              fontWeight: '500',
            }]}
          >
            {name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.goBack()}
      style={styles.closeButton}
      hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <Image source={assets.close} />
    </TouchableOpacity>
  </View>
);

const mapCategories = memo((list, categories) => list.map(id => categories[id]));

export default connect(state => ({
  categories: mapCategories(state.categories.list, state.categories.data),
}))(PlacesFilter);
