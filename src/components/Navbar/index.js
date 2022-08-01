import React from "react";
import "./NavbarElement.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="Navbar" style={{zIndex:'9999'}}>
      <div class="leftNav">
        <ul>
          <li id="trang-chu-bt">
            <Link href="/trang-chu.js">Trang chủ</Link>
          </li>
          <li class="dropbtn">
            <Link href="/gioi-thieu.js">Về VNUK</Link>
            <div className="submenu1">
              <ul>
                <li className="hoverme">
                  <Link href="/gioi-thieu.js">Giới thiệu</Link>
                  <div className="submenu2">
                    <ul style={{zIndex:'9999'}}>
                      <li>
                        <Link href="#" style={{zIndex:'9999'}}>Tầm nhìn & sứ mệnh</Link>
                      </li>
                      <li>
                        <Link href="#" style={{zIndex:'9999'}}>Lịch sử phát triển</Link>
                      </li>
                      <li>
                        <Link href="#">Cơ cấu tổ chức</Link>
                      </li>
                      <li>
                        <Link href="#">Thành tựu</Link>
                      </li>
                      <li>
                        <Link href="#">Đối tác</Link>
                      </li>
                      <li>
                        <Link href="#">Ba công khai</Link>
                      </li>
                      <li>
                        <Link href="#">Liên hệ</Link>
                      </li>
                      <li>
                        <Link href="#">Quà lưu niệm</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="#">Đào tạo</Link>
                </li>
                <li className="hoverme">
                  <Link href="#">Tuyển sinh</Link>
                  <div className="submenu2">
                    <ul>
                      <li>
                        <Link href="#">Xét tuyển vào VNUK</Link>
                      </li>
                      <li>
                        <Link href="#">Nộp hồ sơ</Link>
                      </li>
                      <li>
                        <Link href="#">Học phí, lệ phí</Link>
                      </li>
                      <li>
                        <Link href="#">Học bổng, hỗ trợ tài chính</Link>
                      </li>
                      <li>
                        <Link href="#">Thăm quan VNUK</Link>
                      </li>
                      <li>
                        <Link href="#">Liên hệ với sinh viên</Link>
                      </li>
                      <li>
                        <Link href="/blogs.js">Blogs</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="#">Sinh viên</Link>
                </li>
                <li>
                  <Link href="#">Nghiên cứu</Link>
                </li>
                <li>
                  <Link href="#">Sáng kiến</Link>
                </li>
                <li>
                  <Link href="#">Tin tức & sự kiện</Link>
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
