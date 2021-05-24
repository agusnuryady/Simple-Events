//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_BODY2, FONT_HEADLINE_H4 } from '../../configs/fonts';

export default StyleSheet.create({
  containerButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
  },
  categoryText: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryWhite,
  },
  normalText: {
    ...FONT_BODY2,
    color: COLORS.primaryWhite,
  },
});
