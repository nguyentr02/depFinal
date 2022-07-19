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
                            Viện Nghiên cứu và Đào tạo Việt - Anh, <br/>
                            Đại học Đà Nẵng <br/>
                            Địa chỉ: 158A Lê Lợi, phường Hải Châu 1, <br/>
                            quận Hải Châu, thành phố Đà Nẵng <br/>
                            Số điện thoại: (0236)3.738.399 <br/>
                            Đường dây nóng: 0905.55.66.54 <br/>
                            <br/>
                            Thông tin tuyển sinh: <br/>
                            admission@vnuk.edu.vn <br/>
                            Thông tin chung:    <br/>   
                            contact@vnuk.edu.vn                              
                        </td>

                        <td id="ft2_td2">                            
                            Tổ hợp xét tuyển      <br/>
                            Phương thức xét tuyển <br/>
                            Học bổng VNUK         <br/>
                            Nộp đơn online                                    
                        </td>

                        <td id="ft2_td3">                           
                            Quản trị và Kinh doanh quốc tế        <br/>
                            Quản trị Du lịch và Khách sạn quốc tế <br/>
                            Quản trị Kinh doanh Số                <br/> 
                            Khoa học Dữ liệu                      <br/>         
                            Khoa học Y Sinh                       <br/>         
                            Công nghệ Nano                                                              
                        </td>

                        <td id="ft2_td4">
                            Kết quả kỳ thi năng lực <br/>
                            Điểm SAT                <br/>
                            Điểm A-Level            <br/>    
                            Cách thức nộp hồ sơ     <br/>         
                            Công bố kết quả              
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="footer_end">
            <p id="footer_end_text">Copyright All By VNUK 2022 </p>
            <button id="contact_button"> Liên hệ </button>
        </div>
    </div>
)
}
