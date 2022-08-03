import React from 'react'
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
                            <img src={require("../assets/img/blogs_new1.jpg")} alt='img'/>
                            <div className='blogs_ThirdField-news_lines-date'>
                                21 THÁNG BẢY, 2022
                            </div>
                            <div className='blogs_ThirdField-news_lines-title'>
                                HÀNH TRÌNH ĐÁNG NHỚ 7 NGÀY 6 ĐÊM STEM SUMMER CAMP 2022: Khi niềm đam mê khoa học của trẻ không chỉ dừng lại trong những trang sách 
                            </div>
                        </div>
                        <div className='blogs_-news'>
                            <img src={require("../assets/img/blogs_new1.jpg")} alt='img'/>
                            <div className='blogs_ThirdField-news_lines-date'>
                                21 THÁNG BẢY, 2022
                            </div>
                            <div className='blogs_ThirdField-news_lines-title'>
                                HÀNH TRÌNH ĐÁNG NHỚ 7 NGÀY 6 ĐÊM STEM SUMMER CAMP 2022: Khi niềm đam mê khoa học của trẻ không chỉ dừng lại trong những trang sách 
                            </div>
                        </div>
                        <div className='blogs_-news'>
                            <img src={require("../assets/img/blogs_new1.jpg")} alt='img'/>
                            <div className='blogs_ThirdField-news_lines-date'>
                                21 THÁNG BẢY, 2022
                            </div>
                            <div className='blogs_ThirdField-news_lines-title'>
                                HÀNH TRÌNH ĐÁNG NHỚ 7 NGÀY 6 ĐÊM STEM SUMMER CAMP 2022: Khi niềm đam mê khoa học của trẻ không chỉ dừng lại trong những trang sách 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Blogs;