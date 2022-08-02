import React from 'react'
import './blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='imgField'>
                <h1 id='blogs'>Blogs</h1>
            </div>


            <div className='secondField'>

                <div className='container'>
                    <div className='title'>
                        ĐĂNG KÝ XÉT TUYỂN
                    </div>
                    <div className='sub_title'>
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

                <div className='SecondContainer'>
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
        </div>
    )
}


export default Blogs;