import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';

import SmallCard from '../SmallCard';
import SmallCardGroup from '../SmallCardGroup';
import styles from './styles';


const TEST_DATA = [
  {
    key: 0,
    title: 'Исаакиевский  собор',
    isGroup: false,
  },
  {
    key: 1,
    title: 'Исаакиевский  собор',
    isGroup: true,
  },
  {
    key: 2,
    title: 'Исаакиевский  собор',
    isGroup: false,
  },
  {
    key: 3,
    title: 'Исаакиевский  собор',
    isGroup: false,
  },
];


const CardsList = ({ title }) => {
  // eslint-disable-next-line react/prop-types
  const renderItem = ({ item, index }) => (
    <View
      key={item.key}
      style={(index === 0) && styles.marginLeft}
    >
      {item.isGroup ? (
        <SmallCardGroup title={item.title} />
      ) : (
        <SmallCard title={item.title} />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <View style={styles.listWrapper}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={TEST_DATA}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

CardsList.propTypes = {
  title: PropTypes.string,
};

export default CardsList;
