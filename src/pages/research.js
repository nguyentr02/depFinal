import React from 'react'
import './research.css'

const Research = () => {
    return (
        <div className = "Research">
            <div id="research_s1">
                <div id="research_s1_background_img">
                    <div id="research_s1_header">
                        <div id="research_s1_header_p1">Nghiên</div>
                        <div id="research_s1_header_p2">cứu</div>
                    </div>
                </div>
            </div>

            <div id="research_s2">
                <div id="research_s2_header_group">
                    <div class="research_s2_header" id="research_s2_small_header">
                        Innovative Solutions to Global Problems
                    </div>

                    <div class="research_s2_header" id="research_s2_big_header">BUSINESS</div>
                </div>

                <div id="research_s2_paragraphs">
                    <div id="research_s2_para1_start">Here,</div>

                    <div id="research_s2_para1">
                        At VNUK, we search the world for solutions to global problems. At the North Pole, Professor David Kadko
                        fingerprints the geochemistry of the Arctic Ocean. From the Aquarius reef base - the world's only
                        undersea <br/>
                        research laboratory - researchers gain an unparalleled perspective on climate change and more, while the
                        Wall of Wind brings the destructive force of a Category 5 hurricane into the laboratory, enabling
                        one-of-a-kind <br/>
                        research opportunities. At the Accelerated Bridge Construction center, we work to solve the
                        infrastructure challenges of the future. And at the Center for Children and Families, researchers work
                        to improve the lives of <br/>
                        children suffering from mental health disorders.
                    </div>

                    <div id="research_s2_para2">
                        Our drive to make our world a better place has earned us a distinction few other universities can match:
                        Carnegie R1 Very High Research Designation, the top-tier category for doctoral research universities.
                    </div>

                    <a id="research_s2_learn_more"
                        onClick={()=>{window.location.href="https://research.fiu.edu/?fbclid=IwAR1hQGoKFlqXLpGRERO4ptppwyyfgGsuTyF4kJBZDrFuUWVA4jnENdaPQac"}}
                        target="_blank">
                        Learn more about VNUK Research.
                    </a>
                </div>
            </div>

            <div id="research_s3">
                <div id="research_s3_awards_group">
                    <div class="research_s3_numbers" id="research_s3_awards_number">$116 M</div>

                    <div class="research_s3_borders" id="research_s3_awards_border"></div>

                    <div class="research_s3_achievement" id="research_s3_awards_received">Awards Received</div>
                </div>

                <div id="research_s3_inventions_group">
                    <div class="research_s3_numbers" id="research_s3_inventions_number">70</div>

                    <div class="research_s3_borders" id="research_s3_inventions_border"></div>

                    <div class="research_s3_achievement" id="research_s3_inventions_disclose">Invention Disclosures</div>
                </div>

                <div id="research_s3_patents_group">
                    <div class="research_s3_numbers" id="research_s3_patents_number">61</div>

                    <div class="research_s3_borders" id="research_s3_patents_border"></div>

                    <div class="research_s3_achievement" id="research_s3_patents_received">U.S. Patent Applications Filed</div>
                </div>
            </div>

            <div id="research_s4">
                <div id="research_s4_text_group">
                    <div id="research_s4_header">
                        Bringing Ideas to Market
                    </div>

                    <div id="research_s4_paragraph">
                        But ideas alone can't create change. Ideas need to be nurtured and refined. They need support to <br/>
                        become more than just ideas. That's where our Technology Management and Commercialization team <br/>
                        and StartUP FIU step in, providing the protection, guidance and support that help research find its way
                        <br/>
                        to the real world.
                    </div>
                </div>

                <img id="research_s4_img" src={require("../assets/img/research_s4_img.png")} alt="img"/>
            </div>

            <div id="research_s5">
                <div id="research_s5_quote_group">
                    <div id="research_s5_quote_symbol">
                        <div id="research_s5_quote">
                            It's obvious all of these entrepreneurs have been mentored, <br/>
                            have been given an immense amount of resources. I've been <br/>
                            very impressed with FIU's commitment.

                            <div id="research_s5_quote_from">
                                —Rahul Kothari, Ironview Capital Management
                            </div>
                        </div>
                    </div>

                    <div id="research_s5_quote_border"></div>

                    <img id="research_s5_quotes_simbol_2_img" src={require("../assets/img/research_s5_quotes_simbol_2.png")} alt="img"/>
                </div>

                <div id="research_s5_news_group">
                    <div id="research_s5_news_group_header">
                        Research News
                    </div>

                    <div id="research_s5_news_posts">
                        <div id="research_s5_news_posts_row1">
                            <a target="_blank"
                                onClick={()=>{window.location.href="https://vnuk.edu.vn/research/deep-sea-shrimp-are-covered-in-organs-that-see-light/"}}>
                                <div id="research_s5_shrimp_post">
                                    <img id="research_s5_shrimp_img" src={require("../assets/img/research_s5_shrimp.png")} alt="img"/>

                                    <div id="research_s5_shrimp_texts">
                                        <div class="research_s5_small_headers" id="research_s5_biology">Khoa học Y Sinh</div>

                                        <div class="research_s5_headers" id="research_s5_shrimp_header">
                                            Deep-sea shrimp are covered <br/> 
                                            in organs that see light
                                        </div>

                                        <div class="research_s5_body" id="research_s5_shrimp_body">
                                            While the exact cause of schizophre- <br/> 
                                            nia is unknown and much research <br/> 
                                            has focused on genetics, researchers <br/> 
                                            at the Robert Stempel College of <br/> 
                                            Public Health & Social Work are one <br/> 
                                            step […]
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a target="_blank"
                                onClick={()=>{window.location.href="https://vnuk.edu.vn/research/stempel-college-dean-honored-with-career-achievement-award-by-society-of-toxicology/"}}>
                                <div id="research_s5_stempell_post">
                                    <img id="research_s5_stempell_img" src={require("../assets/img/research_s5_stempell.png")} alt="img"/>

                                    <div id="research_s5_stempell_texts">
                                        <div class="research_s5_small_headers" id="research_s5_community">Khuôn viên và Cộng đồng</div>
                                        
                                        <div class="research_s5_headers" id="research_s5_stempell_header">
                                            Stempel College dean honored <br/> 
                                            with career achievement award <br/> 
                                            by Society of Toxicology
                                        </div>

                                        <div class="research_s5_body" id="research_s5_stempell_body">
                                            Even minor amounts of human activi- <br/>
                                            ty can increase nutrient concentra- <br/> 
                                            tions in fresh waters that can damage <br/> 
                                            the environment, according to a new <br/>
                                            study.
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div id="research_s5_news_posts_row2">
                            <a target="_blank"
                                onClick={()=>{window.location.href="https://vnuk.edu.vn/research/lead-exposure-early-in-life-alters-brain-opioid-system-may-lead-to-mental-disorders/"}}>
                                <div id="research_s5_lead_post">

                                    <img id="research_s5_lead_img" src={require("../assets/img/research_s5_lead.png")} alt="img"/>

                                    <div id="research_s5_lead_texts">
                                        <div class="research_s5_small_headers" id="research_s5_business">Kinh doanh & Doanh nhân</div>

                                        <div class="research_s5_headers" id="research_s5_lead_header">
                                            Lead exposure early in life <br/> 
                                            alters brain opioid system, <br/> 
                                            may lead to mental disorders
                                        </div>

                                        <div class="research_s5_body" id="research_s5_lead_body">
                                            While the exact cause of schizophre- <br/> 
                                            nia is unknown and much research <br/> 
                                            has focused on genetics, researchers <br/> 
                                            at the Robert Stempel College of <br/> 
                                            Public Health & Social Work are one <br/> 
                                            step […]                                
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a target="_blank"
                                onClick={()=>{window.location.href="https://vnuk.edu.vn/research/theres-too-much-nitrogen-and-phosphorus-in-u-s-waterways/"}}>
                                <div id="research_s5_nitrogen_post">
                                    <img id="research_s5_nitrogen_img" src={require("../assets/img/research_s5_nitrogen.png")} alt="img"/>

                                    <div id="research_s5_nitrogen_texts">
                                        <div class="research_s5_small_headers" id="research_s5_science">Khoa học và Công nghệ</div>

                                        <div class="research_s5_headers" id="research_s5_nitrogen_header">
                                            There's too much nitrogen and <br/> 
                                            phosphorus in U.S. waterways
                                        </div>

                                        <div class="research_s5_body" id="research_s5_nitrogen_body">
                                            Even minor amounts of human activi- <br/>
                                            ty can increase nutrient concentra- <br/> 
                                            tions in fresh waters that can damage <br/> 
                                            the environment, according to a new <br/>
                                            study.                                
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div id="research_s5_see_more">Xem thêm</div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default Research;