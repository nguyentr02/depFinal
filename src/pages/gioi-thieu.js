import React from "react";
import "./gioi-thieu.css";

import GiaoVien from "../assets/img/giaovien.png";
import Book from "../assets/img/sách.png";
import Degree from "../assets/img/bằng.png";
import School from "../assets/img/trường.png";
import Gioithieuimg_block3 from "../assets/img/gioithieuimg_block3.png";
import Gioithieuicon_block3 from "../assets/img/school_icon.png";
import Gioithieuimg_block4 from "../assets/img/gioithieuimg_block4.png";
import Gioithieuicon_block4 from "../assets/img/gioithieuicon_block4.png";
import Gioithieuimg_block5 from "../assets/img/gioithieuimg_block5.png";
import Gioithieuicon_block5 from "../assets/img/gioithieuicon_block5.png";
import Gioithieuimg_block6 from "../assets/img/gioithieuimg_block6.png";
import Gioithieuicon_block6 from "../assets/img/gioithieuicon_block6.png";
import Biglogo from'../assets/img/biglogo.png';
const Gioithieu = () => {
  return (
    <div className="GioiThieu">
      <div className="gioithieu-block1">
        <div className="both-img12">
          <img className="img1" src={GiaoVien} alt="GiaoVien" />
          <img className="img2" src={GiaoVien} />
        </div>
        <div className="biglogo">
        <img style={{width:'70%'}} src={Biglogo} alt=''/>
        <p>Viện Nghiên cứu và Đào tạo Việt-Anh, tiền thân trường Đại học quốc tế, Đại học Đà Nẵng</p>
        </div>
        
        <div className="gioithieu_text1">
          <p>
            Đại học Đà Nẵng vinh dự được hai chính phủ Việt Nam và Vương quốc
            Anh chọn và giao nhiệm vụ hợp tác với các trường đại học Vương quốc
            Anh triển khai dự án thành lập trường Đại học Việt - Anh, một trường
            đại học công lập đẳng cấp quốc tế tại Đà Nẵng. Theo Quyết định số
            5555/QĐ-BGDĐT ngày 22 tháng 11 năm 2013 của Bộ Giáo dục và Đào tạo,
            trường Đại học Công lập Quốc tế Việt - Anh được phát triển qua hai
            giai đoạn: (i) thành lập Viện Nghiên cứu và Đào tạo Việt - Anh
          </p>
          <br />
          <p>
            Trong giai đoạn 1 vừa qua, VNUK đã và đang hợp tác với rất nhiều đối
            tác quốc tế, đặc biệt là đối tác đại học tại Vương quốc Anh để triển
            khai các hoạt động nghiên cứu và đào tạo theo hướng tiếp cận với
            trình độ giáo dục tiên tiến, hiện đại trên thế giới. VNUK được xem
            là một trường đại học quốc tế công lập đầu tiên tại miền trung Việt
            Nam. Hiện nay, được sự đồng ý của Hội đồng Đại học Đà Nẵng vào tháng
            3/2021, VNUK đang trình Bộ Giáo dục và Đào tạo đề án thành lập
            trường Đại học quốc tế. Tháng 3/2022, trong chuyến thăm Đại học Đà
            Nẵng, Bộ trưởng Bộ Giáo dục và Đào tạo đã khẳng định sự ủng hộ chủ
            trương thành lập trường Đại học quốc tế Việt Anh
          </p>
        </div>
      </div>
      <div class="gioithieu-block2">
        <div className="column-layout">
          <div class="column-item siderbar-one">
            <img style={{ width: "8rem" }} src={Book} alt="img" />
            <p>
              Nhịp cầu cảm hứng - Viện Nghiên cứu và Đào tạo Việt - Anh nổ lực
              trở thành trường đại học đẳng cấp quốc tế với những nghiên cứu đột
              phá, đào tạo đội ngũ nhân lực phát triển toàn diện trong một môi
              trường sáng tạo và nhân bản.
            </p>
          </div>
          <div class="column-item main-column">
            <img style={{ width: "8rem" }} src={Degree} alt="" />
            <p>
              Thực hiện các dự án nghiên cứu có chất lượng quốc tế, góp phần
              quan trọng nâng cao chất lượng cuộc sống và phát triển của xã hội.
            </p>
            <br />
            <p>
              Phát triển và cung cấp các chương trình đào tạo hiện tại và đẳng
              cấp.
            </p>
            <br />
            <p>
              Trang bị cho người học những kỹ năng cần thiết để có thể làm chủ
              tương lai của bản thân và góp phần xây dựng thế giới tốt đẹp hơn.
            </p>
            <br />
            <p>
              Đem đến cho giảng viên và người học môi trường học tập và làm việc
              thân thiện và đầy hững khởi.
            </p>
          </div>
          <div class="column-item siderbar-two">
            <img style={{ width: "8rem" }} src={School} alt="" />
            <p>Đổi mới - Thấu cảm - Kiên trì</p>
          </div>
        </div>
      </div>
      <div className="gioithieu-block3">
        <img style={{ width: "70%" }} src={Gioithieuimg_block3} alt="" />
        <img className="school_icon" src={Gioithieuicon_block3} alt="" />
        <div className="gioithieu_text3">
          <p>Môi trường học gần gũi và thân thiện</p>
          <br />
          <p>
            Điều đầu tiên mà đa số khách đến thăm đều cảm nhận được về không khí
            tại VNUK là sự thân thiện của giảng viên và đội ngũ chuyên viên của
            nhà trường cũng như sự năng động và hiếu khách của các bạn sinh
            viên. Nếu muốn biết thêm điều gì đấy, đừng ngại bắt lấy một sinh
            viên đi ngang qua bạn nhé
          </p>
          <br />
          <p>
            Ngoài ra, không gian học tạp tại VNUK không hào nhoáng bề thế mà đâu
            đó có nét hoài cổ đến từ Vương quốc Anh: booth điện thoại màu đỏ,
            phòng đọc sách Nottingham Hill,.. Bạn sẽ thấy không gian ở VNUK thật
            là NHÀ.Hãy đến thăm chúng tôi
          </p>
        </div>
      </div>
      <div className="gioithieu-block4">
        <img style={{ width: "50%" }} src={Gioithieuimg_block4} alt="" />
        <img
          className="gioithieuicon_block4"
          src={Gioithieuicon_block4}
          alt=""
        />
        <div className="gioithieu_text4">
          <p>
            Chương trình đào tạo tiên tiến, được tu vấn bởi Đại học Aston, Vương
            quốc Anh
          </p>
          <br />
          <p>
            Các chương trình đào tạo tại VNUK,với sự tư vấn của Đại học Aston,
            đã tích hợp những yếu tố tiên tiến của nền giáo dục hiện tại của
            Vương quốc Anh, Đại học Aston, trường đại học nằm trong top 500 theo
            Time Higher Education, được Chính phủ Anh chỉ định dẫ đầu hiệp hội
            các trường đại học Anh xúc tiến hợp tác với VNUK trong việc xây dựng
            và triển khai các hoạt động nghiên cứu cũng như các chương trình đào
            tạo.
          </p>
          <br />
        </div>
      </div>
      <div className="gioithieu-block3">
        <img style={{ width: "70%" }} src={Gioithieuimg_block5} alt="" />
        <img className="school_icon" src={Gioithieuicon_block5} alt="" />
        <div className="gioithieu_text3">
          <p>Trải nghiệm đa dạng trong trường học và tại doanh nghiệpn</p>
          <br />
          <p>
            VNUK không ngừng nỗ lực để đem lại một hành trình trải nghiệm đa
            dạng và thú vị cho sinh viên. Bên cạnh việc được trang bị nền tảng
            kiến thức vững chắc và cách tư duy, chúng tôi tạo ra nhiều hoạt động
            khác nhau, phù hợp với những nhu cầu phát triển khác nhau của từng
            cá nhân mỗi sinh viên. VNUK luôn tạo điều kiện cho sự phát triển của
            các câu lạc bộ, các sân chơi thể thao văn nghệ, các hoạt động giao
            lưu quốc tế để các bạn được cùng nhau học hỏi và trưởng thành. Đặc
            biệt, VNUK chú trọng đến trải nghiệm nghề nghiệp của sinh viên thông
            qua việc hỗ trợ cơ hội thực tập cho sinh viên trong xuyên suốt 4 năm
            học tại hệ thống mạng lưới doanh nghiệp đối tác của VNUK.
          </p>
          <br />
        </div>
      </div>
      <div className="gioithieu-block4">
        <img style={{ width: "50%" }} src={Gioithieuimg_block6} alt="" />
        <img
          className="gioithieuicon_block4"
          src={Gioithieuicon_block6}
          alt=""
        />
        <div className="gioithieu_text4">
          <p>
            Yếu tố quốc tế được tích hợp từ chương trình đào tạo đến trải nghiệm
            của sinh viên
          </p>
          <br />
          <p>
            Là đại học quốc tế công lập đầu tiên giữa Chính phủ Việt Nam và
            Vương quốc Anh, hoạt động theo mô hình đại học mới, VNUK tối ưu các
            yếu tố quốc tế trong chương trình đào tạo và trải nghiệm học tập của
            sinh viên như học tập bằng tiếng Anh và giáo trình nước ngoài, cơ
            hội trao đổi, chuyển tiếp tại các trường đại học đối tác, giảng viên
            và sinh viên quốc tế, chương trình đào tạo được công nhận bởi các
            hiệp hội nghề nghiệp quốc tế, hệ thống các trường đại học quốc tế.
            Nhìn chung, học tập tại Việt Nam nhưng nếu biết nắm bắt cơ hội, bạn
            hoàn toàn có được những trải nghiệm và lợi ích của một sinh viên
            đang học tập ở nước ngoài.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};
export default Gioithieu;
