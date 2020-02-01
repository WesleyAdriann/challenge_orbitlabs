import AsyncStorage from '@react-native-community/async-storage';
import config from '../config';

export const setItem = (name, value) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(`${config.KEYSTORAGE}::${name}`, obj2string(value))
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getItem = name => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(`${config.KEYSTORAGE}::${name}`)
      .then(value => {
        if (value !== null) {
          resolve(string2obj(value));
        } else {
          throw new Error('item not exist');
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const removeItem = name => {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem(`${config.KEYSTORAGE}::${name}`)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};

const obj2string = data => {
  if (typeof data === 'object') {
    return JSON.stringify(data);
  }
  return data;
};

const string2obj = data => {
  try {
    const string = JSON.parse(data);
    return string;
  } catch {
    return data;
  }
};
