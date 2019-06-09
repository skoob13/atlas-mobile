import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, ActionSheetIOS } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import assets from 'assets';
import apiActions from 'redux/actions';
import styles from './styles';

const getEmo = (rating) => {
  switch (Math.round(Number(rating))) {
    case 2:
      return newRating = '🔥';
    case 1:
      return newRating = '❤️';
    case 0:
      return newRating = '😐';
    case -1:
      return newRating = '👎';
    case -2:
      return newRating = '💩';
  }
}

const Place = (props) => {
  const { meta, description, title, postSaved, id, isSaved, putEmotion, navigation } = props;
  const [rating, setRating] = React.useState(Number(props.rating));

  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={{ uri: meta.imageUrl }}
      />
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle} onPress={() => navigation.navigate({
          routeName: 'Place',
          params: props,
        })}>
          {title}
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => ActionSheetIOS.showActionSheetWithOptions({
            options: ['Супер🔥', 'Круто❤️', 'Нормально😐', 'Не очень👎', 'Все плохо💩', 'Cancel'],
            cancelButtonIndex: 5,
          }, (buttonIndex) => {
            let newRating = 0;
            switch (buttonIndex) {
              case 0:
                  newRating = 2;
                break;
              case 1:
                  newRating = 1;
                break;
              case 2:
                  newRating = 0;
                break;
              case 3:
                  newRating = -1;
                break;
              case 4:
                  newRating = -2;
                break;
              default:
                  newRating = 0;
                break;
            }
            putEmotion(id, newRating);
            setRating(newRating);
          })}
          hitSlop={{ left: 16, right: 16 }}
          style={{ width: 48, height: 48, alignItems: 'center', justifyContent: 'center' }}
        >
          {rating ? (
            <Text style={{ fontSize: 24 }}>
              {getEmo(rating)}
            </Text>
          ) : (
            <Image source={assets.emotion} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => postSaved(id, !isSaved)}
          hitSlop={{ left: 16, right: 16 }}
          style={{ alignItems: 'center', justifyContent: 'center', height: 48, marginLeft: 16 }}
        >
          {!isSaved ? (
            <Image source={assets.bookmark} />
          ) : (
            <Image source={require('../../assets/img/icon/pinned.png')} />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.cardDescription} numberOfLines={3}>
        {description}
      </Text>
      <View style={styles.cardMeta}>
        <Text style={styles.metaText}>
          {meta.workingHours}
        </Text>
        <Text style={styles.metaText}>
          2km
        </Text>
      </View>
    </View>
  );
};

const CPlace = withNavigation(connect(null, {
  postSaved: apiActions.lists.postSaved,
  putEmotion: apiActions.lists.putEmotion,
})(Place));

export default React.memo(CPlace, (prev, next) => prev.isSaved !== next.isSaved || prev.rating !== next.rating);
