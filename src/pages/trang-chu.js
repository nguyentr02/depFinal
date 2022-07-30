import React from 'react'
import './trang-chu.css'

const TrangChu = () => {
    return (
        <div className = "TrangChu">
            <div id="section_1">
                <div id="section_1_background">
                    <img id="vnuk_logo" src={require("../assets/img/vnuk.png")} alt='img'/>
                </div>
            </div>

            <div id="section_2">
                <div id="section_2_background">
                    <div id="section_2_text">
                        <div id="section_2_header">VNUK - ĐỐI TÁC TIN CẬY CỦA BẠN</div>
                        <div id="section_2_body">
                        Chương trình đào tạo của VNUK được tư vấn về <br/>
                        chuyên môn bởi các giáo sư của Đại học Aston, <br/>
                        Vương quốc Anh - đối tác chiến lược của VNUK do <br/>
                        Chính phủ Anh giới thiệu và giao nhiệm vụ hỗ trợ <br/>
                        VNUK. Hiện Đại học Aston đang được xếp hạng top <br/>
                        500 trên cả hai bảng xếp hạng trường đại học của <br/>
                        thế giới gồm QS Global World Ranking và Time <br/>
                        Higher Education (THE) 2022. Đặc biệt, theo xếp <br/>
                        hạng của THE, ngành Kinh tế và Kinh doanh của Đại <br/>
                        học Aston đứng thứ 133 thế giới và là trường kinh <br/>
                        doanh Aston nằm trong số 1% các trường kinh <br/>
                        doanh nổi tiếng trên thế giới với ba chứng nhận về <br/>
                        kiểm định chất lượng - AMBA, EQUIS và AACSB.
                        </div>
                    </div>
                </div>   
            </div>

            <div id="section_3">
                <div id="books_group">
                    <img id="books_icon" src={require("../assets/img/sách.png")} alt='img'/>
                    <div class="section_3_text" id="books_text">
                        <p id="books_header">Trung tâm giáo dục quốc tế</p>
                        <p id="books_body">
                        VNUK là trường đại học quốc tế <br/>
                        công lập đầu tiên tại miền Trung <br/>
                        Việt Nam.
                        </p>
                    </div>
                </div>

                <div id="globe_group">
                    <img id="globe_icon" src={require("../assets/img/cầu.png")} alt='img'/>
                    <div class="section_3_text" id="globe_text">
                        <div id="globe_header">Đáp ứng tiêu chuẩn đào tạo</div>
                        <div id="globe_body">
                        Chương trình gắn kết đào tạo với <br/>
                        nhu cầu thực tế của doanh nghiệp <br/>
                        và xu hướng phát triển của thị <br/>
                        trường lao động quốc tế
                        </div>
                    </div>
                </div>

                <div id="degree_group">
                    <img id="degree_icon" src={require("../assets/img/bằng.png")} alt='img'/>
                    <div class="section_3_text" id="degree_text">
                        <div id="degree_header">Đại học và Sau Đại học</div>
                        <div id="degree_body">
                        VNUK hiện có 6 chương trình đào <br/>
                        tạo đại học và 1 chương trình đào <br/>
                        tạo Sau Đại học
                        </div>
                    </div>
                </div>

                <div id="school_group">
                    <img id="school_icon" src={require("../assets/img/trường.png")} alt='img'/>
                    <div class="section_3_text" id="school_text">
                        <div id="school_header">Chất lượng sinh viên</div>
                        <div id="school_body">
                        Chất lượng sinh viên sau khi tốt <br/>
                        nghiệp là trọng tâm hàng đầu của <br/>
                        đội ngũ cán bộ giảng viên VNUK 
                        </div>
                    </div>
                </div>

                <div id="section_3_border"></div>

                <div id="link_group">
                    <div id="link_header_group">
                        <img id="link_icon" src={require("../assets/img/link.png")} alt='img'/>
                        <div class="section_3_text" id="link_header">Truy cập nhanh</div>
                    </div>

                    <table id="link_table">
                        <tbody class="section_3_text">
                            <tr class="link_table_row" id="ltr1">
                                <td class="link_table_data_1">Dự bị đại học</td>
                                <td class="link_table_data_2">Quản trị Du lịch và Khách sạn quốc tế</td>
                                <td class="link_table_data_3">Khoa học Dữ liệu</td>
                            </tr>

                            <tr class="link_table_row" id="ltr2">
                                <td class="link_table_data_1">Quản trị và Kinh doanh quốc tế</td>
                                <td class="link_table_data_2">Phân tích Marketing</td>
                                <td class="link_table_data_3">Khoa học Y sinh</td>
                            </tr>

                            <tr class="link_table_row" id="ltr3">
                                <td class="link_table_data_1">Quản trị Kinh doanh Số</td>
                                <td class="link_table_data_2">Khoa học và Kỹ thuật máy tính</td>
                                <td class="link_table_data_3">Công nghệ Nano</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="section_4_1st_half"></div>

            <div id="section_4_2nd_half">
                <div class="section_4_backgrnd">
                    <button class="section_4_th">Triết lý giáo dục</button>
                    <button class="section_4_th">Tầm nhìn</button>
                    <button class="section_4_th">Sứ mạng</button>
                    <button class="section_4_th">Giá trị cốt lõi</button>
                </div>

                <div id="section_4_video_section">
                    <div id="s4_vd_background">
                        <img id="vd_plc_hldr" src={require("../assets/img/video_placeholder_img.png")} alt='img'/>
                        <div id="section_4_video_section_text">
                            Thực hiện các dự án nghiên cứu có chất lượng quốc tế, góp phần quan trọng nâng cao <br/> 
                            chất lượng cuộc sống và phát triển của xã hội. <br/>
                            <br/>
                            Phát triển và cung cấp các chương trình đào tạo hiện đại và đẳng cấp. <br/>
                            <br/>
                            Trang bị cho người học những kỹ năng cần thiết để có thể làm chủ tương lai của bản <br/>
                            thân và góp phần xây dựng thế giới tốt đẹp hơn. <br/>
                            <br/>
                            Đem đến cho giảng viên và người học môi trường học tập và làm việc thân thiện và đầy <br/>
                            hứng khởi.
                        </div>
                    </div>
                </div>
            </div>

            <div id="section_5">
                <div id="section_5_background">
                    <table>
                        <thead id="section_5_thead">
                            <th id="section_5_th1" class="section_5_th"> Đào tạo </th>
                            <th class="section_5_th"> Giá trị quốc tế </th>
                            <th class="section_5_th"> Đội ngũ </th>
                        </thead>

                        <tbody id="section_5_tbody">
                            <tr>
                                <td id="section_5_td_1">                                
                                    Chương trình đào tạo của VNUK được tư vấn về chuyên <br/>
                                    môn bởi các giáo sư của Đại học Aston, Vương quốc Anh <br/>
                                    - đối tác chiến lược của VNUK do Chính phủ Anh giới <br/>
                                    thiệu và giao nhiệm vụ hỗ trợ VNUK. Hiện Đại học Aston <br/>
                                    đang được xếp hạng top 500 trên cả hai bảng xếp hạng <br/>
                                    trường đại học của thế giới gồm QS Global World Ranking <br/>
                                    và Time Higher Education (THE) 2022.                                
                                </td>

                                <td id="section_5_td_2">                                
                                    Chất lượng chương trình đào tạo của VNUK có giá trị quốc <br/>
                                    tế bởi được chấp nhận bởi các trường đại học uy tín thế <br/>
                                    giới qua chương trình chuyển tiếp 2+2, 3+1 và được công <br/>
                                    nhận bởi các Hiệp hội nghề nghiệp quốc tế như Hiệp hội <br/>
                                    kế toán công chứng Anh quốc (ACCA), Hiệp hội về Lãnh <br/>
                                    đạo và quản lí (CMI), Hiệp hội về Marketing được công <br/>
                                    nhận bởi Hoàng gia Anh (CIM), Học viện AWS (Amazon <br/>
                                    Web Service Academy).                               
                                </td>

                                <td id="section_5_td_3">                               
                                    Bằng sự tâm huyết đối với giáo dục cũng như tình yêu đối    <br/>
                                    với thế hệ trẻ, đội ngũ giảng viên được đào tạo bài bản tại <br/>
                                    các nền giáo dục tiên tiến trên thế giới tại VNUK đang      <br/>  
                                    không ngừng nỗ lực để nâng cao hơn nữa chất lượng đào       <br/>      
                                    tạo và đem đến cho sinh viên một hành trình đại học thật    <br/>       
                                    sự giá trị và nhiều hứng khởi.                                
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="section_6">
                <div id="section_6_img1">
                    <div id="section_6_header">
                        <div class="section_6_text" id="section_6_hdr1">
                        VNUK - Dự án hợp tác giáo dục đại học chính thức giữa hai
                        chính phủ Việt - Anh và Anh quốc
                        </div>

                        <div class="section_6_text" id="section_6_hdr2">VIỆN NGHIÊN CỨU VÀ ĐÀO TẠO VIỆT - ANH</div>

                        <div class="section_6_text" id="section_6_hdr3">ĐẠI HỌC ĐÀ NẴNG (VNUK)</div>
                    </div>

                    <div class="section_6_text" id="section_6_body">
                        Viện Nghiên cứu và Đào tạo Việt - Anh (VNUK), Đại học Đà Nẵng tự hào là cơ sở giáo dục đại <br/>
                        học công lập quốc tế đầu tiên được thành lập theo thỏa thuận hợp tác giữa hai chính phủ <br/>
                        Việt Nam và Anh Quốc. Là tiền thân của trường Đại học Quốc tế thuộc Đại học Đà Nẵng, <br/>
                        VNUK mang trong mình sứ mệnh góp phần đưa hoạt động nghiên cứu và giảng dạy đại học <br/>
                        của Việt Nam lên tầm cỡ quốc tế.
                    </div>

                    <button class="section_6_text" id="sign_up_button">Đăng ký ngay</button>
                </div>

                <div id="section_6_mid_header_border"> 
                    <div class="section_6_text" id="section_6_mid_header">Tin tức & Sự kiện nổi bật</div> 
                    <div id="section_6_mid_border"></div>
                </div>

                <div id="section_6_img2">
                    <img id="s6_left_arrow" src={require("../assets/img/left_arrow.png")} alt='img'/>

                    <div class="section_6_text" id="s6_img2_text">
                        <div id="s6_dates">5 THÁNG BẢY, 2022</div>
                        <div id="s6_title">
                        LỄ TỐT NGHIỆP TRANG TRỌNG VÀ ẤM CÚNG CỦA <br/>
                        CÁC TÂN CỬ NHÂN VNUK NĂM 2022
                        </div>
                    </div>
                    
                    <img id="s6_right_arrow" src={require("../assets/img/right_arrow.png")} alt='img'/>
                </div>
            </div>

            <div id="section_7">
                <div id="section_7_header_border"> 
                    <div class="section_7_text" id="section_7_header">Sự kiện sắp tới</div> 
                    <div id="section_7_border"></div>
                </div>

                <img id="s7_time_table" src={require("../assets/img/s7_time_table.png")} alt='img'/>

                <div id="s7_sign_up_form_background">
                    <div id="s7_sign_up_now">
                        Đăng ký để nhận thông tin mới nhất <br/>
                        từ VNUK
                    </div>
                    <input id="s7_input_field" type="text" placeholder="Enter email here"/>
                    <button id="s7_sign_up_button">Đăng ký ngay</button>
                </div>

                <img id="schools_logo" src={require("../assets/img/schools_logo.png")} alt='img'/>
            </div>
        </div>
        
    )
}


export default TrangChu;