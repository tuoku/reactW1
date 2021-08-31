import {useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image} from 'react-native';

const Single = () => {
  const {singleMedia} = useRoute().params;
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri:
            'https://media.mw.metropolia.fi/wbma/uploads/' +
            useRoute().params.filename,
        }}
        style={{
          borderBottomLeftRadius: 50,
          borderRadius: 10,
          width: 300,
          marginRight: 10,
          height: 300,
        }}
      ></Image>
      <Text>{useRoute().params.title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

export default Single;
