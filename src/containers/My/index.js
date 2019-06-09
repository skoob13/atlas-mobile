import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Place } from 'components';
import { typography } from 'styles';
import styles from './styles';


const My = () => {
  const [value, setValue] = React.useState('');
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={[1,2,3]}
        renderItem={({ item }) => (
          <Place {...item} />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 32 }} />
        )}
        ListHeaderComponent={(
          <View style={styles.top} />
        )}
      />
      <View style={{ height: 32 }} />
      <Image blurRadius={10} source={require('../../assets/img/blur/blur.png')} style={[styles.header, { opacity: 1 }]} />
      <View style={styles.header}>
        <View style={{ flex: 1, marginTop: 64, marginHorizontal: 24 }}>
          <View style={{ flexDirection: 'row', alignItem: 'center' }}>
            <Text style={{ ...typography.title, flex: 1 }}>
              Мой маршрут
            </Text>
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 16, justifyContent: 'center' }}>
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

export default My;
