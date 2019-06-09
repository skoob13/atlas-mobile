import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, ScrollView } from 'react-native';

import { CircleButton } from 'components';

import styles from './styles';


const Place = ({ navigation }) => (
  <ScrollView
    style={styles.wrapper}
    contentContainerStyle={styles.container}
    alwaysBounceVertical={false}
    showsVerticalScrollIndicator={false}
  >
    <View style={styles.headerImageContainer}>
      <Image
        source={{ uri: 'https://pp.userapi.com/c853520/v853520138/5f599/9B4BNXMMIjs.jpg' }}
        style={styles.headerImage}
      />
    </View>

    <View style={styles.titleWrapper}>
      <Text style={styles.subtitle}>
        Ресторан
      </Text>
      <Text style={styles.title}>
        Le Moujik
      </Text>
      <Text style={styles.caption}>
        Набережная реки Фонтанки, 52
      </Text>
    </View>

    <CircleButton
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    />
  </ScrollView>
);

Place.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
};


export default Place;
