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
                <img className="icon" src={require("../assets/img/fb.png")} />
                <img className="icon" src={require("../assets/img/ins.png")} />
                <img className="icon" src={require("../assets/img/yt.png")} />
            </div>

            <div className="mail-huong">
                <img className="icon-mail" src={require("../assets/img/gtkl_s1_open_mail.png")} alt="img" />
                <p>huong.nguyen@vnuk.edu.vn</p>
            </div>

            <div className="content1">
                <p>Quá trình giảng dạy và công tác</p>
                <ul>
                    <li>11/2019-nay: Viện trưởng, Viện Nghiên cứu và Đào tạo Việt - Anh, Đại học Đà Nẵng.</li>
                    <li>02/2017 - 11/2019: Phó Viện trưởng phụ trách, Viện Nghiên cứu và Đào tạo Việt - Anh, Đại học Đà Nẵng.</li>
                    <li>07/2015 - 02/2017: Phó Viện trưởng, Viện Nghiên cứu và Đào tạo Việt - Anh, Đại học Đà Nẵng.</li>
                    <li>9/2011 - 3/2015: Nghiên cứu sinh ngành Quản trị Kinh doanh tại trường Kinh doanh Manchester, Đại học Manchester, Vương Quốc Anh. Người hướng dẫn: GS.Philip Shapira (http://www.manchester.ac.uk/research/mbs/Pshapira/) và GS.Edward J.Feser (http://leadership.oregon-state.edu/provost/about/provost-edward-feser).</li>
                    <li>4/2014 - 6/2014: Visiting PhD fellow, Trường Kinh doanh Copenhagen, Đan Mạch</li>
                    <li>4/2013 - 6/2013: Visiting scholar, Đại học ILLinois, Urbana - Champaign, Hoa Kỳ.</li>
                    <li>10/2002 - 9/2011: Giảng dạy tại Khoa Quản trị kinh doanh, trường Đại học Kinh tế, Đại học Đà Nẵng.</li>
                    <li>2007 - 7/2011: Đại biểu Quốc hội Khoá 12, Uỷ viên Uỷ ban đối ngoại Quốc hội Khoá 12.</li>
                    <li>3/2007 - 9/2011: Phó phòng Khoa học, Sau đại học và Hợp tác quốc tế.</li>
                    <li>5/2010 - 9/2011: Đảng uỷ viên Ban chấp hành Đảng uỷ trường Đại học Kinh tế, Đại học Đà Nẵng.</li>
                    <li>11/2007 - 3/2011: Phó bí thư chi bộ, Chi bộ Tài vụ - Hợp tác quốc tế, Đảng bộ trường Đại học Kinh tế, Đại học Đà Nẵng.</li>
                    <li>2003 - 2006: Phó bí thư Đoàn thanh niên trường Đại học Kinh tế, Đại học Đà Nẵng.</li>
                    <li>2003 - 2006: Bí thư Liên chi Đoàn Khoa Quản Trị Kinh doanh, trường Đại học Kinh tế, Đại học Đà Nẵng.</li>
                </ul>
            </div>

            <div className="background-blue">
                <h2>Nghiên cứu khoa học</h2>
                <ul>
                    <li>Đề tài cấp ĐHĐN: Đặc nhiệm và động cơ khởi nghiệp của các nhà sáng lập trong các doanh nghiệp mới ở Việt Nam. Chủ nhiệm: Ths. Nguyễn Thị Mỹ Hương. Thành viên: Mã số: T2008 - 04 - 17. Năm: 2011.</li>
                    <li>Đề tài cấp Bộ: Ứng dụng hệ thống quản lí chất lượng theo TCVN ISO 9001 : 2000 tại trường Đại học Kinh tế, Đại học Đà Nẵng. Chủ nhiệm: Ths. Nguyễn Thị Mỹ Hương. Thành viên: TS. Nguyễn Mạnh Toàn, Ths. Đào Hữu Hào, Ths. Bùi Thanh Huân. Mã số: B2007 - ĐN04 - 20. Năm: 2010.</li>
                    <li>Đề tài cấp ĐHĐN: Phát triển hệ thống hỗ trợ tài chính cho các doanh nghiệp vừa và nhỏ ở Việt Nam. Chủ nhiệm: Ths. Nguyễn Thị Mỹ Hương. Thành viên: Ths. Nguyễn Thị Mỹ Hương. Mã số: T04 - 14 - 52. Năm: 2008</li>
                </ul>
            </div>

            <div className="content-bc">
                <p>Báo cáo khoa học quốc tế</p>
                <ul>
                    <li>Tran,Y.,  lichailova, S., & Nguyen, H. (2021), From Host Country Nationals to Entrepreneurs: Insights from Professional Service
                        Ventures in Vietnam - Corrigendum.Management and Organization Review, 1-1.
                    </li>
                    <li>Bui, H.T., Nguyen, H. T., & Chau,V. S. (2020), Strategic agility orientation? The impact of CEO duality on corporate entrepreneurship in privatized Vietnamese firms. Journal of General Management, 45(2), 107-116.</li>
                    <li>Chau, V., Nguyen, H., & Bui, H. (2020), Understanding Strategic Agility in Transitional Economies through the Logic of Effectuation Theory: Privatised and Non - Privatised Firms in Vietnam.ln EU RAM in Dec 2020.</li>
                    <li>Bui, H. Nguyen, H., & Chau, V. (2019). Does the Impact of CEO Duality on Corporate Entrepreneurship in Privatized Vietnamese Firms represent a Strategic Agility Orientation?. In British Academy of Management 2019.</li>
                    <li>Tran,Y.,  lichailova, S., & Nguyen, H. (2018). From Host Country Nationals to Entrepreneurs: Insights from Professional Service Ventures in Vietnam. In XXIX ISPIM Innovation Conference 2018.</li>
                    <li>Huong T. M. Nguyen (2016). Post-privatisation Governance and Corporate Entrepreneurship in Transition Economies. International Review of Entrepreneurship.</li>
                    <li>Huong Nguyen & Huy Duong (2016). Presentations: How to Teach the Lean Lau nchPad for Undergraduates?. Authors: 	3E Conference -
                        ECSB Entrepreneurship Education Conference in Leeds, UK.
                    </li>
                    <li>Huong T.M. Nguyen (2014). Governance characteristics and corporate entrepreneurship: A multi-theoretical perspective, 3rd REDETE Con-
                        ference: ECONOMIC DEVELOPMENT AND ENTREPRENEURSHIP IN TRANSITION ECONOMIES, April 2014, Bosnia and Herzegovina (Proceeding).
                    </li>
                    <li>Huong T. M. Nguyen (2014). Presentations: Board governance and corporate entrepreneurship: a multi-theoretical perspective. Authors:. Department of International Economics and Management, Copenhagen Business School.</li>
                    <li>Huong T. M. Nguyen (2013). Presentations: Post-privatisation ownership and governance systems, corporate entrepreneurship and firm performance in privatized firm: the case of Vietnam, Regional Economics Applications Laboratory, Univesity of Illinois at Urbana-
                        Champaign, Urbana, IIlinols
                    </li>
                    <li>Huong T. M. Nguyen (2013). Presentations: Board of directors, ownership and corporate entrepreneurship: multitheoretic perspectives from a transition economy. Authors: Huong T. M. Nguyen. Manchester Doctoral Students Workshop on 'Rising Powers and Interdependent Futures, Dec 2013, Manchester, U.K.</li>
                    <li>Huong T. M. Nguyen (2013). Presentations: Ownership, corporate governance and corporate entrepreneurship during institutional transition. Authors: Huong T. M. Nguyen. ECSB-DOCTORAL SEMINAR ON ENTREPRENEURSHIP AND SMALL BUSINESS, Nov 2013, Vilnius,
                        Lithuania.
                    </li>
                </ul>
            </div>

            <div className="content-bc">
                <p>Báo cáo khoa học trong nước</p>
                <ul>
                    <li>Nguyễn Thanh Liêm & Nguyễn Thị Mỹ Hương (2010). Các phương pháp tiếp caasnaj trong nghiên cứu bối cảnh khởi sự kinh doanh. Kỷ yếu Hội thảo Khoa học "35 năm hội nhập và phát triển - Trường Đại học Kinh tế, Đại học Đà Nẵng (1975 - 2010)."</li>
                    <li>Nguyễn Thanh Liêm & Nguyễn Thị Mý Hương (2005). Bài báo: Phát triển các dịch vụ quản lí rủi ro giá nông sản ở vùng kinh tế trọng điểm miền trung. Kỷ yếu Hội thảo Khoa học Đại học Đà Nẵng "Phát triển dịch vụ tài chính tại vùng kinh tế trọng điểm miền Trung" (Hội thảo liên kết giữa Viện khoa học tài chính và TrườngĐH KT, tháng 5 / 2005).</li>
                    <li>Nguyễn Thanh Liêm & Nguyễn Thị Mý Hương (2005). Rào cản tài chính đối với doanh  nghiệp vừa và nhỏ ở Việt Nam. Kỷ yếu hội thảo Khoa học "Kinh tế miền trung, Tây Nguyên: tiềm năng, động lực và giải pháp" (Hội thảo tháng 9 / 2005 nhân kỷ niệm 30 năm thành lập trường ĐH KT)</li>
                    <li>Đoàn Gia Dũng & Nguyễn Thị Mỹ Hương (2003). Doanh nghiệp Nhà nước trên con đường hội nhập Kinh tế quốc tế. Kỷ yếu Hội nhập kinh tế và phát triển bền vững (Hội thảo khoa học toàn quốc của Bộ giáo dục Đào tạo tổ chức tại Đại học Đà Nẵng, tháng 10 / 2003.</li>
                </ul>
            </div>

            <div></div>
        </div>
    );
}

export default Huong;
