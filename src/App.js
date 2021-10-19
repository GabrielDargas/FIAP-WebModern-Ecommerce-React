import TopBar from "./components/TopBar";
import { GlobalStyle } from "./GlobalStyles";
import Cart from "./page/Cart";
import { CartProvider } from "./providers/cart";
import Routes from "./routes";



function App() {
  
  
  
  return (
    <>
    <GlobalStyle/>
    <CartProvider>
    <Routes />
    </CartProvider>
    </>
  );
}

export default App;
