import React from 'react'
import './recruit.css'

const Recruit = () => {
    return (
        <div className = "Recruit">
            <div id="recruit_s1">
                <div id="recruit_s1_background">
                    <div class="recruit_s1_text">
                        <div id="recruit_s1_date">
                            13 <br/>
                            TH7
                        </div>
            
                        <div id="recruit_s1_text_box">
                            <div id="recruit_s1_announcement">
                                VNUK thông báo nhận hồ sơ xét tuyển sớm Đợt 1 <br/>
                                bổ sung theo PT Tuyển sinh riêng từ 8/7 đến hết ngày 18/7/2022
                            </div>
                
                            <div id="recruit_s1_announcement_cre">
                                BY NGUYỄN HƯƠNG / TIN TỨC / 0 comment
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="recruit_s2">
                <img id="recruit_s2_ceremony_2022_img" src={require("../assets/img/recruit_s2_ceremony_2022.png")} alt="img"/>

                <div class="recruit_s2_body" id="recruit_s2_img_bottom_txt">
                    Viện Nghiên cứu và Đào tạo Việt - Anh (VNUK), Đại học Đà Nẵng thông báo nhận hồ sơ xét tuyển sớm Đợt bổ sung hệ đào tạo đại học <br/> 
                    chính quy năm 2022, theo phương thức tuyển sinh riêng như sau:
                </div>

                <div id="recruit_s2_wot">
                    <div class="recruit_s2_header" id="recruit_s2_criteria">
                        1. Ngành đào tạo, chỉ tiêu và tiêu chí xét tuyển: 
                        <span> <a class="recruit_s2_pink_part" target="_blank" onClick={()=>{window.location.href="https://vnuk.edu.vn/xet-tuyen-theo-pt-tuyen-sinh-rieng/?fbclid=IwAR2RgFtLaYuG9OwrSk_wnxsTyyX_EQ7UWcC9FuEQUT8qsJH2ZLLBUX-1MDQ";}}> xem tại đây </a> </span> 
                    </div>
                    
                    <div class="recruit_s2_header">
                        2. Vùng tuyển, đối tượng và chính sách ưu tiên
                    </div>

                    <div class="recruit_s2_body">
                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Vùng tuyển: tuyển sinh trong cả nước.
                        </div>
            
                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Đối tượng: thí sinh đã tốt nghiệp THPT tại Việt nam hoặc hoàn thành chứng chỉ tốt nghiệp THPT quốc tế, hay ở nước ngoài.
                        </div>

                        <div class="recruit_s2_list" id="recruit_s2_list_bottom">
                            <span class="recruit_s2_dots">•</span>
                            Chính sách ưu tiên: theo quy chế tuyển sinh hiện hành.
                        </div>
                    </div>

                    <div class="recruit_s2_header">
                        3. Nguyên tắc đăng ký và xét tuyển
                    </div>

                    <div class="recruit_s2_subheader">
                        3.1. Nguyên tắc đăng ký
                    </div>

                    <div class="recruit_s2_body">
                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Thí sinh nộp hồ sơ trực tiếp tại Viện Nghiên cứu và Đào tạo Việt - Anh (158A Lê Lợi, thành phố Đà Nẵng) hoặc online tại: <br/>
                            <a target="_blank" onClick={()=>{window.location.href="https://vnuk.edu.vn/nop-ho-so-xet-tuyen/";}}>https://vnuk.edu.vn/nop-ho-so-xet-tuyen/</a>.
                        </div>
            
                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Mỗi thí sinh được đăng ký tối đa 05 nguyện vọng. Các ngành, chuyên ngành, chương trình (sau đây gọi là ngành) đăng ký trong <br/> 
                            danh mục các ngành xét tuyển theo phương thức tuyển sinh riêng tại Đề án tuyển sinh của VNUK tại đây.
                        </div>

                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Thí sinh sắp xếp nguyện vọng theo thứ tự ưu tiên từ cao xuống thấp. Nguyện vọng 1 là nguyện vọng cao nhất.
                        </div>
                    </div>

                    <div class="recruit_s2_subheader">
                        3.2. Nguyên tắc xét tuyển
                    </div>

                    <div class="recruit_s2_body">
                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Thí sinh được đăng ký xét tuyển tối đa 03 nguyện vọng vào các ngành/chuyên ngành của Trường và phải sắp xếp nguyện vọng <br/> 
                            theo thứ tự ưu tiên từ cao xuống thấp (nguyện vọng 1 là nguyện vọng cao nhất). Thí sinh chỉ trúng tuyển vào một nguyện vọng ưu <br/>  
                            tiên cao nhất trong danh sách các nguyện vọng đã đăng ký.
                        </div>
            
                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Thí sinh thuộc nhóm 1 và thí sinh có chứng chỉ tiếng Anh Quốc tế trong thời hạn 2 năm (tính đến 01/9/2022) đạt IELTS từ 6.0 trở <br/> 
                            lên hoặc tương đương theo bảng tham chiếu quy đổi chứng chỉ tiếng Anh quốc tế thì được miễn phỏng vấn và bài luận.
                        </div>

                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Các thí sinh còn lại phải viết bài luận và tham gia buổi phỏng vấn do Viện tổ chức.                
                        </div>

                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Kết quả trúng tuyển căn cứ vào tổng điểm TSR - được tính bằng: tổng điểm xét tuyển theo tổ hợp + điểm bài luận và phỏng vấn.                
                        </div>

                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Môn Tiếng Anh dùng để xét tuyển có thể là ngoại ngữ chính (ngoại ngữ 1) hoặc ngoại ngữ phụ (ngoại ngữ 2).                
                        </div>
                    </div>

                    <div class="recruit_s2_subheader">
                        3.3. Công bố kết quả xét tuyển và xử lý nguyện vọng trên hệ thống của Bộ Giáo dục và Đào tạo (GDĐT)
                    </div>

                    <div class="recruit_s2_body">
                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Sau khi hết hạn nhận hồ sơ đăng ký xét tuyển, ĐHĐN công bố kết quả xét tuyển sớm và danh sách thí sinh đủ điều kiện trúng <br/> 
                            tuyển (trừ điều kiện tốt nghiệp THPT đối với các thí sinh tốt nghiệp năm 2022).
                        </div>
            
                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Các thí sinh đủ điều kiện trúng tuyển ở đợt xét tuyển sớm phải tiếp tục đăng ký nguyện vọng đã được công bố đủ điều kiện trúng <br/> 
                            tuyển lên hệ thống của Bộ GDĐT theo kế hoạch chung để xử lý nguyện vọng toàn quốc. Thí sinh chỉ trúng tuyển chính thức sau khi <br/>
                            có kết quả xử ý nguyện vọng cuối cùng trên hệ thống của Bộ GDĐT.
                        </div>

                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Các thí sinh đủ điều kiện trúng tuyển ở đợt xét tuyển sớm nhưng không đăng ký nguyện vọng đã được công bố đủ điều kiện trúng <br/> 
                            tuyển lên hệ thống của Bộ GDĐT sẽ không được xử lý nguyện vọng và xem như từ chối nguyện vọng đã đủ điều kiện trúng tuyển này.                
                        </div>
                    </div>

                    <div class="recruit_s2_body" id="recruit_s2_notice">
                        <span class="recruit_s2_pink_part">Chú ý: </span>
                        Để đảm bảo khả năng trúng tuyển vào các cơ sở đào tạo thuộc ĐHĐN, thí sinh đủ điều kiện trúng tuyển ở đợt xét tuyển sớm <br/>
                        cần đặt nguyện vọng đã được công bố đủ điều kiện trúng tuyển lên hệ thống của Bộ GDĐT là nguyện vọng 1.
                    </div>

                    <div class="recruit_s2_header">
                        4. Thời gian, địa chỉ đăng ký xét tuyển            
                    </div>

                    <div class="recruit_s2_body">
                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Thời gian đăng ký: từ ngày 8/7/2022 đến hết ngày 18/7/2022.
                        </div>
            
                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Địa chỉ đăng ký: <a onClick={()=>{window.location.href="https://vnuk.edu.vn/nop-ho-so-xet-tuyen/";}}>https://vnuk.edu.vn/nop-ho-so-xet-tuyen/</a>.
                        </div>
                    </div>

                    <div class="recruit_s2_subheader">
                        Để biết thêm chi tiết, thí sinh vui lòng truy cập:
                    </div>

                    <div class="recruit_s2_body">
                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Trang tuyển sinh của Đại học Đà Nẵng: <a onClick={()=>{window.location.href="https://ts.udn.vn";}}>https://ts.udn.vn</a>
                        </div>
            
                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Trang tuyển sinh của Viện Nghiên cứu và Đào tạo Việt - Anh, ĐHĐN tại địa chỉ: http://dut.udn.vn/TuyenSinh2022/
                        </div>
                    </div>

                    <div class="recruit_s2_subheader">
                        Hoặc liên hệ với Bộ phận tư vấn tuyển sinh của VNUK:
                    </div>

                    <div class="recruit_s2_body">
                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Hotline & Zalo: 0905556654
                        </div>
            
                        <div class="recruit_s2_list">
                            <span class="recruit_s2_dots">•</span>
                            Email: admission@vnuk.edu.vn
                        </div>
                    </div>
                </div>

                <div id="recruit_s2_media">
                    <div id="recruit_s2_share_counts"><span id="recruit_s2_share_numbers">0 </span>SHARES</div>
                    
                    <div id="recruit_s2_media_icons">
                        <img onClick={() => { window.location.href="https://www.facebook.com/vnuk.edu.vn";}} 
                        id="recruit_s2_fb_icon" src={require("../assets/img/fb.png")} alt="img"/>

                        <img id="recruit_s2_gplus_icon" src={require("../assets/img/G+.png")} alt="img"/>
                        
                        <img id="recruit_s2_pin_icon" src={require("../assets/img/pin.png")} alt="img"/>

                        <img onClick={() => { window.location.href='https://twitter.com/VNUKInstitute';}}
                        id="recruit_s2_twit_icon" src={require("../assets/img/twitter.png")} alt="img"/>
                    </div>
                </div>

                <button id="recruit_s2_prev_button">
                    <img id="recruit_s2_prev_button_img" src={require("../assets/img/recruit_s2_prev.png")} alt="img"/>
                </button>

                <button id="recruit_s2_next_button">
                    <img id="recruit_s2_next_button_img" src={require("../assets/img/recruit_s2_next.png")} alt="img"/>
                </button>
            </div>
        </div>
        
    )
}


export default Recruit;