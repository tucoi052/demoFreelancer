import {StyleSheet} from 'react-native';
import {COLORS} from 'utils/color';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: COLORS.BorderTagInActive,
    height: 40,
  },
  title: {
    flexShrink: 1,
    fontSize: 14,
    color: COLORS.TitleTagInActive,
    lineHeight: 22,
  },
  tagActive: {
    borderColor: COLORS.BorderTagActive,
  },
  titleActive: {
    flexShrink: 1,
    fontSize: 14,
    color: COLORS.Black,
    fontWeight: '500',
    lineHeight: 22,
  },
});
