//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_BODY3, FONT_HEADLINE_H4 } from '../../configs/fonts';

const styles = StyleSheet.create({
  wrapModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  containerModal: {
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  image: {
    height: 160,
    marginBottom: 12,
    width: 160,
  },
  title: {
    ...FONT_HEADLINE_H4,
    color: COLORS.black90,
    textAlign: 'center',
    marginBottom: 8,
  },
  desc: {
    ...FONT_BODY3,
    color: COLORS.black70,
    marginBottom: 8,
    textAlign: 'center',
  },
  link: {
    ...FONT_BODY3,
    color: COLORS.blue50,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default styles;
