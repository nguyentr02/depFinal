import './App.css';
import Navbar from './components/Navbar/index.js';
import Gioithieu from './pages/gioi-thieu';
import Trangchu from './pages/trang-chu.js';
import Footer from './components/Footer/footer.js';

import ToChuc from './pages/tochuc';
import Huong from './pages/huong';

function App() {
  return (
    
    <div className='App'>
      {/* <Navbar/>
      <Gioithieu/>
      <Footer/> */}

      <Navbar/>
      <Huong/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
