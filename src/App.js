import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommended from './Recommended';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/> 
      <Recommended/>
    </div>
  );
}

export default App;
