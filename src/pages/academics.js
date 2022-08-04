import React from 'react'
import './academics.css'

const Academics = () => {
    return (
        <div className = "Academics">
            <div id="academics_s1">
                <div id="academics_s1_title">
                    <div id="academics_s1_left_border"></div>
                    <div id="academics_s1_text">Academics</div>
                </div>
            </div>

            <div id="academics_s2">
                <div id="academics_s2_center">
                    <div id="academics_s2_col1">
                        <div id="academics_s2_intro_header">
                            Giới thiệu
                        </div>

                        <div id="academics_s2_intro_paragraphs_background">
                            <div class="academics_s2_intro_paragraphs" id="academics_s2_intro_para1">
                                Đại học Đà Nẵng vinh dự được hai chính phủ Việt Nam và Vương quốc Anh chọn và giao nhiệm vụ hợp

                                tác với các trường đại học Vương quốc Anh triển khai dự án thành lập trường Đại học Việt - Anh,
                                một
                                trường đại học công lập đẳng cấp quốc tế tại Đà Nẵng. Dự án gồm hai giai đoạn: (i) thành lập
                                Viện
                                Nghiên cứu và Đào tạo Việt - Anh (gọi tắt là VNUK) thuộc Đại học Đà Nẵng, (ii) phát triển Viện
                                thành
                                trường Đại học Quốc tế Việt - Anh.
                            </div>

                            <div class="academics_s2_intro_paragraphs" id="academics_s2_intro_para2">
                                Theo Quyết định của Bộ Giáo dục và Đào tạo, VNUK được tổ chức đào tạo các chương trình bậc Đại

                                học, Thạc sĩ, và Tiến sĩ cũng như các khóa bồi dưỡng ngắn hạn. VNUK đã và đang hợp tác với các
                                đối
                                tác quốc tế triển khai các hoạt động nghiên cứu và đào tạo theo hướng tiếp cận với trình độ tiên
                                tiến,
                                hiện đại của khu vực và trên thế giới. VNUK được xem là một trường đại học quốc tế công lập đầu
                                tiên
                                tại miền Trung Việt Nam.
                            </div>
                        </div>

                        <img id="academics_s2_intro_img" src={require("../assets/img/academics_s2_intro.png")} alt="img"/>

                        <div class="academics_s2_post_col1_intro_headers" id="academics_s2_education_programs_header">
                            CHƯƠNG TRÌNH ĐÀO TẠO CHUẨN ANH QUỐC
                        </div>

                        <div class="academics_s2_col1_black_txt">
                            &nbsp;&nbsp;&nbsp;&nbsp; Với các thỏa thuận hợp tác đối tác chiến lược giữa hai chính phủ Việt Nam
                            và Vương
                            Quốc Anh, VNUK được Chính phủ Anh giao sứ mệnh cho Đại học Aston làm đối tác
                            chiến lược, hỗ trợ phát triển và tư vấn các chương trình đào tạo theo chuẩn quốc tế. Điều
                            này mở ra nhiều cơ hội du học chuyển tiếp (2+2, 3+1) nhận bằng “kép” hoặc trao đổi sinh
                            viên quốc tế, tiếp tục học sau ĐH bậc Thạc sĩ, Tiến sĩ với bằng cấp được các Trường Đại
                            học uy tín công nhận chuẩn quốc tế, trong đó có các đại học uy tín của Vương quốc Anh
                            như: Đại học Nottingham Trent, Đại học Heriot-Watt, Đại học Hull. Hiện tại, VNUK đào
                            tạo trình độ đại học hệ chính quy bao gồm các ngành và chuyên ngành sau:
                        </div>

                        <div class="academics_s2_col1_black_txt" id="academics_s2_col1_list">
                            <div class="academics_s2_list">
                                <span class="academics_s2_dots">•</span>
                                Quản trị và Kinh doanh Quốc tế
                            </div>

                            <div class="academics_s2_list">
                                <span class="academics_s2_dots">•</span>
                                Chuyên ngành Quản trị Du lịch và Khách sạn Quốc tế
                            </div>

                            <div class="academics_s2_list">
                                <span class="academics_s2_dots">•</span>
                                Khoa học và Kỹ thuật Máy tính
                            </div>

                            <div class="academics_s2_list">
                                <span class="academics_s2_dots">•</span>
                                Khoa học Dữ liệu
                            </div>

                            <div class="academics_s2_list">
                                <span class="academics_s2_dots">•</span>
                                Khoa học Y sinh
                            </div>
                        </div>

                        <div class="academics_s2_col1_black_txt">
                            &nbsp;&nbsp;&nbsp;&nbsp; Trong năm học 2021-2022, dự kiến sẽ có thêm 2 chương trình mới: Quản trị
                            Kinh
                            doanh Số và Kỹ thuật Nano.
                        </div>

                        <div class="academics_s2_col1_black_txt">
                            &nbsp;&nbsp;&nbsp;&nbsp; VNUK cũng hiện đang hợp tác với Đại học Nottingham Trent, Vương quốc Anh để
                            triển
                            khai chương trình đào tạo Thạc sĩ Phương pháp giảng dạy tiếng Anh (MA TESOL).
                            Trường đã và đang phát triển theo hướng trở thành hub tiếp nhận các chương trình đào
                            tạo tiên tiến của Vương quốc Anh, trở thành trường đại học quốc tế công lập đầu tiên tại
                            miền Trung Việt Nam.
                        </div>

                        <div class="academics_s2_post_col1_intro_headers" id="academics_s2_commun_eng">
                            MÔI TRƯỜNG HỌC TẬP, GIAO TIẾP BẰNG TIẾNG
                            ANH
                        </div>

                        <div class="academics_s2_col1_black_txt">
                            &nbsp;&nbsp;&nbsp;&nbsp; Để đảm bảo khả năng làm việc trong môi trường quốc tế khi ra trường, sinh
                            viên VNUK được học
                            trực tiếp với các giảng viên, chuyên gia nước ngoài bên cạnh một số nội dung chuyên môn, chuyên
                            ngành được học với các thầy cô người Việt Nam. Sự hỗ trợ, đồng hành của các “tutor”, các hoạt
                            động CLB tiếng Anh, học thuật và giao lưu văn hóa quốc tế sẽ đem lại cho SV nhất là tân sinh viên

                            VNUK sự tự tin, chủ động sử dụng ngôn ngữ tiếng Anh và phát triển nhanh chóng kỹ năng ngoại
                            ngữ là “chìa khóa”, lợi thế để hội nhập sẵn sàng trở thành “công dân toàn cầu”.
                        </div>

                        <div class="academics_s2_post_col1_intro_headers" id="academics_s2_good_tutors">
                            ĐỘI NGŨ GIẢNG VIÊN, CHUYÊN GIA “CỰC CHẤT”
                        </div>

                        <div class="academics_s2_col1_black_txt">
                            &nbsp;&nbsp;&nbsp;&nbsp; Rất nhiều cựu sinh viên và sinh viên hiện tại của VNUK chia sẻ về thầy cô
                            của VNUK rất năng
                            động, tâm huyết và tận tình đối với sinh viên. Đặc biệt, các giảng viên của VNUK đều được đào tạo

                            bài bản, trình độ cao ở các nước có nền giáo dục tiên tiến với các mối quan hệ quốc tế khá sâu
                            rộng và am hiểu giáo dục tại các Trường Đại học hàng đầu. VNUK luôn mời các chuyên gia, nhà
                            khoa học, giảng viên thỉnh giảng, tình nguyện viên quốc tế giàu kinh nghiệm cùng với các doanh
                            nhân thành đạt, các nhà quản lý, startup đến trực tiếp giảng dạy, chia sẻ tri thức, kỹ năng giúp
                            sinh
                            viên có cơ hội trải nghiệm và bắt kịp những thay đổi trong môi trường thực tế.
                        </div>

                        <div class="academics_s2_post_col1_intro_headers" id="academics_s2_support_programs">
                            NHIỀU CHƯƠNG TRÌNH HỖ TRỢ, ĐỒNG HÀNH VỚI
                            SINH VIÊN
                        </div>

                        <div class="academics_s2_col1_black_txt">
                            &nbsp;&nbsp;&nbsp;&nbsp; Mô hình tổ chức đào tạo gắn kết, đề cao tính tương tác, chủ động để SV phát
                            triển tiềm năng, thế
                            mạnh của VNUK được chú trọng, triển khai ngay từ khi tân SV nhập học. Các dịch vụ từ tư vấn tuyển

                            sinh, cố vấn học tập, giảng viên phụ trách lớp, các CLB cho đến việc hỗ trợ SV lựa chọn nơi thực
                            tập,
                            cơ hội việc làm và trải nghiệm được VNUK triển khai đồng bộ, hiệu quả từ cách viết CV, trả lời phỏng

                            vấn, viết bài giới thiệu bản thân, qua đó gia tăng cơ hội được thực tập, làm việc cũng như tinh thần

                            startup ngay từ khi còn trên giảng đường. Những đặc điểm vượt trội này sẽ giúp sinh viên tốt nghiệp

                            tại VNUK dễ dàng có cơ hội làm việc tại các doanh nghiệp lớn trong và ngoài nước từ năm cuối của

                            bậc đại học.
                        </div>

                        <div class="academics_s2_post_col1_intro_headers" id="academics_s2_future_choices">
                            SỰ LỰA CHỌN CHO TƯƠNG LAI
                        </div>

                        <div class="academics_s2_col1_black_txt">
                            &nbsp;&nbsp;&nbsp;&nbsp; Được tọa lạc ngay tại trung tâm thành phố Đà Nẵng “đáng sống” và năng động,
                            phát triển bậc nhất
                            của khu vực miền Trung - Tây Nguyên cũng như cả nước, có thể nói, VNUK hội đủ những giá trị của
                            một cơ sở giáo dục ĐH công lập với những ngành đào tạo “hot”, đáp ứng nhu cầu người học và thị
                            trường lao động đem lại cơ hội việc làm, hội nhập, phát triển tốt trong môi trường quốc tế.
                        </div>

                        <div class="academics_s2_col1_black_txt">
                            Hiện tại, để chuẩn bị cho năm học 2021-2022, VNUK hiện đang có chương trình học bổng hấp dẫn
                            dành cho các bạn học sinh lớp 12 với 4 loại học bổng khác nhau từ 25-100% học phí từ 1-4 năm học.

                            Năm học 2020-2021 vừa qua, nhà trường đã hân hoan chào đón và cấp học bổng các học sinh đến
                            từ các trường THPT tại thành phố Đà Nẵng với các thành tích rất đáng nể. Vì vậy, trong năm nay,
                            VNUK cũng hy vọng kịp thời đưa ra thông tin để các bạn quan tâm sớm chuẩn bị. Thời điểm nhận hồ
                            sơ ứng tuyển sẽ mở chính thức vào 01/02/2021. Các bạn lớp 12 sau khi có kết quả học tập HK1 đã
                            có thể liên lạc nhà trường để xin ứng tuyển rồi đấy.
                        </div>

                        <div class="academics_s2_col1_black_txt">
                            Nếu bạn quan tâm, hãy tham khảo tại link dưới đây và đừng ngần ngại liên hệ ban tư vấn tuyển sinh

                            qua fanpage và hotline dưới đây nhé:
                        </div>

                        <div class="academics_s2_col1_black_txt">
                            Thông báo học bổng 2021: <a class="academics_s2_pink_links"
                                onClick={()=>{window.location.href="https://www.facebook.com/vnuk.edu.vn/posts/3598282603574559";}}
                                target="_blank">https://www.facebook.com/vnuk.edu.vn/posts/3598282603574559</a>
                        </div>

                        <div class="academics_s2_col1_black_txt">
                            Thông tin các loại học bổng: <a class="academics_s2_pink_links"
                                onClick={()=>{window.location.href="https://tuyensinhvnuk.edu.vn/hoc-bong-dai-hoc-tai-vnuk/";}} 
                                target="_blank">https://tuyensinhvnuk.edu.vn/hoc-bong-dai-hoc-tai-vnuk/</a>
                        </div>
                    </div>

                    <div id="academics_s2_col2">
                        <div class="academics_s2_col2_small_blue_txt">
                            Đại học
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Dự bị đại học
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Khoa học Dữ liệu
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Khoa học và Kĩ thuật máy tính
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Khoa học Y Sinh
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Quản trị và Kinh doanh quốc tế
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Quản trị Du lịch và Khách sạn quốc tế
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            MA TESOL
                        </div>

                        <div class="academics_s2_col2_small_blue_txt">
                            Đào tạo kỹ năng
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Chương trình chuyển tiếp
                        </div>

                        <div class="academics_s2_col2_small_blue_txt">
                            Trao đổi tại VNUK
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Trao đổi ra các nước
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Kỳ mùa hè tại VNUK
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Tham quan ngắn hạn
                        </div>

                        <div class="academics_s2_col2_small_blue_txt">
                            Dịch vụ hỗ trợ
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Thư viện
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Dịch vụ hỗ trợ thực tập và việc làm
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Dịch vụ tư vấn
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Đăng ký phòng họp nhóm
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Industry Mentoring
                        </div>

                        <div class="academics_s2_col2_small_blue_txt">
                            Khoa và giảng viên
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Tư vấn học tập
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Lịch học
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Biểu mẫu
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Thông báo
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Chương Trình Ngôn ngữ và CT dự bị đại học
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Khoa Khoa học Sức khỏe
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Khoa Kinh doanh và Kinh tế
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Khoa Kỹ thuật công nghệ
                        </div>

                        <div id="academics_s2_col2_top_links">
                            Top Links
                        </div>

                        <div class="academics_s2_col2_small_pink_txt">
                            Admission Requirements
                        </div>

                        <div class="academics_s2_col2_small_blue_txt">
                            Calendars & Key Dates
                        </div>

                        <div class="academics_s2_col2_small_blue_txt">
                            Course Catalog
                        </div>

                        <div class="academics_s2_col2_small_blue_txt">
                            Digital & Computational Studies
                        </div>

                        <div class="academics_s2_col2_small_blue_txt">
                            Engineering
                        </div>

                        <div class="academics_s2_col2_small_blue_txt">
                            Faculty (complete list)
                        </div>

                        <div class="academics_s2_col2_small_blue_txt">
                            Graduation Requirements
                        </div>

                        <div class="academics_s2_col2_small_blue_txt">
                            Off-Campus Study
                        </div>

                        <div class="academics_s2_col2_small_blue_txt">
                            Pre-Health Studies
                        </div>

                        <div class="academics_s2_col2_small_blue_txt">
                            Short Term
                        </div>

                        <div class="academics_s2_col2_small_blue_txt">
                            Tuition
                        </div>

                        <div id="academics_s2_col2_news">
                            NEWS & UPDATES
                        </div>

                        <div class="academics_s2_col2_news_post">
                            <img class="academics_s2_col2_news_img" id="academics_s2_thesis_img" src={require("../assets/img/academics_s2_thesis.png")} alt="img"/>
                    
                            <div class="academics_s2_col2_news_headers">
                                'Great work!' Two seniors meet the honors thesis …
                            </div>
                        </div>
                        
                        <div class="academics_s2_col2_news_post">
                            <img class="academics_s2_col2_news_img" id="academics_s2_ppe_img" src={require("../assets/img/academics_s2_ppe.png")} alt="img"/>
                    
                            <div class="academics_s2_col2_news_headers">
                                Shields up! Bates helping to ease PPE shortage
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default Academics;