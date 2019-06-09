import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, Geolocation } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import memo from 'memoize-one';

import assets from 'assets';
import { CircleButton } from 'components';
import apiActions from 'redux/actions';
import { colors } from 'styles';

import styles from './styles';



const MapContainer = ({ navigation, getPlaces, places, getCategories }) => {
  const carousel = React.useRef();
  const map = React.useRef();
  const [category, setCategory] = React.useState(null);

  const memoFilter = React.useCallback((places, category) => {
    if (category) {
      return places.filter(({ category: { id } }) => category.id === id);
    }
    return places;
  }, [places.length, category, navigation.getParam('points')]);

  const filteredPlaces = memoFilter(navigation.getParam('points') ? navigation.getParam('saved') : places, category);

  const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
  const initialZoom = 0.05;

  const moveMap = (index) => {
    if (map.current) {
      const place = places[index];
      map.current.animateCamera({
        center: {
          latitude: place.meta.lat,
          longitude: place.meta.lng,
        },
        zoom: 15.32,
      });
    }
  };

  React.useEffect(() => {
    getPlaces();
    getCategories();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 59.939095,
          longitude: 30.315868,
          latitudeDelta: initialZoom,
          longitudeDelta: initialZoom * (WIDTH / HEIGHT),
        }}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        userLocationAnnotationTitle="Me"
        showsTraffic={false}
        toolbarEnabled={false}
        loadingEnabled
        loadingIndicatorColor="#000"
        minZoomLevel={10}
        ref={map}
      >
        {filteredPlaces.map(({ id, meta, title }, index) => (
          <Marker
            key={id}
            coordinate={{
              latitude: Number(meta.lat),
              longitude: Number(meta.lng),
            }}
            title={title}
            onPress={() => {
              if (carousel.current) {
                carousel.current.snapToItem(index, true, false);
                moveMap(index);
              }
            }}
          />
        ))}
        {navigation.getParam('points') && (
          <Polyline
            strokeColor={colors.accent} // fallback for when `strokeColors` is not supported by the map-provider
            strokeWidth={4}
            coordinates={navigation.getParam('points').map(([latitude, longitude]) => ({
              longitude,
              latitude,
            }))}
            lineCap="round"
            lineJoin="round"
          />
        )}
      </MapView>
      <View style={styles.nav}>
        <View
          style={styles.wrapper}
        >
          <Image
            style={styles.blur}
            source={require('../../assets/img/blur/blur.png')}
            blurRadius={10}
          />
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.filter}
            onPress={() => navigation.navigate({
              routeName: 'PlacesFilter',
              params: {
                setCategory,
                current: category?.id,
              },
            })}
          >
            <Text style={styles.filterLabel}>
              {category ? category.name : 'Все места'}
            </Text>
            <Image style={styles.chevron} source={assets.chevron} />
          </TouchableOpacity>
          <Carousel
            data={filteredPlaces}
            renderItem={({ item: { title, meta, category } }) => (
              <View style={styles.item}>
                {meta.imageUrl && (
                  <Image
                    style={styles.img}
                    source={{ uri: meta.imageUrl }}
                  />
                )}
                <View style={styles.content}>
                  <Text style={styles.placeCategory} numberOfLines={1}>
                    {category.name}
                  </Text>
                  <Text style={styles.title} numberOfLines={1}>
                    {title}
                  </Text>
                  <Text style={styles.workHours} numberOfLines={1}>
                    {meta.workingHours}
                  </Text>
                  <Text style={styles.workHours} numberOfLines={1}>
                    2 км от вас
                  </Text>
                </View>
              </View>
            )}
            itemWidth={WIDTH - 80}
            sliderWidth={WIDTH}
            // keyExtractor={this.extractKey}
            scrollEventThrottle={128}
            onSnapToItem={moveMap}
            activeSlideOffset={WIDTH / 10}
            maxToRenderPerBatch={5}
            windowSize={5}
            lockScrollWhileSnapping
            extraData={false}
            removeClippedSubviews
            ref={carousel}
            initialNumToRender={128}
          />
        </View>
        <CircleButton
          style={styles.me}
          asset={require('../../assets/img/me/me.png')}
          onPress={() => {
            navigator.geolocation.getCurrentPosition((a) => {
              if (map.current) {
                map.current.animateCamera({
                  center: {
                    latitude: a.coords.latitude,
                    longitude: a.coords.longitude,
                  },
                  zoom: 15.32,
                });
              }
            })
          }}
        />
      </View>
      {navigation.getParam('title') && (
        <Text style={styles.listName} onPress={() => {
          navigation.setParams({
            title: '',
            points: null,
          });
        }}>
          {navigation.getParam('title') || ''}
        </Text>
      )}
    </View>
  );
};

const mapPlaces = memo((list, places) => list.map(id => places[id]));

export default connect(state => ({
  places: mapPlaces(state.places.list, state.places.data),
}), {
  getPlaces: apiActions.lists.getPlaces,
  getCategories: apiActions.lists.getCategories,
})(MapContainer);
