import Counter from './components/Counter';
import Blink from './components/Blink';
import './App.css';

function App() {
  console.log('Hello World')
  return (
    <div className="App">
      <Counter />
      <Blink />
    </div>
  );
}

export default App;
