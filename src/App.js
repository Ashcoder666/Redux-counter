import Counter from './Counter';
import './App.css';
import {Provider} from 'react-redux'
import store from './Redux/UsageReducer'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Counter />
    </div>
    </Provider>
  );
}

export default App;
