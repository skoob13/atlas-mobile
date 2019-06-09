import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';

import assets from 'assets';
import { Avatar, CircleButton, Place } from 'components';

import styles from './styles';

const { height, width } = Dimensions.get('window');

const PlacesList = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = React.useState(height);
  const item = navigation.state.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={item.places}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => <Place {...item} />}
        ItemSeparatorComponent={() => (
          <View style={{ height: 32 }} />
        )}
        ListHeaderComponent={(
          <View style={styles.header}>
            <View style={styles.headerImageContainer}>
              <Image
                source={{ uri: item.user.image }}
                style={styles.headerImage}
              />
            </View>
            <View style={styles.headerWrapper}>
              <View style={styles.meta}>
                <Text style={styles.listCategory}>
                  Список
                </Text>
                <Text style={styles.placeCategory}>
                  Авторский список
                </Text>
              </View>
              <Text style={styles.placeTitle}>
                {item.title}
              </Text>
              <Avatar uri={item.user.image}>
                {item.user.firstName} {item.user.lastName}
              </Avatar>
              <Text style={styles.description}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
      <CircleButton
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default PlacesList;
