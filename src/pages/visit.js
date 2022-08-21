// import { text } from "express";
// import $ from 'jquery';
import React from "react";
import './visit.css';

const Visit = () => {
    
    function Dropdowntext1() {
        const text1 = document.getElementById('visit_2Field-button_dropdowntext1');
        const text1_displaysetting = text1.style.display;
        if (text1_displaysetting === 'none') {
            text1.style.display= 'block';
        };
    }

    return (
        <div className="visit">
            <div className="visit_1Field">
                <img id="visit_1Field-img" src={require("../assets/img/visit1.png")} alt='img' />
                <h1 id="visit_1Field-text">Tham quan trường</h1>
            </div>

            <div className="visit_2Field">
                <h1 className="visit_2Field-title">Vì sao nên dành chút thời gian đến tham quan VNUK?</h1>
                <ul>
                    <li id="visit_2Field-li">Để được trực tiếp gặp gỡ thầy cô và các bạn sinh viên đang học tập tại VNUK.</li>
                    <li id="visit_2Field-li">Có góc nhìn rộng mở hơn và sâu hơn về môi trường học tập tại VNUK.</li>
                    <li id="visit_2Field-li">Được chia sẻ những câu chuyện đặc biệt thú vị mà bạn ít khi được biết thông qua truyền thông xã hội.</li>
                </ul>
                <p id="visit_2Field-p">Hãy yên tâm là bạn sẽ được đội ngũ cán bộ chuyên viên của Viện đón tiếp bạn vô cùng thân thiện và gần gũi. Thay vì chỉ nhìn thấy qua hình<br /> ảnh, video trên trang web và mạng xã hội, bạn sẽ trực tiếp nhìn thấy ngôi trường không to lớn nhưng hiện đại, sạch sẽ. Cũng qua chuyến<br /> thăm này, ngoài cơ sở vật chất, bạn cũng sẽ cảm nhận trực tiếp về sinh viên và cuộc sống ở VNUK như thế nào. Bạn đừng ngần ngại inbox<br /> với đội ngũ tư vấn tuyển sinh của chúng tôi để tìm hiểu thêm về các chương trình đào tạo của VNUK và quyết định chương trình nào tốt nhất<br /> cho bạn. Chúng tôi cam kết sẽ đưa ra lời khuyên chân thành và tốt nhất, phù hợp nhất cho tương lai của bạn sau này.</p>
                <h1 className="visit_2Field-title2">Các câu hỏi thường gặp</h1>

                <div className="visit_2Field-button_container">
                    <button type="button" className="visit_2Field-button" id="visit_2Field-button1" onClick={Dropdowntext1}>Thời gian có thể đăng kí tham quan và địa điểm cụ thể?</button>
                    <div>
                        <p id="visit_2Field-button_dropdowntext1" className="visit_2Field-button_dropdowntext">Quý vị phụ huynh hay các em học sinh có thể đăng kí tham quan trong giờ làm việc từ thứ Hai đến thứ Sáu, từ 8h00 đến 17h30. Vui lòng đăng kí trước để chúng tôi có thể đón tiếp quý vị/ các bạn một cách tốt nhất.
                            <br />
                            <br />Địa chỉ: Viện Nghiên cứu và Đào tạo Việt – Anh, Đại học Đà Nẵng, Địa chỉ: 158A Lê Lợi, phường Hải Châu 1, quận Hải Châu, thành phố Đà Nẵng
                            <br />Số điện thoại: 0236 37 38 399
                            <br />Hotline: 0905 55 66 54

                            <br />
                            <br />Email tư vấn tuyển sinh: admission@vnuk.edu.vn</p>
                    </div>
                    
                    <button className="visit_2Field-button" id="visit_2Field-button2">Chuyến tham quan sẽ kéo dài bao lâu?</button>
                    <button className="visit_2Field-button" id="visit_2Field-button3">Có bãi đậu xe nào gần đây không?</button>
                    <button className="visit_2Field-button" id="visit_2Field-button4">Tôi có thể gửi hành lý của mình tại Lễ tân không?</button>
                </div>
            </div>
        </div>
    )
}

export default Visit;