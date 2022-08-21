import React from "react";
import "./trainghiem.css"

const Trainghiem = () => {
    return (
        <div className="bodytrainghiem">
            <img className="hsvnuk" src="/trainghiem.png" />
            <div className="main-title">
                <h2>Trải nghiệm Đại học</h2>
                <p>Khuôn viên trong tương lai được thiết kế cho sinh viên tốt nghiệp và chuyên nghiệp. Bạn sẽ thấy trường đại học của chúng ta như thế nào, cơ sở vật chất, trường học và cuộc sống trong trường đại học này. Gặp gỡ đại diện tuyển sinh của chúng tôi để tìm hiểu thêm về các chương trình và quyết định những gì tốt nhất cho bạn.</p>
            </div>

            <section className="courses">
                <h2>Our Popular Courses</h2>
                <div className="courses__container">
                    <article className="course">
                        <div className="course__image">
                            <img src="/1.png" />
                        </div>
                        <div className="course__infor">
                            <h4>Responsive Social Mdqwoedwfwef</h4>
                            <p>wifnwuhfwenfoiwhfowenofnsfweiofhwgnerughtiugeognoeigoienoiernoehgkengoierhghegguyerbeiunfnsneifnow weiuf fnwfhweuhfiwfwebfwe weifhwifnwuhfiuwfowfwpiejoiqdqnfohaofhaoefh pfhahfwihfwhfoabvskbc oabefkabfhwfewf</p>
                            <a className="btn-primary">Learn More</a>
                        </div>
                    </article>

                    <article className="course">
                        <div className="course__image">
                            <img src="/1.png" />
                        </div>
                        <div className="course__infor">
                            <h4>Responsive Social Mdqwoedwfwef</h4>
                            <p>wifnwuhfwenfoiwhfowenofnsfweiofhwgnerughtiugeognoeigoienoiernoehgkengoierhghegguyerbeiunfnsneifnow weiuf fnwfhweuhfiwfwebfwe weifhwifnwuhfiuwfowfwpiejoiqdqnfohaofhaoefh pfhahfwihfwhfoabvskbc oabefkabfhwfewf</p>
                            <a className="btn-primary">Learn More</a>
                        </div>
                    </article>

                    <article className="course">
                        <div className="course__image">
                            <img src="/1.png" />
                        </div>
                        <div className="course__infor">
                            <h4>Responsive Social Mdqwoedwfwef</h4>
                            <p>wifnwuhfwenfoiwhfowenofnsfweiofhwgnerughtiugeognoeigoienoiernoehgkengoierhghegguyerbeiunfnsneifnow weiuf fnwfhweuhfiwfwebfwe weifhwifnwuhfiuwfowfwpiejoiqdqnfohaofhaoefh pfhahfwihfwhfoabvskbc oabefkabfhwfewf</p>
                            <a className="btn-primary">Learn More</a>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default Trainghiem;