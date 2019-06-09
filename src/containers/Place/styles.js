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

  backButton: {
    position: 'absolute',
    top: getStatusBarHeight(true) + 16,
    left: 12,
  },

  headerImageContainer: {
    height: 240,
    marginTop: 80,
    marginHorizontal: 16,
    overflow: 'hidden',
    borderRadius: 8,
    marginBottom: 16,
  },

  headerImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  titleWrapper: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },

  subtitle: {
    ...typography.subtitle,
    color: 'rgba(0,0,0,.7)',
  },

  title: {
    ...typography.title,
    color: '#000',
  },

  caption: {
    ...typography.subtitle,
    color: '#000',
  },
});
