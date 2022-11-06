import { useState } from "react";
import {
  Navbar,
  Welcome,
  Loader,
  Sercives,
  Transactions,
  Footer,
} from "./components";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Sercives />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
