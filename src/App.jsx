import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigationbar from './Components/Navigationbar';
import Home from './Components/Home';
import About from './Components/About';
import Packages from './Components/Packages';
import Register from './Components/Register';
import Footer from './Components/Footer';



function App() {
  return (
    <div>
      <Navigationbar></Navigationbar>
      <Home/>
      <About/>
      <Packages/>
      <Register/>
      <Footer/>

   </div>
  );
}

export default App;
