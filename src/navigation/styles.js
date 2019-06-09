import { StyleSheet } from 'react-native';

import { typography } from 'styles';


export default StyleSheet.create({
  tabBarLabel: {
    ...typography.tabLabel,
  },

  tabBar: {
    paddingHorizontal: 20,
    borderTopWidth: 0,
    shadowOpacity: 0.16,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowColor: '#000',
  },
});
