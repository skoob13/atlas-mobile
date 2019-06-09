import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { CircleButton } from 'components';

import styles from './styles';


const initialZoom = 0.005;

const window = Dimensions.get('window');

const heightValue = new Animated.Value(0);

const opacityValue = new Animated.Value(0);

const WEEK = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];


// change with real data
const HOURS = [
  '08:00 - 24:00',
  '08:00 - 24:00',
  '08:00 - 24:00',
  '08:00 - 24:00',
  '08:00 - 24:00',
  '08:00 - 24:00',
  '08:00 - 24:00',
];

const PRICE = 3;

const Place = ({ navigation }) => {
  const [firstRenderMade, setFirstRenderMade] = useState(false);

  const [expanded, changeExpandedStatus] = useState(false);

  const [sectionHeight, setSectionHeight] = useState(128);

  const onFirstRender = () => {
    setFirstRenderMade(true);
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 150,
    }).start();
  };

  const toggle = () => {
    Animated.timing(heightValue, {
      toValue: expanded ? 0 : 1,
      duration: 250,
    }).start();
    changeExpandedStatus(!expanded);
  };

  const height = heightValue.interpolate({
    inputRange: [0, 1],
    outputRange: [128, sectionHeight],
  });

  const opacity = opacityValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <>
      <Animated.ScrollView
        style={[styles.wrapper, { opacity }]}
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

        <Animated.View
          style={[
            styles.bodyWrapper,
            {
              height: firstRenderMade ? height : '100%',
            },
          ]}
        >
          <Text
            style={styles.body}
            onLayout={(event) => {
              if (!firstRenderMade) {
                onFirstRender();
                setSectionHeight(event.nativeEvent.layout.height);
              }
            }}
          >
            Шеф-повар бистро «Лё Мужик» русский, ведь французский паспорт — еще не залог таланта. Не каждый русский профессионал гастрономии классно варит серые щи, делает пастилу и пряники. Не каждый французский повар умеет готовить притворно-незатейливые блюда для бистро из экзотических русских продуктов. Мы очень гордимся умением нашего шеф-повара Руслана Агейченко чувствовать текстуры и вкусы. Руслан — талантливый, энергичный и открытый новому профессионал высочайшего класса. Ему 38 лет, из которых 21 год он провел в кухне. Он много работал под руководством лучших французских поваров в Петербурге и прошел несколько серьезных стажировок во Франции. У Руслана огромный личный опыт, связанный с французской кухней. Кроме того, он собрал фантастическую команду. Да и стены эти ему не чужие — много лет назад на кухне, которую Руслан Агейченко сейчас полностью переделал под себя, он однажды работал — на конкурсе локальных продуктов. Работал — и победил. Уважение традиций и умение чувствовать время, любовь и самоирония движут каждым, кто придумал это бистро.
          </Text>
        </Animated.View>

        {(sectionHeight > 128) && (
          <>
            <View style={styles.expandLabelWrapper}>
              <TouchableOpacity
                activeOpacity={0.9}
                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                onPress={toggle}
              >
                <Text style={styles.buttonLabel}>
                  {expanded ? (
                    'Показать меньше'
                  ) : (
                    'Показать больше'
                  )}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        <View style={styles.line} />

        <View style={styles.mapSection}>

          <>
            <MapView
              initialRegion={{
                latitude: 59.939095,
                longitude: 30.315868,
                latitudeDelta: initialZoom,
                longitudeDelta: initialZoom * (window.width / window.height),
              }}
              style={{
                height: 160,
                width: window.width - 48,
                borderRadius: 8,
              }}
              provider={PROVIDER_GOOGLE}
              showsUserLocation
              showsTraffic={false}
              toolbarEnabled={false}
              loadingEnabled
              pitchEnabled={false}
              rotateEnabled={false}
              zoomEnabled={false}
              scrollEnabled={false}
              loadingIndicatorColor="#000"
              minZoomLevel={10}
            >
              <Marker
                coordinate={{
                  latitude: 59.939095,
                  longitude: 30.315868,
                }}
              />
            </MapView>
            <TouchableOpacity
              style={styles.showOnMapButton}
              activeOpacity={0.9}
            >
              <Text style={styles.buttonTitle}>
                Показать на карте
              </Text>
            </TouchableOpacity>
          </>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonTitle}>
            Добавить в Мой маршрут
          </Text>
        </TouchableOpacity>

        <View style={styles.line} />


        <View style={styles.row}>
          <View style={styles.rowSection}>
            <Text style={styles.rowSectionTitle}>
              Часы работы
            </Text>
            <View style={styles.hours}>
              {WEEK.map((day, orderid) => {
                const isGrey = (orderid === 5) || (orderid === 6);

                return (
                  <View style={styles.hoursRow}>
                    <Text
                      style={[
                        styles.hoursText,
                        isGrey && styles.grey,
                      ]}
                    >
                      {day}
                    </Text>
                    <Text style={styles.hoursText}>
                      {HOURS[orderid]}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.rowSection}>
            <Text style={styles.rowSectionTitle}>
              Цена
            </Text>
            <View style={styles.price}>
              <View style={styles.priceRow}>
                {[1, 2, 3, 4].map(id => (
                  <Text
                    key={id}
                    style={[
                      styles.priceText,
                      (id <= PRICE) && styles.darkGrey,
                    ]}
                  >
                    ₽
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>


      </Animated.ScrollView>

      <CircleButton
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      />
    </>
  );
};

Place.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
};


export default Place;
