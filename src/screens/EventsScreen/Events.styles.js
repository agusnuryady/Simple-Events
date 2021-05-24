//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import {
  FONT_BODY3,
  FONT_BODY5,
  FONT_HEADLINE_H1,
  FONT_HEADLINE_H2,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
} from '../../configs/fonts';

const EventsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black90,
  },
  headerWrap: {
    position: 'absolute',
    top: 0,
    zIndex: 99,
    width: '100%',
  },
  headerContainer: {
    padding: 0,
    height: 60,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonNavRadius: {
    borderRadius: 40 / 2,
  },
  inputBox: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.transparent,
    borderRadius: 20,
  },
  listWrapItem: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  gridWrapItem: {
    width: '50%',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  menuWrap: {
    borderRadius: 30,
    overflow: 'hidden',
  },
  menuConten: {
    borderRadius: 30,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBgContent: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    ...FONT_HEADLINE_H2,
    textAlign: 'center',
    color: COLORS.black40,
  },
  menuTitle: {
    ...FONT_HEADLINE_H1,
    color: COLORS.primaryWhite,
  },
  menuTitleGrid: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryWhite,
  },
  menuSubTitle: {
    ...FONT_BODY3,
    color: COLORS.black50,
  },
  menuLabel: {
    ...FONT_HEADLINE_H6,
    color: COLORS.primaryWhite,
  },
  labelBox: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: COLORS.primaryBlue,
  },
  contentTop: {
    width: '100%',
    padding: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  contentBottom: {
    width: '100%',
    padding: 30,
    alignItems: 'flex-start',
  },
  contentBottomGrid: {
    width: '100%',
    height: '40%',
    padding: 12,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  wrapDateBox: {
    width: 70,
    height: 70,
    backgroundColor: COLORS.primaryWhite,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateBigText: {
    ...FONT_HEADLINE_H2,
    color: COLORS.primaryBlack,
    textAlign: 'center',
  },
  dateSmallText: {
    ...FONT_BODY5,
    color: COLORS.black70,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  wrapFilter: {
    position: 'absolute',
    width: '100%',
    zIndex: 99,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapLeftButtonFilter: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryWhite,
  },
  wrapRightButtonFilter: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryWhite,
  },
});

export default EventsStyles;
