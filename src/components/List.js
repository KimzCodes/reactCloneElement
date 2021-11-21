import React from 'react';

const List = ({ children, items }) => {
  const dataHandler = items.map((item) =>
    React.cloneElement(children, { key: item.id, item })
  );

  return <div className='list'>{dataHandler}</div>;
};

export default List;
