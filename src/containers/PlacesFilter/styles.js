import { StyleSheet, Dimensions } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },

  scroll: {
    paddingBottom: getBottomSpace(),
  },

  header: {
    height: Dimensions.get('window').height * 0.3,
  },

  item: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    paddingLeft: 40,
    paddingRight: 60,
    fontSize: 24,
  },

  closeButton: {
    position: 'absolute',
    bottom: getBottomSpace() + 40,
    right: 40,
  },
});
