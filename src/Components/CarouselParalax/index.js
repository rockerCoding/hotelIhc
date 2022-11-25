import * as React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

const Index = ({ photos }) => {
  const width = Dimensions.get('window').width;
  const [heightController, setHeightController] = React.useState()
  return (

    <View style={styles.carouselContainer} onLayout={(e) => setHeightController(e.nativeEvent.layout.height)}>
      <View style={[styles.carouselControllerContainer, styles.carouselControllerContainerLeft, { height: heightController}]}>
        <MaterialIcons name="chevron-left" color="white" size={50} />
      </View>

      <Carousel
        
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={photos}
        scrollAnimationDuration={2000}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              flex: 1,

              justifyContent: 'center',
            }}

          >
            <Image
              source={item}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      />

      <View style={[styles.carouselControllerContainer, styles.carouselControllerContainerRight, { height: heightController}]}>
        <MaterialIcons name="chevron-right" color="white" size={50} />
      </View>
    </View>
  );
}

export default Index;