import React from 'react'
import './NavbarElement.css';

const Navbar = () => {
  return (
    <div class="Navbar">
      <div class="leftNav">
        <a id="trang-chu-bt" class="btn" href="/trang-chu.js">Trang chủ</a>
        {/* <a id="gioi-thieu-bt" href="/gioi-thieu.html">Về VNUK</a> */}
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
            {/* <div class="dropdown-content1">
              <a href="#">Lịch sử phát triển</a>
              <a href="#">Tầm nhìn & sứ mệnh</a>
              <a href="#">Cơ cấu tổ chức</a>
              <a href="#">Thành tựu</a>
              <a href="#">Đối tác</a>
              <a href="#">Ba công khai</a>
              <a href="#">Liên hệ</a>
              <a href="#">Quà lưu niệm</a>
            </div> */}

            <a href="#">Đào tạo</a>
            <a href="#">Tuyển sinh</a>
            <a href="#">Sinh viên</a>
            <a href="#">Nghiên cứu</a>
            <a href="#">Sáng kiến</a>
            <a href="#">Tin tức & sự kiện</a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;