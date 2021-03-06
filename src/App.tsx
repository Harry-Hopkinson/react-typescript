import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Harry',
    last: 'Hopkinson'
  }

  const nameList = [
    {
      first: "Person",
      last: "One"
    },
    {
      first: "Person",
      last: "Two"
    },
    {
      first: "Person",
      last: "Three"
    }
  ]

  return (
    <div className="App">
      <Greet name="Harry" notification={15} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status="loading"/>
    </div>
  )
}

export default App;