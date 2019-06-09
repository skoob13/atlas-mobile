import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Place } from 'components';
import { typography } from 'styles';
import styles from './styles';

import apiActions from 'redux/actions';
import memo from 'memoize-one';



const My = ({ getSaved, saved, postRoute, loaded, navigation, route }) => {
  const [value, setValue] = React.useState('');
  React.useState(() => {
    getSaved();
  }, []);

  React.useEffect(() => {
    if (loaded) {
      navigation.navigate({
        routeName: 'Map',
        params: {
          ...(route?.coords || {}),
          saved,
          title: 'Мой маршрут'
        },
      });
    }
  }, [loaded]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={saved}
        renderItem={({ item }) => (
          <Place {...item} />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 32 }} />
        )}
        ListHeaderComponent={(
          <View style={styles.top} />
        )}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
      <View style={{ height: 32 }} />
      <Image blurRadius={10} source={require('../../assets/img/blur/blur.png')} style={[styles.header, { opacity: 1 }]} />
      <View style={styles.header}>
        <View style={{ flex: 1, marginTop: 64, marginHorizontal: 24 }}>
          <View style={{ flexDirection: 'row', alignItem: 'center' }}>
            <Text style={{ ...typography.title, flex: 1 }}>
              Мой маршрут
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigator.geolocation.getCurrentPosition(({ coords }) => {
                  postRoute({
                    start_coords: [coords.latitude, coords.longitude],
                    places_ids: saved.map(({ id }) => id),
                  });
                });
              }}
              style={{ marginLeft: 16, justifyContent: 'center' }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                }}
              >
                На карте
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textinputContainer}>
            <Image style={styles.search} source={require('../../assets/img/icon/search.png')} />
            <TextInput
              value={value}
              onChangeText={setValue}
              style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Поиск"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const map = memo((list, categories) => list.map(id => categories[id]));

export default connect(state => ({
  saved: map(state.saved.list, state.saved.data),
  loaded: state.api.postRoute.loaded,
  route: state.api.postRoute.data,
}), {
  getSaved: apiActions.lists.getSaved,
  postRoute: apiActions.lists.postRoute,
})(My);
