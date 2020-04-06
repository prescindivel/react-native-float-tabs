import styled from 'styled-components/native';
import { Animated } from 'react-native';

const tabSize = '45px';

export const Container = styled.View`
  flex-direction: row;
  align-self: center;
  position: absolute;
  bottom: ${(props) => `${props.insetsBottom + 30}px`};
  border-radius: 45px;
  padding: 15px;
  background-color: white;
  elevation: 30;
`;

export const TabItem = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${tabSize};
  height: ${tabSize};
  border-radius: ${tabSize};
  border: 2px solid blueviolet;
  background-color: ${(props) => (props.isFocused ? 'blueviolet' : 'white')};
  margin-left: ${(props) => (props.isFirst ? 0 : tabSize)};
`;

export const TabIndicatorContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-horizontal: 15px;
`;

export const TabSize = styled(Animated.View)`
  width: ${tabSize};
  align-items: center;
`;

export const TabIndicator = styled.View`
  width: 12px;
  height: 4px;
  border-radius: 2px;
  background-color: blueviolet;
`;
