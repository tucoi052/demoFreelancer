import {StyleSheet} from 'react-native';
import {COLORS} from 'utils/color';
import {SIZE} from 'utils/size';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: SIZE.widthPixel(16),
    paddingVertical: SIZE.heightPixel(20),
  },
  viewDiscount: {
    borderTopLeftRadius: SIZE.heightPixel(10),
    borderBottomRightRadius: SIZE.heightPixel(10),
    padding: SIZE.heightPixel(5),
    backgroundColor: COLORS.Discount,
  },
  txtDiscount: {
    color: COLORS.White,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
  },
  row: {
    flexDirection: 'row',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  center: {
    alignItems: 'center',
  },
  txtNewPrice: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    marginLeft: SIZE.widthPixel(12),
  },
  txtOldPrice: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    marginLeft: SIZE.widthPixel(6),
    textDecorationLine: 'line-through',
    color: COLORS.Grey5,
  },
  txtTitle: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    marginTop: SIZE.heightPixel(12),
    marginBottom: SIZE.heightPixel(18),
  },
  star: {
    width: SIZE.widthPixel(12),
    height: SIZE.widthPixel(12),
    marginRight: SIZE.widthPixel(5),
  },
  txtNumberRate: {
    color: COLORS.Grey5,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    marginLeft: SIZE.widthPixel(4),
  },
  box: {
    width: SIZE.widthPixel(3),
    height: SIZE.widthPixel(3),
    borderRadius: SIZE.widthPixel(3),
    backgroundColor: COLORS.Secondary,
    marginLeft: SIZE.widthPixel(6),
  },
  txtSell: {
    color: COLORS.Grey5,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    marginLeft: SIZE.widthPixel(6),
  },
  iconSize: {
    width: SIZE.widthPixel(20),
    height: SIZE.widthPixel(20),
  },
  containerBox: {
    marginHorizontal: SIZE.widthPixel(16),
    marginVertical: SIZE.heightPixel(12),
    backgroundColor: COLORS.White,
    padding: SIZE.heightPixel(15),
    borderRadius: SIZE.widthPixel(8),
  },
  txtSize: {
    color: COLORS.Grey1,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    marginLeft: SIZE.widthPixel(14),
  },
  iconRight: {
    width: SIZE.widthPixel(5),
    height: SIZE.heightPixel(7),
    tintColor: COLORS.Grey5,
  },
  btnRight: {
    width: SIZE.widthPixel(3),
    height: SIZE.heightPixel(7),
  },
  iconFavorite: {
    width: SIZE.widthPixel(32),
    height: SIZE.widthPixel(32),
  },
  flex: {
    flex: 1,
  },
  hitSlop: {
    top: 10,
    right: 20,
    left: 20,
    bottom: 10,
  },
  footer: {
    flex: 1,
    backgroundColor: COLORS.White,
    justifyContent: 'flex-end',
  },
  containerAddCart: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SIZE.widthPixel(16),
    marginBottom: SIZE.heightPixel(80),
  },
  iconButton: {
    height: SIZE.heightPixel(43),
    width: '100%',
    tintColor: COLORS.ButtonCartIcon,
  },
  btnCart: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: SIZE.widthPixel(10),
    backgroundColor: COLORS.ButtonCart,
    width: SIZE.widthPixel(288),
    height: SIZE.heightPixel(43),
    overflow: 'hidden',
  },
  txtCart: {
    color: COLORS.White,
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
  },
});
