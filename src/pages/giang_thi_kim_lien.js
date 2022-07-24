import React from 'react'
import './giang_thi_kim_lien.css'

const giangthikimlien = () => {
    return (
        <div className = "giang_thi_kim_lien">
            <div id="gtkl_s1">
                <div id="gtkl_top_right_corner_icon">
                    <img id="gtkl_search_icon" src={require("../assets/img/search_icon.png")}/>
                    <img id="gtkl_more_icon" src={require("../assets/img/More.png")}/>
                </div>

                <img id="gtkl_s1_img" src={require("../assets/img/gtkl_s1_img.png")} alt="img"/>

                <div class="gtkl_s1_text" id="gtkl_s1_intro_header">
                    Giới thiệu

                    <div id="gtkl_s1_body">
                        <div class="gtkl_s1_paragraphs">
                            “Có nơi nào đã hết giờ làm việc mà ta vẫn lưu luyến chưa muốn rời khỏi <br/>
                            phòng làm việc không nhỉ?”. Đây là cảm nhận của PGS. TS. Liên về VN-UK <br/>
                            trong thời gian đầu tiếp nhận công việc ở viện.
                        </div>
            
                        <div class="gtkl_s1_paragraphs">
                            Định hướng nghiên cứu chính của PGS. TS. Giang Thị Kim Liên là;
                        </div>
            
                        <div class="gtkl_s1_paragraphs">
                            - Phân lập và xác định cấu trúc các hợp chất có hoạt tính sinh học từ các <br/>
                            nguồn nguyên liệu thiên nhiên;
                        </div>
            
                        <div class="gtkl_s1_paragraphs">
                            - Chế tạo và phân tích các vật liệu hấp phụ mới.
                        </div>
                    </div>  
                </div>

                <div class="gtkl_s1_text" id="gtkl_s1_img_footer">
                    Viện Phó Viện Nghiên Cứu và Đào Tạo Việt - Anh, Giảng viên
                </div>
                
                <div id="gtkl_s1_icons_row">
                    <img class="gtkl_s1_icons_class" id="gtkl_s1_closed_mail" src={require("../assets/img/gtkl_s1_closed_mail.png")} alt="img"/>
                    <img class="gtkl_s1_icons_class" id="gtkl_s1_fb" src={require("../assets/img/fb.png")} alt="img"/>
                    <img class="gtkl_s1_icons_class" id="gtkl_s1_ins" src={require("../assets/img/ins.png")} alt="img"/>
                    <img class="gtkl_s1_icons_class" id="gtkl_s1_yt" src={require("../assets/img/yt.png")} alt="img"/>
                </div>

                <div id="gtkl_s1_email_row">
                    <img id="gtkl_s1_open_mail_icon" src={require("../assets/img/gtkl_s1_open_mail.png")} alt="img"/>
                    <div class="gtkl_s1_text" id="gtkl_s1_email_acc">lien.giang@vnuk.edu.vn</div>
                </div>

                <div class="gtkl_s1_text" id="gtkl_s1_qtgd">
                    <div id="gtkl_s1_qtgd_header">Quá trình giảng dạy và công tác</div>

                    <div class="gtkl_s1_qtgd_list">
                        <span class="gtkl_s1_dots">•</span> 01/2021 - nay: Viện phó, Viện Nghiên cứu và Đào tạo Việt - Anh, Đại học Đà Nẵng.
                    </div>
                    
                    <div class="gtkl_s1_qtgd_list">
                        <span class="gtkl_s1_dots">•</span> Từ tháng 8/2010 đến tháng 01/2021: Phó trưởng ban Đào tạo Đại học Đà Nẵng.
                    </div>
                    
                    <div class="gtkl_s1_qtgd_list">
                        <span class="gtkl_s1_dots">•</span> Từ tháng 5/2005 đến tháng 8/2010: Phó Trưởng Phòng Đào tạo Trường Đại học Sư phạm - ĐHĐN.
                    </div>
                    
                    <div class="gtkl_s1_qtgd_list">
                        <span class="gtkl_s1_dots">•</span> Từ 2002-2005: Giảng viên Khoa Hóa, Trường Đại học Sư phạm - Đại học Sư phạm.
                    </div>
                    
                    <div class="gtkl_s1_qtgd_list">
                        <span class="gtkl_s1_dots">•</span> Từ 1998-2002: Công tác tại Trung tâm Thí nghiệm Tổng hợp - Đại học Đà Nẵng.
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default giangthikimlien;