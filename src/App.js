import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';

function App() {
  // const userData = [
  //   { id: 1, name: 'kareem', email: 'kareem@email.com', age: 30 },
  //   { id: 2, name: 'amr', email: 'amr@email.com', age: 30 },
  //   { id: 3, name: 'wafaa', email: 'wafaa@email.com', age: 32 },
  //   { id: 4, name: 'safaa', email: 'safaa@email.com', age: 33 },
  // ];
  const callBackFn = (title) => {
    console.log(title);
  };

  return (
    <div className='App'>
      <Button callBackFn={callBackFn}>Single</Button>

      <ButtonGroup>
        <Button callBackFn={callBackFn}>First</Button>
        <Button callBackFn={callBackFn}>Second</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
