import {ImageSource} from 'assets';
import {AppText} from 'components';
import React, {useCallback} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface BodyHomeProps {
  favourite?: boolean;
  onFavourite?: () => void;
  onShowCart?: () => void;
}

const BodyHome = (props: BodyHomeProps) => {
  const {favourite, onFavourite, onShowCart} = props;

  const FiveStar = useCallback(() => {
    return (
      <>
        {new Array(5).fill(0).map((_, ind) => (
          <Image
            key={ind.toString()}
            source={ImageSource.Star}
            style={styles.star}
          />
        ))}
      </>
    );
  }, []);

  return (
    <View style={styles.flex}>
      <View style={styles.container}>
        <View style={[styles.row, styles.flexEnd]}>
          <View style={styles.viewDiscount}>
            <AppText style={styles.txtDiscount}>10%</AppText>
          </View>
          <AppText style={styles.txtNewPrice}>406.000đ</AppText>
          <AppText style={styles.txtOldPrice}>406.000đ</AppText>
        </View>
        <AppText style={styles.txtTitle}>
          Solid Pocket Button Lapel Long Sleeve Blue Cotton 100%
        </AppText>
        <View style={[styles.row, styles.center]}>
          {FiveStar()}
          <AppText style={styles.txtNumberRate}>996</AppText>
          <View style={styles.box} />
          <AppText style={[styles.txtSell, styles.flex]}>Đã bán 1201</AppText>
          <Image
            style={styles.iconFavorite}
            source={ImageSource.FavouriteColor}
          />
        </View>
      </View>

      <View style={[styles.row, styles.center, styles.containerBox]}>
        <Image source={ImageSource.IconSize} style={styles.iconSize} />
        <AppText style={[styles.txtSize, styles.flex]}>Màu, Kích thước</AppText>
        <TouchableOpacity hitSlop={styles.hitSlop}>
          <Image
            style={styles.iconRight}
            source={ImageSource.Right}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.containerAddCart}>
          <TouchableOpacity onPress={onFavourite}>
            <Image
              style={styles.iconFavorite}
              source={
                favourite
                  ? ImageSource.FavouriteWhite
                  : ImageSource.FavouriteColor
              }
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart} onPress={onShowCart}>
            <Image
              source={ImageSource.BackgroundBtn}
              style={styles.iconButton}
            />
            <AppText style={styles.txtCart}>THÊM VÀO GIỎ HÀNG</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BodyHome;
