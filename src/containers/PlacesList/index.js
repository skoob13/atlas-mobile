import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';

import assets from 'assets';
import { Avatar, CircleButton, } from 'components';

import styles from './styles';

const { height, width } = Dimensions.get('window');

const PlacesList = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = React.useState(height);

  return (
    <View style={styles.container}>
      <FlatList
        data={['1', '2', '3']}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => (
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
        )}
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
