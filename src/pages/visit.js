// import { text } from "express";
// import $ from 'jquery';
import { useState } from "react";
import React from "react";
import './visit.css';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Visit = () => {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const mF = () => toast("Unavailable!");
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
                <p id="visit_2Field-p">Hãy yên tâm là bạn sẽ được đội ngũ cán bộ chuyên viên của Viện đón tiếp bạn vô cùng thân thiện và gần gũi. Thay vì chỉ nhìn thấy qua hình ảnh, video trên trang web và mạng xã hội, bạn sẽ trực tiếp nhìn thấy ngôi trường không to lớn nhưng hiện đại, sạch sẽ. Cũng qua chuyến thăm này, ngoài cơ sở vật chất, bạn cũng sẽ cảm nhận trực tiếp về sinh viên và cuộc sống ở VNUK như thế nào. Bạn đừng ngần ngại inbox với đội ngũ tư vấn tuyển sinh của chúng tôi để tìm hiểu thêm về các chương trình đào tạo của VNUK và quyết định chương trình nào tốt nhất cho bạn. Chúng tôi cam kết sẽ đưa ra lời khuyên chân thành và tốt nhất, phù hợp nhất cho tương lai của bạn sau này.</p>
                <h1 className="visit_2Field-title2">Các câu hỏi thường gặp</h1>

                <div className="visit_2Field-button_container">
                    <button type="button" className="visit_2Field-button" id="visit_2Field-button1" onClick={
                        () => setShow1(!show1)
                    }>Thời gian có thể đăng kí tham quan và địa điểm cụ thể?</button>
                    {show1 && (
                        <p id="visit_2Field-button_dropdowntext1" className="visit_2Field-button_dropdowntext">Quý vị phụ huynh hay các em học sinh có thể đăng kí tham quan trong giờ làm việc từ thứ Hai đến thứ Sáu, từ 8h00 đến 17h30. Vui lòng đăng kí trước để chúng tôi có thể đón tiếp quý vị/ các bạn một cách tốt nhất.
                            <br />
                            <br />Địa chỉ: Viện Nghiên cứu và Đào tạo Việt – Anh, Đại học Đà Nẵng, Địa chỉ: 158A Lê Lợi, phường Hải Châu 1, quận Hải Châu, thành phố Đà Nẵng
                            <br />Số điện thoại: 0236 37 38 399
                            <br />Hotline: 0905 55 66 54

                            <br />
                            <br />Email tư vấn tuyển sinh: admission@vnuk.edu.vn</p>
                    )}
                    <button onClick={() => setShow2(!show2)} className="visit_2Field-button" id="visit_2Field-button2">Chuyến tham quan sẽ kéo dài bao lâu?</button>
                    {show2 && (
                        <p id="visit_2Field-button_dropdowntext1" className="visit_2Field-button_dropdowntext">
                            Sẽ luôn có một bạn lễ tân hoặc sinh viên nếu bạn hẹn trước dẫn bạn đi tham quan VNUK. Thời gian tham quan sẽ tầm 20 – 30 phút và bạn có thể dành thêm ít thời gian để tìm hiểu thêm về cuộc sống đại học tại VNUK. Nếu là phụ huynh, quý vị cũng đừng ngại liên hệ để gặp các đại diện hay phụ trách ngành mà con quý phụ huynh dự kiến học. Tổng thời gian thông thường gồm cả phần tìm hiểu sẽ tầm 60 phút.
                        </p>
                    )}
                    <button onClick={() => setShow3(!show3)} className="visit_2Field-button" id="visit_2Field-button3">Có bãi đậu xe nào gần đây không?</button>
                    {show3 && (
                        <p id="visit_2Field-button_dropdowntext1" className="visit_2Field-button_dropdowntext">
                            Nếu đến tham quan VNUK bằng ô tô, quý phụ huynh sẽ phải đến sớm chút để tìm một nơi để xe không quá xa trường. Bao bọc xung quanh là trường học, tòa nhà căn hộ nên quý phụ sẽ vất vả đôi chút nếu đến vào giờ cao điểm. Tuy nhiên, quý vị đừng quá lo lắng. May mắn sẽ mỉm cười với quý vị bởi sẽ luôn có một vị trí nào đó xuất hiện khi quý vị lái xe bao quanh khu vực Lê Lợi, Pasteur, Nguyễn Thị Minh Khai và Lê Duẩn.
                        </p>
                    )}
                    <button onClick={() => setShow4(!show4)} className="visit_2Field-button" id="visit_2Field-button4">Tôi có thể gửi hành lý của mình tại Lễ tân không?</button>
                    {show4 && (
                        <p id="visit_2Field-button_dropdowntext1" className="visit_2Field-button_dropdowntext">
                            Các chuyên lễ tân và tư vấn tuyển của chúng tôi rất vui vẻ và mến khách. Quý vị phụ huynh hay các em nếu đến từ nơi khác thì đừng ngại gửi hành lý tại quầy Lễ tân trong thời gian đi tham quan trường nhé.                        </p>
                    )}
                </div>

                <button id="visit_signbtn" onClick={mF}>Đăng Ký Tham Gia</button>
                <ToastContainer/>
            </div>

            <div className="visit_3Field">
                <h1 className="visit_3Field-title1">Thành phố Đà Nẵng</h1>
                <p className="visit_3Field-text1">
                Là thành phố lớn nhất miền Trung, Đà Nẵng khoác lên mình sự nhộn nhịp và huyên náo của một trung tâm kinh tế – văn hóa lớn nhất khu vực. Được bao bọc bởi biển cả xanh ngát và núi non hùng vĩ, đây là thành phố đáng sống với nhiều thắng cảnh làm say lòng người cùng những giá trị văn hóa độc đáo. Con người Đà Nẵng bình dị, mến khách đã trở thành biểu tượng của mảnh đất này. Ngày càng nhiều bạn sinh viên từ các tỉnh thành phía Nam và khu vực miền Bắc lựa chọn thành phố Đà Nẵng cho hành trình đại học của mình bởi họ muốn tìm đến một nơi chốn vừa đủ sự nhộn nhịp và vừa đủ sự bình yên.
                </p>
                <h1 className="visit_3Field-title1">Vị trí của VNUK</h1>
                <p className="visit_3Field-text1">
                VNUK tọa lạc tại một địa điểm trung tâm thành phố, ngay trung tâm của Quận Hải Châu, thành phố Đà Nẵng.  Từ đây, bạn có thể đi đến chợ Hàn, Vincom hay Tòa nhà hành chính trong vòng 5 phút bằng xe máy. Tòa nhà VNUK ở cách cầu sông Hàn tầm 1km nên bạn có thể dễ dàng đi bộ và dạo dọc theo bờ sông Hàn mỗi buổi chiều tan học hay ghé nhanh những hàng quán đặc sản như bánh tráng thịt heo Trần, bánh canh Thu, mì quảng Hải Phòng,…Thật sự là một địa điểm lý tưởng nếu bạn đến từ nơi khác và mong muốn hòa nhập vào thành phố này.
                </p>
            </div>



        </div>
    )
}

export default Visit;