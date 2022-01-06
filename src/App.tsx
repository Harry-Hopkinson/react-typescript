import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  const personName = {
    first: 'Harry',
    last: 'Hopkinson'
  }
  return (
    <div className="App">
      <Greet name="Harry" notification={15} isLoggedIn={true}/>
      <Person name={personName}/>
    </div>
  )
}

export default App;