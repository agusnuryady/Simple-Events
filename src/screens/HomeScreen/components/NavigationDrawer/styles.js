import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../configs';
import {
  FONT_BODY5,
  FONT_HEADLINE_H3,
  FONT_HEADLINE_H4,
} from '../../../../configs/fonts';

const stylesNavigationDrawer = StyleSheet.create({
  drawerWrap: {
    flex: 1,
    backgroundColor: COLORS.primaryBlack,
  },
  headerText: {
    ...FONT_HEADLINE_H3,
    color: COLORS.primaryWhite,
    lineHeight: 30,
  },
  titleText: {
    ...FONT_HEADLINE_H4,
    color: COLORS.black50,
  },
  drawerHeader: {
    width: '100%',
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.black70,
  },
  drawerList: {
    flex: 1,
    width: '100%',
  },
  drawerFooter: {
    width: '100%',
    borderTopWidth: 0.5,
    borderTopColor: COLORS.black70,
  },
  menuFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 0,
  },
  footerText: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryWhite,
  },
  modalButton: {
    paddingVertical: 12,
  },
  wrapItem: {
    width: '100%',
    padding: 16,
    borderRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageGrdient: {
    width: 70,
    height: '30%',
  },
  imageItem: {
    width: 70,
    height: 85,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: COLORS.black90,
    justifyContent: 'flex-end',
  },
  titleItem: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryWhite,
    marginBottom: 8,
  },
  descItem: {
    ...FONT_BODY5,
    color: COLORS.black50,
  },
  wrapDeleleButton: {
    borderRadius: 20 / 2,
    position: 'absolute',
    top: 4,
    right: 12,
  },
  containerDeleleButton: {
    borderRadius: 20 / 2,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default stylesNavigationDrawer;
