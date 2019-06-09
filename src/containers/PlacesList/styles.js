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

  // card
  card: {
    paddingHorizontal: 8,
  },

  cardImage: {
    height: 160,
    resizeMode: 'cover',
    borderRadius: 8,
  },

  cardHeader: {
    flexDirection: 'row',
  },

  cardTitle: {
    lineHeight: 48,
    fontSize: 18,
    fontWeight: '500',
    marginRight: 28,
    flex: 1,
  },

  cardDescription: {
    ...typography.description,
    marginBottom: 24,
  },

  cardMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  metaText: {
    ...typography.description,
    fontWeight: '500',
  },

  backButton: {
    position: 'absolute',
    top: getStatusBarHeight(true) + 16,
    left: 12,
  },
});
