import {StyleSheet} from 'react-native';
import {COLORS} from 'utils/color';
import {SIZE} from 'utils/size';

export const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: COLORS.White,
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.Grey8,
    borderBottomWidth: 0.5,
    paddingVertical: SIZE.heightPixel(12),
    paddingHorizontal: SIZE.heightPixel(16),
  },
  iconClose: {
    width: SIZE.heightPixel(17),
    height: SIZE.heightPixel(17),
  },
  txtTitle: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.Grey1,
  },
  wrapMinus: {
    width: 56,
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.Grey9,
  },
  iconMinus: {
    width: 30,
    height: 30,
  },
  wrapNumber: {
    width: 50,
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.BorderColor,
    paddingHorizontal: 16,
    paddingVertical: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  txtNumber: {
    fontSize: 14,
    lineHeight: 22,
  },
  txtCategory: {
    paddingTop: 16,
    paddingBottom: 12,
    fontSize: 12,
    lineHeight: 16,
  },
  wrapTag: {
    flexDirection: 'row',
    paddingBottom: 8,
    marginHorizontal: -5,
  },
  wrapQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  quantityView: {
    flexDirection: 'row',
  },

  //Footer

  containerAddCart: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SIZE.widthPixel(16),
    marginBottom: SIZE.heightPixel(30),
    marginTop: SIZE.heightPixel(20),
  },
  iconButton: {
    height: SIZE.heightPixel(43),
    width: '100%',
    tintColor: COLORS.ButtonCartIcon,
  },
  btnCart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: SIZE.widthPixel(10),
    backgroundColor: COLORS.ButtonCart,
    height: SIZE.heightPixel(43),
    overflow: 'hidden',
  },
  txtCart: {
    color: COLORS.White,
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
  },
  iconFavorite: {
    width: SIZE.widthPixel(32),
    height: SIZE.widthPixel(32),
  },
});
