import React from 'react';

const ShapOne = ({ item }) => {
  console.log(item);
  return (
    <div className='shapeOne'>
      <ul>
        <li>{item.name}</li>
        <li>{item.age}</li>
      </ul>
    </div>
  );
};

export default ShapOne;
