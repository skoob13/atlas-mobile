import { StyleSheet } from 'react-native';

import { typography } from 'styles';


export default StyleSheet.create({
  card: {
    width: 160,
    height: 96,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .08)',
  },

  image: {
    width: 68,
    height: 36,
    borderRadius: 4,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  user: {
    width: 48,
    height: 48,
    borderRadius: 48,
    position: 'absolute',
    top: (96 - 60) / 2,
    left: (160 - 60) / 2,
  },

  userImage: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    borderColor: '#fff',
    borderWidth: 2,
    backgroundColor: '#fff',
  },

  firstRow: {
    alignItems: 'flex-end',
    marginBottom: 4,
  },

  secondRow: {
    marginTop: 4,
    alignItems: 'flex-start',
  },

  title: {
    ...typography.cardTitle,
    color: '#000',
    marginTop: 16,
  },

  container: {
    width: 160,
    marginRight: 16,
  },
});
