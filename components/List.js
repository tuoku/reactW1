import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';

const List = () => {
  const url = 'https://media.mw.metropolia.fi/wbma/media/';
  const [mediaArray, setData] = useState([]);

  useEffect(() => {
    const loadMedia = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const finals = json.map(async (i) => {
          const res = await fetch(url + i.file_id);
          const file = await res.json();
          return file;
        });
        console.log('JSONNNNNN: ' + "");
        setData(await Promise.all(finals));
      } catch (e) {
        console.log(e.message);
      }
    };
    loadMedia();
  });
  return (
    <FlatList
      data={mediaArray}
      renderItem={({item}) => <ListItem singleMedia={item} />}
      keyExtractor={(item, index) => index.toString()}
    ></FlatList>
  );
};

export default List;
