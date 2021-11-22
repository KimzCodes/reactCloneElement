import ShapOne from './components/ShapOne';
import ShapTwo from './components/ShapTwo';
import Carousel from './components/Carousel';
import React from 'react';
import './index.css';

function App() {
  const userData = [
    {
      enable: true,
      componentName: ShapOne,
      data: [
        { id: 1, name: 'kareem', email: 'kareem@email.com', age: 30 },
        { id: 2, name: 'amr', email: 'amr@email.com', age: 30 },
        { id: 3, name: 'wafaa', email: 'wafaa@email.com', age: 32 },
        { id: 4, name: 'safaa', email: 'safaa@email.com', age: 33 },
        { id: 5, name: 'safaa', email: 'safaa@email.com', age: 33 },
        { id: 6, name: 'safaa', email: 'safaa@email.com', age: 33 },
      ],
    },
    {
      enable: true,
      componentName: ShapTwo,
      data: [
        { id: 1, name: 'kareem', email: 'kareem@email.com', age: 30 },
        { id: 2, name: 'amr', email: 'amr@email.com', age: 30 },
        { id: 3, name: 'wafaa', email: 'wafaa@email.com', age: 32 },
        { id: 4, name: 'safaa', email: 'safaa@email.com', age: 33 },
        { id: 5, name: 'safaa', email: 'safaa@email.com', age: 33 },
        { id: 6, name: 'safaa', email: 'safaa@email.com', age: 33 },
      ],
    },
  ];

  const carousels = userData.map((item, idx) => {
    if (item.enable) {
      let MyComponent = userData[idx].componentName;
      return (
        <Carousel items={item.data} slidesPerView='3' navigation key={idx}>
          <MyComponent />
        </Carousel>
      );
    }
    return null;
  });
  return <div className='App'>{carousels}</div>;
}

export default App;
