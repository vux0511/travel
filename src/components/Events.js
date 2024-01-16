import TeambuildingImage1 from "../assets/teambuilding1.png";
import TeambuildingImage2 from "../assets/teambuilding2.png";
import TeambuildingImage3 from "../assets/teambuilding3.png";
import TeambuildingImage4 from "../assets/teambuilding4.png";
import TeambuildingImage5 from "../assets/teambuilding5.png";
import TeambuildingImage6 from "../assets/teambuilding6.png";

function Events() {
    return (
        <div className="wrapper">
            <img
                src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Teambuilding Banner"
                className="teambuilding__banner"
            />

            <section className="container teambuilding">
                <div className="visa__title visa__line teambuilding__title">
                    EVENTS - MEETING - GALA DINNER
                </div>
                <div className="teambuilding__desc teambuilding__desc2">
                    <p>
                        Ding Ding Event & Meeting chuyên cung cấp những dịch vụ
                        về lập kế hoạch, thiết kế và tổ chức các sự kiện cho đối
                        tác khách hàng đặc biệt như: hội nghị, hội thảo, triển
                        lãm, lễ khai mạc, tiệc cưới, sự kiện quảng cáo,....
                        Chúng tôi đồng hành, hỗ trợ, tư vấn tới quý khách hàng
                        từ những khâu đầu tiên như là lên ý tưởng, thiết kế,
                        quản lý, trang trí, âm thanh ánh sáng, đến việc quảng bá
                        và hậu cần sau sự kiện. Với đội ngũ chuyên gia giàu kinh
                        nghiệm và sáng tạo, chúng tôi cam kết mang đến cho khách
                        hàng những trải nghiệm tốt nhất.
                    </p>
                </div>
                <div className="teambuilding__game">
                    <img
                        src={TeambuildingImage1}
                        alt="Teambuilding Game"
                        className="teambuilding__game-image"
                    />
                    <img
                        src={TeambuildingImage2}
                        alt="Teambuilding Game"
                        className="teambuilding__game-image"
                    />
                    <img
                        src={TeambuildingImage3}
                        alt="Teambuilding Game"
                        className="teambuilding__game-image"
                    />
                    <img
                        src={TeambuildingImage4}
                        alt="Teambuilding Game"
                        className="teambuilding__game-image"
                    />
                    <img
                        src={TeambuildingImage5}
                        alt="Teambuilding Game"
                        className="teambuilding__game-image"
                    />
                    <img
                        src={TeambuildingImage6}
                        alt="Teambuilding Game"
                        className="teambuilding__game-image"
                    />
                </div>

                <div className="teambuilding__desc teambuilding__desc2">
                    <p>Ding Ding Event & Meeting cam kết tới quý khách hàng:</p>
                    <p>
                        1. Chất lượng: Chúng tôi cam kết mang đến cho khách hàng
                        những sự kiện chất lượng cao, từ khâu sản xuất cho đến
                        tổ chức quản lý, đảm bảo mọi chi tiết được chăm chút tỉ
                        mỉ để tạo nên những trải nghiệm tuyệt vời nhất.
                    </p>
                    <p>
                        2. Sáng tạo: Sáng tạo đổi mới và tạo những điểm nhấn độc
                        đáo là những gì DingDing hướng đến dành cho các sự kiện
                        của khách hàng. Chúng tôi tìm kiếm những xu hướng mới mẻ
                        kết hợp với những giá trị truyền thống để tạo ra sự khác
                        biệt và ghi điểm trong lòng khách hàng.
                    </p>
                    <p>
                        3. An tâm: Chúng tôi luôn lắng nghe và đồng hành cùng
                        khách hàng trong quá trình tổ chức sự kiện, đặt lợi ích
                        của khách hàng lên hàng đầu và cam kết đáp ứng mọi yêu
                        cầu và mong đợi của đối tác.
                    </p>
                    <p>
                        4. Tin cậy: Chúng tôi cam kết thực hiện sự kiện đúng hợp
                        đồng, đảm bảo mọi khía cạnh của sự kiện được chuẩn bị và
                        phát triển một cách chính xác và tin cậy.
                    </p>
                    <p>
                        5. Chuyên nghiệp: Chúng tôi có đội ngũ nhân viên giàu
                        kinh nghiệm và chuyên môn cao trong lĩnh vực tổ chức sự
                        kiện. Đảm bảo mọi hoạt động được thực hiện một cách tốt
                        nhất và đạt được hiệu quả tối đa.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Events;
