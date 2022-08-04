import React from 'react'
import { Link } from 'react-router-dom'
import './blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='blogs_imgField'>
                <h1 id='blogs'>Blogs</h1>
            </div>


            <div className='blogs_secondField'>

                <div className='blogs_container'>
                    <div className='blogs_title'>
                        ĐĂNG KÝ XÉT TUYỂN
                    </div>
                    <div className='Blogs-sub_title'>
                        Kỳ tuyển sinh năm học 2022-2023
                    </div>
                    <form action='#'>
                        <div id='details'>
                            <div className='input_box'>
                                <span className='details'>Tiêu đề</span>
                                <input type='text' oninput="this.size = this.value.length" placeholder=""></input>
                            </div>
                            <div className='input_box'>
                                <span className='details'>Họ và tên</span>
                                <input type='text' placeholder=""></input>
                            </div>
                            <div className='input_box'>
                                <span className='details'>Email</span>
                                <input type='text' placeholder=""></input>
                            </div>
                            <div className='input_box'>
                                <span className='details'>Số điện thoại</span>
                                <input type='text' placeholder=""></input>
                            </div>
                            <div className='input_box'>
                                <span className='details'>Thành phố đang sinh sống</span>
                                <input type='text' placeholder=""></input>
                            </div>
                            <div className='input_box'>
                                <span className='details'>Nơi đăng ký xét tuyển</span>
                                <input type='text' placeholder=""></input>
                            </div>
                            <div className='input_box'>
                                <span className='details'>Chuyên nghành</span>
                                <input type='text' placeholder=""></input>
                            </div>
                            <div className='input_box'>
                                <span className='details'>Bạn biết đến VNUK từ đâu</span>
                                <input type='text' placeholder=""></input>
                            </div>
                            <div className='input_box'>
                                <span className='details'>Lời nhắn</span>
                                <input type='text' placeholder=""></input>
                            </div>
                            <div className='button'>
                                <input type='submit' value="Đăng ký"></input>
                            </div>
                        </div>
                    </form>
                </div>

                <div className='blogs_SecondContainer'>
                    <img id='SecondContainer_img' src={require("../assets/img/blog_recruit.jpg")} alt='img' />
                    <div className='Secondbox'>
                        <div id='boxTitle'>
                            LIÊN KẾT TUYỂN SINH
                        </div>
                        <ul>
                            <li>
                                Liên hệ tuyển sinh
                            </li>
                            <li>
                                Liên lạc với đội ngũ tuyển sinh
                            </li>
                            <li>
                                Thông tin yêu cầu
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='blogs_ThirdField'>
                <div className='blogs_ThirdField-title'>
                    Tin mới
                </div>

                <div className='blogs_ThirdField-news'>
                    <div className='blogs_ThirdField-news_lines'>
                        <div className='blogs_-news'>
                            <img src={require("../assets/img/blogs_new1.jpg")} alt='img' />
                            <div className='blogs_ThirdField-news_lines-date'>
                                21 THÁNG BẢY, 2022
                            </div>
                            <div className='blogs_ThirdField-news_lines-title'>
                                HÀNH TRÌNH ĐÁNG NHỚ 7 NGÀY 6 ĐÊM STEM SUMMER CAMP 2022: Khi niềm đam mê khoa học của trẻ không chỉ dừng lại trong những trang sách
                            </div>
                        </div>
                        <div className='blogs_-news'>
                            <Link to='/recruit'>
                            <img src={require("../assets/img/blogs_new2.png")} alt='img' />
                            </Link>
                            <div className='blogs_ThirdField-news_lines-date'>
                                13 THÁNG BẢY, 2022
                            </div>
                            <Link to='/recruit' className='blogs_ThirdField-news_lines-title'>
                                VNUK thông báo nhận hồ sơ xét tuyển sớm Đợt 1 bổ sung theo PT Tuyển sinh riêng từ 8/7 đến hết ngày 18/7/2022
                            </Link>
                        </div>
                        <div className='blogs_-news'>
                            <img src={require("../assets/img/blogs_new3.jpg")} alt='img' />
                            <div className='blogs_ThirdField-news_lines-date'>
                                5 THÁNG BẢY, 2022
                            </div>
                            <div className='blogs_ThirdField-news_lines-title'>
                                Lễ tốt nghiệp trang trọng và ấm cúng của các Tân cử nhân VNUK năm 2022
                            </div>
                        </div>
                    </div>
                </div>

                <div className='blogs_ThirdField-news'>
                    <div className='blogs_ThirdField-news_lines'>
                        <div className='blogs_-news'>
                            <img src={require("../assets/img/blogs_new4.jpg")} alt='img' />
                            <div className='blogs_ThirdField-news_lines-date'>
                                17 THÁNG SÁU, 2022
                            </div>
                            <div className='blogs_ThirdField-news_lines-title'>
                                Theo chân đoàn giảng viên Viện nghiên cứu và Đào tạo Việt - Anh trong chuyến công tác tại Vương quốc Anh
                            </div>
                        </div>
                        <div className='blogs_-news'>
                            <img src={require("../assets/img/blogs_new5.jpg")} alt='img' />
                            <div className='blogs_ThirdField-news_lines-date'>
                                15 THÁNG SÁU, 2022
                            </div>
                            <div className='blogs_ThirdField-news_lines-title'>
                                VNUK KÝ KẾT HỢP TÁC VỚI AI EDUCATION - ĐẶT NỀN TẢNG THÚC ĐẨY CHUYỂN ĐỔI SỐ TRONG GIÁO DỤC
                            </div>
                        </div>
                        <div className='blogs_-news'>
                            <img src={require("../assets/img/blogs_new6.jpg")} alt='img' />
                            <div className='blogs_ThirdField-news_lines-date'>
                                15 THÁNG SÁU, 2022
                            </div>
                            <div className='blogs_ThirdField-news_lines-title'>
                                Những con số biết nói về chất lượng sinh viên VNUK sau khi ra trường
                            </div>
                        </div>
                    </div>
                </div>

                <div className='blogs_ThirdField-news'>
                    <div className='blogs_ThirdField-news_lines'>
                        <div className='blogs_-news'>
                            <img src={require("../assets/img/blogs_new7.png")} alt='img' />
                            <div className='blogs_ThirdField-news_lines-date'>
                                24 THÁNG TƯ, 2022
                            </div>
                            <div className='blogs_ThirdField-news_lines-title'>
                                Tìm hiểu vấn đề giải quyết tranh chấp bằng trọng tài thương mại cùng Luật sư Nguyễn Trung Nam
                            </div>
                        </div>
                        <div className='blogs_-news'>
                            <img src={require("../assets/img/blogs_new8.png")} alt='img' />
                            <div className='blogs_ThirdField-news_lines-date'>
                                18 THÁNG TƯ, 2022
                            </div>
                            <div className='blogs_ThirdField-news_lines-title'>
                                Sức mạnh của Chứng chỉ nghề nghiệp quốc tế tại VNUK
                            </div>
                        </div>
                        <div className='blogs_-news'>
                            <img src={require("../assets/img/blogs_new9.jpg")} alt='img' />
                            <div className='blogs_ThirdField-news_lines-date'>
                                7 THÁNG TƯ, 2020
                            </div>
                            <div className='blogs_ThirdField-news_lines-title'>
                                Nottingham - Thành phố tuyệt vời cho việc học tập
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='blogs_Forthfield'>
                <div className='blogs_Forthfield_header'>
                    <div className='blogs_Forthfield_title'>
                        Tin tổng hợp
                    </div>
                    <div className='blogs_Forthfield_header-line'>
                    </div>
                </div>
                <div className='blogs_Forthfield-content'>
                    <div className='blogs_Forthfield-content_container'>
                        <img src={require("../assets/img/blogs_new10.jpg")} alt='img' />
                        <div className='blogs_Forthfield-content_container_text'>
                           <div className='blogs_Forthfield-content_container_text-title'>
                                16 THÁNG NĂM, 2020
                            </div>

                            <div className='blogs_Forthfield-content_container_text-subtitle'>
                                FOUDATION PROGRAMME TEACHING PHILOSOPHY, APPROACH AND METHODOLOGY
                            </div> 
                        </div>
'
                    </div>

                    <div className='blogs_Forthfield-content_container'>
                        <img src={require("../assets/img/blogs_new11.jpg")} alt='img' />
                        <div className='blogs_Forthfield-content_container_text'>
                           <div className='blogs_Forthfield-content_container_text-title'>
                                6 THÁNG TƯ, 2020
                            </div>

                            <div className='blogs_Forthfield-content_container_text-subtitle'>
                                Tại sao chọn Anh Quốc làm nơi học tập?
                            </div> 
                        </div>
'
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Blogs;