import './App.css';
import Store from './components/Store';

const App = () => {
  const body = document.body;
  body.style.backgroundColor = '#282c34';

  return (
    <div className="App">
      <Store />
    </div>
  );
}

export default App;
