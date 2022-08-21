import React from "react";
import "./scholarship.css";
import Img1 from "../assets/img/scholarship_png1.png";
import Scholarship_icon from "../assets/img/Scholarship_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";


const Scholarship = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);

  return (
    <div className="page_container">
      <img style={{ width: "100%" }} src={Img1} alt="" />
      <div className="scholarship_block1">
        <div className="gioithieu">
          <p style={{ fontSize: "40px" }}>GIỚI THIỆU</p>
          <div
            style={{
              marginTop: 30,
              marginBottom: 30,
              fontSize: 15,
              backgroundColor: "#8D6671",
              padding: 20,
            }}
          >
            Được thành lập dựa trên cam kết giữa hai chính phủ Việt Nam và Anh
            quốc, chương trình đào tạo tại VNUK được sự tư vấn bởi các giáo sư
            hàng đầu của Đại học Aston, Vương quốc Anh. Nhằm mục tiêu đem lại cơ
            hội trải nghiệm chương trình đào tạo chuẩn Anh quốc, VNUK tiếp tục
            đem lại nhiều cơ hội học bổng cho các thí sinh mùa tuyển sinh năm
            học 2022-2023.
          </div>
          <div style={{ fontSize: 15 }}>
            Chương trình giảng dạy tại VNUK hoàn toàn bằng tiếng Anh; 25% giảng
            viên là người nước ngoài; và cơ hội thực tập tại các doanh nghiệp
            lớn sẽ đảm bảo sinh viên có một nền tảng kiến thức vững chắc cũng
            như những kỹ năng cần thiết để sẵn sàng cho thị trường lao động
            trong nước và quốc tế. Vì vậy, đừng bỏ qua cơ hội tuyệt vời này nhé.
          </div>
        </div>
        <div className="lienhe">
          <div
            style={{
              color: "white",
              backgroundColor: "#15152E",
              width: "70%",
              margin: "auto",
              padding: 30,
              fontSize: 20,
            }}
          >
            Viện Nghiên cứu và đào tạo Việt-Anh
            <br />
            <div style={{ fontSize: 15, marginTop: 20, marginLeft: 20 }}>
              <p>Email: admission@vnuk.edu.vn</p>
              <p>Số điện thoại: 0236 3738399</p>
              <p>Hotline: 0905 556 654</p>
              <p>Thứ Hai - Thứ Sáu, 8:00-17:00</p>
              <p>Thông tin mạng xã hội</p>
            </div>
          </div>
        </div>
      </div>
      <div className="scholarship_block2">
        <div>
          <img style={{ width: 40 }} src={Scholarship_icon} />{" "}
          <span style={{ fontSize: 30 }}>Các loại học bổng</span>
        </div>
        <div className="list_scholarship">
          <div>
            <div
              className="list_scholarship_item"
              onClick={() => setShow1(!show1)}
            >
              Học bổng Tương lai
            </div>
            {show1 && (
              <p className="detail">
                Học bổng nhằm tiếp sức cho các học sinh có năng lực tư duy tốt
                và thành tích học tập tốt nhưng có điều kiện gia đình hoặc bản
                thân ĐẶC BIỆT khó khăn, thuộc gia đình hộ nghèo/ cận nghèo,
                không thể theo đuổi chương trình đại học mà không có nguồn hỗ
                trợ tài chính.
              </p>
            )}
          </div>
          <div
            className="list_scholarship_item"
            onClick={() => setShow2(!show2)}
          >
            Học bổng Tài năng
          </div>
          {show2 && (
            <p className="detail">
              Học bổng Tài năng dành cho các ứng viên có thành tích học tập xuất
              sắc cùng các thành tích thể hiện năng lực nổi trội trong quá trình
              học tập và phát triển ở bậc THPT. Tiêu chí xét dựa trên năng lực
              học tập, tiếng Anh và các hoạt động ngoại khóa.
            </p>
          )}
          <div>
            <div
              className="list_scholarship_item"
              onClick={() => setShow3(!show3)}
            >
              Học bổng Danh Dự
            </div>
            {show3 && (
              <p className="detail">
                Học bổng Danh dự dành cho các ứng viên đạt giải trong các kỳ thi
                Học sinh giỏi, các kỳ thi Olympic, các cuộc thi Khoa học kỹ
                thuật quốc gia, quốc tế hay cấp tỉnh thành. Học bổng ưu tiên ứng
                viên có khả năng tiếng Anh và có thành tích hoạt động ngoại
                khóa.
              </p>
            )}
          </div>
          <div
            className="list_scholarship_item"
            onClick={() => setShow4(!show4)}
          >
            Học bổng Khuyến Khích
          </div>
          {show4 && (
            <p className="detail">
              Học bổng Khuyến khích tiếp sức cho các ứng viên có thành tích học
              tập tốt nhưng có hoàn cảnh kinh tế gia đình khó khăn cũng như
              thuộc nhóm người yếu thế trong xã hội. Học bổng xét trên nhu cầu
              tài chính mà không yêu cầu điều kiện về thành tích học tập.
            </p>
          )}
          <div>
            <div
              className="list_scholarship_item"
              onClick={() => setShow5(!show5)}
            >
              Học bổng Đổi mới Sáng tạo
            </div>
            {show5 && (
              <p className="detail">
                Học bổng Sáng tạo là phần thưởng dành cho các ứng viên có tố
                chất lãnh đạo, tinh thần tiên phong, có đam mê, mong muốn tạo ra
                sự thay đổi và có nhiều đóng góp cho cộng đồng. Học bổng ưu tiên
                ứng viên nữ có tố chất lãnh đạo cộng đồng.
              </p>
            )}
          </div>
          <div
            className="list_scholarship_item"
            onClick={() => setShow6(!show6)}
          >
            Học bổng Lãnh đạo cộng đồng
          </div>
          {show6 && (
            <p className="detail">
              Học bổng Lãnh đạo cộng đồng ghi nhận những sinh viên có nhiều đóng
              góp cho cộng đồng khi tham gia chương trình VNUK Mentoring. Sinh
              viên nhận học bổng sẽ có cơ hội phát triển khả năng lãng đạo, kỹ
              năng giao tiếp trước công chúng và kỹ năng làm việc nhóm với vai
              trò cố vấn cho học sinh ở các trường THPT.
            </p>
          )}
          <div>
            <div
              className="list_scholarship_item"
              onClick={() => setShow7(!show7)}
            >
              Học bổng Trao đổi
            </div>
            {show7 && (
              <p className="detail">
                VNUK hướng đến mục tiêu tăng cường mức độ tiếp xúc môi trường
                quốc tế cho sinh viên bậc đại học tại VNUK. VNUK khuyến khích
                sinh viên bước ra thế giới rộng lớn hơn và trải nghiệm trực tiếp
                những nền văn hóa khác thông qua một học kỳ hoặc một năm học ở
                các trường đại học đối tác của VNUK và của Đại học Đà Nẵng.
              </p>
            )}
          </div>
          <div
            className="list_scholarship_item"
            onClick={() => setShow8(!show8)}
          >
            Học bổng Sinh viên quốc tế
          </div>
          {show8 && (
            <p className="detail">
              Học bổng Sinh viên quốc tế dành cho sinh viên quốc tế đã đạt được
              kết quả xuất sắc trong học tập hoặc thể hiện tiềm năng đạt thành
              tích cao tại VNUK. Học bổng này khen thưởng sự xuất sắc và giúp
              sinh viên đạt được mong muốn của mình. Học bổng tìm kiếm những ứng
              viên muốn học hỏi và muốn tạo nên sự khác biệt cho thế giới.
            </p>
          )}
          <div>
            <div
              className="list_scholarship_item"
              onClick={() => setShow9(!show9)}
            >
              Học bổng Đa dạng văn hóa
            </div>
            {show9 && (
              <p className="detail">
                VNUK mong muốn chào đón nhiều sinh viên quốc tế đến học tâp và
                trao đổi lại trường nhằm tăng cường sự đa dạng văn hóa trong môi
                trường học tập tại VNUK. Học bổng này nằm khuyến khích sinh viên
                tham gian chương trình trao đổi tại VNUK.
              </p>
            )}
          </div>
        </div>
        <Link to="/blogs">
        <div style={{ width:'30%', backgroundColor: "#15152E", color:'white',fontSize:30,padding:30,marginRight:'auto',marginLeft:'auto',textAlign:'center',marginTop:30,marginBottom:30 }}>
          ĐĂNG KÍ XÉT TUYỂN
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Scholarship;
