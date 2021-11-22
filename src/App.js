import List from './components/List';
import ShapOne from './components/ShapOne';
import ShapTwo from './components/ShapTwo';

function App() {
  const userData = [
    { id: 1, name: 'kareem', email: 'kareem@email.com', age: 30 },
    { id: 2, name: 'amr', email: 'amr@email.com', age: 30 },
    { id: 3, name: 'wafaa', email: 'wafaa@email.com', age: 32 },
    { id: 4, name: 'safaa', email: 'safaa@email.com', age: 33 },
  ];

  return (
    <div className='App'>
      <List items={userData}>
        <ShapOne />
      </List>

      <List items={userData}>
        <ShapTwo />
      </List>

      <ShapOne item={userData[0]} />
    </div>
  );
}

export default App;
