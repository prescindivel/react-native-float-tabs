import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Background = styled(Animated.View)`
  position: absolute;
  width: ${width}px;
  height: ${width}px;
  border-radius: ${width}px;
  background-color: ${(props) => props.backgroundColor};
`;
