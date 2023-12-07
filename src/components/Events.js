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
                        Ding Ding chuyên về lập kế hoạch, thiết kế và tổ chức
                        các sự kiện đặc biệt như hội nghị, hội thảo, triển lãm,
                        lễ khai mạc, tiệc cưới, sự kiện quảng cáo và nhiều sự
                        kiện khác sự kiện khác sự kiện khác. Loại sự kiện khác.
                        Chúng tôi cung cấp dịch vụ toàn diện từ khướu lên ý
                        tưởng, thiết kế, quản lý, trang trí, âm thanh ánh sáng,
                        đến việc quảng bá và tiếp tục sự kiện. Với đội ngũ
                        chuyên gia giàu kinh nghiệm và sáng tạo, chúng tôi cam
                        kết mang đến cho khách hàng những trải nghiệm sự kiện
                        hồng và chất lượng cao.
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
                    <p>
                        Ding Ding cam kết đáp ứng các yêu cầu và mong đợi của
                        khách hàng một cách chuyên nghiệp và tận tâm. Dưới đây
                        là những cam kết chúng tôi đưa ra:
                    </p>
                    <p>
                        1. Chất lượng: Chúng tôi cam kết mang đến cho khách hàng
                        những sự kiện chất lượng cao, từ khâu lên ý tưởng, thiết
                        kế, trang trí, âm thanh ánh sáng cho đến tổ chức quản
                        lý. Chúng tôi luôn đảm bảo mọi chi tiết được chăm chút
                        tỉ mỉ để tạo nên trải nghiệm tuyệt vời cho khách hàng.
                    </p>
                    <p>
                        2. Sáng tạo: Chúng tôi luôn nỗ lực mang đến những ý
                        tưởng sáng tạo và độc đáo cho sự kiện của khách hàng.
                        Chúng tôi tìm kiếm những cách tiếp theo mới mẻ và đột
                        phá để tạo ra sự khác biệt và ghi điểm trong lòng khách
                        hàng.
                    </p>
                    <p>
                        3. Vui tâm: Chúng tôi luôn lắng nghe và đồng hành cùng
                        khách hàng trong quá trình tổ chức sự kiện. Chúng tôi
                        đặt lợi ích của khách hàng lên hàng đầu và cam kết đáp
                        ứng mọi yêu cầu và mong đợi của họ.
                    </p>
                    <p>
                        4. Đáng tin cậy: Chúng tôi đưa thủ các cấp độ và cam kết
                        thực hiện sự kiện đúng hẹn. Chúng tôi đảm bảo mọi khía
                        cạnh của sự kiện được chuẩn bị và phát triển một cách
                        chính xác và đáng tin cậy.
                    </p>
                    <p>
                        5. Tính chuyên nghiệp: Chúng tôi có đội ngũ nhân viên
                        giàu kinh nghiệm và chuyên môn cao trong lĩnh vực tổ
                        chức sự kiện. Chúng tôi đảm bảo mọi hoạt động được thực
                        hiện một cách chuyên nghiệp và đạt được hiệu quả tối đa.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Events;
