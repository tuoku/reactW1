import React from 'react';
import {FlatList} from 'react-native';
import {useMedia} from '../hooks/ApiHooks';
import HeroImage from './HeroImage';
import {ListItem, Avatar} from 'react-native-elements';
import PropTypes from 'prop-types';

const List = ({navigation}) => {
  const {mediaArray} = useMedia();
  return (
    <FlatList
      ListHeaderComponent={HeroImage}
      data={mediaArray}
      renderItem={({item}) => (
        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('Single', item)}
        >
          <Avatar
            source={{
              uri:
                'https://media.mw.metropolia.fi/wbma/uploads/' +
                item.thumbnails?.w160,
            }}
          />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      )}
      keyExtractor={(item, index) => index.toString()}
    ></FlatList>
  );
};

List.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default List;
