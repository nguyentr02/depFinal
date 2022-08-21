import React from "react";
import './visit.css';

const Visit = () => {
    return (
        <div className="visit">
            <div className="visit_1Field">
                <h1 id="visit_1Field-text">Tham quan trường</h1>
            </div>

            <div className="visit_2Field">
                <h1>Vì sao nên dành chút thời gian đến tham quan VNUK</h1>
                <ul> 
                    <li>Để được trực tiếp gặp gỡ thầy cô và các bạn sinh viên đang học tập tại VNUK.</li>
                    <li>Có góc nhìn rộng mở hơn và sâu hơn về môi trường học tập tại VNUK.</li>
                    <li>Được chia sẻ những câu chuyện đặc biệt thú vị mà bạn ít khi được biết thông qua truyền thông xã hội.</li>
                </ul>
            </div>
        </div>
    )
}

export default Visit;