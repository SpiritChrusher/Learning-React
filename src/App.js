import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
const App = () => {
	
	const name = 'Kristóf'
	const secname = "Szabó"
	const X = true
	
	const [tasks, setTasks] = useState(
	[
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": false
    }
  ])
	
  return (
    <div className="AppContainer">
	<Header/>
	  <h1>Hello {X ? 'Mr.' : 'Ms.'} {name + ' ' + secname}</h1>
    <Tasks tasks={tasks}/>
	</div>
  );
}

export default App;