import React from 'react'
import './NavbarElement.css';

const Navbar = () => {
  return (
    <div class="Navbar">
      {/* <div class="leftNav">
        <a id="trang-chu-bt" class="btn" href="/trang-chu.js">Trang chủ</a>
        <div class="dropdown">
          <a class="dropbtn" href='/gioi-thieu.js'>Về VNUK</a>
          <div class="dropdown-content">
            <div className='dropdown-submenu'>

              <a class="dropbtn1" href="/gioi-thieu.js">Giới thiệu</a>

              <div class="submenu">
                <a tabIndex={-1} href="#">Lịch sử phát triển</a>
                <a tabIndex={-1} href="#">Tầm nhìn & sứ mệnh</a>
                <a tabIndex={-1} href="#">Cơ cấu tổ chức</a>
                <a tabIndex={-1} href="#">Thành tựu</a>
                <a tabIndex={-1} href="#">Đối tác</a>
                <a tabIndex={-1} href="#">Ba công khai</a>
                <a tabIndex={-1} href="#">Liên hệ</a>
                <a tabIndex={-1} href="#">Quà lưu niệm</a>
              </div>
            </div>
            <div class="dropdown-content1">
              <a href="#">Lịch sử phát triển</a>
              <a href="#">Tầm nhìn & sứ mệnh</a>
              <a href="#">Cơ cấu tổ chức</a>
              <a href="#">Thành tựu</a>
              <a href="#">Đối tác</a>
              <a href="#">Ba công khai</a>
              <a href="#">Liên hệ</a>
              <a href="#">Quà lưu niệm</a>
            </div>

            <a href="#">Đào tạo</a>
            <a href="#">Tuyển sinh</a>
            <a href="#">Sinh viên</a>
            <a href="#">Nghiên cứu</a>
            <a href="#">Sáng kiến</a>
            <a href="#">Tin tức & sự kiện</a>

          </div>
        </div>
      </div> */}

      <div class='leftNav'>
        <ul>
          <li id="trang-chu-bt"><a href="/trang-chu.js">Trang chủ</a></li>
          <li class="dropbtn"><a href="/gioi-thieu.js">Về VNUK</a>
            <div className='submenu1'>
              <ul>
                <li className='hoverme'><a href='/gioi-thieu.js'>Giới thiệu</a>
                  <div className='submenu2'>
                    <ul>
                      {/* <li><a href='#'></a>Lịch sử phát triển</li> */}
                      <li><a href="#">Tầm nhìn & sứ mệnh</a>
                      </li>
                      <li><a href='#'>Lịch sử phát triển</a></li>
                      <li><a href="#">Cơ cấu tổ chứch</a>
                      </li>
                      <li><a href="#">Thành tựu</a></li>
                      <li><a href="#">Đối tác</a></li>
                      <li><a href="#">Ba công khai</a></li>
                      <li><a href="#">Liên hệ</a></li>
                      <li><a href="#">Quà lưu niệm</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="#">Đào tạo</a>
                </li>
                <li><a href="#">Tuyển sinh</a>
                </li>
                <li><a href="#">Sinh viên</a></li>
                <li><a href="#">Nghiên cứu</a></li>
                <li><a href="#">Sáng kiến</a></li>
                <li><a href="#">Tin tức & sự kiện</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className='rightNav'>
        
      </div>
    </div>
  )
}

export default Navbar;