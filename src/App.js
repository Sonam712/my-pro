import './App.css';
import Header from "./Layout/header";
import Footer from "./Layout/footer"
import Banner from './Components/banner';
import Offers from './Components/Offers';
import Brands from './Components/Brands';
import About from './Pages/About.js';
import Cart from './Components/Cart.js';
import Dummy from './Components/Dummy.js'


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Offers/>
      <Brands/>
      <About/>
      <Cart/>
      <Dummy />
      <Footer/>
    </div>
  );
}

export default App;
