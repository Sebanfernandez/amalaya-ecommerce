import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
   <div>
     <NavBar/>
     <ItemListContainer/>
   </div>
  );
}

export default App;
