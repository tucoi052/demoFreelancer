import {ImageSource} from 'assets';
import {AppText, TagItem} from 'components';
import React, {forwardRef, useImperativeHandle, useState, memo} from 'react';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './styles';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export interface ModalCartRef {
  onVisible(isVisible: boolean): void;
}

interface IProps {
  favourite?: boolean;
  onFavourite?: () => void;
}

const ModalCart = forwardRef<ModalCartRef, IProps>((props, ref) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const {favourite, onFavourite} = props;

  useImperativeHandle(
    ref,
    () => ({
      onVisible: isVisible => {
        setIsVisible(isVisible);
      },
    }),
    [],
  );

  const onClose = () => {
    setIsVisible(false);
  };

  const RenderQuantity = memo(() => {
    return (
      <>
        <TouchableOpacity
          style={styles.wrapMinus}
          onPress={() => {
            if (quantity <= 0) return;
            setQuantity(quantity - 1);
          }}>
          <Image
            source={ImageSource.Minus}
            style={styles.iconMinus}
            resizeMode="center"
          />
        </TouchableOpacity>
        <View style={styles.wrapNumber}>
          <AppText customStyle={styles.txtNumber}>{quantity || '0'}</AppText>
        </View>
        <TouchableOpacity
          style={styles.wrapMinus}
          onPress={() => setQuantity(quantity + 1)}>
          <Image
            source={ImageSource.Plus}
            style={styles.iconMinus}
            resizeMode="center"
          />
        </TouchableOpacity>
      </>
    );
  });

  const RenderFooter = memo(() => {
    return (
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
        <TouchableOpacity style={styles.btnCart}>
          <Image source={ImageSource.BackgroundBtn} style={styles.iconButton} />
          <AppText style={styles.txtCart}>THÊM VÀO GIỎ HÀNG</AppText>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <Modal
      useNativeDriver={true}
      isVisible={isVisible ?? false}
      style={styles.modal}
      hasBackdrop={true}
      animationIn={'slideInUp'}
      animationInTiming={500}
      animationOut={'slideOutDown'}
      animationOutTiming={500}
      backdropOpacity={0.5}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={true}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <View style={styles.rowSpace}>
          <AppText style={styles.txtTitle}>Chọn phân loại</AppText>
          <TouchableOpacity onPress={onClose}>
            <Image source={ImageSource.Close} style={styles.iconClose} />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 16}}>
          <AppText customStyle={styles.txtCategory}>MÀU SẮC</AppText>
          <View style={styles.wrapTag}>
            <TagItem
              customStyle={{marginHorizontal: 4}}
              source={['Đen', 'Trắng', 'Xanh']}
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 16}}>
          <AppText customStyle={styles.txtCategory}>KÍCH THƯỚC</AppText>
          <View style={styles.wrapTag}>
            <TagItem
              customStyle={{marginHorizontal: 4}}
              source={['S', 'M', 'L', 'XL', '2XL']}
            />
          </View>
        </View>
        <View style={styles.wrapQuantity}>
          <AppText customStyle={styles.txtCategory}>SỐ LƯỢNG</AppText>
          <View style={styles.quantityView}>
            <RenderQuantity />
          </View>
        </View>
        <RenderFooter />
      </View>
    </Modal>
  );
});

export default ModalCart;
