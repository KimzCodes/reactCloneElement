import React from 'react';

const List = ({ children, items }) => {
  const itemHandler = items.map((item) =>
    React.cloneElement(
      children,
      {
        key: item.id,
        ...item,
      },
      'wrapper'
    )
  );

  return <div className='list'>{itemHandler}</div>;
};

export default List;
