import React from 'react';

const List = ({ children, items }) => {
  const child = items.map((el) =>
    React.cloneElement(children, { item: el, key: el.id })
  );
  return <div className='list'>{child}</div>;
};

export default List;
