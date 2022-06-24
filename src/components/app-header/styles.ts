import {StyleSheet} from 'react-native';
import {COLORS} from 'utils/color';
import {SIZE} from 'utils/size';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: SIZE.heightPixel(44),
  },
  title: {
    textAlign: 'center',
    width: SIZE.SCREEN_WIDTH,
    position: 'absolute',
    zIndex: -1,
    fontWeight: '800',
    color: COLORS.Black,
  },
  hitSlop: {
    top: 10,
    left: 10,
    bottom: 10,
    right: 10,
  },
  backIcon: {
    width: SIZE.widthPixel(40),
    height: SIZE.widthPixel(40),
  },
});
