import React from "react";
import "./NavbarElement.css";

const Navbar = () => {
  return (
    <div class="Navbar" style={{zIndex:'9999'}}>
      <div class="leftNav">
        <ul>
          <li id="trang-chu-bt">
            <a href="/trang-chu.js">Trang chủ</a>
          </li>
          <li class="dropbtn">
            <a href="/gioi-thieu.js">Về VNUK</a>
            <div className="submenu1">
              <ul>
                <li className="hoverme">
                  <a href="/gioi-thieu.js">Giới thiệu</a>
                  <div className="submenu2">
                    <ul style={{zIndex:'9999'}}>
                      <li>
                        <a href="#" style={{zIndex:'9999'}}>Tầm nhìn & sứ mệnh</a>
                      </li>
                      <li>
                        <a href="#" style={{zIndex:'9999'}}>Lịch sử phát triển</a>
                      </li>
                      <li>
                        <a href="#">Cơ cấu tổ chức</a>
                      </li>
                      <li>
                        <a href="#">Thành tựu</a>
                      </li>
                      <li>
                        <a href="#">Đối tác</a>
                      </li>
                      <li>
                        <a href="#">Ba công khai</a>
                      </li>
                      <li>
                        <a href="#">Liên hệ</a>
                      </li>
                      <li>
                        <a href="#">Quà lưu niệm</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Đào tạo</a>
                </li>
                <li className="hoverme">
                  <a href="#">Tuyển sinh</a>
                  <div className="submenu2">
                    <ul>
                      <li>
                        <a href="#">Xét tuyển vào VNUK</a>
                      </li>
                      <li>
                        <a href="#">Nộp hồ sơ</a>
                      </li>
                      <li>
                        <a href="#">Học phí, lệ phí</a>
                      </li>
                      <li>
                        <a href="#">Học bổng, hỗ trợ tài chính</a>
                      </li>
                      <li>
                        <a href="#">Thăm quan VNUK</a>
                      </li>
                      <li>
                        <a href="#">Liên hệ với sinh viên</a>
                      </li>
                      <li>
                        <a href="/blogs.js">Blogs</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Sinh viên</a>
                </li>
                <li>
                  <a href="#">Nghiên cứu</a>
                </li>
                <li>
                  <a href="#">Sáng kiến</a>
                </li>
                <li>
                  <a href="#">Tin tức & sự kiện</a>
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
