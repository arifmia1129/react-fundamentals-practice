import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Share/Menubar/Menubar';
import { useEffect, useState } from 'react';
import Products from './components/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [count, setCount] = useState(0);


  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Menubar count={count} />

      <Products increaseCount={increaseCount} decreaseCount={decreaseCount} />
    </div>
  );
}

export default App;
