import SwiperCarousel from './components/SwiperCarousel';
import ShapOne from './components/ShapOne';
import ShapTwo from './components/ShapTwo';

function App() {
  const userData = [
    { id: 1, name: 'kareem', email: 'kareem@email.com', age: 30 },
    { id: 2, name: 'amr', email: 'amr@email.com', age: 30 },
    { id: 3, name: 'wafaa', email: 'wafaa@email.com', age: 32 },
    { id: 4, name: 'safaa', email: 'safaa@email.com', age: 33 },
  ];

  // const userData2 = [
  //   { id: 1, name: 'aly', email: 'kareem@email.com', age: 30 },
  //   { id: 2, name: 'hesham', email: 'amr@email.com', age: 30 },
  // ];

  return (
    <div className='App'>
      <SwiperCarousel items={userData}>
        <ShapOne />
      </SwiperCarousel>

      <SwiperCarousel items={userData}>
        <ShapTwo />
      </SwiperCarousel>
    </div>
  );
}

export default App;
