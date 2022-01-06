import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="Harry" notification={15}/>
    </div>
  )
}

export default App;