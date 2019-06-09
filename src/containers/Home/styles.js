import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { typography } from 'styles';


const window = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },

  container: {
    paddingTop: getStatusBarHeight(true),
    paddingBottom: 40,
    backgroundColor: '#fff',
  },

  headerImageContainer: {
    height: 256,
    marginTop: 20,
    marginHorizontal: 16,
    overflow: 'hidden',
    borderRadius: 8,
  },

  headerImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  titleWrapper: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },

  title: {
    ...typography.title,
    color: '#000',
    textAlign: 'left',
    marginBottom: 16,
  },

  subtitle: {
    ...typography.body,
    color: 'rgba(0, 0, 0, .8)',
    textAlign: 'left',
  },
});
