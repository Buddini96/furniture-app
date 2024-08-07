import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {

    const slides = [
        "https://i.pinimg.com/736x/9b/57/1f/9b571fe1ae0ddefd5dcfd071686b64d4.jpg",
        "https://i.pinimg.com/736x/fa/4f/80/fa4f802cc408f227a491f1196568760a.jpg",
        "https://i.pinimg.com/564x/89/73/55/8973555b74ff068ec80cf3f57b244a03.jpg",
    ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{borderRadius: 15, width: "92%", marginTop: 13}}
        autoplay
        circleLoop
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
       flex: 1,
       alignItems: "center" 
    }
})