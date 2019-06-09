import { StyleSheet } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { typography, colors } from 'styles';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainerStyle: {
    paddingTop: getStatusBarHeight() + 24,
    paddingHorizontal: 16,
    paddingBottom: getBottomSpace() + 24,
  },

  header: {
    marginBottom: 32,
  },

  headerWrapper: {
    paddingHorizontal: 8,
  },

  headerImageContainer: {
    height: 240,
    overflow: 'hidden',
    borderRadius: 8,
    marginBottom: 16,
  },

  headerImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  listCategory: {
    ...typography.subheading,
  },

  placeCategory: {
    ...typography.subheading,
    color: colors.accent,
  },

  placeTitle: {
    ...typography.title,
    marginBottom: 16,
  },

  description: {
    ...typography.description,
    padding: 8,
    paddingTop: 16,
  },

  

  backButton: {
    position: 'absolute',
    top: getStatusBarHeight(true) + 16,
    left: 12,
  },
});
