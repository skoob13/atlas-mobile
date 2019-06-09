import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { typography, colors } from 'styles';


const window = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.lightGrey,
  },

  container: {
    paddingTop: getStatusBarHeight(true),
    paddingBottom: 60,
    backgroundColor: colors.lightGrey,
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
    color: 'rgba(0, 0, 0, .7)',
  },

  title: {
    ...typography.title,
    color: '#000',
  },

  caption: {
    ...typography.subtitle,
    color: '#000',
  },

  body: {
    ...typography.bodyPlace,
    color: 'rgba(0, 0, 0, .8)',
  },

  bodyWrapper: {
    paddingHorizontal: 24,
  },

  expandLabelWrapper: {
    paddingHorizontal: 24,
    alignItems: 'flex-end',
  },

  buttonLabel: {
    ...typography.buttonLabel,
    color: '#000',
  },

  line: {
    height: 1,
    width: window.width,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },

  row: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingTop: 16,
  },

  rowSection: {
    flex: 1,
  },

  rowSectionTitle: {
    textAlign: 'center',
    ...typography.subheading,
  },

  hours: {
    marginTop: 8,
    marginRight: 12,
  },

  price: {
    marginTop: 8,
    marginLeft: 12,
  },

  hoursRow: {
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  hoursText: {
    ...typography.bodyPlace,
    color: 'rgba(0, 0, 0, .8)',
  },

  priceRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },

  priceText: {
    ...typography.price,
    color: 'rgba(0, 0, 0, .4)',
  },

  darkGrey: {
    color: 'rgba(0, 0, 0, .8)',
  },

  grey: {
    color: 'rgba(0, 0, 0, .6)',
  },

  mapSection: {
    marginVertical: 16,
    alignItems: 'center',
  },

  showOnMapButton: {
    backgroundColor: colors.grey,
    height: 48,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: window.width - 48,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  addButton: {
    marginBottom: 16,
    marginHorizontal: 24,
    backgroundColor: colors.grey,
    height: 48,
    justifyContent: 'center',
    borderRadius: 8,
  },

  buttonTitle: {
    ...typography.buttonLabel,
    color: '#000',
    textAlign: 'center',
  },
});
