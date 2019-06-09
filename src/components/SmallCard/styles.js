import { StyleSheet } from 'react-native';

import { typography } from 'styles';


export default StyleSheet.create({
  image: {
    width: 160,
    height: 96,
    borderRadius: 8,
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
