import { StyleSheet } from 'react-native';
import { typography } from 'styles';

export default StyleSheet.create({
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
});
