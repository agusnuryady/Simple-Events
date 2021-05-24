//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import {
  FONT_HEADLINE_H1,
  FONT_BODY3,
  FONT_BODY2,
  FONT_HEADLINE_H4,
} from '../../configs/fonts';
import { widthByScreen } from '../../utils';

const EventDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black90,
  },
  wrapButtonBack: {
    borderRadius: 40 / 2,
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 99,
  },
  buttonBack: {
    borderRadius: 40 / 2,
  },
  imageBg: {
    width: '100%',
    height: widthByScreen(100),
    justifyContent: 'flex-end',
    position: 'relative',
  },
  wrapBottomLabel: {
    width: '100%',
    minHeight: '20%',
    padding: 16,
    justifyContent: 'flex-end',
  },
  titleText: {
    ...FONT_HEADLINE_H1,
    color: COLORS.primaryWhite,
  },
  subTitleText: {
    ...FONT_BODY3,
    color: COLORS.black50,
  },
  normalText: {
    ...FONT_BODY2,
    color: COLORS.primaryWhite,
  },
  dateText: {
    ...FONT_BODY2,
    color: COLORS.primaryBlue,
  },
  categoryText: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryWhite,
  },
  modalButton: {
    paddingVertical: 12,
  },
});

export default EventDetailStyles;
