import { StyleSheet } from 'react-native';
import { typography } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  nav: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },

  wrapper: {
    height: 236,
    position: 'relative',
    paddingBottom: 20,
  },

  blur: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.8,
  },

  item: {
    height: 128,
    backgroundColor: '#fff',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowColor: '#000',
    shadowRadius: 4,
    padding: 8,
    borderRadius: 8,
  },

  content: {
    flex: 1,
  },

  img: {
    borderRadius: 4,
    height: 112,
    width: 120,
    marginRight: 16,
  },

  me: {
    position: 'absolute',
    bottom: 236 - 24,
    right: 24,
  },

  placeCategory: {
    ...typography.subheading,
  },

  title: {
    lineHeight: 48,
    fontSize: 18,
    fontWeight: '500',
  },

  workHours: {
    ...typography.description,
  },

  filter: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  filterLabel: {
    fontSize: 24,
    letterSpacing: 0.49,
  },

  chevron: {
    marginLeft: 30,
  },
});
