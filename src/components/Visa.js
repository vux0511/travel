import BannerVisa from "../assets/Banner1.jpeg";

function Visa() {
    return (
        <div className="wrapper">
            <img src={BannerVisa} alt="Banner " className="visa__banner" />
            <div className="container visa">
                <div className="visa__title visa__line">
                    DỊCH VỤ VISA DU LỊCH, THĂM THÂN
                </div>
                <div className="visa__desc">
                    Để có thể du lịch cũng như xuất cảnh nước ngoài, bạn cần
                    phải có visa. Tuy nhiên câu chuyện xin visa được xem là một
                    trong những nỗi ám ảnh của rất nhiều người, vì phải tự chuẩn
                    bị thủ tục giấy tờ rắc rối và đôi khi chỉ vì một sai sót
                    nhỏ, bạn có thể sẽ tuột mất cơ hội hay thậm chí là bị cấm
                    nhập cảnh. Thay vì phải tự xoay sở mà rủi ro lại cực kỳ cao
                    bạn nên nhờ một đơn vị chuyên về dịch vụ visa uy tín, chúng
                    tôi sẽ giúp bạn giải quyết các tình huống khó, cấp bách một
                    cách nhanh chóng và đạt hiệu quả mà không cần phải quá tốn
                    quá nhiều thời gian và chi phí.
                </div>
                <div className="visa__item">
                    <img
                        src="https://homepage.momocdn.net/blogscontents/momo-upload-api-221107162426-638034350661220172.jpg"
                        alt=""
                        className="visa__image"
                    />
                    <div className="visa__info">
                        <div className="visa__item-title visa__line">
                            Visa Du Châu Á
                        </div>
                        <div className="visa__item-desc">
                            Du lịch Châu Á luôn là điểm đến lý tưởng cho du
                            khách Việt Nam bởi giá cả hợp lý, tuy nhiên để đến
                            được các nước trong khu vực Châu Á bạn cần phải có
                            visa du lịch. Dịch vụ visa tại{" "}
                            <span className="visa__bold">DingDing</span> sẽ giúp
                            bạn hoàn tất những thủ tục hồ sơ một cách đơn giản,
                            nhanh chóng và hiệu quả.
                        </div>
                        <a
                            href="https://www.facebook.com/messages/t/1848020962149796"
                            target="_blank"
                        >
                            <button className="visa__button">
                                Liên Hệ Tư Vấn
                            </button>
                        </a>
                    </div>
                </div>
                <div className="visa__item">
                    <div className="visa__info">
                        <div className="visa__item-title visa__line">
                            Visa Du Châu Âu
                        </div>
                        <div className="visa__item-desc">
                            Visa Schengen là một loại visa cho phép du khách
                            nhập cả khu vực Schengen, bao gồm nhiều quốc gia
                            Châu Âu mà không cần xin visa riêng cho từng quốc
                            gia. Dịch vụ visa tại{" "}
                            <span className="visa__bold">DingDing</span> sẽ giúp
                            quý khách hiện thực hóa ước mơ đến Châu Âu một cách
                            dễ dàng.
                        </div>
                        <a
                            href="https://www.facebook.com/messages/t/1848020962149796"
                            target="_blank"
                        >
                            <button className="visa__button">
                                Liên Hệ Tư Vấn
                            </button>
                        </a>
                    </div>
                    <img
                        src="https://eutrip.vn/view/admin/Themes/kcfinder/upload/images/dia-diem-du-lich-thuy-si-12.jpg"
                        alt=""
                        className="visa__image"
                    />
                </div>
            </div>
            ;
        </div>
    );
}

export default Visa;
