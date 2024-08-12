import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants';
import bg from '../../assets/images/bg.jpg';

const Carousel = () => {
  const slides = [
    "https://i.pinimg.com/564x/6f/0f/2c/6f0f2cb83aeae34aea3f8805dd626891.jpg",
    "https://i.pinimg.com/564x/24/40/fd/2440fd94047ad0be0e89dec64a507bc6.jpg",
    // "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AGB79lDMa2HpoQL6/landing_page_banner_01-YX4WON76MKCrgBnp.jpg",
    
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
    resizeMode: 'cover'
  },
});

export default Carousel;
