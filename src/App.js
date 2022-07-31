import './App.css';
import Navbar from './components/Navbar/index.js';
import Gioithieu from './pages/gioi-thieu';
import Trangchu from './pages/trang-chu.js';
import Vision from './pages/vision';
import VnukFh from './pages/vnuk_founding_history';
import GiangThiKimLien from './pages/giang_thi_kim_lien';
import ExStudent from './pages/ex_student';
import Recruit from './pages/recruit';
import Research from './pages/research';
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
      <ToChuc/>
      {/* <Huong/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
