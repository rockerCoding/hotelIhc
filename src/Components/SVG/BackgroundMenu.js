import * as React from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';

export default function SvgComponent(props) {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 100 100" {...props}>
      <Rect 
        x="30%" y="-100%" 
        width="100%" height="150%" 
        fill="blue" rotation="50"/>
    </Svg>
  );
}