import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants';
import bg from '../../assets/images/bg.jpg';

const Carousel = () => {
  const slides = [
    "https://i.pinimg.com/736x/9b/57/1f/9b571fe1ae0ddefd5dcfd071686b64d4.jpg",
    bg,
    "https://i.pinimg.com/736x/fa/4f/80/fa4f802cc408f227a491f1196568760a.jpg",
  ];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 12, width: '100%', height: '100%', marginTop: 0 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    height: 350, // Increase the height as needed
    backgroundColor: '#ddd',
  },
});

export default Carousel;
