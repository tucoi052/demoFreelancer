import {ImageSource} from 'assets';
import {AppText} from 'components';
import React from 'react';
import {
  Image,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {SIZE} from 'utils/size';
import {styles} from './styles';
interface AppHeaderProps {
  title?: string;
  onBack?: Function;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  renderRight?: () => JSX.Element;
}

const AppHeader = (props: AppHeaderProps) => {
  const renderRight = () => {
    return props.renderRight && props.renderRight();
  };

  return (
    <View style={[styles.container, props.containerStyle]}>
      <TouchableOpacity activeOpacity={0.8} hitSlop={styles.hitSlop}>
        <Image
          source={ImageSource.Back}
          style={styles.backIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {props.title && (
        <AppText
          style={[SIZE.FONT_SIZES.header, styles.title, props.titleStyle]}>
          {props.title}
        </AppText>
      )}
      {renderRight()}
    </View>
  );
};

export default AppHeader;
