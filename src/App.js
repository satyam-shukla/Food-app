import Header from "./components/Layout/Header";
import Cart from './components/Cart/Cart'
import { useState} from 'react'
import CartProvider from "./store/CartProvider";
import Meals from "./components/Meals/Meals";
function App() {
  const[cardIsShown,setCartIsShown] = useState(false);

  const showCardHandler = () =>{
    setCartIsShown(true)
  }

  const hideCardHandler = () =>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cardIsShown && <Cart onClose={hideCardHandler}/>}
      <Header onShowCart={showCardHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
