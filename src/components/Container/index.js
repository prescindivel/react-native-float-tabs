import React, { useState } from 'react';
import { Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { element, string } from 'prop-types';

import { SafeAreaContainer, Background } from './styles';

const Container = ({ children, backgroundColor }) => {
  const [sizeValue] = useState(new Animated.Value(0));

  useFocusEffect(() => {
    sizeValue.setValue(0);

    Animated.spring(sizeValue, {
      toValue: 0.9,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <SafeAreaContainer>
        {children}

        <Background
          backgroundColor={backgroundColor}
          style={{
            transform: [{ scale: sizeValue }],
          }}
        />
      </SafeAreaContainer>
    </>
  );
};

Container.propTypes = {
  children: element.isRequired,
  backgroundColor: string,
};

Container.defaultProps = {
  backgroundColor: 'white',
};

export default Container;
