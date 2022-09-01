import React from 'react';

const removeItemFromArray = (arr, item, prop) => {
  return arr.filter(val => val[prop] !== item[prop]);
};

export default removeItemFromArray;
