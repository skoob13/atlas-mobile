import { StyleSheet } from 'react-native';

import { typography } from 'styles';


export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 16,
  },

  title: {
    marginHorizontal: 24,
    ...typography.subtitle,
    color: 'rgba(0, 0, 0, .7)',
  },

  listWrapper: {
    paddingVertical: 16,
  },

  marginLeft: {
    marginLeft: 24,
  },
});
