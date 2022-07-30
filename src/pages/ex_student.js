import React from 'react'
import './ex_student.css'

const ExStudent = () => {
    return (
        <div className = "ExStudent">
            <div id="ex_student_s1">
                <div id="ex_student_s1_background">
                    <div id="ex_student_s1_text">Cựu sinh viên và đóng góp</div>
                </div>
            </div>

            <div id="ex_student_s2">
                <div class="ex_student_header" id="ex_student_s2_help_us">
                    Help Us Change the Future
                </div>

                <div class="ex_student_body" id="ex_student_s2_paragraphs">
                    <div id="ex_student_s2_para1">
                        At VNUK, we take on the toughest challenges. We search the world for answers to the most pressing problems, 
                        making discoveries that reveal to us the inner workings of the human brain and the role of our oceans in the 
                        world around us. We are an engine of progress in the South Florida community, contributing nearly $9 billion 
                        to the local economy. But most importantly, we create opportunities for a diverse student population; in 
                        fact, more than half our students are the first in their family to receive a college degree.
                    </div>

                    <div id="ex_student_s2_para2">
                        With your gift, you can support VNUK's efforts to transform the future of South Florida and beyond. Best of 
                        all, you can give in a variety of ways and to dozens of causes. Give today and inspire the next great VNUK
                        story.
                    </div>
                </div>
            </div>

            <div id="ex_student_s3">
                <div class="ex_student_header" id="ex_student_s3_campaign">
                    The Campaign for VNUK
                </div>

                <div class="ex_student_body" id="ex_student_s3_paragraph">
                    The Next Horizon campaign will put FIU at the forefront of discovery and innovation; health and society; <br/> 
                    weather and environment; influence and enterprise; and community, arts and culture. This will be achieved by <br/> 
                    focusing on two pillars - student success and research excellence - and attracting investments that will <br/> 
                    increase scholarships and student support; optimize 21st-century teaching; advance a vibrant, healthy Miami; <br/> 
                    accelerate research and discoveries; and escalate discovery to enterprise.
                </div>
            </div>

            <div id="ex_student_s4">
                <div class="ex_student_header" id="ex_student_s4_difference">
                    Making a Difference
                </div>

                <div id="ex_student_s4_posts">
                    <div id="ex_student_s4_posts_row1">
                        <a target="_blank" onClick={()=>{window.location.href="https://vnuk.udn.vn/alumni-and-giving/faculty-and-staff-giving-helps-university-reach-new-heights/";}}>
                            <div id="ex_student_s4_faculty_post">
                                <img id="ex_student_s4_faculty_img" src={require("../assets/img/ex_student_s4_faculty.png")} alt="img"/>
                
                                <div id="ex_student_s4_faculty_texts">
                                    <div class="ex_student_s4_headers" id="ex_student_s4_faculty_header">
                                        Faculty and staff giving helps <br/>
                                        university reach new heights
                                    </div>
                    
                                    <div class="ex_student_body" id="ex_student_s4_faculty_body">
                                        The Biscayne Bay Campus Vice Provost's <br/> 
                                        Council is investing in the future and leading <br/> 
                                        a scholarship program to give Panthers <br/> 
                                        in need a chance at success.
                                    </div>
                                </div>
                            </div>
                        </a>
                        
                        <a target="_blank" onClick={()=>{window.location.href="https://vnuk.edu.vn/alumni-and-giving/collectors-find-a-home-for-their-treasures-at-vnuk/";}}>
                            <div id="ex_student_s4_collectors_post">
                                <img id="ex_student_s4_collectors_img" src={require("../assets/img/ex_student_s4_collectors.png")} alt="img"/>
                
                                <div id="ex_student_s4_collectors_texts">
                                    <div class="ex_student_s4_headers" id="ex_student_s4_collectors_header">
                                        Collectors find a home for <br/> 
                                        their treasures at VNUK
                                    </div>
                    
                                    <div class="ex_student_body" id="ex_student_s4_collectors_body">
                                        Carlos Sabater grew to positively impact <br/> 
                                        everyone around him and now has inspired a <br/> 
                                        College of Business endowment that will help <br/> 
                                        many more.
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div id="ex_student_s4_posts_row2">
                        <a target="_blank" onClick={()=>{window.location.href="https://vnuk.edu.vn/alumni-and-giving/almost-killed-40-years-ago-alumnus-inspires-college-of-business-endowment/";}}>
                            <div id="ex_student_s4_alumnus_post">
                                <img id="ex_student_s4_alumnus_img" src={require("../assets/img/ex_student_s4_alumnus.png")} alt="img"/>
                
                                <div id="ex_student_s4_alumnus_texts">
                                    <div class="ex_student_s4_headers" id="ex_student_s4_alumnus_header">
                                        Almost killed 40 years ago, <br/> 
                                        alumnus inspires College of <br/> 
                                        Business endowment
                                    </div>
                    
                                    <div class="ex_student_body" id="ex_student_s4_alumnus_body">
                                        Donors create a legacy of art and culture at <br/> 
                                        FIU museums.
                                    </div>
                                </div>
                            </div>
                        </a>
                        
                        <a target="_blank" onClick={()=>{window.location.href="https://vnuk.edu.vn/alumni-and-giving/civic-minded-citizens-raise-scholarship-funds-promote-biscayne-bay-campus/";}}>
                            <div id="ex_student_s4_civic_post">
                                <img id="ex_student_s4_civic_img" src={require("../assets/img/ex_student_s4_civic.png")} alt="img"/>
                
                                <div id="ex_student_s4_civic_texts">
                                    <div class="ex_student_s4_headers" id="ex_student_s4_civic_header">
                                        Civic-minded citizens raise <br/> 
                                        scholarship funds, promote <br/> 
                                        Biscayne Bay Campus
                                    </div>
                    
                                    <div class="ex_student_body" id="ex_student_s4_civic_body">
                                        FIU faculty and staff put their money behind <br/> 
                                        student success and other university goals.
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div id="ex_student_s4_see_more">Xem thêm</div>
                </div>
            </div>

            <div id="ex_student_s5">
                <div id="ex_student_s5_white_part">
                    <div class="ex_student_header" id="ex_student_s5_white_part_text">Keep in Touch with Your Panther Family</div>
                </div>

                <div class="ex_s5_student_body" id="ex_student_s5_blue_para">
                    You'll find FIU panthers in every U.S. state and in more than 190 countries around the world. As an FIU graduate, you're already part of this worldwide network, connected to more than 200,000 
                    alumni that are leaders in government business, media, the arts and more.
                </div>

                <div id="ex_student_s5_blue_list">
                    <div class="ex_s5_student_body" id="ex_student_s5_blue_list_header">
                        In addition to the camaraderie and support that comes with being part of the FIU family, your alumni status also brings lots of other benefits, too, including:
                    </div>

                    <div class="ex_s5_student_body" id="ex_student_s5_list_part">
                        <div class="ex_student_s5_list">
                            <span class="ex_student_s5_dots">•</span> 
                            Discounts on goods and services
                        </div>
            
                        <div class="ex_student_s5_list">
                            <span class="ex_student_s5_dots">•</span> 
                            Exclusive travel opportunities
                        </div>
            
                        <div class="ex_student_s5_list">
                            <span class="ex_student_s5_dots">•</span> 
                            Career development resources
                        </div>
            
                        <div class="ex_student_s5_list">
                            <span class="ex_student_s5_dots">•</span> 
                            And more
                        </div>
                    </div>
                </div>
            </div>

            <div id="ex_student_s6">
                <div class="ex_student_header" id="ex_student_s6_calendar_header">Calendar</div>

                <div id="ex_student_s6_event_date_time">
                    <div id="ex_student_s6_date">
                        <div class="ex_student_header" id="ex_student_s6_day">10</div>
                        <div id="ex_student_s6_month">TH7</div>
                        <div id="ex_student_s6_date_underline"></div>
                    </div>
            
                    <div id="ex_student_s6_event">
                        <div id="ex_student_s6_event_title">STEM SUMMER CAMP 2022 - TRẠI HÈ KHOA HỌC QUỐC TẾ</div>
                        <div id="ex_student_s6_event_time">12:00 sáng - 11:59 chiều</div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default ExStudent;