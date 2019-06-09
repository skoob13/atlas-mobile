import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';

import assets from 'assets';
import { Avatar, CircleButton, Place } from 'components';

import styles from './styles';

const { height, width } = Dimensions.get('window');

const PlacesList = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = React.useState(height);

  return (
    <View style={styles.container}>
      <FlatList
        data={['1', '2', '3']}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => <Place {...item} />}
        ItemSeparatorComponent={() => (
          <View style={{ height: 32 }} />
        )}
        ListHeaderComponent={(
          <View style={styles.header} onLayout={({ nativeEvent: { layout: { height } } }) => setHeaderHeight(height)}>
            <View style={styles.headerImageContainer}>
              <Image
                source={{ uri: 'https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg' }}
                style={styles.headerImage}
              />
            </View>
            <View style={styles.headerWrapper}>
              <View style={styles.meta}>
                <Text style={styles.listCategory}>
                  Список
                </Text>
                <Text style={styles.placeCategory}>
                  Ресторан
                </Text>
              </View>
              <Text style={styles.placeTitle}>
                Le Moujik
              </Text>
              <Avatar uri="https://pp.userapi.com/JQunkTuX9ZFVl1fUKvahw1WMgJ5v2otq7MYprg/BWzqNgj6EAw.jpg">
                Сергей Смагин
              </Avatar>
              <Text style={styles.description}>
                Петербург полон парадоксов: это одновременно и самый хорошо сохранившийся большой исторический город Европы, и самая молодая из европейских столиц.
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
