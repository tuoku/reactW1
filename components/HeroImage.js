import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {Settings} from 'react-native-feather';

const HeroImage = () => {
  return (
    <View
      style={{
        flex: 5,
        justifyContent: 'center',
        height: 270,
        borderBottomRightRadius: 50,
      }}
    >
      <ImageBackground
        source={{
          uri: 'https://thumbs.dreamstime.com/z/loudly-laughing-guy-over-white-young-man-hand-his-face-out-loud-isolated-background-37098697.jpg',
        }}
        resizeMode="cover"
        imageStyle={{borderBottomRightRadius: 70}}
        style={{
          flex: 5,
          justifyContent: 'center',
          height: 270,
          borderBottomRightRadius: 50,
        }}
      >
        <View style={{position: 'absolute', top: 10, right: 100}}>
          <Settings width={500} />
        </View>

        <Text
          style={{
            position: 'absolute',
            bottom: 20,
            color: 'white',
            fontSize: 28,
            lineHeight: 54,
            fontWeight: 'bold',
            textAlign: 'left',
            backgroundColor: '#2769fd',
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          Funny stuff
        </Text>
      </ImageBackground>
    </View>
  );
};

export default HeroImage;
