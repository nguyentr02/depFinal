import "./App.css";
import Navbar from "./components/Navbar/index.js";
import Gioithieu from "./pages/gioi-thieu.js";
import Trangchu from "./pages/trang-chu.js";
import Vision from "./pages/vision";
import VnukFh from "./pages/vnuk_founding_history";
import GiangThiKimLien from "./pages/giang_thi_kim_lien";
import ExStudent from "./pages/ex_student";
import Recruit from "./pages/recruit";
import Research from "./pages/research";
import Footer from "./components/Footer/footer.js";
import Blogs from "./pages/blogs";
import ToChuc from "./pages/tochuc";
import HocPhi from "./pages/hocphi";
import Visit from "./pages/visit";
import Huong from "./pages/huong";
import SubmitProfile from "./pages/submit_profile";
import CongSv from "./pages/congsv";
import Scholarship from "./pages/scholarship";

import { BrowserRouter,Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Trangchu/>} />
        <Route path="/gioithieu" exact element={<Gioithieu/>} />
        <Route path="/visit" exact element={<Visit/>} />
        <Route path="/vision" exact element={<Vision/>} />
        <Route path="/vnukfh" exact element={<VnukFh/>} />
        <Route path="/giangthikimlien" element={<GiangThiKimLien/>} />
        <Route path="/exstudent" exact element={<ExStudent/>} />
        <Route path="/recruit" exact element={<Recruit/>} />
        <Route path="/research" exact element={<Research/>} />
        <Route path="/blogs" exact element={<Blogs/>} />
        <Route path="/tochuc" exact element={<ToChuc/>} />
        <Route path="/huong" exact element={<Huong/>} />
        <Route path="/hocphi" exact element={<HocPhi/>} />
        <Route path="/submitprofile" exact element={<SubmitProfile/>} />
        <Route path="/congsv" exact element={<CongSv/>} />
        <Route path="/scholarship" exact element={<Scholarship/>} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;