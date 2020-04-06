import React, { useState } from 'react';
import { Animated } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { shape, array, func, string } from 'prop-types';

import {
  Container,
  TabItem,
  TabIndicatorContainer,
  TabIndicator,
  TabSize,
} from './styles';

const TabBar = ({ navigation, state, descriptors }) => {
  const insets = useSafeArea();
  const [translateValue] = useState(new Animated.Value(0));

  const handleTabPress = ({ isFocused, routeKey, routeName }) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: routeKey,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(routeName);
    }
  };

  const handleAnimateTabIndicator = (index) => {
    Animated.spring(translateValue, {
      toValue: index * 90,
      velocity: 10,
      mass: 0.7,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Container insetsBottom={insets.bottom}>
      <TabIndicatorContainer>
        <TabSize style={{ transform: [{ translateX: translateValue }] }}>
          <TabIndicator />
        </TabSize>
      </TabIndicatorContainer>

      {state.routes.map((route, index) => {
        const { name: label } = route;

        const { key: routeKey, name: routeName } = route;
        const { index: stateIndex } = state;
        const isFocused = stateIndex === index;
        handleAnimateTabIndicator(stateIndex);

        const { options } = descriptors[routeKey];

        return (
          <TabItem
            key={label}
            isFocused={isFocused}
            isFirst={index === 0}
            onPress={() => handleTabPress({ isFocused, routeKey, routeName })}
            onLongPress={() =>
              handleTabPress({ isFocused, routeKey, routeName })
            }
          >
            <Icon
              size={26}
              color={isFocused ? 'white' : 'blueviolet'}
              name={isFocused ? options.icon : `${options.icon}-outline`}
            />
          </TabItem>
        );
      })}
    </Container>
  );
};

TabBar.propTypes = {
  navigation: shape({
    emit: func,
    navigate: func,
  }).isRequired,
  state: shape({
    routes: array,
  }).isRequired,
  descriptors: shape({ options: shape({ icon: string }) }),
};

TabBar.defaultProps = {
  descriptors: {
    options: {
      icon: 'home',
    },
  },
};

export default TabBar;
