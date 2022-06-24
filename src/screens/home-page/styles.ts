import {StyleSheet} from 'react-native';
import {COLORS} from 'utils/color';
import {SIZE} from 'utils/size';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Grey9,
    height: '100%',
  },
  imageBackground: {
    width: SIZE.WIDTH,
    height: SIZE.heightPixel(385),
  },
  header: {
    position: 'absolute',
    marginTop: SIZE.heightPixel(40),
    zIndex: 1,
    elevation: 1,
    marginLeft: SIZE.widthPixel(5),
  },
});
