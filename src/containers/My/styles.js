import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    height: 176,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },

  top: {
    height: 176 + 32,

  },

  textinputContainer: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 8,
    marginBottom: 12,
    height: 44,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  search: {
    marginRight: 12,
  },

  textinput: {
    height: 44,
    fontSize: 16,
    color: 'rgba(0,0,0,0.8)',
    flex: 1,
  },


});
