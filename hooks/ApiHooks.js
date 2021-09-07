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

const useLogin = () => {
  const login = async () => {
    try {
      const body = JSON.stringify({username: 'tuomas', password: 'kakka2000'});
      console.log('body: ' + body);
      const res = await fetch('https://media.mw.metropolia.fi/wbma/login/', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
      console.log('raw: ' + res.toString);
      const json = await res.json();
      console.log('json:' + json.token);
      return json.token;
    } catch (e) {
      console.log(e);
    }
  };
  return login();
};

const register = async (inputs) => {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputs),
  };wpms21_LoginForm.js at forms · ilkkamtk_wpms21wbma/users/',
      fetchOptions
    );
    const json = await response.json();
    return json;
  } catch (e) {
    console.log('ApiHooks register', e.message);
    return false;
  }
};

export {useMedia, useLogin, register};
