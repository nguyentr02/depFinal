import React from "react";
import "./NavbarElement.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="Navbar" style={{zIndex:'9999'}}>
      <div class="leftNav">
        <ul>
          <li id="trang-chu-bt">
            <Link to="/trang-chu.js">Trang chủ</Link>
          </li>
          <li class="dropbtn">
            <Link to="/gioi-thieu.js">Về VNUK</Link>
            <div className="submenu1">
              <ul>
                <li className="hoverme">
                  <Link to="/gioi-thieu.js">Giới thiệu</Link>
                  <div className="submenu2">
                    <ul style={{zIndex:'9999'}}>
                      <li>
                        <Link to="#" style={{zIndex:'9999'}}>Tầm nhìn & sứ mệnh</Link>
                      </li>
                      <li>
                        <Link to="#" style={{zIndex:'9999'}}>Lịch sử phát triển</Link>
                      </li>
                      <li>
                        <Link to="#">Cơ cấu tổ chức</Link>
                      </li>
                      <li>
                        <Link to="#">Thành tựu</Link>
                      </li>
                      <li>
                        <Link to="#">Đối tác</Link>
                      </li>
                      <li>
                        <Link to="#">Ba công khai</Link>
                      </li>
                      <li>
                        <Link to="#">Liên hệ</Link>
                      </li>
                      <li>
                        <Link to="#">Quà lưu niệm</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#">Đào tạo</Link>
                </li>
                <li className="hoverme">
                  <Link to="#">Tuyển sinh</Link>
                  <div className="submenu2">
                    <ul>
                      <li>
                        <Link to="#">Xét tuyển vào VNUK</Link>
                      </li>
                      <li>
                        <Link to="#">Nộp hồ sơ</Link>
                      </li>
                      <li>
                        <Link to="#">Học phí, lệ phí</Link>
                      </li>
                      <li>
                        <Link to="#">Học bổng, hỗ trợ tài chính</Link>
                      </li>
                      <li>
                        <Link to="#">Thăm quan VNUK</Link>
                      </li>
                      <li>
                        <Link to="#">Liên hệ với sinh viên</Link>
                      </li>
                      <li>
                        <Link to="/blogs.js">Blogs</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#">Sinh viên</Link>
                </li>
                <li>
                  <Link to="#">Nghiên cứu</Link>
                </li>
                <li>
                  <Link to="#">Sáng kiến</Link>
                </li>
                <li>
                  <Link to="#">Tin tức & sự kiện</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="rightNav"></div>
    </div>
  );
};

export default Navbar;
