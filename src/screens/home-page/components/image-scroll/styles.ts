import {StyleSheet} from 'react-native';
import {COLORS} from 'utils/color';
import {SIZE} from 'utils/size';

export const styles = StyleSheet.create({
  container: {
    width: SIZE.WIDTH,
    height: SIZE.heightPixel(385),
    zIndex: -1,
  },
  imageBackground: {
    width: SIZE.WIDTH,
    height: SIZE.heightPixel(385),
  },
  containerTxtIndex: {
    position: 'absolute',
    bottom: 10,
    left: SIZE.SCREEN_WIDTH / 2 - 10,
    backgroundColor: COLORS.BlackGbrBG,
    paddingVertical: SIZE.heightPixel(3),
    paddingHorizontal: SIZE.heightPixel(5),
    borderRadius: 10,
  },
  txtIndex: {
    color: COLORS.White,
    fontSize: 12,
    fontWeight: '500',
  },
});
