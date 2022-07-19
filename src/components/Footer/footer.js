import React from 'react';
import './FooterElement.css';

const footer = () => 
{   return (
    <div id="footer">
        <div id="footer_icon">
            <img id="fb_icon" src="/public/img/fb.png"></img>
            <img id="ins_icon" src="/public/img/ins.png"></img>
            <img id="yt_icon" src="/public/img/img/yt.png"></img>
        </div>

        <div>
            <table id="footer_table1">
                <thead id="footer_thead">
                    <th class="footer_th"> Thông tin chung </th>
                    <th class="footer_th"> Tuyển sinh Đại học </th>
                    <th class="footer_th"> Đào tạo Đại học </th>
                    <th class="footer_th4"> Xét tuyển bằng điểm SAT </th>
                </thead>
            </table>
        </div>

        <div id="table_border"></div>

        <div>
            <table id="footer_table2">
                <tbody>
                    <tr>
                        <td id="ft2_td1">
                            <p>
                            Viện Nghiên cứu và Đào tạo Việt - Anh, 
                            Đại học Đà Nẵng 
                            Địa chỉ: 158A Lê Lợi, phường Hải Châu 1, 
                            quận Hải Châu, thành phố Đà Nẵng 
                            Số điện thoại: (0236)3.738.399 
                            Đường dây nóng: 0905.55.66.54 
                            
                            Thông tin tuyển sinh: 
                            admission@vnuk.edu.vn 
                            Thông tin chung: 
                            contact@vnuk.edu.vn
                            </p>
                        </td>

                        <td id="ft2_td2">
                            <p>
                            Tổ hợp xét tuyển 
                            Phương thức xét tuyển 
                            Học bổng VNUK 
                            Nộp đơn online
                            </p>
                        </td>

                        <td id="ft2_td3">
                            <p>
                            Quản trị và Kinh doanh quốc tế 
                            Quản trị Du lịch và Khách sạn quốc tế 
                            Quản trị Kinh doanh Số 
                            Khoa học Dữ liệu 
                            Khoa học Y Sinh 
                            Công nghệ Nano
                            </p>
                        </td>

                        <td id="ft2_td4">
                            <p>
                            Kết quả kỳ thi năng lực 
                            Điểm SAT 
                            Điểm A-Level 
                            Cách thức nộp hồ sơ 
                            Công bố kết quả
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="footer_end">
            <p id="footer_end_text">Copyright All By VNUK 2022</p>
            <button id="contact_button"> Liên hệ </button>
        </div>
    </div>
)
}
