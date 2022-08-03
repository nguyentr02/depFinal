import React from 'react';
import './FooterElement.css';


const footer = () => {
    return (
        <div className='footer'>
            <div className='footer_firstField'>
                <div className='imgfield'>
                    {/* <a href='https://www.instagram.com/vnuk.edu.vn/'></a> */}
                    <img 
                    onClick={() => { window.location.href='https://www.facebook.com/vnuk.edu.vn';}}
                    id='fb' src={require('../../assets/img/fb.png')} alt='img' />
                    <img onClick={() => { window.location.href='https://www.instagram.com/vnuk.edu.vn/';}}
                     id='ins' src={require('../../assets/img/ins.png')} alt='img' />
                    <img onClick={() => { window.location.href='https://www.youtube.com/c/VNUKViệnNghiêncứuvàĐàotạoViệtAnhVNUKIREE';}}
                     id='ytb' src={require('../../assets/img/yt.png')} alt='img' />
                </div>
                <div className='textField'>
                    <div className='title'>
                        <h1 id='title1'>Thông tin chung</h1>
                        <h1 id='title2'>Tuyển sinh Đại học</h1>
                        <h1 id='title3'>Đào tạo Đại học</h1>
                        <h1>Xét tuyển bằng điểm SAT</h1>
                    </div>
                    <div id="table_border"></div>
                    <div className='contentField'>
                        <p>
                            Viện Nghiên cứu và Đào tạo Việt - Anh, <br />
                            Đại học Đà Nẵng <br />
                            Địa chỉ: 158A Lê Lợi, phường Hải Châu 1, <br />
                            quận Hải Châu, thành phố Đà Nẵng <br />
                            Số điện thoại: (0236)3.738.399 <br />
                            Đường dây nóng: 0905.55.66.54 <br />
                            <br />
                            Thông tin tuyển sinh: <br />
                            admission@vnuk.edu.vn <br />
                            Thông tin chung:    <br />
                            contact@vnuk.edu.vn
                        </p>
                        <p>
                            Tổ hợp xét tuyển      <br />
                            Phương thức xét tuyển <br />
                            Học bổng VNUK         <br />
                            Nộp đơn online
                        </p>
                        <p>
                            Quản trị và Kinh doanh quốc tế        <br />
                            Quản trị Du lịch và Khách sạn quốc tế <br />
                            Quản trị Kinh doanh Số                <br />
                            Khoa học Dữ liệu                      <br />
                            Khoa học Y Sinh                       <br />
                            Công nghệ Nano
                        </p>
                        <p>
                            Kết quả kỳ thi năng lực <br />
                            Điểm SAT                <br />
                            Điểm A-Level            <br />
                            Cách thức nộp hồ sơ     <br />
                            Công bố kết quả
                        </p>
                    </div>
                </div>
            </div>
            <div className='footer_secondField'>
            </div>
            <p id='cpr'>Copyright All by VNUK 2022</p>
            <button id="contact_button"> Liên hệ </button>
        </div>
    )
}

export default footer;
