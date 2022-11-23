import { View, Text, Image } from 'react-native'
import React, { useRef } from 'react'
import { ResizeMode, Video } from 'expo-av';
import { styles } from './styles';

const VideoPresentation = () => {

  const video = useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("../../../../assets/Videos/apresentacao_low.mp4")}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        isMuted
        shouldPlay
        usePoster
      />
      <View style={styles.sobreposicao}>
        <Image
          source={require("../../../../assets/Pictures/lasalle_logo.png")}
          style={{ width: 300, height: 100 }}
          resizeMode='center'
        />
      </View>
    </View>
  )
}

export default VideoPresentation