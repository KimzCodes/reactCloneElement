import React from 'react';

const Button = ({ color, cutomClasses, callBackFn, children }) => {
  return (
    <div
      className={`${cutomClasses ? 'button ' + cutomClasses : 'button'}`}
      style={{ color: color }}
      onClick={() => callBackFn(children)}
    >
      {children}
    </div>
  );
};

export default Button;
