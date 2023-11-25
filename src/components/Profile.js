import TourCard from "./TourCard";

function Profile() {
    return (
        <div className="wrapper">
            <img
                src="https://images.unsplash.com/photo-1547683331-a03843cf94dd?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Banner"
                className="teambuilding__banner"
            />

            <section className="container teambuilding">
                <div className="visa__title visa__line teambuilding__title">
                    HỒ SƠ NĂNG LỰC CỦA DINGDING TRAVEL
                </div>
                <div className="teambuilding__desc">
                    <p>
                        Giữa thị trường du lịch đầy cạnh tranh DingDing Travel
                        vẫn được đông đảo quý khách hàng tin yêu lựa chọn nhờ
                        chất lượng phục vụ được đặt lên hàng đầu, đa dạng loại
                        hình du lịch từ du lịch trong nước, du lịch nước ngoài,
                        nghỉ dưỡng cho đến du lịch hành hương,du lịch được kết
                        hợp cùng team building, gala dinner,…
                    </p>
                    <p>
                        Tất cả với mong muốn đem đến cho quý khách hàng nhiều sự
                        lựa chọn khi đặt niềm tin vào DingDing Travel. Qua nhiều
                        năm hình thành và phát triển DingDing Travel tự hào là
                        một trong những đơn vị được nhiều khách hàng và đối tác
                        tin tưởng lựa chọn bởi sự tận tâm, tử tế, trọn vẹn với
                        một tinh thần trách nhiệm vì khách hàng từ toàn bộ đội
                        ngũ cán bộ công nhân viên trong công ty.
                    </p>
                </div>
                <div className="profile__tour">
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                </div>
            </section>
        </div>
    );
}

export default Profile;
