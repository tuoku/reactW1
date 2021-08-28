import {useState, useEffect} from 'react';

// TODO: add necessary imports
const url = 'http://media.mw.metropolia.fi/wbma/media/';
const useMedia = () => {
  // TODO: move mediaArray state here
  // TODO: move loadMedia function here
  // TODO: move useEffect here

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
        setData(await Promise.all(finals));
      } catch (e) {
        console.log(e.message);
      }
    };
    loadMedia();
  });

  return {mediaArray};
};

export {useMedia};
