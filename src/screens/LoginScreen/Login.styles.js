//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import {
  FONT_HEADLINE_H1,
  FONT_HEADLINE_H3,
  FONT_HEADLINE_H5,
} from '../../configs/fonts';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlack,
  },
  content: {
    width: '100%',
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  wrapHeader: {
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 16,
  },
  titleText: {
    ...FONT_HEADLINE_H1,
    color: COLORS.primaryWhite,
    fontSize: 36,
  },
  subTitleText: {
    ...FONT_HEADLINE_H3,
    color: COLORS.primaryWhite,
    fontSize: 24,
    lineHeight: 35,
  },
  buttonText: {
    ...FONT_HEADLINE_H5,
    color: COLORS.primaryBlack,
  },
});

export default LoginStyles;
