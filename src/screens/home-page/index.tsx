import {ImageSource} from 'assets';
import {AppHeader} from 'components';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {BodyHome, ImageScroll, ModalCart} from './components';
import {ModalCartRef} from './components/modal-cart';
import {styles} from './styles';

const image = [
  ImageSource.Background,
  ImageSource.Background,
  ImageSource.Background,
  ImageSource.Background,
  ImageSource.Background,
];

const HomeScreen = () => {
  const [favourite, setFavourite] = useState(false);
  const modalRef = useRef<ModalCartRef>(null);

  const onShowCart = useCallback(() => {
    modalRef.current!.onVisible(true);
  }, []);

  const onFavourite = useCallback(() => {
    setFavourite((prevFavorite: boolean) => !prevFavorite);
  }, []);

  useEffect(() => {
    if (Platform.OS == 'android') StatusBar.setTranslucent(true);
  }, []);

  return (
    <View style={styles.container}>
      <AppHeader containerStyle={styles.header} />
      <ImageScroll image={image} />
      <BodyHome
        favourite={favourite}
        onFavourite={onFavourite}
        onShowCart={onShowCart}
      />
      <ModalCart
        ref={modalRef}
        favourite={favourite}
        onFavourite={onFavourite}
      />
    </View>
  );
};

export default HomeScreen;
