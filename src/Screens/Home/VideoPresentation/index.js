import { View, Text, Image, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import { ResizeMode, Video } from 'expo-av';
import { styles } from './styles';

const VideoPresentation = () => {

  const video = useRef(null);

  const width = Dimensions.get("screen").width * 0.5
  const height = Dimensions.get("screen").height * 0.5

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("../../../../assets/Videos/apresentacao_low.mp4")}
        useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping
        isMuted
        shouldPlay
        usePoster
      />
      <View style={styles.sobreposicao}>
        <Image
          source={require("../../../../assets/Pictures/lasalle_logo.png")}
          style={{ width: 300, height: 100 }}
          resizeMode='stretch'
        />
      </View>
    </View>
  )
}

export default VideoPresentation