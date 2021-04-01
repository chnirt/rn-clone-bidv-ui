/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {
  ScrollView,
  Text,
  View,
  useWindowDimensions,
  Animated,
} from 'react-native';
import Bank from './src/assets/svg/002-bank.svg';

const dotSize = 20;
const boxSize = dotSize * 4;
const backgroundColor = '#D3D3D3';
const iconSize = 40;

const App = () => {
  const {width} = useWindowDimensions();
  const scrollY = useRef(new Animated.Value(0)).current;

  const backgroundTranslateY = scrollY.interpolate({
    inputRange: [0, width * 2.325],
    outputRange: [width * 2.325, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,

          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor,
        }}>
        <Animated.View
          style={{
            width: boxSize,
            height: boxSize,
            transform: [
              {
                translateY: backgroundTranslateY,
              },
            ],
          }}>
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#5BCEAE',
              width: dotSize,
              height: dotSize,
              borderRadius: dotSize / 2,
            }}
          />
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#5BD5DE',
              width: dotSize,
              height: dotSize,
              borderRadius: dotSize / 2,
              right: 0,
            }}
          />
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#E6AC4A',
              width: dotSize,
              height: dotSize,
              borderRadius: dotSize / 2,
              right: 0,
              bottom: 0,
            }}
          />
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#E62273',
              width: dotSize,
              height: dotSize,
              borderRadius: dotSize / 2,
              bottom: 0,
            }}
          />
        </Animated.View>
      </View>

      <ScrollView
        contentContainerStyle={{
          borderColor: 'blue',
          borderWidth: 1,
          borderRadius: 16,
          paddingBottom: 26,
        }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: scrollY},
              },
            },
          ],
          {useNativeDriver: false},
        )}>
        <Animated.Image
          source={{
            uri:
              'https://images.pexels.com/photos/242124/pexels-photo-242124.jpeg?cs=srgb&dl=pexels-kaique-rocha-242124.jpg&fm=jpg',
          }}
          style={{
            width,
            height: width * 1.5,
          }}
          resizeMode="cover"
        />

        <View style={{top: -16, borderRadius: 16, backgroundColor}}>
          <ScrollView horizontal style={{margin: 16}}>
            {[...Array(6).keys()].map(element => (
              <View
                key={element}
                style={{
                  width: (width - 16 * 2) * 0.25,
                  aspectRatio: 1,
                  justifyContent: 'center',
                  alignItems: 'center',

                  // borderColor: 'red',
                  // borderWidth: 1,
                }}>
                <Bank width={iconSize} height={iconSize} />
              </View>
            ))}
          </ScrollView>
        </View>

        <View
          style={{
            width,
            aspectRatio: 1,
            flexWrap: 'wrap',
            margin: 16,
          }}>
          {[...Array(4).keys()].map(element => (
            <View
              key={element}
              style={{
                width: (width - 16 * 2) * 0.5,
                aspectRatio: 1,
                justifyContent: 'center',
                alignItems: 'center',

                // borderColor: 'green',
                // borderWidth: 1,
              }}>
              <Bank width={iconSize} height={iconSize} />
            </View>
          ))}
        </View>
        {[...Array(4).keys()].map(element => (
          <View
            key={element}
            style={{
              width,
              aspectRatio: 1,
              margin: 16,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                textAlignVertical: 'center',

                paddingVertical: 16 * 0.5,
              }}>
              Lorem ipsm
            </Text>
            <View
              style={{
                flexWrap: 'wrap',
              }}>
              {[...Array(9).keys()].map(element => (
                <View
                  key={element}
                  style={{
                    width: (width - 16 * 2) / 3,
                    aspectRatio: 1,
                    justifyContent: 'center',
                    alignItems: 'center',

                    // borderColor: 'red',
                    // borderWidth: 1,
                  }}>
                  <Bank width={iconSize} height={iconSize} />
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default App;
