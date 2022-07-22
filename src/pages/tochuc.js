import React from "react";
import "./tochuc.css";

import Lien from "../assets/img/lien.png"
import Sodo from "../assets/img/Sodo.png"

const ToChuc = () => {
    return (
        <div className="ToChuc">
            <div>
                <img className="giangvien" src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/294154619_583984679904147_7782459586657298171_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-EPLBYIW5MUAX_noSle&_nc_ht=scontent.fhan3-5.fna&oh=03_AVLf148Opa_M2P1dXynWz8ENgMZ_Z6qONPboyU5JlbUtVA&oe=62FFC5BC" />
                <h1 className="Tittle_ToChuc">Cơ cấu tổ chức</h1>
            </div>

            <div className="background-content-title">
                <div className="content1">
                    <h2>Hội đồng trường - Hội đồng Đại học Đà Nẵng</h2>
                    <p>Hội đồng trường là của trường đại học công lập là tổ chức quản trị,
                        thực hiện quyền đại diện của chủ sở hữu và các bên có lợi ích liên
                        quan. VNUK là đơn vị trực thuộc Đại học Đà Nẵng, vì vậy Hội đồng
                        trường của VNUK cũng là Hội đồng Đại học Đà Nẵng. Hội đồng Đại học
                        Đà Nẵng chịu trách nhiệm về định hướng chiến lược và các vấn đề
                        lớn cả VNUK. Hội đồng Đại học Đà Nẵng có 29 thành viên.</p>
                </div>
            </div>

            <div className="content2">
                <p>Sơ đồ cơ cấu tổ chức</p>
                <img src={Sodo} />
            </div>

            <div className="title3">
                <span>Lãnh đạo Viện</span>
                Lãnh đạo Viện
            </div>

            <div className="background-content3">
                <div className="bothhuong">
                    <img className="anhHuong" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/292396789_383532467182222_732688730299289907_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=h1fJs0K7VgQAX8XYnxU&_nc_ht=scontent.fdad3-4.fna&oh=03_AVLqKoKSkS_14Dn6dSBoXOcBRXrcB-8zFcHBC7ONxsS2tg&oe=63004686" />
                    <div className="content3">
                        <p className="Huong">Viện trưởng</p>
                        <p> Viện trưởng là người đại diện cho Viện trước pháp luật; chịu trách nhiệm
                            trực tiếp quản lý và điều hành các hoạt động của Viện. Viện trưởng do
                            Giám đốc ĐHĐN bổ nhiệm, miễn nhiệm.</p>
                        <p>Nhiệm kỳ của Viện trưởng là 05 năm, có thể được bổ nhiệm lại nhưng không
                            quá hai nhiệm kỳ liên tiếp. Viện trưởng của VN là TS.Nguyễn Thị Mỹ Hương,
                            phụ trách chung và các lĩnh vực cụ thể như Nhân sự, Tài chính, Cơ sở vật
                            chất, Tuyển sinh, ngành Quản trị và Kinh doanh quốc tế, Khoa Ngôn Ngữ và
                            Dự bị đại học, Bộ phận Hành chính tổng hợp, các trung tâm trực thuộc Viện</p>
                        <p><a>Tìm hiểu thêm về Viện trưởng - TS. Nguyễn Thị Mỹ Hương</a></p>
                    </div>
                </div>
            </div>

            <div className="title-content4">
                <div className="bothlien">
                    <div className="content4">
                        <p className="Lien">Phó Viện Trưởng</p>
                        <p>Phó Viện trưởng là người giúp Viện trưởng trong công việc quản lý và điều hành
                            hoạt động của Viện; trực tiếp phụ trách một số mảng công tác theo phân công của
                            Viện trường và giải quyết các công việc do Viện trưởng giao. Theo Quy chế hoạt
                            động của Viện, Viện có không quá ba Phó Viện trưởng. Hiện nay Viện có một Phó
                            viện trưởng là PGS.TS.Giang Thị Kim Liên phụ trách Đào tạo, đảm bảo chất lượng,
                            Nghiên cứu và Hợp tác quốc tế, ngành đào tạo Khao học Y Sinh và Công nghệ Nano</p>
                        <a><p>Tìm hiểu thêm về Phó Viện trưởng - PSG.TS.Giang Thị Kim Liên</p></a>
                    </div>
                    <img className="anhLien" src={Lien} />
                </div>
            </div>

            <div className="hoidong">
                <p className="hoidong1" >Hội đồng Khoa học và Đào tạo</p>
                <div className="hoidong2">
                    <p className="hoidong2-content">Hội đồng khoa học và đào tạo có nhiệm vụ tư vấn cho Viện trưởng về các hoạt động sau:</p>
                    <ul>
                        <li>- Các hoạt động đào tạo;</li>
                        <li>- Các hoạt động khoa học và công nghệ (KHCN)</li>
                        <li>- Các hoạt động hợp tác với doanh nghiệp và hợp tác quốc tế;</li>
                        <li>- Các hoạt động phát triển nhân lực và cơ sở vật chất (vật lực) phục vụ công tác đào tạo và KHCN;</li>
                        <li>- Đề xuất và tham mưu cho ĐHĐN để lựa chọn tổ chức kiểm định chất lượng giáo dục của Viện;các phương thức kiểm tra, đánh giá kết quả học tập, rèn luyện của sinh viên; các giải pháp nâng cao chất lượng đào tạo và đảm bảo chất lượng đầu ra; đánh giá chất lượng của trang thông tin điện tử, tạp chí, tập san KHCN (nếu có), đánh giá việc tổ chức và quản lý đào tạo, hoạt động KHCN của các đơn vị trong Viện</li>
                    </ul>
                    <p>Hiện tại, Hội đồng Khoa học và Đào tạo của Viện có 11 thành viên</p>
                </div>
            </div>


            <div className="khoa">
                <p className="khoa1">Khoa/Tổ chuyên môn</p>
                <div className="khoa1-content">
                    <p>Khoa/Tổ chuyên môn là đơn vị chuyên môn thuộc Viện do Giám đốc ĐHDN thành lập trên cơ sở đề xuất của Viện trưởng.</p>
                    <p>Khoa/Tổ chuyên môn có thể được điều chỉnh trong quá trình phát triển Viện</p>

                </div>
            </div>

            <div className="donvi">
                <p className="donvi1">Đơn vị chức năng</p>
                <div  className="donvi2">
                    <p>Các đơn vị chức năng của Viện gồm: Phòng Đào tạo; Phòng Khoa học  - Hợp tác quốc tế và 06 tổ trực thuộc: Tổ Hành chính Tổng hợp, Tổ tài vụ, Tổ Công tác sinh viên, Tổ Đảm bảo chất lượng, Tổ Truyền thong Marketing, Tổ Dịch vụ việc làm và Quan hệ doanh nghiệm. Số lượng và tên gọi của các phòng, tổ đơn vị chức năng có thể được điều chỉnh và nâng cấp</p>
                </div>
            </div>
        </div>
    );
}
export default ToChuc;