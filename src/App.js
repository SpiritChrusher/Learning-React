import './App.css';
import Header from './components/Header'


const App = () => {
	
	const name = 'Kristóf'
	const secname = "Szabó"
	const X = true
	
  return (
    <div className="AppContainer">
	<Header/>
	  <h1>Hello {X ? 'Mr.' : 'Ms.'} {name + ' ' + secname}</h1>
    </div>
  );
}

export default App;