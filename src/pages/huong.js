import React from "react";
import './huong.css';

import Huong1 from "../assets/img/Huong.png"

const Huong = () => {
    return (
        <div className="body">

            <div className="huong1">
                <img className="huong2" src={Huong1} />
                <div className="content-huong">
                    <p className="content-huong1">Giới thiệu</p>
                    <p>TS. Nguyễn Thị Mỹ Hương được biết đến như là một nhà giáo dục,
                        tập trung vào những chiến lược nâng cao chất lượng giáo dục
                        đại học, phát triển năng lực và kỹ năng nghe nghiệp của sinh
                        viên. Với gần 20 năm giảng dạy trong trường đại học tại Viện
                        Nghiên cứu và Đào tạo Việt - Anh, trường Đại học Kinh Tế, Đại
                        học Đà Nẵng, TS.Hương được biết đến là một giảng viên có nhiêu
                        tâm huyết, đam mê trong truyền cảm hứng và giảng dạy, đặc biệt
                        là các học phần về khởi nghiệp đổi mới sáng tạo, tư duy thiết
                        kế và phương pháp nghiên cứu trong kinh doanh. TS. Mỹ Hương đã
                        hoàn thành chương trình tiến sĩ ngành Kinh doanh và Quản lí tại
                        Đại học Manchester, một trong những thành viên của nhóm Russell,
                        là mạng lưới các trường đại học nghiên cứu mạng tại Vương quốc
                        Anh. Trong quá trình học tập tại Anh, TS. Hương đã tham gia
                        nghiên cứu ngắn hạn tại Đại học lllinous ở Urbana Champaign và
                        tại trường kinh doanh Copenhagen. Với những quan sát đã tích luỹ
                        suốt hơn 20 năm trong giáo dục với vai trò là người học , người
                        dạy, nhà khởi nghiệp , đại biểu quốc hội, TS. Hương tin rằng,
                        cùng với niềm tin và ước vọng về một thế hệ sinh viên Việt Nam
                        tương lai, cô sẽ không ngừng miệt mài dù quá trình xây dựng nhịp
                        cầu cảm hứng tại VNUK luôn nhiều thử thách.</p>
                </div>
            </div>
            <p className="content-img">Viện Trưởng - Viện Nghiên Cứu và Đào Tạo Việt - Anh</p>
            
            <div className="info-huong">
                <a class="icon" href="https://www.facebook.com/nguyenmyhuong"><img  src={require("../assets/img/fb.png")} /></a>
                <a class="icon" href=""><img src={require("../assets/img/ins.png")} /></a>
                <a class="icon" href=""><img src={require("../assets/img/yt.png")} /></a>
            </div>
        </div>
    );
}

export default Huong;
