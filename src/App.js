import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import HomeNave from './Components/HomeNave';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeNave/>
        <Home/>
      </header>
      <body>

      </body>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
