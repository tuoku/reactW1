import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: '#cccccc',
          padding: 10,
          marginBottom: 20,
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <View>
          <Image
            source={{uri: this.props.singleMedia.thumbnails.w160}}
            style={{
              width: 200,
              height: 300,
              marginRight: 10,
              flex: 2,
            }}
          />
        </View>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {this.props.singleMedia.title}
          </Text>
          <Text style={{flexWrap: 'wrap', width: 200, paddingRight: 10}}>
            {this.props.singleMedia.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};
export default ListItem;
