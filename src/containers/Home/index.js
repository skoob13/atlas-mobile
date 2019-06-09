import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

import { CardsList } from 'components';

import styles from './styles';


const Home = ({ navigation: { navigate } }) => (
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
      <Text style={styles.title} onPress={() => navigate('Place')}>
        Санкт-Петербург
      </Text>
      <Text style={styles.subtitle}>
        Петербург полон парадоксов: это одновременно и самый хорошо сохранившийся большой исторический город Европы, и самая молодая из европейских столиц.
      </Text>
    </View>

    <CardsList title="Для тех, кто в городе впервые" />
    <CardsList title="Для тех, кто в городе впервые" />
    <CardsList title="Для тех, кто в городе впервые" />
  </ScrollView>
);

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

export default Home;
