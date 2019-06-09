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
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import apiActions from 'redux/actions';
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

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const PRICE = getRandomArbitrary(1, 5);

const Place = ({ navigation, postSaved, getSaved }) => {
  const { title, category, meta, description, id } = navigation.state.params;
  const [isSaved, setIsSaved] = React.useState(navigation.state.params.isSaved);

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
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Animated.ScrollView
        style={[styles.wrapper, { opacity }]}
        contentContainerStyle={styles.container}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerImageContainer}>
          <Image
            source={{ uri: meta.imageUrl }}
            style={styles.headerImage}
          />
        </View>

        <View style={styles.titleWrapper}>
          <Text style={styles.subtitle}>
            {category.name}
          </Text>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.caption}>
            {meta.address}
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
            {description}
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
                latitude: meta.lat,
                longitude: meta.lng,
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
                  latitude: meta.lat,
                  longitude: meta.lng,
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
          onPress={() => {
            setIsSaved(!isSaved);
            postSaved(id, !isSaved);
            setTimeout(() => {
              getSaved();
            }, 4000);
          }}
        >
          <Text style={styles.buttonTitle}>
            {isSaved ? 'Удалить из моего маршрута' : 'Добавить в Мой маршрут'}
          </Text>
        </TouchableOpacity>

        <View style={styles.line} />


        <View style={styles.row}>
          <View style={styles.rowSection}>
            <Text style={styles.rowSectionTitle}>
              Часы работы
            </Text>
            <View style={styles.hours}>
              <View style={styles.hoursRow}>
                <Text style={styles.hoursText}>
                  {meta.workingHours}
                </Text>
              </View>
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
    </View>
  );
};

Place.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
};


export default connect(null, {
  postSaved: apiActions.lists.postSaved,
  getSaved: apiActions.lists.getSaved,
})(Place);
