import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';

import SmallCard from '../SmallCard';
import SmallCardGroup from '../SmallCardGroup';
import styles from './styles';



const CardsList = ({ title, places, navigation }) => {

  // eslint-disable-next-line react/prop-types
  const renderItem = ({ item, index }) => {

    return (
      <View
        key={item.id}
        style={(index === 0) && styles.marginLeft}
      >
        {item.user ? (
          <SmallCardGroup
            title={item.title}
            navigation={navigation}
            item={item}
          />
        ) : (
          <SmallCard
            title={item.title}
            uri={item.meta.image_url}
            navigation={navigation}
            item={item}
          />
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <View style={styles.listWrapper}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={places}
          renderItem={renderItem}

        />
      </View>
    </View>
  );
};

CardsList.propTypes = {
  title: PropTypes.string,
};

export default withNavigation(CardsList);
