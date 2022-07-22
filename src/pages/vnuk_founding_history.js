import React from 'react'
import './vnuk_fh.css'

const vnukfh = () => {
    return (
        <div className = "vnukfh">
            <div id="vfh_s1">
                <div id="vfh_top_right_corner_icon">
                        <img id="vfh_search_icon" src={require("../assets/img/search_icon.png")}/>
                        <img id="vfh_more_icon" src={require("../assets/img/More.png")}/>
                </div>

                <div class="vfh_s1_text" id="founding_history">Lịch sử hình thành</div>

                <img id="vnuk_logo_2" src={require("../assets/img/vnuk_logo_2.png")}  alt="img"/>

                <div class="vfh_s1_text" id="vnuk_uni">Viện Nghiên cứu và Đào tạo Việt - Anh, tiền thân trường Đại học quốc tế, Đại học Đà Nẵng</div>

                <div class="vfh_s1_text" id="vfh_s1_para1">
                    Đại học Đà Nẵng vinh dự được hai chính phủ Việt Nam và Vương quốc Anh chọn và giao nhiệm vụ hợp tác với các trường đại học Vương quốc Anh <br/>
                    triển khai dự án thành lập trường Đại học Việt - Anh, một trường đại học công lập đẳng cấp quốc tế tại Đà Nẵng. Theo Quyết định số <br/>
                    5555/QĐ-BGDĐT ngày 22 tháng 11 năm 2013 của Bộ Giáo dục và Đào tạo,  trường Đại học Công lập Quốc tế Việt - Anh được phát triển qua hai <br/>
                    giai đoạn: (i) thành lập Viện Nghiên cứu và Đào tạo Việt - Anh (gọi tắt là VNUK) thuộc Đại học Đà Nẵng, (ii) phát triển Viện thành trường Đại học <br/>
                    Quốc tế Việt - Anh. Theo quyết định này, VNUK được tổ chức đào tạo các chương trình bậc đại học, thạc sĩ, và tiến sĩ cũng như các khóa đào tạo <br/>
                    bồi dưỡng ngắn hạn.
                </div>

                <div class="vfh_s1_text" id="vfh_s1_para2">
                    Trong giai đoạn 1 vừa qua, VNUK đã và đang hợp tác với rất nhiều đối tác quốc tế, đặc biệt là đối tác đại học tại Vương quốc Anh để triển khai các <br/>
                    hoạt động nghiên cứu và đào tạo theo hướng tiếp cận với trình độ giáo dục tiên tiến, hiện đại trên thế giới. VNUK được xem là một trường đại học <br/>
                    quốc tế công lập đầu tiên tại miền Trung Việt Nam. Hiện nay, được sự đồng ý của Hội đồng Đại học Đà Nẵng vào tháng 3/2021, VNUK đang trình Bộ <br/>
                    Giáo dục và Đào tạo đề án thành lập trường Đại học quốc tế. Tháng 3/2022, trong chuyến thăm Đại học Đà Nẵng, Bộ trưởng Bộ Giáo dục và Đào <br/>
                    tạo đã khẳng định sự ủng hộ chủ trương thành lập trường Đại học quốc tế Việt Anh.
                </div>

                <img id="vfh_s1_dacam" src={require("../assets/img/vfh_DaCam.png")} alt="img"/>

                <div class="vfh_s1_text" id="vfh_founding_paper">
                    Biên bản Ghi nhớ thành lập
                    <div class="vfh_s1_text" id="vfh_s1_school">trường <span id="vfh_s1_vnuk_span">Đại học Việt - Anh</span> </div>
                    <div class="vfh_s1_text" id="vfh_dn_city">tại Thành phố Đà Nẵng</div>
                    <div class="vfh_s1_text" id="vfh_founding_paper_para">
                        Ngày 22-1 năm 2013, Tổng Bí thư Nguyễn Phú Trọng và đoàn đại biểu cấp cao Việt Nam đã tới <br/>
                        thủ đô Luân Đôn (London), bắt đầu chuyến thăm chính thức Vương quốc Anh theo lời mời của <br/>
                        Thủ tướng Anh Đavít Camêrôn (David Cameron). Nhân dịp này, hai nước đã ký kết nhiều văn <br/>
                        kiện quan trọng, trong đó có Bản ghi nhớ về thành lập trường đại học Việt - Anh tại Đà Nẵng. <br/>
                        Thứ trưởng Bộ Giáo dục và Đào tạo Trần Quang Quý đã thay mặt Chính phủ Việt Nam và Đại <br/>
                        sứ Vương quốc Anh tại Việt Nam - ngài Anthony Stokes đã thay mặt chính phủ Anh, ký vào <br/>
                        Biên bản ghi nhớ về việc thành lập trường Đại học Việt - Anh tại thành phố Đà Nẵng.
                    </div>
                </div>

                <div id="vfh_s1_dacam_pic_cre">Thủ tướng David Cameron đón Tổng Bí thư Nguyễn Phú Trọng. Ảnh: Trí Dũng - TTXVN</div>
            </div>
        </div>
        
    )
}


export default vnukfh;