import React from "react";
import "./NavbarElement.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="Navbar" style={{ zIndex: '9999' }}>
      <div class="leftNav">
        <ul>
          <li id="trang-chu-bt">
            <Link to="/">Trang chủ</Link>
          </li>
          <li class="dropbtn">
            <Link to="/gioithieu">Về VNUK</Link>
            <div className="submenu1">
              <ul>
                <li className="hoverme">
                  <Link to="/gioithieu">Giới thiệu</Link>
                  <div className="submenu2">
                    <ul style={{ zIndex: '9999' }}>
                      <li>
                        <Link to="/vision" style={{ zIndex: '9999' }}>Tầm nhìn & sứ mệnh</Link>
                      </li>
                      <li>
                        <Link to="/vnukfh" style={{ zIndex: '9999' }}>Lịch sử phát triển</Link>
                      </li>
                      <li>
                        <Link to="/tochuc">Cơ cấu tổ chức</Link>
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
                <li className="hoverme">
                  <Link to="#">Đào tạo</Link>
                  <div className="submenu2">
                    <ul>
                      <li>
                        <Link to="#">Đại học</Link>
                      </li>
                      <li>
                        <Link to="#">Sau đại học</Link>
                      </li>
                      <li>
                        <Link to="#">Chứng chỉ nghề nghiệp quốc tế</Link>
                      </li>
                      <li>
                        <Link to="#">Các khóa đào tạo kỹ năng</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hoverme">
                  <Link to="#">Tuyển sinh</Link>
                  <div className="submenu2">
                    <ul>
                      <li>
                        <Link to="#">Xét tuyển vào VNUK</Link>
                      </li>
                      <li>
                        <Link to="/submitprofile">Nộp hồ sơ</Link>
                      </li>
                      <li>
                        <Link to="/hocphi">Học phí, lệ phí</Link>
                      </li>
                      <li>
                        <Link to="/scholarship">Học bổng, hỗ trợ tài chính</Link>
                      </li>
                      <li>
                        <Link to="/visit">Thăm quan VNUK</Link>
                      </li>
                      <li>
                        <Link to="#">Liên hệ với sinh viên</Link>
                      </li>
                      <li>
                        <Link to="/blogs">Blogs</Link>
                      </li>
                      <li>
                        <a href="https://tuyensinhvnuk.edu.vn">Tuyển sinh VNUK</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hoverme">
                  <Link to="#">Sinh viên</Link>
                  <div className="submenu2">
                    <ul>
                      <li>
                        <Link to="/exstudent">Cựu sinh viên và đóng góp</Link>
                      </li>
                      <li>
                        <Link to="#">Góc chia sẻ</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hoverme">
                  <Link to="/research">Nghiên cứu</Link>
                  <div className="submenu2">
                    <ul>
                      <li>
                        <Link to="#">Công bố</Link>
                      </li>
                      <li>
                        <Link to="#">Cơ sở vật chất và phòng lab</Link>
                      </li>
                      <li>
                        <Link to="#">Lĩnh vực nghiên cứu</Link>
                      </li>
                      <li>
                        <Link to="#">Thành tựu của giảng viên</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hoverme">
                  <Link to="#">Sáng kiến</Link>
                  <div className="submenu2">
                    <ul>
                      <li>
                        <Link to="#">U-Invent Mùa 4 năm 2021</Link>
                      </li>
                      <li>
                        <Link to="#">VNUK Peer Buddy Programme 2021</Link>
                      </li>
                      <li>
                        <Link to="#">Chương trình nhà lãnh đạo tương lai</Link>
                      </li>
                      <li>
                        <Link to="#">S.CAMP 2022 - Trại hè Quốc tế</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hoverme">
                  <Link to="#">Tin tức & sự kiện</Link>
                  <div className="submenu2">
                    <ul>
                      <li>
                        <Link to="#">Sự kiện</Link>
                      </li>
                      <li>
                        <Link to="#">Tin tức</Link>
                      </li>
                      <li>
                        <Link to="#">Tin tức ĐHĐN</Link>
                      </li>
                      <li>
                        <Link to="#">Tin nước ngoài</Link>
                      </li>
                    </ul>
                  </div>
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
