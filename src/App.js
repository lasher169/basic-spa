import logo from './logo.svg';
import './App.css';
import './components/Button'
import Navigation from './components/Navigation';
import Button from './components/Button';
import './components/Navigation.css'
import Container from './components/Container'

function App() {
  
  let navItemsList = [
        { name: "Home", styling: "nav-styling"},
        { name: "About", styling: "nav-styling"},
        { name: "Services", styling: "nav-styling"},
        { name: "Contact", styling: "nav-styling"}
  ];  

  console.log(navItemsList.length);

  return (
    <div className="App">
      <header className="App-header">
        <Navigation styling="nav-container" navItemsList={navItemsList}/>     
      </header>
      
      <Container/>
      
    </div>
  );
}

export default App;
