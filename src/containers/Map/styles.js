import { StyleSheet } from 'react-native';

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

  item: {
    height: 110,
    backgroundColor: '#fff',
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
