import React from 'react';

const ButtonGroup = ({ children }) => {
  //props -> children
  //for loop
  //Button -> first
  //button -> second
  const cloneElement = React.Children.map(children, (child) => {
    const text = child.props.children + '!';
    return React.cloneElement(
      child,
      {
        color: 'red',
        cutomClasses: 'group',
        callBackFn: child.props.callBackFn,
      },
      text
    );
  });

  return <div>{cloneElement}</div>;
};

export default ButtonGroup;
