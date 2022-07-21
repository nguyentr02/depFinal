import React from "react";
import './gioi-thieu.css'

import GiaoVien from"../assets/img/giaovien.png"

const Gioithieu = () => {
    return (
        <div className="GioiThieu">
            <div className="background">
                
                <div className="both-img12">
                    <img className="img1" src={GiaoVien} alt="GiaoVien" />
                    <img className="img2" src={GiaoVien}/>
                    {/* <img className="img2" src="../assets/img/giaovien.png" />                    
                    <img className="vnuk" src="/public/img/vnuk.png" /> */}
                </div>

                <p>Đại học Đà Nẵng vinh dự được hai chính phủ Việt Nam và Vương quốc Anh chọn và giao nhiệm vụ hợp tác với các trường đại học Vương quốc Anh triển khai dự án thành lập trường Đại học Việt - Anh, một trường đại học công lập đẳng cấp quốc tế tại Đà Nẵng. Theo Quyết định số 5555/QĐ-BGDĐT ngày 22 tháng 11 năm 2013 của Bộ Giáo dục và Đào tạo, trường Đại học Công lập Quốc tế Việt - Anh được phát triển qua hai giai đoạn: (i) thành lập Viện Nghiên cứu và Đào tạo Việt - Anh(gọi</p>
                <p>Trong giai đoạn 1 vừa qua, VNUK đã và đang hợp tác với rất nhiều đối tác quốc tế, đặc biệt là đối
                    tác đại học tại Vương quốc Anh để triển khai các hoạt động nghiên cứu và đào tạo theo hướng tiếp
                    cận với trình độ giáo dục tiên tiến, hiện đại trên thế giới. VNUK được xem là một trường đại học
                    quốc tế công lập đầu tiên tại miền trung Việt Nam. Hiện nay, được sự đồng ý của Hội đồng Đại học
                    Đà Nẵng vào tháng 3/2021, VNUK đang trình Bộ Giáo dục và Đào tạo đề án thành lập trường Đại học
                    quốc tế. Tháng 3/2022, trong chuyến thăm Đại học Đà Nẵng, Bộ trưởng Bộ Giáo dục và Đào tạo đã
                    khẳng định sự ủng hộ chủ trương thành lập trường Đại học quốc tế Việt Anh</p>
                <div class="column-layout">
                    <div class="column-item siderbar-one">
                        <img className="sach" src="../../public/img/sách.png" />
                        {/* <img src={require('./assets/img/sách.png')} alt='img'/> */}
                        <p>Nhịp cầu cảm hứng - Viện Nghiên cứu và Đào tạo Việt - Anh nổ lực trở thành trường đại học đẳng cấp
                            quốc tế với những nghiên cứu đột phá, đào tạo đội ngũ nhân lực phát triển toàn diện trong một môi
                            trường sáng tạo và nhân bản.</p>
                    </div>
                    <div class="column-item main-column">
                        <img className="bang" src="../../public/img/bằng.png" />
                        {/* <img src={require('../../assets/img/bằng.png')} alt='img'/> */}
                        <p>Thực hiện các dự án nghiên cứu có chất lượng quốc tế, góp phần quan trọng nâng cao chất lượng cuộc
                            sống và phát triển của xã hội.</p>
                        <p>Phát triển và cung cấp các chương trình đào tạo hiện tại và đẳng cấp.</p>
                        <p>Trang bị cho người học những kỹ năng cần thiết để có thể làm chủ tương lai của bản thân và góp phần
                            xây dựng thế giới tốt đẹp hơn.</p>
                        <p>Đem đến cho giảng viên và người học môi trường học tập và làm việc thân thiện và đầy hững khởi.</p>
                    </div>
                    <div class="column-item siderbar-two">
                        <img className="truong" src="../../public/img/trường.png" />
                        <p>Students' reading achievements are typically evaluated by the target ability as well as a secondary
                            ability to understand the content of the passage.Students' reading achievements are typically evaluated
                            by the target ability as well as a secondary ability to understand the content of the passage.</p>
                    </div>
                </div>

                {/* <div class="feature-layout">
                    <div class="feature-item">
                        <img className="sach" src="../../public/img/sách.png"/>
                        <p>Students' reading achievements are typically evaluated by the target ability as well as a secondary ability to understand the content of the passage.Students' reading achievements are typically evaluated by the target ability as well as a secondary ability to understand the content of the passage.Students' reading achievements are typically evaluated by the target ability as well as a secondary ability to understand the content of the passage.</p>
                    </div>
                    <div class="feature-item">
                        <img className="bang" src="../../public/img/bằng.png"/>
                        <p>Students' reading achievements are typically evaluated by the target ability as well as a secondary ability to understand the content of the passage.Students' reading achievements are typically evaluated by the target ability as well as a secondary ability to understand the content of the passage.Students' reading achievements are typically evaluated by the target ability as well as a secondary ability to understand the content of the passage.</p>
                    </div>
                    <div class="feature-item">
                        <img className="truong" src="../../public/img/trường.png"/>
                        <p>Students' reading achievements are typically evaluated by the target ability as well as a secondary ability to understand the content of the passage.Students' reading achievements are typically evaluated by the target ability as well as a secondary ability to understand the content of the passage.Students' reading achievements are typically evaluated by the target ability as well as a secondary ability to understand the content of the passage.</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
export default Gioithieu;