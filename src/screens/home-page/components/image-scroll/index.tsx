import {ImageSource} from 'assets';
import {AppText} from 'components';
import React from 'react';
import {
  ScrollView,
  Image,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {SIZE} from 'utils/size';
import {styles} from './styles';

interface ImageScrollProps {
  image: string[];
}

const ImageScroll = (props: ImageScrollProps) => {
  const {image} = props;
  const [pos, setPos] = React.useState(0);

  const onMomentumScrollEnd = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(nativeEvent.contentOffset.x / SIZE.WIDTH);
    setPos(index);
  };

  return (
    <View>
      <ScrollView
        horizontal
        bounces
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
        scrollEventThrottle={16}
        style={styles.container}>
        {image.map((_, ind) => (
          <Image
            key={ind.toString()}
            style={styles.imageBackground}
            source={ImageSource.Background}
          />
        ))}
      </ScrollView>
      <View style={styles.containerTxtIndex}>
        <AppText style={styles.txtIndex}>
          {pos + 1}/{image.length}
        </AppText>
      </View>
    </View>
  );
};

export default ImageScroll;
