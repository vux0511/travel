import { IoIosStarOutline } from "react-icons/io";
import { SiYourtraveldottv } from "react-icons/si";
import { SlLike } from "react-icons/sl";
import { IoPencilSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { IoChatbubblesOutline } from "react-icons/io5";

function ChooseUs() {
    return (
        <div className="wrapper wrapper__chooseus">
            <div className="container">
                <div className="tours__desc">DINGDING TRAVEL</div>
                <div className="tours__header line">Vì Sao Chọn Chúng Tôi</div>
                <div className="chooseus__text">
                    Chúng tôi là những chuyên gia trong việc thực hiện các trải
                    nghiệm du lịch sang trọng và theo yêu cầu.
                </div>
                <div className="chooseus__wrapper">
                    <div className="chooseus__item">
                        <IoIosStarOutline className="chooseus__icon" />
                        <div className="chooseus__title">8 NĂM KINH NGHIỆM</div>
                        <div className="chooseus__desc">
                            Chúng tôi có 8 năm kinh nghiệm trong lĩnh vực du
                            lịch sang trọng trong nước và quốc tế.
                        </div>
                    </div>
                    <div className="chooseus__item">
                        <SiYourtraveldottv className="chooseus__icon" />
                        <div className="chooseus__title">
                            TRẢI NGHIỆM ĐỘC ĐÁO
                        </div>
                        <div className="chooseus__desc">
                            Chúng tôi hiểu rằng bạn là duy nhất và chúng tôi cố
                            gắng hết sức để giúp bạn có hành trình độc đáo.
                        </div>
                    </div>
                    <div className="chooseus__item">
                        <SlLike className="chooseus__icon" />
                        <div className="chooseus__title">
                            CAM KẾT CHẤT LƯỢNG
                        </div>
                        <div className="chooseus__desc">
                            Chúng tôi cam kết mang lại chất lượng dịch vụ tuyệt
                            vời cho kỳ nghĩ của bạn. Bạn chỉ xách balo lên và
                            đi, mọi thứ chúng tôi lo.
                        </div>
                    </div>
                    <div className="chooseus__item">
                        <IoPencilSharp className="chooseus__icon" />
                        <div className="chooseus__title">
                            THAY ĐỔI THEO YÊU CẦU
                        </div>
                        <div className="chooseus__desc">
                            Chúng tôi có thể thay đổi chương trình cho phù hợp
                            nhất với mong muốn của khách hàng, để đảm bảo chương
                            trình thực hiện cho chính bạn
                        </div>
                    </div>
                    <div className="chooseus__item">
                        <GiMoneyStack className="chooseus__icon" />
                        <div className="chooseus__title">
                            CHI PHÍ HỢP LÝ NHẤT
                        </div>
                        <div className="chooseus__desc">
                            Chúng tôi cam kết tối ưu chi phí nhất cho khách hàng
                            thông qua mức giá cạnh tranh nhất từ các đối tác của
                            chúng tôi.
                        </div>
                    </div>
                    <div className="chooseus__item">
                        <IoChatbubblesOutline className="chooseus__icon" />
                        <div className="chooseus__title">HỖ TRỢ 24/7</div>
                        <div className="chooseus__desc">
                            Hotline của chúng tôi luôn hoạt động để hổ trợ quý
                            khách trong bất kỳ tình huống nào phát sinh ngoài kế
                            hoạch.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseUs;
